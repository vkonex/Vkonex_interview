const express = require('express')
const app = express()
const getDB = require('./connection.js')
const path = require('path')
const cors = require('cors')
const {nanoid}  = require('nanoid')
const PORT = process.env.PORT || 3000
const moment = require('moment')
const fileUpload = require('express-fileupload')
getDB().connect(function (err) {
  if (err) console.log(err)
  console.log('Connected!')
})
app.use(express.json())
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'hbs')
app.use(cors({ origin: '*' }))
app.use(express.static(path.join(__dirname, './videos')))
async function getQuestions(){
  return new Promise((resolve,reject)=>{
    getDB().query(`select Q_Description from question_bank;`, function (err, result) {
      if(err){
        console.log(err)
        reject(err)
      }else{
        questions = result.map((item)=> (item['Q_Description']))
        resolve(questions)
      }
    })
  })
}
async function getUsername(id){
  return new Promise((resolve,reject)=>{
    getDB().query(`select name from condidates where C_id=${id};`, function (err, result) {
      if(err){
        console.log(err)
        reject(err)
      }else{
        resolve(result[0]['name'])
      }
    })
  })
}
async function checkToken(id){
  return new Promise((resolve,reject)=>{
    getDB().query(`select time from tokens where C_id=${id};`, function (err, result) {
      if(err){
        console.log(err)
        reject(err)
      }else{
        if(!result.length){
          reject('No token present')
        }else{
          resolve(result[0]['time'])
        }
      }
    })
  })
}
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
  })
)
app.get('/api', async(req, res) => {
  let id = req.query.id
  let username =  await getUsername(id)
  checkToken(id).then(async(result)=>{
    let now = moment(new Date())
    let end = moment(result)
    let duration = moment.duration(now.diff(end))
    let hours = duration.asHours()
    console.log(hours)
    let questions = await getQuestions()
    questions = JSON.stringify(questions)
    console.log(questions)
    if(hours > 48){
      res.send("<h1>This Link has been expired, it seems you didn't gave your interview within the time limit.</h1>");
    }else{
      res.render('index',{id,questions,username})
    }
  }).catch((err)=>{
    console.log(err)
  })
})
app.get('/api/test',async(req,res)=>{
  let id = req.query.id
  checkToken(id).then((result)=>{
    res.json({
      status:'ok',
      message:result[0]
    })
  }).catch((err)=>{
    res.json({
      status:'failed',
      message:err
    })
  })
  
})
app.post('/api/convertTomp4/:id', async (req, res) => {
  let candidate_id = req.params['id']
  console.log(`data processing started for id=${candidate_id}`)
  const hbjs = require('handbrake-js')
  console.log('Reached here at uploading')
  let file = req.files.file
  if (!file) {
    console.log('file not uploaded')
  }
  file.mv(`${__dirname}/videos/test.mp4`).then((err) => {
    if (err) console.log(err, 'from fileuplaod')
    const videoID = nanoid()
    hbjs
      .spawn({
        input: `${__dirname}/videos/test.mp4`,
        output: `${__dirname}/videos/${videoID}.mp4`,
      })
      .on('error', (err) => {
        console.log('download error', err)
      })
      .on('progress', (progress) => {
        console.log(
          'Percent complete: %s, ETA: %s',
          progress.percentComplete,
          progress.eta
        )
      })
      .on('complete', () => {
        getDB().query(`insert into recorde values('${videoID}',${candidate_id},1);`, function (err, result) {
          if (err) throw err
          res.json({ status: true })
        })
      })
      .on('error', (err) => {
        console.log(err)
        res.json({ status: false })
      })
  })
})
app.get('/video',(req,res)=>{
  if(!req.query || !req.query.user_id || !req.query.ques_id){
    res.status(404)
    res.send({error:"invalid query"})
  }
  getDB().query(`select * from videos where user_id='${req.query.user_id}' and ques_id='${req.query.ques_id}';`, function (err, result) {
    if(err){
      console.log(err)
    }else{
    res.redirect(`/${result[0].video_id}.mp4`)
    }
  })
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

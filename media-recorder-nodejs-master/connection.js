var mysql = require('mysql')
 
let database = null
function getDB() {
  if(!database){
    database = mysql.createConnection({
        host:'vkonex.cbaonvzb17ll.ap-south-1.rds.amazonaws.com',
        user: 'admin',
        password: 'Admin306',
        database: 'vkonex_ai',
      })
  }
  return database
}
module.exports = getDB

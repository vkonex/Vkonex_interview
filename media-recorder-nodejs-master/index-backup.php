<?php include('server.php')



 ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media Recorder</title>
</head>
<body>
    <div class="main">
        <div class="video-group">
            <video id="video" width="640" height="480" autoplay muted></video>
            <div class="preview">
                <video id="preview" width="640" height="400" autoplay loop controls></video>
            </div>
        </div>
        <div class="btn-group">
            <button class="btn" name="start" id="start">Start</button>
            <button class="btn" name="stop" id="stop" disabled>Stop</button>
        </div>
        <div class="status">
            <h3 id="status-text">Click Start to record</h3>
        </div>
    </div>
</body>
<script>
    let video = document.querySelector('#video')
    let preview = document.querySelector('#preview')
    let start = document.querySelector('#start')
    let stopBtn = document.querySelector('#stop')
    let status = document.querySelector('#status-text')
    let mediaRecorder = null;
    let cameraStream = null
    let recordedBlobs = [];
    navigator.mediaDevices.getUserMedia({ video: {width:1280,height:720}, audio: true }).then((res)=>{
        cameraStream = res
        video.srcObject = cameraStream;
    })
    start.addEventListener('click',async()=>{
        mediaRecorder = new MediaRecorder(cameraStream, { mimeType: 'video/webm' });
        mediaRecorder.addEventListener('dataavailable', function(e) {
		    recordedBlobs.push(e.data);
        });
        mediaRecorder.addEventListener('stop', function() {
    	    let video_local = new Blob(recordedBlobs, { type: 'video/mp4' });
            preview.src = URL.createObjectURL(video_local) 
    	    let formData = new FormData()
            let videoFile = new File([video_local],'test.mp4')
            formData.append('file',videoFile)
            status.textContent = 'Saving file....'
            fetch('/convertTomp4',{
                method:'POST',
                body:formData,
            }).then((response)=>response.json()).then((data)=>{
                if(data.status){
                    status.textContent = "saved"
                    // let a = document.createElement('a')
                    // a.href="/converted.mp4"
                    // a.download = 'recorded.mp4'
                    // a.click()
                }
            })
        });
        mediaRecorder.start(1000);
        status.textContent = 'Recording.....'
        start.setAttribute("disabled","disabled")
        stopBtn.removeAttribute("disabled");
    })
    stopBtn.addEventListener('click', function() {
	    mediaRecorder.stop(); 
        status.textContent = 'Recording finished'
        stopBtn.setAttribute("disabled","disabled")
        start.removeAttribute("disabled");
    });
</script>
<style>
    *,::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .main{
        display: flex;
        flex-direction: column;
    }
    .video-group{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .preview{
        position: relative;
        padding-top: 40px;
    }
    .preview::after{
        content:'Preview';
        position:absolute;
        top: 10px;
        left: 0px;
        font-size: 24px;
        font-weight: bold;
    }
    .btn:first-child{
        margin-right: 10px;
    }
    .btn{
        padding:10px 20px;
    }
    .btn-group{
        display: flex;
        justify-content: center;
    }
    .status{
        text-align: center;
        margin-top: 10px;
    }
    @media(max-width:600px){
        .video-group{
     
        flex-direction: column;
        
    }
    }
</style>
</html>
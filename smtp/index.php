<?php
session_start();
// initializing variables
$username = "";
$email    = "";
$errors = array(); 
$id = $_GET['id'];
$invite ="";
//echo $id;
// connect to the database
$db = mysqli_connect('vkonex.cbaonvzb17ll.ap-south-1.rds.amazonaws.com','admin','Admin306','vkonex_ai');
$invite = "";
if(mysqli_connect_error())
{
	die("Connection error :". mysqli_error());
	}else
	{
		//echo("Connection sussessfull........");
	}
	$sql = "SELECT email FROM condidates WHERE C_id=$id";
	$result = mysqli_query($db, $sql);
	
	if (mysqli_num_rows($result) > 0) {
	  // output data of each row
	  while($row = mysqli_fetch_assoc($result)) {
		echo "the interview invite email has been sent to following 
		email : <br> " . $row["email"]."<br>";
        $invite = $row["email"];

	  }
	} else {
	  echo "0 results";
	}
	$sqlCheck = "SELECT * FROM tokens WHERE C_id=";
    date_default_timezone_set('Asia/Kolkata');      
	$date=date("Y/m/d h:i:sa");
	$sqlString = "INSERT INTO tokens (`C_id`,`time`) VALUES ($id,'$date') ON DUPLICATE KEY UPDATE time='$date'";
	$result = mysqli_query($db, $sqlString);
	mysqli_close($db);

	

?>





<?php



// Automatic mail send


include('smtp/PHPMailerAutoload.php');

$html="Dear Candidate, 
<br>
<br>
We would like to inform you that your resume has been shortlisted for an
interview for the position Data Science/Software Engineering Trainee
(online/offline)  at Vkonex AI Research. In case of final selection, you
will have to work in our organisation at-least for a year. We will give
you salary hike up to 30% within 6 month depending on  your performance.

<br>
<br>

Your test and interview assessment link(Advisible to open in chrome using destop with having webcam)
<br>
<br>
https://ec2-52-66-70-230.ap-south-1.compute.amazonaws.com/api?id=$id
<br>

This link will expire after 48hrs ,please give your interview ASAP

<br>


Please only show your interest if you agree on all the point mention
below:
<br>
<br>
<br>
Joining Date: 30/08/2021
<br>
<br>
Eligibility Criteria: BE/B.Tech/BCA/MCA
<br>
<br>
One time training and development Fee: 75000 INR( 3 Instalment after
joining)
<br><br>
Annual Package: 1.5 lakh(First Year)<br>
Annual Package: 3-10 Lakh (From Second year onwards)
<br><br>
Location: Mumbai, Bangalore
<br><br>
Contact us: hr1@vkonex.com
             hr@vkonex.com
<br><br>
Note: Please reply yes if you are interested further.
<br>	
Yours sincerely,
Head, Human Resources,
Vkonex AI Research
133/2, Janardhan Towers, Residency Rd,
Ashok Nagar, Bengaluru, Karnataka 560050
Email: info@vkonex.com";


                
 
// has this expired?
$expire_time = "73:59:59"; // Work until Jan 74hr
$now = date("h:i:s");
if ($now>$expire_time) {
    header("Location: page_expire.php");
    die();
}

echo smtp_mailer($invite,'Interview Invite from Vkonex AI',$html);

echo "<h1>Hello, You just invited this condidates for interview</h1>";


function smtp_mailer($to,$subject, $msg){
	$mail = new PHPMailer(); 
	$mail->SMTPDebug  = false;
	$mail->IsSMTP(); 
	$mail->SMTPAuth = true; 
	$mail->SMTPSecure = 'tls'; 
	$mail->Host = "smtp.gmail.com";
	$mail->Port = 587; 
	$mail->IsHTML(true);
	$mail->CharSet = 'UTF-8';
	$mail->Username = "singhrajveer60015@gmail.com";
	$mail->Password = "2727284#@lyf";
	$mail->SetFrom("singhrajveer60015@gmail.com");
	$mail->Subject = $subject;
	$mail->Body =$msg;
	$mail->AddAddress($to);
	$mail->SMTPOptions=array('ssl'=>array(
		'verify_peer'=>false,
		'verify_peer_name'=>false,
		'allow_self_signed'=>false
	));
	if(!$mail->Send()){
		echo $mail->ErrorInfo;
	}else{
		return "sent";
	}
}
?>
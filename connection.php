<?php
$hostname= "vkonex.cbaonvzb17ll.ap-south-1.rds.amazonaws.com";
$username ="admin";
$password="Admin306";
$dbname ="vkonex_ai";


$conn = new mysqli($hostname,$username,$password,$dbname);

if(mysqli_connect_error())
{
	die("Connection error :". mysqli_error());
	}else
	{
		echo("Connection sussessfull........");
		}
		
		
 ?>
 
 <?php

//include('connection.php');
// initialising variable



//Error Array

$error = array();



// Register User

$name = mysqli_real_escape_string($db,$_POST['name']);
$email = mysqli_real_escape_string($db,$_POST['email']);
$mobile = mysqli_real_escape_string($db,$_POST['mobile']);
$pass = mysqli_real_escape_string($db,$_POST['pass']);
$re_pass = mysqli_real_escape_string($db,$_POST['re_pass']);
$resume = mysqli_real_escape_string($db,$_POST['resume']);


//Form Validation

if(empty($name))(array_push($error["Username is requied"]));
if($pass!=$re_pass)(array_push($error["Password not matched"]));

//Check Database for existing user name with same name

$user_check_query = "SELECT * fROM condidates WHERE name = '$name' or $email = '$email' LIMIT 1";

$results = mysqli_query($db,$user_check_query);
$user = mysqli_fetch_assoc($results);

if($user){
	if($user['name'] == $user) {array_push($error ,"User name already exits");}
	if($user['email'] == $user) {array_push($error , "This email already exits");}
	
	}

// Register the user if there is no error is found

if(count($error) == 0){
	
	$pass = md5($pass);   //This will be encrypted
	$query = "INSERT INTO condidates (C_Name,C_email,C_Mobile,C_Resume,C_Password)
	VALUES('$name','$email','$mobile','$resume','$pass')";	
	
	mysqli_query($db,$query);
	$_SESSION['name'] = '$name';
	$_SESSION['success'] = "You are now logged in";
	
	header('location "index.php"');
	}





?>
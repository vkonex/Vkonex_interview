<?php
session_start();

// initializing variables
$username = "";
$email    = "";
$errors = array(); 

// connect to the database
$db = mysqli_connect('vkonex.cbaonvzb17ll.ap-south-1.rds.amazonaws.com','admin','Admin306','vkonex_ai');

// REGISTER USER
if (isset($_POST['reg_user'])) {
  // receive all input values from the form
  $start = mysqli_real_escape_string($db, $_POST['start']);
   
  $stop = mysqli_real_escape_string($db, $_POST['stop']);

  

  

  // Finally, register user if there are no errors in the form
  if (count($errors) == 0) {
  	$password = md5($password_1);//encrypt the password before saving in the database

  	$query = "INSERT INTO recorde (Video,Date_Time) 
  			  VALUES('Video', 'Date_Time')";
  	mysqli_query($db, $query);
  	$_SESSION['username'] = $username;
  	$_SESSION['success'] = "You are now logged in";
  	header('location: index.php');
  }
}

// ... login


// LOGIN USER
if (isset($_POST['login_user'])) {
  $username = mysqli_real_escape_string($db, $_POST['username']);
  $password = mysqli_real_escape_string($db, $_POST['password']);

  if (empty($username)) {
  	array_push($errors, "Username is required");
  }
  if (empty($password)) {
  	array_push($errors, "Password is required");
  }

  if (count($errors) == 0) {
  	$password = md5($password);
  	$query = "SELECT * FROM condidates WHERE username='$username' AND password='$password'";
  	$results = mysqli_query($db, $query);
  	if (mysqli_num_rows($results) == 1) {
  	  $_SESSION['username'] = $username;
  	  $_SESSION['success'] = "Things we get what we work for,Not what we wish for";
  	  header('location: index.php');
  	}else {
  		array_push($errors, "Wrong login credentials");
  	}
  }
}

?>
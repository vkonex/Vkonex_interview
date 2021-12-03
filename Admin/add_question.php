
<?php

session_start();

require_once('header.php');	
   
?>
        <!-- ============================================================== -->
        <!-- End Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Page wrappedfdfdfdfr  -->
        <!-- ============================================================== -->
        <div class="page-wrapper">
            <!-- ============================================================== -->
            <!-- Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
            
            <div class="page-breadcrumb bg-white">
                <div class="row align-items-center">
                    <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 class="page-title">Add Question</h4>
                    </div>
                    <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                        <div class="d-md-flex">
                            <ol class="breadcrumb ms-auto">
                                
                            </ol>
                            
                        </div>
                    </div>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- ============================================================== -->
            <!-- End Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Container fluid  -->
            <!-- ============================================================== -->
            <div class="container-fluid">
                <!-- ============================================================== -->
                <!-- Settings -->
                <!-- ============================================================== -->
                <form action="add_question.php" method="POST">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputfirstname"></label>
                          <input name="Q_Title" type="text" class="form-control" id="inputfirstname" required placeholder="Question Description">
                        </div>
                      </div> 
                       

                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputJobDepartment4"></label>
                        <select class="form-control" id="exampleFormControlSelect1" name="Q_type">
                          <option>-Question Type-</option>
                          <option>Technical</option>
                          <option>Non Technical </option>
                          <option>HR</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputJobDepartment4"></label>
                        <select class="form-control" id="exampleFormControlSelect1" name="Q_difficulty">
                          <option>-Question Dificulty-</option>
                          <option>Easy</option>
                          <option>Medium </option>
                          <option>Hard</option>
                        </select>
                      </div>
                    </div>
                     
                    <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputfirstname"></label>
                          <input name="Q_Ans" type="text" class="form-control" id="inputfirstname" required placeholder="Answer">
                        </div>
                      </div>
                    <button type="submit" name="save" class="btn btn-primary">Save</button>
                    <button class="btn btn-outline" name="delete" onlick="location.url('add_question.php')">delete</button>
                  </form>
            </div>
            <!-- ============================================================== -->
            <!-- Question Insert Query  -->

<?php
if (isset($_POST['save'])) {

  $Q_Title = mysqli_real_escape_string($db, $_POST['Q_Title']);
  $Q_type = mysqli_real_escape_string($db, $_POST['Q_type']);
  $Q_difficulty = mysqli_real_escape_string($db, $_POST['Q_difficulty']);
  $Q_Ans = mysqli_real_escape_string($db, $_POST['Q_Ans']);
  
  $username=$_SESSION['username'];

  // first check the database to make sure 
  
  // A question does not already exist with the same Title and/or Description
  $question_check_query = "SELECT * FROM question_bank WHERE Q_Description='$Q_Title' LIMIT 1";
  $result = mysqli_query($db, $question_check_query);
  $question = mysqli_fetch_assoc($result);
  
  if ($question) { // if question exists
    if ($question['Q_Description'] === $Q_Title) {
      echo "Question already exists";
    }

  }

  // Finally, add question if there are no errors in the form
  if (count($errors) == 0) {
  
  	$query = "INSERT INTO question_bank (Q_Description, Q_Type, Q_Difficulty,Q_Answer,username) 
  			  VALUES('$Q_Title', '$Q_type', '$Q_difficulty','$Q_Ans','$username')";
  	mysqli_query($db, $query);
  
  	$_SESSION['success'] = "Question has been added to the question bank";
  	header('location: question_bank.php');
  }
}



?>

            <!-- ============================================================== -->
            
            <!-- ============================================================== -->
            <!-- footer -->
<?php

require_once('footer.php');
 
 ?>
         
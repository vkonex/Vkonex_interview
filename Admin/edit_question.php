
<?php
require_once('header.php');	
   
?>
<?php
$id = $_GET["id"]; 
$query = "SELECT * FROM `question_bank` WHERE Q_id=$id;";
$result = mysqli_query($db, $query);
$que = mysqli_fetch_assoc($result);
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
                        <h4 class="page-title">Edit Question</h4>
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
                <form action="edit_question.php?id=<?php echo $id?>" method="POST">
                <input style="display:none;" name="Q_ID" type="text" class="form-control" id="inputfirstname" required value="<?php echo $que['Q_id'];?>">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputfirstname"></label>
                          <input name="Q_Title" type="text" class="form-control" id="inputfirstname" required placeholder="Question Description" value="<?php echo $que['Q_Description']; ?>">
                        </div>
                      </div> 
                       

                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputJobDepartment4"></label>
                        <select class="form-control" id="exampleFormControlSelect1" name="Q_type">
                          <option>-Question Type-</option>
                          <option <?php if($que['Q_Type'] === "Technical") echo "selected"?>>Technical</option>
                          <option <?php if($que['Q_Type'] === "Non Technical") echo "selected"?>>Non Technical </option>
                          <option <?php if($que['Q_Type'] === "HR") echo "selected"?>>HR</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputJobDepartment4"></label>
                        <select class="form-control" id="exampleFormControlSelect1" name="Q_difficulty">
                          <option>-Question Dificulty-</option>
                          <option <?php if($que['Q_Difficulty'] === "Easy") echo "selected"?>>Easy</option>
                          <option <?php if($que['Q_Difficulty'] === "Medium") echo "selected"?>>Medium </option>
                          <option <?php if($que['Q_Difficulty'] === "Hard") echo "selected"?>>Hard</option>
                        </select>
                      </div>
                    </div>
                     
                    <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputfirstname"></label>
                          <input name="Q_Ans" type="text" class="form-control" id="inputfirstname" required placeholder="Answer" value="<?php echo $que['Q_Answer']; ?>">
                        </div>
                      </div>
                    <button type="submit" name="save" class="btn btn-primary">Save</button>
                    <a href="question_bank.php">Cancel</a>
                  </form>
            </div>
            <!-- ============================================================== -->
            <!-- Question Insert Query  -->

<?php
if (isset($_POST['save'])) {
  $id = mysqli_real_escape_string($db, $_POST['Q_ID']);
  $Q_Title = mysqli_real_escape_string($db, $_POST['Q_Title']);
  $Q_type = mysqli_real_escape_string($db, $_POST['Q_type']);
  $Q_difficulty = mysqli_real_escape_string($db, $_POST['Q_difficulty']);
  $Q_Ans = mysqli_real_escape_string($db, $_POST['Q_Ans']);
  

  // Finally, add question if there are no errors in the form
  if (count($errors) == 0) {
  
  	$query = "UPDATE question_bank SET Q_Description = '$Q_Title', Q_Type = '$Q_type', Q_Difficulty = '$Q_difficulty',Q_Answer = '$Q_Ans' WHERE Q_id=$id";
  	mysqli_query($db, $query);
  
  	$_SESSION['success'] = "Question has been added to the question bank";
  	header('location:question_bank.php');
  }
}



?>

            <!-- ============================================================== -->
            
            <!-- ============================================================== -->
            <!-- footer -->
<?php

require_once('footer.php');
 
 ?>
         
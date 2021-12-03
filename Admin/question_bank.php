<?php
session_start();
require_once('header.php');
 
 ?>
<?php
  if (isset($_GET['delete'])) {
    $id = $_GET['id'];
    $query = "DELETE FROM `question_bank` WHERE Q_id=$id";
    if ( mysqli_query($db, $query)) {
      echo "Record deleted successfully";
    } else {
      echo "Error deleting record: " . mysqli_error($conn);
    }
  }
?>
 
        <!-- ============================================================== -->
        <!-- End Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Page wrapper  -->
        <!-- ============================================================== -->
        <div class="page-wrapper">
            <!-- ============================================================== -->
            <!-- Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
            
            <div class="page-breadcrumb bg-white">
                <div class="row align-items-center">
                    <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 class="page-title">Manage Question</h4>
                    </div>
                    <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                        <div class="d-md-flex">
                            <ol class="breadcrumb ms-auto">
                                
                            </ol>
                            <a ata-toggle="modal" data-target="#exampleModal"
                                class="btn btn-danger  d-none d-md-block pull-right ms-3 hidden-xs hidden-sm waves-effect waves-light text-white" href="add_question.php"><i class="fa fa-file-alt" style="margin-right:10px;"></i>Add New Question</a>
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
                <!-- Job Search -->
                <!-- ============================================================== -->

                 
             
                  <!-- ============================================================== -->
                <!-- Table -->
                <!-- ============================================================== -->

                  <table id="example_table" class="table table-striped table-bordered" style="width:100%">
                    <thead>
                        <tr>
                            <th>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                      Question
                                    </label>
                                  </div>
                            </th>
                            <th>Question Type</th>
                            <th>Question Diffculty</th>
                            <th>Answer</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php

                        $HR = $_SESSION['username'];
                        $query = "SELECT * FROM `question_bank` WHERE username='$HR';";
                        $result = mysqli_query($db, $query);
                        while($row = mysqli_fetch_array($result)) {
                        ?>
                        <tr>
                            <td><div class="form-check">
                                <input class="form-check-input id-checkbox" type="checkbox" value="" id="checkboxid1">
                                <label class="form-check-label" for="flexCheckDefault">
                                  <?php echo $row['Q_Description']; ?>
                                </label>
                              </div></td>
                            <td><?php echo $row['Q_Type']; ?></td>
                            <td><?php echo $row['Q_Difficulty']; ?></td>
                            <td><?php echo $row['Q_Answer']; ?></td>
                            <td>
                                <a href="edit_question.php?id=<?php echo $row['Q_id'];?>"><i class="fas fa-edit job_icon" data-toggle="tooltip" title="Edit"></i></a>
                                <a href="question_bank.php?delete=true&id=<?php echo $row['Q_id'];?>" onclick="return confirm('Are you sure, you want to delete it?')"><i class="fas fa-trash-alt job_icon" style="color:red;" data-toggle="tooltip" title="Delete"></i></a>
        
                            </td>
                        </tr>
                        <?php
                        }
                        ?>
                    </tbody>
                    
                </table>
            <!-- ============================================================== -->
            <!-- End Container fluid  -->
            <!-- ============================================================== -->
            
            <!-- ============================================================== -->
            <!-- footer -->
<?php

require_once('footer.php');
 
 ?>
 
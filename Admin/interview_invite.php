<?php
session_start();
require_once('header.php');


?>
 
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
                    
                        <h2 style="color:purple" class="page-title">Condidates list after resume parshing</h2>
                    
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
                <!-- Job Search -->
                <!-- ============================================================== -->

                 
             
                  <!-- ============================================================== -->
                <!-- Table -->
                <!-- ============================================================== -->

                  <table id="example_table" class="table table-striped table-bordered" style="width:100%">
                    <thead>
                        <tr>
                            <th>
                               Candidate Name
                            </th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Matching %</th>
                            <th>Invite Condidates</th>
                             
                        </tr>
                    </thead>
                    <tbody>
                    <?php
                        $admin=$_SESSION['username'];
                        $query = "SELECT * FROM `condidates` WHERE matching>=40 AND username='$admin';";
                        $result = mysqli_query($db, $query);
                        while($row = mysqli_fetch_array($result)) {
                        ?>
                        <tr>
                        
                        <td><?php echo $row['name'];?></td>
                        <td><?php echo $row['email']; ?></td>
                        <td><?php echo $row['mobile']; ?></td>
                        <td><?php echo $row['matching']; ?></td>
                         
                        <td>
                        
                        <?php $id=$row['C_id'];?>

                          


                        <a href="http://52.66.70.230/smtp/index.php?id=<?php echo $id;?>" target="_blank" onclick="return popUnder(this);">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i class="fas fa-share job_icon" data-toggle="tooltip" 
                            title="Invite candidates for open interview">
                            
                          
                          </i>
                        </a>
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
            <!-- ============================================================== -->
  <script>
    function popUnder(node) {
    var newWindow = window.open("about:blank", node.target, "width=300,height=300");
    newWindow.blur();
    window.focus();
    newWindow.location.href = node.href;
    return false;
  }
  </script>

<?php

require_once('footer.php');

?>
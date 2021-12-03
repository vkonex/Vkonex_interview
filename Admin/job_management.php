<?php

require_once('header.php');
if(isset($_POST['submit']))
{		
    $job_title = $_POST['job_title'];
    $job_dep = $_POST['job_dep'];
    $expiry_date = $_POST['expiry_date'];

    $insert = mysqli_query($db,"INSERT INTO `job_management` (`J_id`, `J_Title`, `J_Department`, `J_Expiry_Dtae`, `J_Action`) VALUES (NULL, 'demob', 'demob', '2021-07-22', '')");
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
                        <h4 class="page-title">Job Management</h4>
                    </div>
                    <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                        <div class="d-md-flex">
                            <ol class="breadcrumb ms-auto">
                                <li><a href="#" class="fw-normal">Job Management</a></li>
                            </ol>
                            <a href="create_job.php" target="_blank"
                                class="btn btn-danger  d-none d-md-block pull-right ms-3 hidden-xs hidden-sm waves-effect waves-light text-white">Create new Job</a>
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

                <form class="form-inline form-a-jobtext">
                    <div class="form-group mx-sm-3 mb-2">
                        <label for="inputJobText" class="sr-only">Password</label>
                        <input type="text" class="form-control" id="inputJobText" placeholder="Job Title">
                      </div>
                      <div class="form-group mx-sm-3 mb-2">
                        <select class="form-control" id="exampleFormControlSelect1">
                          <option>-Department-</option>
                          <option>Sales</option>
                          <option>Marketing</option>
                          <option>Housekeeping</option>
                          <option>Food Production</option>
                          <option>Technology</option>
                          <option>HR</option>
                          <option>Finance</option>
                          <option>Operations</option>
                          <option>Content</option>
                          <option>Product</option>
                          <option>Customer Services</option>
                          <option>Executive</option>
                          <option>Digital Marketing</option>
                          <option>Creative Design</option>
                        </select>
                      </div>
                    <button type="submit" class="btn btn-primary mb-2">Search</button>
                    <button type="submit" class="btn btn-outline-primary mb-2">Reset</button>
                  </form>
             
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
                                      Job Code
                                    </label>
                                  </div>
                            </th>
                            <th>Job Title</th>
                            <th>Department(s)</th>
                            <th>Expiray Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php
                        $query = "SELECT * FROM `job_management`;";
                        $result = mysqli_query($db, $query);
                        while($row = mysqli_fetch_array($result)) {
                        ?>
                        <tr>
                            <td><div class="form-check">
                                <input class="form-check-input id-checkbox" type="checkbox" value="" id="checkboxid1">
                                <label class="form-check-label" for="flexCheckDefault">
                                <?php echo $row['J_id']; ?>
                                </label>
                              </div></td>
                            <td><?php echo $row['J_Title']; ?></td>
                            <td><?php echo $row['J_Department']; ?></td>
                            <td><?php echo $row['J_Expiry_Dtae']; ?></td>
                            <td>
                                <i class="fas fa-edit job_icon" data-toggle="tooltip" title="Edit"></i>
                                <i class="fas fa-trash-alt job_icon" data-toggle="tooltip" title="Delete"></i>
                                <i class="fas fa-eye job_icon" data-toggle="tooltip" title="View question set for this job"></i>
                                <i class="fas fa-share job_icon" data-toggle="tooltip" title="Invite candidates for open interview"></i>
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
<?php

require_once('footer.php');

?>             
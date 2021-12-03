
<?php
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
                        <h4 class="page-title">Add Job</h4>
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
                <form action="job_management.php" method="POST">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputfirstname">Job Title</label>
                          <input name="job_title" type="text" class="form-control" id="inputfirstname" required>
                        </div>
                      </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputJobDepartment4">Job Department</label>
                        <select class="form-control" id="exampleFormControlSelect1" name="job_dep">
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
                    </div>
                    <div class="form row"></div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="date">Expiry Date</label>
                          <input name="date" type="date" class="form-control" id="date" required>
                        </div>
                      </div>
                    <button type="submit" class="btn btn-primary">Save</button>
                    <button class="btn btn-outline">Cancel</button>
                  </form>
            </div>
            <!-- ============================================================== -->
            <!-- End Container fluid  -->
            <!-- ============================================================== -->
            
            <!-- ============================================================== -->
            <!-- footer -->
<?php

require_once('footer.php');
 
 ?>
         
<?php

require_once('header.php');
 
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
                        <h4 class="page-title">Manage Users</h4>
                    </div>
                    <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                        <div class="d-md-flex">
                            <ol class="breadcrumb ms-auto">
                                
                            </ol>
                            <button ata-toggle="modal" data-target="#exampleModal"
                                class="btn btn-danger  d-none d-md-block pull-right ms-3 hidden-xs hidden-sm waves-effect waves-light text-white"><i class="fas fa-plus" style="margin-right:10px;"></i>Create new user</button>
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
                        <select class="form-control" id="exampleFormControlSelect1">
                          <option>-Select a Role-</option>
                          <option>Admin</option>
                          <option>Reviewer</option>
                        </select>
                      </div>
                      <div class="form-group mx-sm-3 mb-2">
                        <label for="inputCandidateName" class="sr-only">Password</label>
                        <input type="text" class="form-control" id="inputCandidateName" placeholder="User Name">
                      </div>
                      <div class="form-group mx-sm-3 mb-2">
                        <label for="inputCandidateName" class="sr-only">Password</label>
                        <input type="text" class="form-control" id="inputCandidateName" placeholder="Email ID">
                      </div>
                    <button type="submit" class="btn btn-primary mb-2">Search</button>
                    <button type="submit" class="btn btn-outline-primary mb-2">Reset</button>
                  </form>
                  <div class="row btn-group-management">
                      <div class="col-md-4"></div>
                      <div class="col-md-3"><button type="submit" class="btn btn-primary"><i class="far fa-file-excel" style="margin-right:10px;"></i>Excel Export - All Data</button></div>
                      <div class="col-md-3"><button type="submit" class="btn btn-primary"><i class="far fa-file-excel" style="margin-right:10px;"></i>Excel Export - Filtered Data</button></div>
                      <div class="col-md-2"><button type="submit" class="btn btn-danger mb-2 text-white">Delete</button></div>
                  </div>
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
                                      User Type
                                    </label>
                                  </div>
                            </th>
                            <th>User name</th>
                            <th>Email ID</th>
                            <th>Company</th>
                            <th>Country</th>
                            <th>Phone no</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php
                        $query = "SELECT * FROM `user_management`;";
                        $result = mysqli_query($db, $query);
                        while($row = mysqli_fetch_array($result)) {
                        ?>
                        <tr>
                            <td><div class="form-check">
                                <input class="form-check-input id-checkbox" type="checkbox" value="" id="checkboxid1">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Admin
                                </label>
                              </div></td>
                            <td><?php echo $row['U_Name']; ?></td>
                            <td><?php echo $row['U_Email']; ?></td>
                            <td><?php echo $row['U_Company']; ?></td>
                            <td><?php echo $row['U_Country']; ?></td>
                            <td><?php echo $row['U_Mobile']; ?></td>
                            <td>
                                <i class="fas fa-edit job_icon" data-toggle="tooltip" title="Edit"></i>
                                <i class="fas fa-trash-alt job_icon" data-toggle="tooltip" title="Delete"></i>
        
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
         
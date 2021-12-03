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
           
            <!-- ============================================================== -->
            <!-- End Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Container fluid  -->
            <!-- ============================================================== -->
            <div class="container-fluid">
                <div class="d-flex row align-items-center">
                    <div class="col-sm-6">
                        <h1>
                            Ranking Report
                            <i class="infoicon" data-toggle="tooltip" data-placement="right" title="" data-original-title="View the candidate rankings based on their overall score for the interview."></i>
                        </h1>
                        <input type="hidden" class="hdnSelectedCandidates">
                    </div>
                     
                </div>
            <!-- ============================================================== -->
            <!-- End Container fluid  -->
            <!-- ============================================================== -->
            <table style="margin-top: 50px;background-color: white;margin-right: auto;margin-left:auto;" class="table"  style="width:100%">
                <thead>
                    <tr>
                        <th><div class="table-text"><br>Name of condidates</div></th>
                    
                        <th><div class="table-text"><br>Overall Score(%)
                            
                            
                        </div>
                        </th>
                        <th>
                            <div class="table-text">
                                <br>    
                                <div class="form-group" style="margin-bottom:0;">
                                  
                                  </div>
                                Negative Emotion(%)
                                
                            
                            </div>
                        </th>
                        <th>
                            <div class="table-text">
                                <br>
                                <div class="form-group" style="margin-bottom:0;">
                                  
                                  </div>
                                Positive Emotion(%)
                                
                                
                            </div>
                        </th>
                        <th>
                            <div class="table-text"><br>
                                <div class="form-group" style="margin-bottom:0;">
                                  
                                  </div>
                                Emotion Charts
                                
                            
                            </div>
                        </th>

                        </tr>
                </thead>
                <tbody>
               
                <?php

                         


                        $query = "SELECT * FROM `ranking_report` INNER JOIN `condidates` ON ranking_report.C_id = condidates.C_id;";
                        $result = mysqli_query($db, $query);
                        while($row = mysqli_fetch_array($result)) {
                        ?>
                        <tr style="text-align:center;">
                    
                        

                        <td><?php echo $row['name']; ?></td>
                            <td><?php echo $row['Overall_Score']; ?></td>
                            <td><?php echo $row['Negative_Emotion']; ?></td>
                            <td><?php echo $row['Positive_Emotion']; ?></td>
                            <td> 
                             <?php echo '<img src="http://52.66.70.230/emotion/static/'.$row['C_id'].'.png" height="400px" />'; ?>                                
                            </td>
                        </tr>
                        <?php
                        }
                        ?>
                </tbody>
                
            </table>


            
                   
        
            <!-- ============================================================== -->
            <!-- footer -->
<?php



 

require_once('footer.php');

?>
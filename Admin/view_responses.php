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
                            View Responses
                            <i class="infoicon" data-toggle="tooltip" data-placement="right" title="" data-original-title="View the candidate rankings based on their overall score for the interview."></i>
                        </h1>
                        <input type="hidden" class="hdnSelectedCandidates">
                    </div>
                    <div class="col-sm-6 text-md-right align-self-stretch">
                        <div class="marbottom-spcing-xs col-md-offset-2">
                            <div class="row d-flex flex-wrap align-items-center">
                                <div class="col-md-3 pr-0">
                                    <span class="skpjob">Select Job</span>
                                </div>
                                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                    <option selected>Nothing Selected</option>
                                    <!-- <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option> -->
                                  </select>
                            </div>
                        </div>
                
                    </div>
                </div>
            <!-- ============================================================== -->
            <!-- End Container fluid  -->
            <!-- ============================================================== -->
            <div class="container mt-5 pt-5">
            <table id="example_table" class="table table-striped table-bordered" style="width:100%">
                    <thead>
                        <tr>
                            <th>
                                Candidate Name
                            </th>
                            <th>
                                Calculate Score
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    <?php
                        $query = "SELECT * FROM `condidates`;";
                        $result = mysqli_query($db, $query);
                        while($row = mysqli_fetch_array($result)) {
                        ?>
                        <tr>
                            <td><?php echo $row['name']; ?></td>
                             
                            <td>
                                <?php
                                     echo "<button id=\"buttons\" class=\"btn btn-primary\" onclick=\"calculateSim('{$row['C_id']}')\">Calculate</button><p id=\"{$row['C_id']}\"></p>"; 
                                ?>
                            </td>
                        </tr>
                        <?php
                        }
                        ?>
                    </tbody>
                    
                </table>
            </div>
            <!-- ============================================================== -->
            <!-- footer -->
            <script>
            async function calculateSim(event){
		        var buttons = document.querySelectorAll('#buttons')
		        var p = document.getElementById(event)
		        p.textContent = "Loading ..."
		        for(var x in buttons){
			    console.log(buttons[x])
			    buttons[x].disabled = true
		        }
                    var result =  await fetch('/api/'+event)
                    var data = await result.json()
                    console.log(data)
		            p.textContent = "similarity = "+ data.similarity
		            for(var button in buttons){
		            buttons[button].disabled = false 
 		        }
            }
                </script>
<?php

require_once('footer.php');

?>

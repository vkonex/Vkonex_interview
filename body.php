<section class="page-banner-hld homebanner">
        <figure class="page-banner m-0 d-none d-md-block">
            <img src="images/bg.jpeg" class="w-100">
        </figure>
        <div class="page-banner-content d-flex">
            <div class="container custom-container d-flex">
                <div class="row align-items-center flex1">
                    <div class="col-md-7 col-lg-6 px-md-0 px-3">
                        <h1 class="mb-lg-2 mb-md-2 bancaption">
                            <!--The Leading  <br/>
                            <span class="f-bold">AI-based Video </span>
                            <br/>
                            <span class="f-bold">Interview Bot</span>
							Leverage <span class="f-bold">AI</span>  <br>
                            for Candidate <br/><span class="f-bold">Follow-up</span> & Video-->
							<span class="f-bold">AI Based Interview Assessment</span>
							
                            
                        </h1>
                        <p class="fontlg mb-lg-4 mb-md-2" style="font-weight:400;">
							<!--Leverage Video Intelligence for Candidate Insight and Selection-->
							Vkonex AI for Candidate Follow-up & Video Pre-screening.
						</p>
                       
						</ul>
						<div class="bbc-logo-wrapper">
							
							</p>
							<p class="custom-text-privacy" for="Read more in our blog."><a href="#" target="_blank" style="font-size: 16px;">Read more in our blog.</a> </p>
						</div>
						<div class="freesignup lodernw">
			    	
                            <input type="hidden" name="token" value="1d6cae047db1c7105c2496d50951248a88bf9bb945914391370c9aab8a38bb32">
									
									
                                    <div class="input-group input-signup mt-5 mb-2 col-12 col-lg-11 col-md-11 pr-3 pl-0 pr-0">

										<input type="hidden" value="" name="code" id="hidden_code" >
										<!--<input type="text" class="form-control businessemail" id="email_home" placeholder="Your business email"  rel="required" name="email"> --> <!-- commented on 01.07.2020 -->
										<!--error message 09.02.2018-->
                                        <div class="existingemail" style="display:none;"><div class="existingemailcontent"> You are already registered with us. Please login to the Vkonex Dashboard by clicking <a href="https://login.gecko.ai/">here</a>. </div></div>
										<!--error message 09.02.2018-->
										
										<!-- <div class="input-group-append download-section">
                                            <a href="Gecko.pdf" download class="input-group-text download_pdf">DOWNLOAD BROCHURE</a>
                                            <em class="download_smxt">(No email required)</em>
										</div> -->
										<div class="input-group-append" > <!--style="flex: 0 0 100%;width: 100%;margin-top: 10px;"-->
											<!--<a class="new-req-a-call input-group-text download_pdf" href="" data-toggle="modal" data-target="#popupContact" rel="homebanner">Schedule Your Interview</a>-->
										</div><!-- 30.06.2020 -->
										<div class="input-group-append">
                                            <!--<input name="mail_snd" id="mail_snd_home" type="submit" value="Sign Up" class="input-group-text">--><!-- commented on 01.07.2020 -->
                                           <!-- <a href="plans.php" class="sign_up_btn">Sign Up</a><!-- commented on 01.07.2020 -->
										</div>
										<i class="frmloader" style="display:none;"><img src="images/page-loader.gif" alt=""/></i>
                                    </div>
                                         
						 
                    </div>
                    <div class="col-md-5 col-lg-6 p-md-0 p-3">
							<!--<div class="embed-responsive embed-responsive-16by9 ">
								<iframe width="560" height="315" src="https://youtu.be/ZTEbEvU5HjQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
							</div>-->
                            <img src="images/appscreen-1.png" alt="" class="appscreen">
							<div class="animation" style="display:none;">
							<svg height="0" width="0">
							  <defs>
								<filter id="glow">
									<feGaussianBlur stdDeviation="10" result="coloredBlur"/>
									<feMerge>
										<feMergeNode in="coloredBlur"/>
										<feMergeNode in="SourceGraphic"/>
									</feMerge>
								</filter>
							  </defs>
							</svg>
						</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
	<section class="py-4 py-md-5 flazy" id="setupmeeting">
        <div class="container custom-container">
            <div class="row justify-content-md-center">
                <div class="col-md-8 col-12">
                    <h2 class="text-center h2-title">Speed Up the <strong> Interview Process</strong>  and <br/> Shorten Time To Recruit </h2>
                </div>
            </div>
        </div>
    </section>
	
	   
	
	<section class="planspage">


	
  <style>.icon-sprite.listjob:before{background: url(images/list-job.png) no-repeat 0 0;width: 120px;
    height: 98px;} .icon-sprite.sprite-powered:before{background: url(images/ai-powered.png) no-repeat 0 0;width: 120px;height: 98px;}</style>
        <!-- jQuery -->
        <script src="js/main.min.js"></script>
        <script src="js/common.ui.js"></script>
        <script src="js/form-validation.js"></script>
	<script src="js/payment.js"></script>
        <script src="js/phone-select.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.3.0/snap.svg-min.js"></script>
	
	<script>
	 
	   $(function(){

		$("#requestCallbackTrigger").click(function(){
            $(".new-req-a-call").trigger("click");
        });
		  
		   $( window ).scroll(function() {
			  
			  if($('#features').hasClass('flazy')){
				 
                  $('#features').removeClass('flazy');
				  
				            $.ajax({
								 'url':'ajax_load/features.txt',
								  'methog':'get',
								  'contentType': "text/plain",
								  'success':function(data){
									  
									  $('#features').html(data);									  
								  }
							 })		


                  				  
				  
			  }
			  
			  if($('#analyzes').hasClass('flazy')){
				 
                  $('#analyzes').removeClass('flazy');
				  
				            $.ajax({
								 'url':'ajax_load/analyzes.txt',
								  'methog':'get',
								  'contentType': "text/plain",
								  'success':function(data){
									  
									  $('#analyzes').html(data);									  
								  }
							 })		


                  				  
				  
			  }
			  
			  
 
			  
			 if($('#analyzes_call').hasClass('flazy')){
				 
                  $('#analyzes_call').removeClass('flazy');
				  
				            $.ajax({
								 'url':'ajax_load/analyzes_call.txt',
								  'methog':'get',
								  'contentType': "text/plain",
								  'success':function(data){
									  
									  $('#analyzes_call').html(data);									  
								  }
							 })		


                  				  
				  
			  }
			  
			  if($('#works').hasClass('flazy')){
				 
                  $('#works').removeClass('flazy');
				  
				            $.ajax({
								 'url':'ajax_load/works.txt',
								  'methog':'get',
								  'contentType': "text/plain",
								  'success':function(data){
									  
									  $('#works').html(data);									  
								  }
							 })		


                  				  
				  
			  }
			  
			  
			  if($('#listjobs').hasClass('flazy')){
				 
                  $('#listjobs').removeClass('flazy');
				  
				            $.ajax({
								 'url':'ajax_load/listjobs.txt',
								  'methog':'get',
								  'contentType': "text/plain",
								  'success':function(data){
									  
									  $('#listjobs').html(data);									  
								  }
							 })		


                  				  
				  
			  }
			  
			  
			  
			  
			   if($('#human').hasClass('flazy')){
				 
                  $('#human').removeClass('flazy');
				  
				            $.ajax({
								 'url':'ajax_load/human.txt',
								  'methog':'get',
								  'contentType': "text/plain",
								  'success':function(data){
									  
									  $('#human').html(data);									  
								  }
							 })		
			  }
			  
		    if($('#recruit').hasClass('flazy')){
				 
                  $('#recruit').removeClass('flazy');
				  
				            $.ajax({
								 'url':'ajax_load/recruit.txt',
								  'methog':'get',
								  'contentType': "text/plain",
								  'success':function(data){
									  
									  $('#recruit').html(data);									  
								  }
							 })		


                  				  
				  
			  }
			  
			  
			  
			  
			  
			  
			  
			});
		   
		  
   

			 
		   
	   });
	 
	
	</script>
	
	
	<script src="js/custom.js"></script>
        <!-- meeting conferences popup Start -->
<div class="modal fade show meeting-conferences" id="meetingConferences" aria-labelledby="popupContactLabel">	  
	<div class="modal-dialog">
	  <div class="modal-content custom-modal-content">
		<div class="modal-header" style="display:block;">
		  <button type="button" class="close ml-auto" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		</div>
		<div class="modal-body pt-1">
		  <div class="popup-inner">
			  <div class="popup-head">
			  	<h3>Vkonex AI for Candidate Follow-up & Video Pre-screening</h3>
			  </div>
			  <div class="popup-form">
			  	<script src='https://crm.zoho.in/crm/WebFormServeServlet?rid=2c33760267d4f59675635646e99b36846d16a085b09dd1f1bfc9397aaa458587gidb43efcd5d07598c5a2dec7cbbd9f0a4a6dc1c9863cbc2de646d7115c6234daf8&script=$sYG'></script>
			  		<!--onsubmit="javascript: return check_form_validate_popupqueryform()"-->
			  		<p class="statusMsg text-center" style="display:none;"></p>
				  	<form method="post" id="popupqueryform" style="display:none;"> 
				  	  	<input type="hidden" value="" id="pg-recaptcha-response-new" name="pg-recaptcha-response-new">
				  	  	<input type="hidden" value="popup_query_form" name="form_name">
					  	<div class="popup-wrapper">
							<div class="single-field mr-0">
							  <input type="text" name="qry_field_FirstName" id="pname" value="" placeholder="Name *" maxlength="50">
							</div>
							<div class="single-field mr-0">
							  <input type="email" name="qry_field_Email" id="pemail" value="" placeholder="Email *" maxlength="80">
							</div>
							<div class="single-field mr-0">
							  <textarea rows="4" cols="50" class="mt-0" name="qry_custom_Description4" value="" id="pcomment" placeholder="Message or Question *"></textarea>
							</div> 
							
							<div class="single-field mr-0 captcha" style="position: relative">
							  	<!--<input type="hidden" name="captcha_sid" value="3591967">
							  	<input type="hidden" name="captcha_token" value="9fad14c2873b9f66fb2df4e70e7e5220">-->
							  	<div class="form-group capcha-hld d-flex">
							    	<div class="lft-capcha-hld" id="captcha-pop-up-div-contact">
							      		<div class="g-recaptcha" id="RecaptchaField4"></div>    
							    	</div>
							  	</div>
							</div> 
						</div>				  
					  
					  <div class="single-field_1 p-0">
					  	 <input type="submit" value="Submit" class="pop-up-sumit mt-0" id="pfooter_submit">
					  </div>
					</form>
					<!--<iframe frameborder="0" style="height:500px;width:99%;border:none;" src='https://forms.zohopublic.com/oindrilab/form/SendusaMessage/formperma/D_JbvhEZ3Tvw_dgZ2GRdvwC7zw9v66b08XtNmcSUQI0'></iframe>-->
					<p class="schedule-call text-center">Do you want to schedule a call with us?  <a href="javascript:void(0);" id="requestCallbackTrigger" data-dismiss="modal" aria-label="Close">Click here</a></p>
			  </div>
		  </div>
		</div>
	  </div>
	</div>
  </div>
  <!-- meeting conferences popup End -->
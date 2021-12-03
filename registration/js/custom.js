        var flipval = 0;
        var winWid = $(window).width();	
	if (winWid > 1170) {
		var maxRadius = 250;
		var gap = 15;
		var padding = 25;
		var height = (maxRadius + padding) * 2;
		var width = (maxRadius + padding) * 2;
		        // Random data
			var dataSet = [
			  {
				value: 34,
				total: 100
			  },
			  {
				value: 21,
				total: 100
			  },
			  {
				value: 43,
				total: 121
			  },
			  {
				value: 35,
				total: 120
			  },
			  {
				value: 353,
				total: 520
			  },
			  {
				value: 135,
				total: 420
			  },
			  {
				value: 315,
				total: 420
			  },
			  {
				value: 15,
				total: 21
			  },
			  {
				value: 35,
				total: 340
			  },
			  {
				value: 35,
				total: 340
			  }
			];

		// Append SVG element to body
		var svg = d3.select('.animation')
		  .append('svg')
		  .attr('height', height)
		  .attr('width', width)
		  .attr('class', 'rings');
		
		// Append a bunch of circle elements based on number of items in the dataSet and set attributes
		var rings = svg.selectAll('circle')
		  .data(dataSet)
		  .enter()
		  .append('circle')
		  .attr('cx', width/2)
		  .attr('cy', height/2)
		  .attr('fill', 'none')
		  .attr('class', 'ring');
		
		// Build the initial state of the rings
		rings.each(function(d, i) {
		  var element = this;
		  var radius = maxRadius - (gap * i);
		  // Calculates the circumference of the circle
		  var length = Math.PI * (radius * 2);
		  // Calculate the percentage of the data.value over data.total
		  var value = (d.value/d.total) * length;
		  
		  // Animates the stroke depending on the percentage calculated
		  d3.select(element)
			.attr('r', radius)
			.attr('stroke-dasharray', length)
			.attr('stroke-dashoffset', length)
			.transition()
			.duration(2000)
			.attr('stroke-dashoffset', value);
		});
		
		function rotate(element) {
		  // Randomiser to set the direction of the rotation
		  var s = (Math.floor(Math.random() * 11) % 2 === 0 ? '-' : '');
		  // Initial position of rings
		  element.transform('r0, ' + width/2 + ',' + height/2);
		  // Randomised rotation animation which recursively calls itself as a callback
		  element.animate({ transform: 'r' + s + '360, ' + width/2 + ',' + height/2 }, (Math.random() * 1000) + 2000, mina.linear, () => rotate(element));
		};
		
		// Rotating animation using Snap.svg
		rings.each(function() { 
		  var element = this;
		  // Start the animation
		  rotate(Snap(element));
		})
	
	}
	if (winWid < 1169) {
		// Configuration
		var maxRadius = 200;
		var gap = 15;
		var padding = 25;
		var height = (maxRadius + padding) * 2;
		var width = (maxRadius + padding) * 2;
		// Random data
		var dataSet = [
		  {
			value: 34,
			total: 100
		  },
		  {
			value: 21,
			total: 100
		  },
		  {
			value: 43,
			total: 121
		  },
		  {
			value: 35,
			total: 120
		  },
		  {
			value: 353,
			total: 520
		  },
		  {
			value: 135,
			total: 420
		  },
		  {
			value: 315,
			total: 420
		  },
		  {
			value: 15,
			total: 21
		  },
		  {
			value: 35,
			total: 340
		  },
		  {
			value: 35,
			total: 340
		  }
		];

	        // Append SVG element to body
		var svg = d3.select('.animation')
		  .append('svg')
		  .attr('height', height)
		  .attr('width', width)
		  .attr('class', 'rings');
		
		// Append a bunch of circle elements based on number of items in the dataSet and set attributes
		var rings = svg.selectAll('circle')
		  .data(dataSet)
		  .enter()
		  .append('circle')
		  .attr('cx', width/2)
		  .attr('cy', height/2)
		  .attr('fill', 'none')
		  .attr('class', 'ring');
		
		// Build the initial state of the rings
		rings.each(function(d, i) {
		  var element = this;
		  var radius = maxRadius - (gap * i);
		  // Calculates the circumference of the circle
		  var length = Math.PI * (radius * 2);
		  // Calculate the percentage of the data.value over data.total
		  var value = (d.value/d.total) * length;
		  
		  // Animates the stroke depending on the percentage calculated
		  d3.select(element)
			.attr('r', radius)
			.attr('stroke-dasharray', length)
			.attr('stroke-dashoffset', length)
			.transition()
			.duration(2000)
			.attr('stroke-dashoffset', value);
		});
		
		function rotate(element) {
		  // Randomiser to set the direction of the rotation
		  var s = (Math.floor(Math.random() * 11) % 2 === 0 ? '-' : '');
		  // Initial position of rings
		  element.transform('r0, ' + width/2 + ',' + height/2);
		  // Randomised rotation animation which recursively calls itself as a callback
		  element.animate({ transform: 'r' + s + '360, ' + width/2 + ',' + height/2 }, (Math.random() * 1000) + 2000, mina.linear, () => rotate(element));
		};
		
		// Rotating animation using Snap.svg
		rings.each(function() { 
		  var element = this;
		  // Start the animation
		  rotate(Snap(element));
		});
	}
       
       
           $('.enterprice_talk').click(function(event){
                $('#contact_form').append('<input type="hidden" type="text" name="lead_from" id="lead_from" value="Enterprise" >');
		$('html, body').animate({
                    scrollTop: $("#footer").offset().top
                }, 1500);
           });
	   $('#customplanscroll').click(function(event){
               
                $('html, body').animate({
                    scrollTop: $("#footer").offset().top
                }, 1500);
           }); 
   $(document).ready(function(){
          $("#usd_sub_premium").click(function(e) {
                        
		        $('#premium_form .existingemail').fadeOut('slow');    
		        var fname 	 	 = $.trim($('#premium_form #full_name').val());
		        var company	 	 = $.trim($('#premium_form #company').val());
			    var phone	 	 = $.trim($('#premium_form #phone').val());
                var email	 	 = $.trim($('#premium_form #email').val());
                var password	 	 = $.trim($('#premium_form #password').val());
                var g_recaptcha_response = $('#premium_form .g-recaptcha-response').val();
                //alert(g_recaptcha_response);
                //var passwordregex        = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,15}$/;
                //var passwordregex        = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,15}$/;   // password rule sir
                var passwordregexspecial = /^[a-zA-Z0-9._]+$/;
                
                var passwordregex      = /^(?=.*[a-zA-Z._])(?=.*[0-9]).{8,15}$/;  // new password rule as per maam requirement
                
                         
			    var errCntr	 	 = 0;
               $('#password').next('i').next('div#msg').css('margin-top','-29px'); 
                
                
                        
                 //alert(isBlockedEmail(email));      
	 
			if('' == fname){
				inlineMsgFornewsletter('full_name','Please enter full name.',2);
				errCntr++;
				return false;		
			}	
			if(!fname.match(nameRegexOnlyName)) {
				inlineMsgFornewsletter('full_name','Please enter valid first name.',2);
				errCntr++;
				return false;
			}
			
			if('' == company){
				inlineMsgFornewsletter('company','Please enter valid company name.',2);
				errCntr++;
				return false;		
			}
		       
                        if('' == phone){
				inlineMsgFornewsletter('phone','Please enter phone number.',2);
				errCntr++;
				return false;		
			}
			if (phone.length>21||phone.length<7) {
                                inlineMsgFornewsletter('phone','Minimum 7 and maximum 20 digits are allowed',2);
                                errCntr++;
                                return false;
			}else{
                                if(phone.replace(/\D/g, '').length > 20)
                                {    
                                        inlineMsgFornewsletter('phone','Minimum 7 and maximum 20 digits are allowed',2);
                                        errCntr++;
                                        return false;
                                }
				if(!phone.match(phoneRegexSimplified)) {  
					inlineMsgFornewsletter('phone','Only digits, +, -, space are allowed.',2);
					errCntr++;
					return false;	
				 }
			}
                        
                        if('' == email || email.length == 0){
                                inlineMsgFornewsletter('email','Please enter email.',2);
                                errCntr++;
                                return false;
                        }else if (email.length>250) {
                                inlineMsgFornewsletter('email','Maximum 250 characters are allowed.',2);
                                errCntr++;
                                return false;	
                        }else{
                                if(!email.match(emailRegex)) {
                                        inlineMsgFornewsletter('email','Please enter valid email.',2);
                                        errCntr++;
                                        return false;
                                }
                                if (isBlockedEmail(email)){
									    inlineMsgFornewsletter('email','Please Enter Business Email Address.',2);
                                        errCntr++;
                                        return false;
								}
								 
                        }
                        
                        if('' == password){
                                inlineMsgFornewsletter('password','Please enter password.',2);
                                errCntr++;
                                return false;
                        }else{
                            if (password.length < 8||password.length>15||!password.match(passwordregex)) {
                                    inlineMsgFornewsletter('password','Password must be at least 8 characters long, not more than 15 characters, and contain at least one number and at least one letter.',2);
                                    $('#password').next('i').next('div#msg').css('margin-top','-80px');                    
                                    errCntr++;
                                    return false;
			    }else if(!password.match(passwordregex)){
                                    inlineMsgFornewsletter('password','Password must be at least 8 characters long, not more than 15 characters, and contain at least one number and at least one letter.',2);
                                    $('#password').next('i').next('div#msg').css('margin-top','-80px');                    
                                    errCntr++;
                                    return false;
                            }
                            
			    $('#password').next('i').next('div#msg').css('margin-top',''); 
			}
                        if('' == g_recaptcha_response || g_recaptcha_response.length == 0){
                                inlineMsgFornewsletter('captcha-div-premium','Please verify that you are not a robot.',2);
                                //$('#recaptcha-accessible-status').show();
                                errCntr++;
                                return false;
                        }
                      
			//alert(errCntr);
			if(0 == errCntr){
				  var params = {
                                        // Request parameters
                                        "SearchItem": {"EmailID": email}
                               };
		    $.ajax({
                            url: "https://gecko-api.azure-api.net/bastage/v1/api/checkbusinessaccountapi",
                            beforeSend: function(xhrObj){
                                                                // Request headers
                                                                xhrObj.setRequestHeader("Content-Type","application/json");
                                                                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","e5b651b164e848b8a1112050cf4ea867");
                                                        },
                            type: "POST",
                            // Request body
                            data: JSON.stringify(params),
		    })	
                    .done(function(data) {
						//alert(data.status);
                        if(data.status == false)
                        {	
                            //inlineMsgFornewsletter('email','You are already registered with us.',2);
                            $('div#msg').hide();
                            $('#premium_form .existingemail').fadeIn('slow');
                            return false; 
                        }
			            if(data.status == true)
                        {
							    if($("#agree_master_premium").prop('checked') == false){
									  inlineMsgFornewsletter('agree_master_premium','Please agree to the Master Subscription Agreement.',2);
									  errCntr++;
									  return false;
								}
								if($("#agree_privacy_premium").prop('checked') == false){
									  inlineMsgFornewsletter('agree_privacy_premium','Please agree our Privacy Policy.',2);
									  errCntr++;
									  return false;
								}
								 
										    
                                $(this).addClass('inactive');
                                $(this).attr('disabled','disabled'); 
                                //$('.savingdata-loader').show();
                                //alert("sdfsf");
                                //$("#premium_form").submit(); 
                                document.forms['premium_form'].submit();
                                console.log(document.forms['premium_form'].submit);
                                
			 	return true;
			}	
				 })	
                 .fail(function() {
                        //alert("error");
                 }); 
                 return false;				 
				
                 
           	 
			}else{
				return false;
			}
	 });
         
        $('#password').click(function(){
                $(this).next('i').next('#msg').fadeOut('slow');
        });
        $("#password").keypress(function(){
                $(this).next('i').next('#msg').fadeOut('slow');
        });
                  
                  
        $(".fa-eye-premium").click(function(){
            if (!$(this).hasClass("displayed")) {
                $(this).addClass('displayed');
                $('#password').attr('type','text');
            }else{
                $(this).removeClass('displayed');
                $('#password').attr('type','password');
            } 
        });
         
         $("#usd_sub_enterprice").click(function(e) {
                        
		         $('#enterprice_form .existingemail').fadeOut('slow'); 
		        var fname 	 	 = $.trim($('#enterprice_full_name').val());
		        var company	 	 = $.trim($('#enterprice_company').val());
			    var phone	 	 = $.trim($('#enterprice_phone').val());
                var email	 	 = $.trim($('#enterprice_email').val());
				var requirement	 	 = $.trim($('#requirement').val());
                //var password	 	 = $.trim($('#enterprice_password').val());
				var g_recaptcha_response = $('#enterprice_form .g-recaptcha-response').val();
				//alert(g_recaptcha_response);
				//var passwordregex        = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,15}$/;
				//var passwordregex        = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,15}$/;
				//var passwordregexspecial = /^[a-zA-Z0-9._]+$/;
				//var passwordregex      = /^(?=.*[a-zA-Z._])(?=.*[0-9]).{8,15}$/;  // new password rule as per maam requirement
				var errCntr	 	 = 0;
				
				$('#enterprice_password').next('i').next('div#msg').css('margin-top','-29px');
	 
			if('' == fname){
				inlineMsgFornewsletter('enterprice_full_name','Please enter full name.',2);
				errCntr++;
				return false;		
			}	
			if(!fname.match(nameRegexOnlyName)) {
				inlineMsgFornewsletter('enterprice_full_name','Please enter valid first name.',2);
				errCntr++;
				return false;
			}
			
			if('' == company){
				inlineMsgFornewsletter('enterprice_company','Please enter valid company name.',2);
				errCntr++;
				return false;		
			}
		       
			if('' == phone){
			inlineMsgFornewsletter('enterprice_phone','Please enter phone number.',2);
			errCntr++;
			return false;		
			}
			if (phone.length>21||phone.length<7) {
                                inlineMsgFornewsletter('enterprice_phone','Minimum 7 and maximum 20 digits are allowed',2);
                                errCntr++;
                                return false;
			}else{
                                if(phone.replace(/\D/g, '').length > 20)
                                {    
                                        inlineMsgFornewsletter('enterprice_phone','Minimum 7 and maximum 20 digits are allowed',2);
                                        errCntr++;
                                        return false;
                                }
				if(!phone.match(phoneRegexSimplified)) {  
					inlineMsgFornewsletter('enterprice_phone','Only digits, +, -, space are allowed.',2);
					errCntr++;
					return false;	
				 }
			}
                        
				if('' == email || email.length == 0){
						inlineMsgFornewsletter('enterprice_email','Please enter email.',2);
						errCntr++;
						return false;
				}else if (email.length>250) {
						inlineMsgFornewsletter('enterprice_email','Maximum 250 characters are allowed.',2);
						errCntr++;
						return false;	
				}else{
						if(!email.match(emailRegex)) {
								inlineMsgFornewsletter('enterprice_email','Please enter valid email.',2);
								errCntr++;
								return false;
						}
						if (isBlockedEmail(email)){
								inlineMsgFornewsletter('enterprice_email','Please Enter Business Email Address.',2);
								errCntr++;
								return false;
						}
				}
				if('' == requirement || requirement.length == 0){
				inlineMsgFornewsletter('requirement','Please describe your requirement.',2);
				errCntr++;
				return false;
			}
                 /*       
				if('' == password){
				inlineMsgFornewsletter('enterprice_password','Please enter password.',2);
				errCntr++;
				return false;
				}
				else{
				if (password.length < 8||password.length>15||!password.match(passwordregex)) {
					inlineMsgFornewsletter('enterprice_password','Password must be at least 8 characters long, not more than 15 characters, and contain at least one number and at least one letter.',2);
					$('#enterprice_password').next('i').next('div#msg').css('margin-top','-80px');                    
					errCntr++;
					return false;
				}
				else if(!password.match(passwordregex)){
					inlineMsgFornewsletter('enterprice_password','Password must be at least 8 characters long, not more than 15 characters, and contain at least one number and at least one letter.',2);
					$('#enterprice_password').next('i').next('div#msg').css('margin-top','-80px');                    
					errCntr++;
					return false;
				}
				$('#enterprice_password').next('i').next('div#msg').css('margin-top',''); 
				} 
				*/
				if('' == g_recaptcha_response || g_recaptcha_response.length == 0){
						inlineMsgFornewsletter('captcha-div-enterprice','Please verify that you are not a robot.',2);
						//$('#recaptcha-accessible-status').show();
						errCntr++;
						return false;
				}
				/*if(!password.match(passwordregex)){
				inlineMsgFornewsletter('password','Minimum One digit, one alphabet ,one special charecter.',2);
				errCntr++;
				return false;
				}*/
			
			if(0 == errCntr){
                            
                                var params = {
                                        // Request parameters
                                        "SearchItem": {"EmailID": email}
                                };
                                $.ajax({
                                        url: "https://gecko-api.azure-api.net/bastage/v1/api/checkbusinessaccountapi",
                                        beforeSend: function(xhrObj){
                                                                            // Request headers
                                                                            xhrObj.setRequestHeader("Content-Type","application/json");
                                                                            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","e5b651b164e848b8a1112050cf4ea867");
                                                                    },
                                        type: "POST",
                                        // Request body
                                        data: JSON.stringify(params),
                                })	
                                .done(function(data) {
                                                            //alert(data.status);
                                    if(data.status == false)
                                    {	
                                        //inlineMsgFornewsletter('enterprice_email','You are already registered with us.',2);
                                        $('div#msg').hide();
                                        $('#enterprice_form .existingemail').fadeIn('slow');
                                        return false; 
                                    }
                                    if(data.status == true)
                                    {
										    if($("#agree_master_enterprice").prop('checked') == false){
												  inlineMsgFornewsletter('agree_master_enterprice','Please agree to the Master Subscription Agreement.',2);
												  errCntr++;
												  return false;
											}
											if($("#agree_privacy_enterprice").prop('checked') == false){
												  inlineMsgFornewsletter('agree_privacy_enterprice','Please agree our Privacy Policy.',2);
												  errCntr++;
												  return false;
											}
										     
										    
                                            $(this).addClass('inactive');
                                            $(this).attr('disabled','disabled'); 
											
												/* $('.enterprice-first').remove();
												$('.enterprice-second').remove();
												$('#enterprice-third').addClass('box');
												$('#enterprice-third').addClass('d-flex');
												$('#enterprice-third').addClass('flex-wrap');
												$('#enterprice-third').addClass('justify-content-stretch');
												$('#enterprice-third').show(); */
												
												window.location.href = 'thank_you.php';

												$.ajax({
												type: "POST",
												url: "enterprice_mail.php",
												data: {name:fname,ecompany:company,ephone:phone,eemail:email,erequirement:requirement},
												success: function (resp) {
													
												
												}
												});
											
                                            //$('').addClass() 
                                            //$('.savingdata-loader').show();
                                            //alert("sdfsf");
                                            //$("#premium_form").submit(); 
                                            //document.forms['enterprice_form'].submit();
                                            //console.log(document.forms['enterprice_form'].submit);
                                            //$('.savingdata-loader').show();
                                            //return true;
                                            //$("#enterprice_form").submit();
                                            
                                    }	
                                             })	
                                .fail(function() {
                                    //alert("error");
                                }); 
                                return false;
                            
                              
			}else{
				return false;
			}
	  
	});
        
        $('#starter_password').click(function(){
                $(this).next('i').next('#msg').fadeOut('slow');
        });
        $("#starter_password").keypress(function(){
                $(this).next('i').next('#msg').fadeOut('slow');
        });
                  
                  
        $(".fa-eye-enterprice").click(function(){
            if (!$(this).hasClass("displayed")) {
                $(this).addClass('displayed');
                $('#starter_password').attr('type','text');
            }else{
                $(this).removeClass('displayed');
                $('#starter_password').attr('type','password');
            } 
        });
      
      ///////////////////////////   free sign up script  /////////////////////////////////
                        
                        var MSGTIMER = 20;
                        var MSGSPEED = 5;
                        var MSGOFFSET = 3;
                        var MSGHIDE = 3;

                        var code_id;
                        var user_email;	
                        var new_code = '';	
                        /*pasting 6 digit start*/
                        var $inputs = $(".confirmation_code_group input");
                        var intRegex = /^\d+$/;

                        // Prevents user from manually entering non-digits.
                        $inputs.on(".def-txt-input", function(){
                            if(!intRegex.test($(this).val())){
                                $(this).val("");
                            }
                        });


                        // Prevents pasting non-digits and if value is 6 characters long will parse each character into an individual box.
                        $inputs.on("paste", function() {
                            var $this = $(this);
                            var originalValue = $this.val();

                            $this.val("");

                            $this.one(".confirmation_code_group input", function(){
                                $currentInputBox = $(this);

                                var pastedValue = $currentInputBox.val();

                                if (pastedValue.length == 6 && intRegex.test(pastedValue)) {
                                    pasteValues(pastedValue);
                                }
                                else {
                                    $this.val(originalValue);
                                }

                                $inputs.attr("maxlength", 1);
                            });

                            $inputs.attr("maxlength", 6);
                        });


                        // Parses the individual digits into the individual boxes.
                        function pasteValues(element) {
                                 new_code = element;
                            //alert(new_code);
                            var values = element.split("");
                            //alert(values);
                            $(values).each(function(index) {
                                
                                var $inputBox = $('.def-txt-input[name="box' + (index + 1) + '"]');
                                //console.log(($inputBox).attr('class'));
                                $inputBox.val(values[index]);
                                //alert(index);
                                
                            });
                           //  alert(code_id);
                                code_id = $("#hidden_code").val();
                                if(new_code == code_id ){

                                        $.ajax({
                                        url: 'check-code.php',
                                        type: 'post',
                                        dataType: 'json',
                                        data: 'code='+code_id,
                                        //data: 'email='+mail,
                                        success: function(response) {
                                                if(response.message == "success"){
                                                    $("#code_chk").removeClass("inactive");
                                                    $("#code_chk").removeAttr("disabled");
                                                    $("#code_chk").prop('disabled', false);
                                                }else{
                                                    //alert('Incorrect Confirmation Code');
                                                    //$('.custom-alert').show();
                                                    $('.custom-alert').modal('show');
                                                    $(values).each(function(index) {
                                                        var $inputBox = $('.def-txt-input[name="box' + (index + 1) + '"]');
                                                        $inputBox.val('');
                                                    });
                                                    $('#box1').focus();
                                                }
                                            }    
                                        });
                                }else{
                                         //alert('Incorrect Confirmation Code');
                                         //$('.custom-alert').show();
                                         $('.custom-alert').modal('show');
                                         $(values).each(function(index) {
                                                var $inputBox = $('.def-txt-input[name="box' + (index + 1) + '"]');
                                                $inputBox.val('');

                                        });
                                        $('#box1').focus();
                                }
                        };
                        /*pasting 6 digit end*/	
                        
                        
                        $(".starter .flip").click(function(){
                            
                            //alert(flipval);
                            if(flipval == 1)
                                 return false;
                            
                            flipval = 1;
                            
                            $('.starter .backdiv').css({"opacity": "1"});
                            $('.starter .backdiv').addClass('flipInY');
                            $('.starter .entercodebackdiv , .starter .frontdiv').css({"opacity": "0" , "z-index":"0"});
                            $('.starter .entercodebackdiv , .starter .frontdiv').removeClass('flipOutY');
                            $('.starter .entercodefrontdiv').css({"opacity":"1","z-index":"1"});
                        })
                        /*$(".starter .entercode").unbind().click(function(){
                            
                                // e.preventDefault();
                                var mail = $('#email_free').val();
                                $('#mail_form_starter .existingemail').fadeOut('slow');
                                var emailerror  = check_email_validation_starter(mail);
                                //alert(emailerror);
                                var errCntr = 0;
                                if(emailerror === true){
                                             
											 
				    var params = {
                                        // Request parameters
                                        "SearchItem": {"EmailID": mail}
                                    };
                                    $.ajax({
                                        url: "https://gecko-api.azure-api.net/bastage/v1/api/checkbusinessaccountapi",
                                        beforeSend: function(xhrObj){
                                                                        // Request headers
                                                                        xhrObj.setRequestHeader("Content-Type","application/json");
                                                                        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","e5b651b164e848b8a1112050cf4ea867");
                                                                    },
                                        type: "POST",
                                        // Request body
                                        data: JSON.stringify(params), 
                                    })
                                    .done(function(data) {
                                        //alert(data.status);
                                        if(data.status == false)
                                        {
                                             //inlineMsgFornewsletter('email','You are already registered with us.',2);
                                                $('#mail_form_starter .existingemail').fadeIn('slow');
                                                //$('.existingemail').delay(10000).fadeOut('slow');
                                               
                                             
                                             errCntr++;
                                             return false;
                                        }  
                                        if(data.status == true)
                                        {
											if($("#agree_master").prop('checked') == false){
												  inlineMsgFornewsletter('agree_master','Please agree to the Master Subscription Agreement.',2);
												  errCntr++;
												  return false;
											}
											if($("#agree_privacy").prop('checked') == false){
												  inlineMsgFornewsletter('agree_privacy','Please agree our Privacy Policy.',2);
												  errCntr++;
												  return false;
											}
										    
                                            $('#box1,#box2,#box3,#box4,#box5,#box6').val('');
                                            $('#code_chk').attr('disabled','disabled');
                                            $('#code_chk').addClass('inactive');
                                            
                                            $('#mail_form_starter .frmloader').show();
                                            $('#mail_snd_starter').attr('disabled','disabled');
                                            $('#mail_snd_starter').addClass('inactive');
                                             //$('#mail_form_home').submit();
                                             //return true;
                                          
                                          
                                            $('.starter .frontdiv , .starter .entercodefrontdiv').css({"opacity": "0" , "z-index":"0"});
                                            $('.starter .entercodebackdiv').css({"opacity": "1" , "z-index":"1"});
                                            $('.starter .entercodefrontdiv , .starter .frontdiv').removeClass('flipInY');
                                            $('.starter .entercodebackdiv').addClass('flipOutY');
                            
					    $.ajax({
                                                url: 'payment-gecko-free-mail.php',
                                                type: 'post',
                                                dataType: 'json',
                                                data: $('#mail_form_starter').serialize(),
                                                //data: 'email='+mail,
                                                success: function(response) {
													    //alert(response.message);
                                                        if(response.message == "success"){
                                                            code_id = response.code; 
                                                            $("#hidden_code").val(code_id);
                                                         
                                                            user_email = response.email;
															//alert(user_email);
                                                            $('#user_email').val(user_email);
															$('#user_email_final').val(user_email);
                                                            //alert(response.message);
                                                            $('#mail_form_starter .frmloader').hide();
                                                            
							}
                                                        //if(response.message == "failure"){
                                                            //inlineMsgFornewsletter('email','Email Address already exist.',2);
															//return false;
                                                        //}
                                                    }    
                                                });
                                        }
                                    })
                                    .fail(function() {
                                        alert("error");
                                    });
                              
                                    //alert("sdfsdfsdfsdf");
                                    
                                    return false; 		 
					                          
                                           //}
				 }
				 
                             
                            
                            
                            
                            return false;
                        });
                        */
						// Code written by Ashwani Kumar on 12-3-2020 to implement starter as a paid services.... Logic start from here for validation puirpose...
                        $(".startercode").unbind().click(function(){
							// e.preventDefault();
							var mail = $('#starter_email').val();
							$('#starter_form .existingemail').fadeOut('slow');
							//var emailerror  = check_email_validation_starter(mail);
							//alert(emailerror);
							var errCntr = 0;
							var fname 	 	 = $.trim($('#starter_full_name').val());
							var company	 	 = $.trim($('#starter_company').val());
							var phone	 	 = $.trim($('#starter_phone').val());
							var email	 	 = $.trim($('#starter_email').val());
							//var requirement	 	 = $.trim($('#starter_requirement').val());
							var password	 	 = $.trim($('#starter_password').val());
							var g_recaptcha_response = $('#starter_form .g-recaptcha-response').val();
							//alert(g_recaptcha_response);
							//var passwordregex        = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,15}$/;
							//var passwordregex        = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,15}$/;
							//var passwordregexspecial = /^[a-zA-Z0-9._]+$/;
							var passwordregex      = /^(?=.*[a-zA-Z._])(?=.*[0-9]).{8,15}$/;  // new password rule as per maam requirement

							//$('#starter_password').next('i').next('div#msg').css('margin-top','-29px');

							if('' == fname){
								inlineMsgFornewsletter('starter_full_name','Please enter full name.',2);
								errCntr++;
								return false;
							}
							if(!fname.match(nameRegexOnlyName)) {
								inlineMsgFornewsletter('starter_full_name','Please enter valid first name.',2);
								errCntr++;
								return false;
							}

							if('' == company){
								inlineMsgFornewsletter('starter_company','Please enter valid company name.',2);
								errCntr++;
								return false;
							}

							if('' == phone){
								inlineMsgFornewsletter('starter_phone','Please enter phone number.',2);
								errCntr++;
								return false;
							}
							if (phone.length>21||phone.length<7) {
								inlineMsgFornewsletter('starter_phone','Minimum 7 and maximum 20 digits are allowed',2);
								errCntr++;
								return false;
							}else{
								if(phone.replace(/\D/g, '').length > 20){
									inlineMsgFornewsletter('starter_phone','Minimum 7 and maximum 20 digits are allowed',2);
									errCntr++;
									return false;
								}
								if(!phone.match(phoneRegexSimplified)) {
									inlineMsgFornewsletter('starter_phone','Only digits, +, -, space are allowed.',2);
									errCntr++;
									return false;
								 }
							}

							if('' == email || email.length == 0){
								inlineMsgFornewsletter('starter_email','Please enter email.',2);
								errCntr++;
								return false;
							}else if (email.length>250) {
								inlineMsgFornewsletter('starter_email','Maximum 250 characters are allowed.',2);
								errCntr++;
								return false;
							}else{
								if(!email.match(emailRegex)) {
									inlineMsgFornewsletter('starter_email','Please enter valid email.',2);
									errCntr++;
									return false;
								}
								if (isBlockedEmail(email)){
									inlineMsgFornewsletter('starter_email','Please Enter Business Email Address.',2);
									errCntr++;
									return false;
								}
							}
							/*if('' == requirement || requirement.length == 0){
								inlineMsgFornewsletter('starter_requirement','Please describe your requirement.',2);
								errCntr++;
								return false;
							}*/
							if('' == password){
								inlineMsgFornewsletter('starter_password','Please enter password.',2);
								errCntr++;
								return false;
							}else{
								if (password.length < 8||password.length>15||!password.match(passwordregex)) {
									inlineMsgFornewsletter('starter_password','Password must be at least 8 characters long, not more than 15 characters, and contain at least one number and at least one letter.',2);
									$('#starter_password').next('i').next('div#msg').css('margin-top','-80px');
									errCntr++;
									return false;
								} else if(!password.match(passwordregex)){
									inlineMsgFornewsletter('starter_password','Password must be at least 8 characters long, not more than 15 characters, and contain at least one number and at least one letter.',2);
									$('#starter_password').next('i').next('div#msg').css('margin-top','-80px');
									errCntr++;
									return false;
								}
								$('#enterprice_password').next('i').next('div#msg').css('margin-top','');
							}
							if('' == g_recaptcha_response || g_recaptcha_response.length == 0){
								inlineMsgFornewsletter('captcha-div-starter','Please verify that you are not a robot.',2);
								//$('#recaptcha-accessible-status').show();
								errCntr++;
								return false;
							}
							if(!password.match(passwordregex)){
								inlineMsgFornewsletter('password','Minimum One digit, one alphabet ,one special charecter.',2);
								errCntr++;
								return false;
							}

							//if(emailerror === true){
							if(0 == errCntr){
								var params = {
									// Request parameters
									"SearchItem": {"EmailID": mail}
                                };
                                $.ajax({
									url: "https://gecko-api.azure-api.net/bastage/v1/api/checkbusinessaccountapi",
                                    beforeSend: function(xhrObj){
										// Request headers
										xhrObj.setRequestHeader("Content-Type","application/json");
										xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","e5b651b164e848b8a1112050cf4ea867");
									},
									type: "POST",
									// Request body
									data: JSON.stringify(params),
								})
                                .done(function(data) {
									//alert(data.status);
									if(data.status == false){
										//inlineMsgFornewsletter('email','You are already registered with us.',2);
                                        $('#starter_form .existingemail').fadeIn('slow');
                                        //$('.existingemail').delay(10000).fadeOut('slow');
										errCntr++;
                                        return false;
                                    }
                                    if(data.status == true) {
										if($("#agree_master_starter").prop('checked') == false){
											inlineMsgFornewsletter('agree_master_starter','Please agree to the Master Subscription Agreement.',2);
											errCntr++;
											return false;
										}
										if($("#agree_privacy_starter").prop('checked') == false){
											inlineMsgFornewsletter('agree_privacy_starter','Please agree our Privacy Policy.',2);
											errCntr++;
											return false;
										}
										$("#starter_form").submit();
                                    }
                                })
								.fail(function() {
									alert("error");
								});
                                return false;
							}
                            return false;
                        });

						// Code written by Ashwani Kumar on 12-3-2020 to implement starter as a paid services.... Logic end here for validation puirpose...                        
                        
                        $(".starter .billingdetail").click(function(){
                            
                            $('#confirm_code .frmloader').show();
                            var box1 = $("#box1").val();
                            var box2 = $("#box2").val();
                            var box3 = $("#box3").val();
                            var box4 = $("#box4").val();
                            var box5 = $("#box5").val();
                            var box6 = $("#box6").val();
                            var final_data = box1+box2+box3+box4+box5+box6;
                            code_id = $("#hidden_code").val();
                            if(final_data != code_id){
                                //alert('Incorrect Confirmation Code');
                                //$('.custom-alert').show();
                                $('.custom-alert').modal('show');
                                $("#box1").val('');
                                $("#box2").val('');
                                $("#box3").val('');
                                $("#box4").val('');
                                $("#box5").val('');
                                $("#box6").val('');
                                $('#box1').focus();
                                $('#confirm_code .frmloader').hide();
                                return false;
                            }else{

                                $('.starter .entercodebackdiv , .starter .entercodefrontdiv , .starter .frontdiv').css({"opacity":"0","z-index":"0"});
                                $('.billingdetaildiv').css({"opacity": "1" , "z-index":"1"});
                                $('.starter .frontdiv , .starter .entercodebackdiv , .starter .entercodefrontdiv').removeClass('flipInY');
                                $('.billingdetaildiv').addClass('flipOutY');
                                return false;
                            }
                            
                        })
                        $(".starter .flipOut").click(function(){
                             $('.starter .backdiv , .starter .entercodefrontdiv ,.starter .entercodebackdiv ,.starter .billingdetaildiv').removeClass('flipInY');
                            $('.starter .frontdiv').css({"opacity": "1", "z-index":"1"});
                            $('.starter .backdiv , .starter .entercodefrontdiv ,.starter .entercodebackdiv ,.starter .billingdetaildiv').css({"opacity": "0" , "z-index":"0"});
                            $('#mail_snd_starter').removeClass('inactive');
                            $('#mail_snd_starter').removeAttr('disabled','disabled');
                        });
                        
                        
                        
                        $("#usd_sub").click(function(e) {
		        
                                    var fname 	 	 = $.trim($('#full_name_starter').val());
                                    var company	 	 = $.trim($('#company_starter').val());
                                    var phone	 	 = $.trim($('#phone_starter').val());
                                    var password	 	 = $.trim($('#password_starter').val());
                                    //var passwordregex        = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,15}$/;
                                    //var passwordregex        = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,15}$/;
                                    var passwordregexspecial = /^[a-zA-Z0-9._]+$/;        
                                    var passwordregex      = /^(?=.*[a-zA-Z._])(?=.*[0-9]).{8,15}$/;  // new password rule as per maam requirement 
                                    var errCntr	 	 = 0;
                                    
                                    
                                    var g_recaptcha_response = $('#user_details .g-recaptcha-response').val();
                         

                                    if('' == fname){
                                            inlineMsgFornewsletter('full_name_starter','Please enter full name.',2);
                                            errCntr++;
                                            return false;		
                                    }	
                                    if(!fname.match(nameRegexOnlyName)) {
                                            inlineMsgFornewsletter('full_name_starter','Please enter valid first name.',2);
                                            errCntr++;
                                            return false;
                                    }

                                    if('' == company){
                                            inlineMsgFornewsletter('company_starter','Please enter valid company name.',2);
                                            errCntr++;
                                            return false;		
                                    }

                                    if('' == phone){
                                            inlineMsgFornewsletter('phone_starter','Please enter phone number.',2);
                                            errCntr++;
                                            return false;		
                                    }
                                    if (phone.length>21||phone.length<7) {
                                            inlineMsgFornewsletter('phone_starter','Minimum 7 and maximum 20 digits are allowed',2);
                                            errCntr++;
                                            return false;
                                    }else{
                                            if(phone.replace(/\D/g, '').length > 20)
                                            {    
                                                    inlineMsgFornewsletter('phone_starter','Minimum 7 and maximum 20 digits are allowed',2);
                                                    errCntr++;
                                                    return false;
                                            }
                                            if(!phone.match(phoneRegexSimplified)) {  
                                                    inlineMsgFornewsletter('phone_starter','Only digits, +, -, space are allowed.',2);
                                                    errCntr++;
                                                    return false;	
                                             }
                                    }

                                    if('' == password){
                                            inlineMsgFornewsletter('password_starter','Please enter password.',2);
                                            errCntr++;
                                            return false;
                                    }else{
                                                if (password.length < 8||password.length>15||!password.match(passwordregex)) {
                                                                // alert(password.match(passwordregex));
                                                                inlineMsgFornewsletter('password_starter','Password must be at least 8 characters long, not more than 15 characters, and contain at least one number and at least one letter.',2);
                                                                $('#password_starter').next('i').next('div#msg').css('margin-top','-80px');                    
                                                                errCntr++;
                                                                return false; 
                                                }
                                                else if(!password.match(passwordregex)){
                                                        inlineMsgFornewsletter('password_starter','Password must be at least 8 characters long, not more than 15 characters, and contain at least one number and at least one letter.',2);
                                                        $('#password_starter').next('i').next('div#msg').css('margin-top','-80px');                    
                                                        errCntr++;
                                                        return false;
                                                } 
						$('#password_starter').next('i').next('div#msg').css('margin-top','');   
				    
                            
                                   }
                                    
                                    if('' == g_recaptcha_response || g_recaptcha_response.length == 0){
                                            inlineMsgFornewsletter('captcha-div-starter','Please verify that you are not a robot.',2);
                                            //$('#recaptcha-accessible-status').show();
                                            errCntr++;
                                            return false;
                                    }
                                    /*if(!password.match(passwordregex)){
                                            inlineMsgFornewsletter('password','Minimum One digit, one alphabet ,one special charecter.',2);
                                            errCntr++;
                                            return false;
                                    }*/

                                    if(0 == errCntr){
                                             $('.savingdata-loader').show();
                                             $(this).addClass('inactive');
                                             $(this).attr('disabled','disabled');
                                             $("#user_details").submit(); 
                                             return true;
                                    }else{
                                            return false;
                                    }




                             //e.preventDefault();



                             /*if(chstt === true){

                                     return false;
                             var fname = $("#fname").val();
                             var lname = $("#lname").val();
                             var company = $("#company").val();
                             var phone = $("#phone").val();
                             var address = $("#address").val();
                             var country = $("#country").val();
                             var city = $("#city").val();
                             var state = $("#state_dd_field").val();
                             var state2 = $("#state_txt_field").val();
                             var pin = $("#pin").val();
                             var user_email = $('#user_email').val();
                             //alert(user_email); 


                             $.ajax({
                                    url: 'payment-gecko-free-user-details.php',
                                    type: 'post',
                                    dataType: 'html',
                                    //data: $('#user_details').serialize(),
                                    data:'email='+user_email+'&fname='+fname+'&lname='+lname+'&company='+company+'&phone='+phone+'&address='+address+'&country='+country+'&city='+city+'&state='+state+'&state2='+state2+'&pin='+pin,
                                    success: function(response) {
                                                            //var url = window.location.protocol + "//" + window.location.host + "/thankyou.php";
                                                            var url = window.location.protocol + "//" + window.location.host + "/thankyou.php";
                                                            $(location).attr('href',url);
                                    }    
                            });
                            //return false;
                            }*/
                    });
                        
                        
                        $("#box1").keyup(function(){
                            $("#box2").focus();
                        }); 
                        $("#box2").keyup(function(){
                            $("#box3").focus();
                        }); 
                        $("#box3").keyup(function(){
                            $("#box4").focus();
                        }); 
                        $("#box4").keyup(function(){
                            $("#box5").focus();
                        }); 
                        $("#box5").keyup(function(){
                            $("#box6").focus();
                        });

                        $("#box6").keyup(function(e) {
                                var code = e.keyCode || e.which;
                           if (code != '9') {
                                
                                var box1 = $("#box1").val();
                                var box2 = $("#box2").val();
                                var box3 = $("#box3").val();
                                var box4 = $("#box4").val();
                                var box5 = $("#box5").val();
                                var box6 = $("#box6").val();

                                var final_data = box1+box2+box3+box4+box5+box6;
                                   code_id = $("#hidden_code").val();
                                        if(final_data != code_id){
                                                        //alert('Incorrect Confirmation Code');
                                                        //$('.custom-alert').show();
                                                        $('.custom-alert').modal('show');

                                                        $("#box1").val('');
                                                        $("#box2").val('');
                                                        $("#box3").val('');
                                                        $("#box4").val('');
                                                        $("#box5").val('');
                                                        $("#box6").val('');
                                                        $('#box1').focus();
                                        }else{
                                                $("#code_chk").removeClass("inactive");
                                                $("#code_chk").prop('disabled', false);
                                        }
                                }
                        });
      
                        
                        
                  $('.custom-alert').on('hidden.bs.modal', function () {
                        $('#box1').focus();
                  });
		  $('#password_starter').click(function(){
			  $(this).next('i').next('#msg').fadeOut('slow');
		  });
		  $("#password_starter").keypress(function(){
			  $(this).next('i').next('#msg').fadeOut('slow');
		  });
                  
                  
                  $(".fa-eye-starter").click(function(event){
                      //event.stopPropagation();
                      if (!$(this).hasClass("displayed")) {
                          //alert("if"); 
                          $(this).addClass('displayed');
                          $('#password_starter').attr('type','text');
                      }else{
                          //alert("else");
                          $(this).removeClass('displayed');
                          $('#password_starter').attr('type','password');
                      } 
                  }); 
                  

                  
                  $(".click-custom-plan").click(function(){
                      $('#contact_form').append("<input type='hidden' id='lead_from' name='lead_from' value='Custom'>");
                  });
                  
                  
                  
                  $('.glance-sign-up').click(function(){
                      
                      flipval = 1;
                  });
                  $('.cancel').click(function(){
                      
                      flipval = 0;
                  });      
      
      
      
      
  });

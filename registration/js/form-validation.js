$ = jQuery;
var nameRegex =  /^[A-Za-z0-9 ]{1,100}$/;
var nameRegex_new =  /^[a-zA-Z\s]+$/;
var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var messageRegex = new RegExp(/<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>/gim);
var phoneRegex =  /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{1,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
var phoneRegexSimplified = /\+{0,1}([0-9]{7,20}|[0-9\ \(\)-]{7,20})$/   /* only number, space, ( or ) and + may or may not be in the begining*/
var urlRegex = /^((http|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+\.[^#?\s]+)(#[\w\-]+)?/;	
var urlRegex_new = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;	
var nameRegexOnlyName = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/;
var regex = /^([1-9]\d{0,2}(\,\d{3})*|([1-9]\d*))(\.\d{2})?$/;
var MSGTIMER = 20;
var MSGSPEED = 5;
var MSGOFFSET = 3;
var MSGHIDE = 3;

// build out the divs, set attributes and call the fade function //
function inlineMsg(target,string,autohide)
{
  var msg;
  var msgcontent;
  if(!document.getElementById('msg'))
  {
    msg = document.createElemchkValident('div');
    msg.id = 'msg';
    msgcontent = document.createElement('div');
    msgcontent.id = 'msgcontent';
    document.body.appendChild(msg);
    msg.appendChild(msgcontent);
    msg.style.filter = 'alpha(opacity=0)';
    msg.style.opacity = 0;
    msg.alpha = 0;
  }
  else
  {
    msg = document.getElementById('msg');
    msgcontent = document.getElementById('msgcontent');
  }

  msgcontent.innerHTML = string;
  msg.style.display = 'block';
  var msgheight = msg.offsetHeight;
  var targetdiv = document.getElementById(target);
  targetdiv.focus();
  var targetheight = targetdiv.offsetHeight;
  var targetwidth = targetdiv.offsetWidth;
  var topposition = $(targetdiv).offset().top-15;//topPosition(targetdiv) - ((msgheight - targetheight) / 2);
 // alert(topposition);
  
  //alert(topposition +"=="+ $(targetdiv).offset().top)
  var leftposition = leftPosition(targetdiv) + targetwidth + MSGOFFSET; 
  msg.style.top = topposition + 'px';
  msg.style.left = leftposition + 'px';
  clearInterval(msg.timer);
  msg.timer = setInterval("fadeMsg(1)", MSGTIMER);
  if(!autohide)
  {
    autohide = MSGHIDE;
  }
  window.setTimeout("hideMsg()", (autohide * 1000));
}

// hide the form alert //
function hideMsg(msg)
{
  var msg = document.getElementById('msg');
  if(!msg.timer)
  {
    msg.timer = setInterval("fadeMsg(0)", MSGTIMER);
  }
}



// build out the divs, set attributes and call the fade function //
function inlineMsgFornewsletter(target,string,autohide)
{
  var msg;
  var msgcontent;
  if(!document.getElementById('msg'))
  {
    msg = document.createElement('div');
    msg.id = 'msg';
    msgcontent = document.createElement('div');
    msgcontent.id = 'msgcontent';
    document.body.appendChild(msg);
    msg.appendChild(msgcontent);
    msg.style.filter = 'alpha(opacity=0)';
    msg.style.opacity = 0;
    msg.alpha = 0;
  }
  else
  {
    msg = document.getElementById('msg');
    msgcontent = document.getElementById('msgcontent');
  }

  msgcontent.innerHTML = string;
  msg.style.display = 'block';
  var msgheight = msg.offsetHeight;
  //alert(target);
  //if(target == 'recaptcha-anchor')
 // {
    // var targetdiv = document.getElementById(captcha-div);  
      
  //}else{
     var targetdiv = document.getElementById(target);
  //}
  
  targetdiv.focus();
  var targetheight = targetdiv.offsetHeight;
  var targetwidth = targetdiv.offsetWidth;
  
 
 
  
 /* alert($(targetdiv).position().top);
  alert($(targetdiv).position().left);*/
  
  var defaultoffset_cal = 10;
 
  /*if( (target == 'edit-title'  || target == 'edit-profile-event-manager-field-company-name-und-0-value' || target == 'edit-profile-account-manager-technical-stuff-field-first-name-und-0-value' || target == 'edit-profile-event-manager-field-em-postal-code-und-0-value' ) && $(targetdiv).offset().top < 580){
	defaultoffset_cal = 66
  }else if(target == 'edit-field-em-phone-und-0-value' && $(targetdiv).offset().top < 670){
	defaultoffset_cal = 65
	
  }else if(target == 'edit-field-event-manager-und'){
	defaultoffset_cal = 10
  }*/
  // alert($(targetdiv).offset().top);
 // alert($(targetdiv).offset().left);
  if($(targetdiv).offset().left > 700){
	var  leftposition = $(targetdiv).position().left +  1220;
  }else{
	var leftposition = $(targetdiv).offset().left + 690;
  }
  //alert(leftposition);
  
  
  var topposition = ($(targetdiv).offset().top)-defaultoffset_cal;
  //topPosition(targetdiv) - ((msgheight - targetheight) / 2);
  //alert(topposition +"=="+ $(targetdiv).offset().top)
  
  //var leftposition = leftPosition(targetdiv) +  500;
  
  
  msg.style.top = topposition + 'px';
  msg.style.left = leftposition + 'px';
  clearInterval(msg.timer);
  msg.timer = setInterval("fadeMsg(1)", MSGTIMER);
  if(!autohide)
  {
    autohide = MSGHIDE;
  }
  
  var parent = jQuery('#'+target).parent();
  jQuery('#msg').appendTo(parent);
  var top = '-55px';
  //jQuery('#msg').css({'position':'relative','top':'-44px','left':'100%','margin-bottom': '-54px','display':'inherit'});
  if(target == 'comment'){
	  top = '-140px';
  }
  
  if(target == 'company'){
	  top = '-390px';
  }
  
   if(target == 'email'){
	 // top = '-275px';
  }
  
   if(target == 'phone'){
	  top = '-340px';
  }
  if(target == 'pin'){
	  top = '-142px';
  }
   if(target == 'email_entry2'){
	  top = '-425px';
  }
  
   if(target == 'city'){
	  top = '-192px';
  }
 
  
  
    if(target == 'address'){
	  top = '-290px';
  }
  
   if(target == 'remarks'){
	  top = '-210px';
  }
  
  var left = '0%';
  if(target == 'pin'){
	  left = '60%';
  }
   if(target == 'terms-conditions'){
	  left = '8%';
  }
    if(target == 'captacha'){
	  left = '20%';
  }
  
   
  
  
  jQuery('#msg').css({'position':'relative','top':top,'left':left,'margin-bottom': '-54px','line-height': '25px','display':'inherit'});
   if(target == 'promocode'){
	   jQuery('#msg').css({'position':'absolute','top':'-10px','left':left,'margin-bottom': '-54px','line-height': '25px','display':'inherit'});
   }
    if(target == 'email_misc_agree'){
       jQuery('#email_checkbox #msgcontent').css({'max-width':'290px'});
   }
   if(target == 'phone'){
       jQuery('#msg #msgcontent').css({'max-width':'254px'});
   }
   
   if(target == 'enterprice_password' || target == 'password_starter' || target == 'password'){
      window.setTimeout("hideMsg()", (autohide * 10000));
   }else{ 
    
     window.setTimeout("hideMsg()", (autohide * 1000));
   }
}

function inline_event_discount_validation(parent_object,msg_text){
  
  var msg;
  var msgcontent;

  if(!document.getElementById('msg'))
  {
    msg = document.createElement('div');
    msg.id = 'msg';
    msgcontent = document.createElement('div');
    msgcontent.id = 'msgcontent';
    document.body.appendChild(msg);
    msg.appendChild(msgcontent);
    msg.style.filter = 'alpha(opacity=0)';
    msg.style.opacity = 0;
    msg.alpha = 0;
  }
  else
  {
    msg = document.getElementById('msg');
    msgcontent = document.getElementById('msgcontent');
  }
  

  msgcontent.innerHTML = msg_text;
  msg.style.display = 'block';
  var msgheight = msg.offsetHeight;

  autohide = MSGHIDE;
  
  
 
  
  var parent = jQuery(parent_object).find('.discount-price input').parent();
  jQuery('#msg').appendTo(parent);
  jQuery('#msg').css({'display':'block','opacity':'100','position':'relative','top':'-44px','left':'100%','margin-bottom': '-54px','display':'inherit'});
  window.setTimeout("hideMsg()", (autohide * 1000));
  

  
 
  
}

// hide the form alert //
function hideMsg(msg)
{
  var msg = document.getElementById('msg');
  if(!msg.timer)
  {
    msg.timer = setInterval("fadeMsg(0)", MSGTIMER);
  }
  
  if (msg == undefined) {
    jQuery('#msg').timer = setInterval("fadeMsg(0)", MSGTIMER);
  }
}


// face the message box //
function fadeMsg(flag)
{
  if(flag == null)
  {
    flag = 1;
  }

  var msg = document.getElementById('msg');
  var value;
  if(flag == 1)
  {
    value = msg.alpha + MSGSPEED;
  }
  else
  {
    value = msg.alpha - MSGSPEED;
  }

  msg.alpha = value;
  msg.style.opacity = (value / 100);
  msg.style.filter = 'alpha(opacity=' + value + ')';
  if(value >= 99)
  {
    clearInterval(msg.timer);
    msg.timer = null;
  }
  else if(value <= 1)
  {
    msg.style.display = "none";
    clearInterval(msg.timer);
  }
}

// calculate the position of the element in relation to the left of the browser //
function leftPosition(target)
{
  var left = 0;
  if(target.offsetParent)
  {
    while(1)
    {
      left += target.offsetLeft;
      if(!target.offsetParent)
      {
        break;
      }
      target = target.offsetParent;
    }
  }
  else if(target.x)
  {
    left += target.x;
  }
  return left;
}

// calculate the position of the element in relation to the top of the browser window //
function topPosition(target)
{
  var top = 0;
  if(target.offsetParent)
  {
    while(1)
    {
      top += target.offsetTop;
      if(!target.offsetParent)
      {
        break;
      }
      target = target.offsetParent;
    }
  }
  else if(target.y)
  {
    top += target.y;
  }
  return top;
}

function validateString(val) {
  return (val.match(/[^a-zA-Z ]/g) == null);
}


function addErrorClass(id,action){
	if(id && action =='add'){
		$('#'+id).attr('style','border:1px solid #ff0000');
	}
	if(id && action =='remove'){
		$('#'+id).removeAttr('style');		
	}
}

/* free user data validate*/
function free_gecko_user(){
	
	var fname 	 	 = $.trim($('#fname').val());
	var lname 	 	 = $.trim($('#lname').val());
	var company	 	 = $.trim($('#company').val());
	var address	 	 = $.trim($('#address').val());
	var phone	 	 = $.trim($('#phone').val());
	var country 	 = $( "#country option:selected" ).val();
	var state	 	 = $('#state_dd_field option:selected').val();
	var state_txt	 = $.trim($('#state_txt_field').val());	
	var pin	 	 	 = $.trim($('#pin').val());

	var city	 	 = $.trim($('#city').val());
	var errCntr	 	 = 0;
	
	
	
	if('' == fname){
		inlineMsgFornewsletter('fname','Please enter first name.',2);
		errCntr++;
		return false;		
	}	
	if(!fname.match(nameRegexOnlyName)) {
		inlineMsgFornewsletter('fname','Please enter valid first name.',2);
		errCntr++;
		return false;
	}
	
	if('' == lname){
		inlineMsgFornewsletter('lname','Please enter last name.',2);
		errCntr++;
		return false;		
	}	
	if(!lname.match(nameRegexOnlyName)) {
		inlineMsgFornewsletter('lname','Please enter valid last name.',2);
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
            if(!phone.match(phoneRegexSimplified)) {  
                inlineMsgFornewsletter('phone','Only digits, +, -, space are allowed.',2);
                errCntr++;
                return false;	
             }
        }
	
	
	if('' == address){
		inlineMsgFornewsletter('address','Please enter valid address.',2);
		errCntr++;
		return false;		
	}
	
	
	
	if('' == country || country.length == 0){
		inlineMsgFornewsletter('country','Please select your country.',2);
		errCntr++;
		return false;
	 } 
	 
	 if('' == city){
		inlineMsgFornewsletter('city','Please enter city.',2);
		errCntr++;
		return false;		
	}
	 
	 if(country == "United States"){   
		 
		 if('' == state){
			inlineMsgFornewsletter('state_dd_field','Please enter state.',2);
			errCntr++;
			return false;		
		}
	}else{
		
		if('' == state_txt){
			inlineMsgFornewsletter('state_txt_field','Please enter state.',2);
			errCntr++;
			return false;		
		}
	}
	
	if('' == pin){
		inlineMsgFornewsletter('pin','Please enter postal code.',2);
		errCntr++;
		return false;		
	}

  if(0 == errCntr){
		return true;
	}else{
		return false;
	}	

}


function check_form_validate_contact(){
	
	var name 		 = jQuery.trim($('footer #name').val());
	var company      = jQuery.trim($('#company_footer').val());
	var job_title 		 = jQuery.trim($('#job_title').val());
	var email 		 = jQuery.trim($('#email_contact').val()); 
	var phone 		 = jQuery.trim($('#phone_contact').val());
	var date_time 		 = jQuery.trim($('#schedule_date').val());
	var time_value 		 = jQuery.trim($('#schedule_time').val());
	var timezone 		 = jQuery.trim($('#timezone option:selected').text());
	//var country 	 	 = $( "#country option:selected" ).val();
	var message 		 = jQuery.trim($('#message').val());
	//var captacha 		 = jQuery.trim($('#captacha').val());
        var g_recaptcha_response = jQuery.trim($('footer .g-recaptcha-response').val());
        //alert(g_recaptcha_response);
	
	var errCntr	 	 = 0;
	
	var divstyle = $('.input_wrap').attr('style');
	 
	if('' == name || name.length == 0){
		inlineMsgFornewsletter('name','Please enter valid name.',2);
		errCntr++;
		return false;
	}else{
		  if(!name.match(nameRegex_new)) {
			inlineMsgFornewsletter('name','Please enter valid name.',2);
			errCntr++;
			return false;
		  }
	}
        
	if('' == email || email.length == 0){
                inlineMsgFornewsletter('email_contact','Please enter email.',2);
		errCntr++;
		return false;
	}else if (email.length>250) {
                inlineMsgFornewsletter('email_contact','Maximum 250 characters are allowed.',2);
                errCntr++;
                return false;	
        }else{
		if(!email.match(emailRegex)) {
			inlineMsgFornewsletter('email_contact','Please enter valid email.',2);
			errCntr++;
			return false;
		}
        }
       
        
      if('' == phone || phone.length == 0){
		inlineMsgFornewsletter('phone_contact','Please enter phone number.',2);
		errCntr++;
		return false;
	  }else if (phone.length>21||phone.length<7) {
                inlineMsgFornewsletter('phone_contact','Minimum 7 and maximum 20 digits are allowed',2);
                errCntr++;
                return false;
      }else{
                
                //alert(phone.replace(/\D/g, '').length); //3
                if(phone.replace(/\D/g, '').length > 20)
                {    
                        inlineMsgFornewsletter('phone_contact','Minimum 7 and maximum 20 digits are allowed',2);
                        errCntr++;
                        return false;
                }
                if(!phone.match(phoneRegexSimplified)) {  
                     inlineMsgFornewsletter('phone_contact','Only digits, +, -, space are allowed.',2);
                     errCntr++;
                     return false;	
                 }
    }
    if('' == company || company.length == 0){
		inlineMsgFornewsletter('company_footer','Please enter valid company.',2);
		errCntr++;
		return false;
	}
    if('' == message || message.length == 0){
		inlineMsgFornewsletter('message','Please mention Day/Time for call back.',2);
		errCntr++;
		return false;
	}
	if(divstyle == '' || divstyle =="display: block;")
	{
		if(date_time=='')
		{
			inlineMsgFornewsletter('schedule_date','Please Provide Meeting Date.',2);
            errCntr++;
            return false;	
		}
		if(time_value=='')
		{
			inlineMsgFornewsletter('schedule_time','Please Provide Meeting Time.',2);
            errCntr++;
            return false;	
		}
		if(timezone=='')
		{
			inlineMsgFornewsletter('timezone','Please Provide timezone.',2);
            errCntr++;
            return false;	
		}
	}	
    if('' == g_recaptcha_response || g_recaptcha_response.length == 0){
		inlineMsgFornewsletter('captcha-div','Please verify that you are not a robot.',2);
		//$('#recaptcha-accessible-status').show();
                errCntr++;
		return false;
	}
        /*else{
		  var captchanum1 = jQuery.trim(jQuery("#num1").html());
		  var captchanum2 = jQuery.trim(jQuery("#num2").html());
		  var captchasum = parseInt(captchanum1) + parseInt(captchanum2);
		  if(parseInt(captacha) != captchasum){
				inlineMsgFornewsletter('captacha','Sum does not match.',2);
				errCntr++;
				return false;
			  }
        }*/
	
	
	if(0 == errCntr){
		return true;
	}else{
		return false;
	}	
}

function check_form_validate_partners(){
	var company_name 		 = jQuery.trim($('#company_name').val());
	var job_title 		 = jQuery.trim($('#job_title').val());
	var street_address 		 = jQuery.trim($('#street_address').val());
	var address_line_2 		 = jQuery.trim($('#address_line_2').val());
	var towncity 			 = jQuery.trim($('#towncity').val());
	var state 			 	 = jQuery.trim($('#state').val());
	var zip 			 	 = jQuery.trim($('#zip').val());
	var country 	 	 	 = $( "#country option:selected" ).val();
	var company_website 	 = jQuery.trim($('#company_website').val());
	var first_name 		 	 = jQuery.trim($('#first_name').val());
	var last_name 		 	 = jQuery.trim($('#last_name').val());
	var phone 		 		 = jQuery.trim($('#phone').val());
	var email 		 		 = jQuery.trim($('#email').val());
	var captacha 		 	 = jQuery.trim($('#captacha').val());
	var terms_conditions 	 = jQuery.trim($('#terms-conditions').val());
	
	var errCntr	 	 = 0;
	
	if('' == company_name || company_name.length == 0){
		inlineMsgFornewsletter('company_name','Please enter company name.',2);
		errCntr++;
		return false;
	}else{
		  if(!company_name.match(nameRegex_new)) {
			inlineMsgFornewsletter('company_name','Please enter valid company name.',2);
			errCntr++;
			return false;
		}
	}	
	if('' == job_title || job_title.length == 0){
		inlineMsgFornewsletter('job_title','Please enter job title.',2);
		errCntr++;
		return false;
	}
	
	if('' == street_address || street_address.length == 0){
		inlineMsgFornewsletter('street_address','Please enter street address.',2);
		errCntr++;
		return false;
	}
	
	if('' == address_line_2 || address_line_2.length == 0){
		inlineMsgFornewsletter('address_line_2','Please enter address line 2.',2);
		errCntr++;
		return false;
	}
	
	if('' == towncity || towncity.length == 0){
		inlineMsgFornewsletter('towncity','Please enter city.',2);
		errCntr++;
		return false;
	}
	
	if('' == state || state.length == 0){
		inlineMsgFornewsletter('state','Please enter state.',2);
		errCntr++;
		return false;
	}
	
	if('' == zip || zip.length == 0){
		inlineMsgFornewsletter('zip','Please enter zip.',2);
		errCntr++;
		return false;
	}
	
	if('' == country || country.length == 0){
		inlineMsgFornewsletter('country','Please select your location.',2);
		errCntr++;
		return false;
	}
	
	if('' == company_website || company_website.length == 0){
		inlineMsgFornewsletter('company_website','Please enter company website.',2);
		errCntr++;
		return false;
	}else if(!company_website.match(urlRegex_new)){		
			inlineMsgFornewsletter('company_website','Please enter valid company website.',2);
			errCntr++;
			return false;
	}
	
	if('' == first_name || first_name.length == 0){
		inlineMsgFornewsletter('first_name','Please enter first name.',2);
		errCntr++;
		return false;
	}else{
		  if(!first_name.match(nameRegex_new)) {
			inlineMsgFornewsletter('first_name','Please enter valid first name.',2);
			errCntr++;
			return false;
		}
	}	
	
	if('' == last_name || last_name.length == 0){
		inlineMsgFornewsletter('last_name','Please enter last name.',2);
		errCntr++;
		return false;
	}else{
		  if(!last_name.match(nameRegex_new)) {
			inlineMsgFornewsletter('last_name','Please enter valid last name.',2);
			errCntr++;
			return false;
		}
	}	
	   
	 if('' == phone || phone.length == 0){
		inlineMsgFornewsletter('phone','Please enter phone number.',2);
		errCntr++;
		return false;
	}else if (phone.length>21||phone.length<7) {
		  inlineMsgFornewsletter('phone','Minimum 7 and maximum 20 digits are allowed',2);
		  errCntr++;
		  return false;
     }else{
      if(!phone.match(phoneRegexSimplified)) {  
           inlineMsgFornewsletter('phone','Only digits, +, -, space are allowed.',2);
           errCntr++;
           return false;	
       }
     }
        
    if('' == email || email.length == 0){
		inlineMsgFornewsletter('email','Please enter email address.',2);
		errCntr++;
		return false;
	}else if (email.length>250) {
          inlineMsgFornewsletter('email','Maximum 250 characters are allowed.',2);
          errCntr++;
          return false;	
     }else{
		  if(!email.match(emailRegex)) {
			inlineMsgFornewsletter('email','Please enter valid email address.',2);
			errCntr++;
			return false;
		}
     }     
	
	
	if('' == captacha || captacha.length == 0){
		inlineMsgFornewsletter('captacha','Please enter valid code.',2);
		errCntr++;
		return false;
	}
	
	if(terms_conditions == "756" && jQuery('#terms-conditions').attr("checked")!="checked"){
			//jQuery('label[for="terms-conditions"]').css("color","red");
			inlineMsgFornewsletter('terms-conditions','Please agree to the terms & conditions.',2);
			errCntr++;
			return false;
	}
	
	
	if(0 == errCntr){
		return true;
	}else{
		return false;
	}	
}

function check_form_validate_event_app_analytics(){
	var name 		 = jQuery.trim($('#name').val());
	var email 		 = jQuery.trim($('#email').val());	
	var company 	 = jQuery.trim($('#company').val());
	var phone 		 = jQuery.trim($('#phone').val());
	var country 	 = $( "#country option:selected" ).val();
	var captcha 	 = jQuery.trim($('#captcha').val());
	
	var errCntr	 	 = 0;
	
	if('' == name || name.length == 0){
		inlineMsgFornewsletter('name','Please enter name.',2);
		errCntr++;
		return false;
	}else{
		  if(!name.match(nameRegex_new)) {
			inlineMsgFornewsletter('name','Please enter valid name.',2);
			errCntr++;
			return false;
		}
	}
	
	 if('' == email || email.length == 0){
		inlineMsgFornewsletter('email','Please enter email address.',2);
		errCntr++;
		return false;
	}else if (email.length>250) {
          inlineMsgFornewsletter('email','Maximum 250 characters are allowed.',2);
          errCntr++;
          return false;	
     }else{
		  if(!email.match(emailRegex)) {
			inlineMsgFornewsletter('email','Please enter valid email address.',2);
			errCntr++;
			return false;
		}
     }  
     
    if('' == company || company.length == 0){
		inlineMsgFornewsletter('company','Please enter company.',2);
		errCntr++;
		return false;
	}
	
	 if('' == phone || phone.length == 0){
		inlineMsgFornewsletter('phone','Please enter phone number.',2);
		errCntr++;
		return false;
	}else if (phone.length>21||phone.length<7) {
		  inlineMsgFornewsletter('phone','Minimum 7 and maximum 20 digits are allowed',2);
		  errCntr++;
		  return false;
     }else{
      if(!phone.match(phoneRegexSimplified)) {  
           inlineMsgFornewsletter('phone','Only digits, +, -, space are allowed.',2);
           errCntr++;
           return false;	
       }
     }
     
     if('' == country || country.length == 0){
		inlineMsgFornewsletter('country','Please select your location.',2);
		errCntr++;
		return false;
	 }
     if('' == captcha || captcha.length == 0){
		inlineMsgFornewsletter('captcha','Please enter valid code.',2);
		errCntr++;
		return false;
	}
     
    
	if(0 == errCntr){
		return true;
	}else{
		return false;
	}	
}

function check_form_validate_event_technology_app(){
	var name 		 = jQuery.trim($('#name').val());
	var email 		 = jQuery.trim($('#email').val());	
	var company 	 = jQuery.trim($('#company').val());
	var phone 		 = jQuery.trim($('#phone').val());
	var country 	 = $( "#country option:selected" ).val();
	var captcha 	 = jQuery.trim($('#captcha').val());
	
	var errCntr	 	 = 0;
	
	if('' == name || name.length == 0){
		inlineMsgFornewsletter('name','Please enter name.',2);
		errCntr++;
		return false;
	}else{
		  if(!name.match(nameRegex_new)) {
			inlineMsgFornewsletter('name','Please enter valid name.',2);
			errCntr++;
			return false;
		}
	}
	
	 if('' == email || email.length == 0){
		inlineMsgFornewsletter('email','Please enter email address.',2);
		errCntr++;
		return false;
	}else if (email.length>250) {
          inlineMsgFornewsletter('email','Maximum 250 characters are allowed.',2);
          errCntr++;
          return false;	
     }else{
		  if(!email.match(emailRegex)) {
			inlineMsgFornewsletter('email','Please enter valid email address.',2);
			errCntr++;
			return false;
		}
     }  
     
    if('' == company || company.length == 0){
		inlineMsgFornewsletter('company','Please enter company.',2);
		errCntr++;
		return false;
	}
	
	 if('' == phone || phone.length == 0){
		inlineMsgFornewsletter('phone','Please enter phone number.',2);
		errCntr++;
		return false;
	}else if (phone.length>21||phone.length<7) {
		  inlineMsgFornewsletter('phone','Minimum 7 and maximum 20 digits are allowed',2);
		  errCntr++;
		  return false;
     }else{
      if(!phone.match(phoneRegexSimplified)) {  
           inlineMsgFornewsletter('phone','Only digits, +, -, space are allowed.',2);
           errCntr++;
           return false;	
       }
     }
     
     if('' == country || country.length == 0){
		inlineMsgFornewsletter('country','Please select your location.',2);
		errCntr++;
		return false;
	 }
     if('' == captcha || captcha.length == 0){
		inlineMsgFornewsletter('captcha','Please enter valid code.',2);
		errCntr++;
		return false;
	}
     
    
	if(0 == errCntr){
		return true;
	}else{
		return false;
	}	
}

function check_form_validate_event_training_app(){
	var name 		 = jQuery.trim($('#name').val());
	var email 		 = jQuery.trim($('#email').val());	
	var company 	 = jQuery.trim($('#company').val());
	var phone 		 = jQuery.trim($('#phone').val());
	var country 	 = $( "#country option:selected" ).val();
	var captcha 	 = jQuery.trim($('#captcha').val());
	
	var errCntr	 	 = 0;
	
	if('' == name || name.length == 0){
		inlineMsgFornewsletter('name','Please enter name.',2);
		errCntr++;
		return false;
	}else{
		  if(!name.match(nameRegex_new)) {
			inlineMsgFornewsletter('name','Please enter valid name.',2);
			errCntr++;
			return false;
		}
	}
	
	 if('' == email || email.length == 0){
		inlineMsgFornewsletter('email','Please enter email address.',2);
		errCntr++;
		return false;
	}else if (email.length>250) {
          inlineMsgFornewsletter('email','Maximum 250 characters are allowed.',2);
          errCntr++;
          return false;	
     }else{
		  if(!email.match(emailRegex)) {
			inlineMsgFornewsletter('email','Please enter valid email address.',2);
			errCntr++;
			return false;
		}
     }  
     
    if('' == company || company.length == 0){
		inlineMsgFornewsletter('company','Please enter company.',2);
		errCntr++;
		return false;
	}
	
	 if('' == phone || phone.length == 0){
		inlineMsgFornewsletter('phone','Please enter phone number.',2);
		errCntr++;
		return false;
	}else if (phone.length>21||phone.length<7) {
		  inlineMsgFornewsletter('phone','Minimum 7 and maximum 20 digits are allowed',2);
		  errCntr++;
		  return false;
     }else{
      if(!phone.match(phoneRegexSimplified)) {  
           inlineMsgFornewsletter('phone','Only digits, +, -, space are allowed.',2);
           errCntr++;
           return false;	
       }
     }
     
     if('' == country || country.length == 0){
		inlineMsgFornewsletter('country','Please select your location.',2);
		errCntr++;
		return false;
	 }
     if('' == captcha || captcha.length == 0){
		inlineMsgFornewsletter('captcha','Please enter valid code.',2);
		errCntr++;
		return false;
	}
     
    
	if(0 == errCntr){
		return true;
	}else{
		return false;
	}	
}

function check_form_validate_webinars_video(){
	var name 		 = jQuery.trim($('#name').val());
	var company 	 = jQuery.trim($('#company').val());
	var job_title  = jQuery.trim($('#job_title').val());
	var email 		 = jQuery.trim($('#email').val());	
	var phone 		 = jQuery.trim($('#phone').val());
	var country 	 = $( "#country option:selected" ).val();	
	var captacha 	 = jQuery.trim($('#captacha').val());
	
	var errCntr	 	 = 0;
	
	if('' == name || name.length == 0){
		inlineMsgFornewsletter('name','Please enter name.',2);
		errCntr++;
		return false;
	}else{
		  if(!name.match(nameRegex_new)) {
			inlineMsgFornewsletter('name','Please enter valid name.',2);
			errCntr++;
			return false;
		}
	}
	
	 if('' == company || company.length == 0){
		inlineMsgFornewsletter('company','Please enter company.',2);
		errCntr++;
		return false;
	}
	if('' == job_title || job_title.length == 0){
		inlineMsgFornewsletter('job_title','Please enter job title.',2);
		errCntr++;
		return false;
	}
	
	/* if('' == designation || designation.length == 0){
		inlineMsgFornewsletter('designation','Please enter designation.',2);
		errCntr++;
		return false;
	}*/
	
	 if('' == email || email.length == 0){
		inlineMsgFornewsletter('email','Please enter email address.',2);
		errCntr++;
		return false;
	}else if (email.length>250) {
          inlineMsgFornewsletter('email','Maximum 250 characters are allowed.',2);
          errCntr++;
          return false;	
     }else{
		  if(!email.match(emailRegex)) {
			inlineMsgFornewsletter('email','Please enter valid email address.',2);
			errCntr++;
			return false;
		}
     } 
	
	
	 
	  if (('' != phone || phone.length > 0) && (phone.length>21||phone.length<7)) {
		  inlineMsgFornewsletter('phone','Minimum 7 and maximum 20 digits are allowed',2);
		  errCntr++;
		  return false;
     }else{
      if(!phone.match(phoneRegexSimplified)) {  
           inlineMsgFornewsletter('phone','Only digits, +, -, space are allowed.',2);
           errCntr++;
           return false;	
       }
     }
     
      if('' == country || country.length == 0){
		inlineMsgFornewsletter('country','Please select your location.',2);
		errCntr++;
		return false;
	 }
	
	 
	    
    
     if('' == captacha || captacha.length == 0){
		inlineMsgFornewsletter('captacha','Please enter valid code.',2);
		errCntr++;
		return false;
	}
     
    
	if(0 == errCntr){
		return true;
	}else{
		return false;
	}	
}

function check_email_validation_free(email){
	
	var errCntr	 	 = 0;
	if($('#email').length>0){
		if('' == email){
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
			}else{
				return true;
				}
		 }
	}else{
		if('' == email){
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
		 }
	}
}

function check_email_validation_starter(email){
    
	var errCntr	 	 = 0;
	if($('#starter_email').length>0){
		if('' == email){
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
			} else if (isBlockedEmail(email)){
				inlineMsgFornewsletter('starter_email','Please Enter Business Email Address.',2);
				errCntr++;
				return false;
			} else{
				return true;
			}
		}
	}else{
		if('' == email){
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
	}        
}


function check_email_validation(email){
	
	var errCntr	 	 = 0;
	
	/*if($('#email_entry2').length>0){
		if('' == email){
			inlineMsgFornewsletter('email_entry2','Please enter email.',2);
			errCntr++;
			return false;		
		}else if (email.length>250) {
			  inlineMsgFornewsletter('email_entry2','Maximum 250 characters are allowed.',2);
			  errCntr++;
			  return false;	
		 }else{
			  if(!email.match(emailRegex)) {
				inlineMsgFornewsletter('email_entry2','Please enter valid email.',2);
				errCntr++;
				return false;
			}
		 }
	}else{
		if('' == email){
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
		 }
	}*/
	
     
     if(0 == errCntr){
		 
		 $.ajax({
				url:'check_email.php',
				type:'post',
				data: { email: email },
				cache:false,
				crossDomain:true,	
				async: false,		
				success:function(response){	
					//console.log(response);	
					var json_obj = $.parseJSON(response);	
					for (var i in json_obj) 
					{
						//console.log(json_obj[i].status);
						//console.log(json_obj[i].data.fname);
						if(json_obj[i].status == 1){
							$('#fname').val(json_obj[i].data.fname);
							$('#lname').val(json_obj[i].data.lname);
							$('#company').val(json_obj[i].data.company);
							$('#address').val(json_obj[i].data.address);
							$('#phone').val(json_obj[i].data.phone);
							$('#country').val(json_obj[i].data.country);
							if(json_obj[i].data.country == "United States"){
								$("#state_dd").show();
								$("#state_txt").hide();
								$('#state_dd_field').val(json_obj[i].data.state);								
							}else{
								$("#state_dd").hide();
								$("#state_txt").show();
								$('#state_txt_field').val(json_obj[i].data.state);
							}
							$('#city').val(json_obj[i].data.city);
							$('#pin').val(json_obj[i].data.pin);
						}
					}
				}		
			});
			
	 }
	
}



function check_form_validate_billing_details(){
	
	
	var fname 	 	 = $.trim($('#fname').val());
	var lname 	 	 = $.trim($('#lname').val());
	var company	 	 = $.trim($('#company').val());
	var address	 	 = $.trim($('#address').val());
	var phone	 	 = $.trim($('#phone').val());
	var country 	 = $( "#country option:selected" ).val();
	var state	 	 = $('#state_dd_field option:selected').val();
	var state_txt	 = $.trim($('#state_txt_field').val());	
	var pin	 	 	 = $.trim($('#pin').val());
	if($('#email_entry2').length>0){
		var email	 	 = $.trim($('#email_entry2').val());
	}else{
		var email	 	 = $.trim($('#email').val());
	}
	var city	 	 = $.trim($('#city').val());
	var errCntr	 	 = 0;
	
	if($('#email_entry2').length>0){
		if('' == email){
			inlineMsgFornewsletter('email_entry2','Please enter email.',2);
			errCntr++;
			return false;		
		}
		
		if (email.length>250) {
			  inlineMsgFornewsletter('email_entry2','Maximum 250 characters are allowed.',2);
			  errCntr++;
			  return false;	
		 }else{
			  if(!email.match(emailRegex)) {
				inlineMsgFornewsletter('email_entry2','Please enter valid email.',2);
				errCntr++;
				return false;
			}
		 }
	}else{
		if('' == email){
			inlineMsgFornewsletter('email','Please enter email.',2);
			errCntr++;
			return false;		
		}
		
		if (email.length>250) {
			  inlineMsgFornewsletter('email','Maximum 250 characters are allowed.',2);
			  errCntr++;
			  return false;	
		 }else{
			  if(!email.match(emailRegex)) {
				inlineMsgFornewsletter('email','Please enter valid email.',2);
				errCntr++;
				return false;
			}
		 }
	}
	
	if('' == fname){
		inlineMsgFornewsletter('fname','Please enter first name.',2);
		errCntr++;
		return false;		
	}	
	if(!fname.match(nameRegexOnlyName)) {
		inlineMsgFornewsletter('fname','Please enter valid first name.',2);
		errCntr++;
		return false;
	}
	
	if('' == lname){
		inlineMsgFornewsletter('lname','Please enter last name.',2);
		errCntr++;
		return false;		
	}	
	if(!lname.match(nameRegexOnlyName)) {
		inlineMsgFornewsletter('lname','Please enter valid last name.',2);
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
      if(!phone.match(phoneRegexSimplified)) {  
           inlineMsgFornewsletter('phone','Only digits, +, -, space are allowed.',2);
           errCntr++;
           return false;	
       }
     }
	
	
	if('' == address){
		inlineMsgFornewsletter('address','Please enter valid address.',2);
		errCntr++;
		return false;		
	}
	
	
	
	if('' == country || country.length == 0){
		inlineMsgFornewsletter('country','Please select your location.',2);
		errCntr++;
		return false;
	 } 
	 
	 if('' == city){
		inlineMsgFornewsletter('city','Please enter city.',2);
		errCntr++;
		return false;		
	}
	 
	 if(country == "United States"){   
		 
		 if('' == state){
			inlineMsgFornewsletter('state_dd_field','Please enter state.',2);
			errCntr++;
			return false;		
		}
	}else{
		
		if('' == state_txt){
			inlineMsgFornewsletter('state_txt_field','Please enter state.',2);
			errCntr++;
			return false;		
		}
	}
	
	if('' == pin){
		inlineMsgFornewsletter('pin','Please enter postal code.',2);
		errCntr++;
		return false;		
	}
	
	
	
	if(0 == errCntr){
	   $("#billing_details_fname").html(fname);		
	   $("#billing_details_lname").html(lname);		
		$("#billing_details_company").html(company);		
		$("#billing_details_address").html(address);		
		$("#billing_details_phone").html(phone);
		if(country == "United States"){   		
			$("#billing_details_state").html(state);		
		}else{
			$("#billing_details_state").html(state_txt);
		}
		$("#billing_details_country").html(country);		
		$("#billing_details_city").html(city);		
		$("#billing_details_pin").html(pin);	
		var email_field = ''+email+'';
		$("#billing_details_email").html(email_field);		
		$('.tab-pane').removeClass('active');
		$('#tab3').addClass('active');
		$( "ul.nav li" ).each(function( index ) {
		  if(!$(this).hasClass("disabled")){$(this).addClass("disabled")}
		  $(this).removeClass("active");
		  if($(this).find("a").attr("href")=="#tab3"){$(this).addClass("active");}
		});
		return true;		
	}	
	
	
}

function check_details_form_validation(){
	
	var remarks	 	 					 = $.trim($('#remarks').val());
	var miscellaneous_payment	 	 	 = $.trim($('#miscellaneous_payment').val());
	var fname 	 	 					 = $.trim($('#fname').val());
	var lname 	 						 = $.trim($('#lname').val());
	var email	 						 = $.trim($('#email').val());
	
	var errCntr	 	 = 0;
	
	if('' == remarks){
		inlineMsgFornewsletter('remarks','Please enter remarks.',2);
		errCntr++;
		return false;		
	}
	
	if('' == miscellaneous_payment){
		inlineMsgFornewsletter('miscellaneous_payment','Please enter amount.',2);
		errCntr++;
		return false;		
	}else if(miscellaneous_payment<=0 || miscellaneous_payment.length==0 || isNaN(miscellaneous_payment)){
		inlineMsgFornewsletter('miscellaneous_payment','Please enter positive amount only.',2);
		errCntr++;
		return false;
	}else if(miscellaneous_payment.length>10){
		inlineMsgFornewsletter('miscellaneous_payment','Please enter maximum 10 digit.',2);
		errCntr++;
		return false;
	}
	
	
	
	if('' == fname){
		inlineMsgFornewsletter('fname','Please enter first name.',2);
		errCntr++;
		return false;		
	}	
	if(!fname.match(nameRegexOnlyName)) {
		inlineMsgFornewsletter('fname','Please enter valid first name.',2);
		errCntr++;
		return false;
	}
	
	if('' == lname){
		inlineMsgFornewsletter('lname','Please enter last name.',2);
		errCntr++;
		return false;		
	}	
	if(!lname.match(nameRegexOnlyName)) {
		inlineMsgFornewsletter('lname','Please enter valid last name.',2);
		errCntr++;
		return false;
	}
	
	
	if('' == email){
		inlineMsgFornewsletter('email','Please enter email.',2);
		errCntr++;
		return false;		
	}
	
	if (email.length>250) {
          inlineMsgFornewsletter('email','Maximum 250 characters are allowed.',2);
          errCntr++;
          return false;	
     }else{
		  if(!email.match(emailRegex)) {
			inlineMsgFornewsletter('email','Please enter valid email.',2);
			errCntr++;
			return false;
		}
     }
     
     if(0 == errCntr){
			var amount = parseFloat(Math.round(miscellaneous_payment * 100) / 100).toFixed(2);
			$(".misc_amount").html("$"+amount);
			$("#billing_details_remarks").html(remarks);
			
			$( "ul.nav-tabs li" ).each(function( index ) {
				  $(this).removeClass('active');
				  $(this).addClass('disabled');
				  if($(this).find('a').attr('href')=='#tab2'){
					   $(this).removeClass('disabled');
					   $(this).addClass('active');
				  }
				  
				});
			$('.tab-pane').removeClass('active');
			$('#tab2').addClass('active');
	 }
     
     
}


function check_promo_code(){
	
	var promocode = $('#promocode').val();
	//var captacha = $('#captacha').val();
	var errCntr	 	 = 0;
	
		if(promocode==""){
			//refreshCaptcha();
			inlineMsgFornewsletter('promocode','Please enter discount code.',2);
			errCntr++;
			return false;
			//$(".promo-error").text("Enter promo code");
			//$( "<span style='text-align:left;color: red;'>Enter promo code</span>" ).insertAfter( "#promocode" );			
		}
		
		/* if('' == captacha || captacha.length == 0){
			 refreshCaptcha();
			inlineMsgFornewsletter('captacha','Please enter captcha.',2);
			errCntr++;
			return false;
		} else {
			$.ajax({
				url:'check_captcha.php',
				type:'post',
				data: { captacha: captacha },
				cache:false,
				crossDomain:true,	
				async: false,		
				success:function(data){	
					if(data==0){		
						refreshCaptcha();	
						$('.promo-error').html("");						
						inlineMsgFornewsletter('captacha','The validation code does not match.',2);
						errCntr++;
						return false;
					}			
				}		
			});
			
			
		}*/
		
		
		
		if(0 == errCntr){
			$.ajax({
				url:'promo_check.php',
				type:'post',
				data: { promocode: promocode },
				cache:false,
				crossDomain:true,	
				async: false,		
				success:function(response){	
					if(response=='inactive'){
						//refreshCaptcha();
						$(".promo-error").text("Discount code is incorrect.");
					}else{						
						
						var json_obj = $.parseJSON(response);//parse JSON 
						//console.log(json_obj);    
						for (var i in json_obj) 
						{
							if(json_obj[i].promo_code=='gold'){
								var gold_amount = json_obj[i].amount;
								$('.gold_plan').text(gold_amount);	
							}else if(json_obj[i].promo_code=='silver'){
								var silver_amount = json_obj[i].amount;
								$('.silver_plan').text(silver_amount);								
							}else{
								var bronze_amount = json_obj[i].amount;
								$('.bronze_plan').text(bronze_amount);
							}
							
						}
						$(".silver_data_provided").text('Any format (PDF, Word, Excel, etc.)');
						$(".bronze_et").text('9 AM ET TO 6 PM ET');
						$(".discount-code-secc").html("<p class='success_msg'>Discount code successfully applied.</p>");				
						$(".btn-apply").remove();
						$("#payment_promo").val(promocode);
						
						/*var plan_id = $('input[name=Plan]:checked').attr('id');
						var plan_rel = $('input[name=Plan]:checked').attr('rel');
						var result = plan_rel.split('-');
						var amount = result[1] ;
						var event_count = $('input[name=Plan]:checked').parent().parent().next().find('.month').val();
						var total = amount*parseInt(event_count);
					  
					   if(isNaN(total)){ total = 0; }
					    $('input[name=Plan]:checked').parent().parent().next().next().next().html('$'+total);
					    $(".order_summary_plan_amount").html("$"+amount+"/Month");
						$(".order_summary_total_amount").html("$"+total);
						*/
					}	
				}		
			});
		}
	
	
}

function isBlockedEmail(str) {
	  var blocked = ["gmail.com", "hotmail.com", "yahoo.com","yahoo.co.in","aol.com","abc.com","xyz.com","rediffmail.com","live.com","outlook.com","me.com","msn.com","ymail.com","rediff.com","yopmail.com","email.com","mail.com","mailinator.com"];
	  for(var i = 0; i< blocked.length; i++) {
		if(str.indexOf(blocked[i]) != -1) {
		   return true;
		}
	  }
	  return false;
	} 
	
$(document).ready(function(){
      $('#mail_snd_home').click(function(e){
		    //e.preventDefault();
            //$('#mail_form_home .frmloader').show();       
            $('.existingemail').fadeOut('slow');        
            var errCntr=0;
            var email = $('#email_home').val();
            if($('#email_home').length>0){
                  if('' == email){
                          inlineMsgFornewsletter('email_home','Please enter email.',2);
                          errCntr++;
                          return false;		
                  }else if (email.length>250) {
                            inlineMsgFornewsletter('email_home','Maximum 250 characters are allowed.',2);
                            errCntr++;
                            return false;	
                   }else{
                        
                            if(!email.match(emailRegex)) {
                                inlineMsgFornewsletter('email_home','Please enter valid email.',2);
                                errCntr++;
                                return false;
                            }
                            else if (isBlockedEmail(email)){
								inlineMsgFornewsletter('email_home','Please Enter Business Email Address.',2);
								errCntr++;
								return false;
						    }
                            else{
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
                                             //inlineMsgFornewsletter('email_home','You are already registered with us.',2);
                                              $('.existingemail').fadeIn('slow');
                                             errCntr++;
                                             return false;
                                        }  
                                        if(data.status == true)
                                        {
                                             
											$('#mail_form_home .frmloader').show(); 	
                                            $('#mail_form_home .frmloader').css('display','block'); 
											$('#mail_snd_home').addClass('inactive');
                                             $('#mail_snd_home').attr('disabled','disabled');
                                             $('#mail_form_home').submit();
                                             return true;
                                        }
                                    })
                                    .fail(function() {
                                        alert("error");
                                    });
                              
                                    //alert("sdfsdfsdfsdf");
                                    
                                    return false;
                                    
                           }
                   }
          }else{
                  if('' == email){
                          inlineMsgFornewsletter('email_home','Please enter email.',2);
                          errCntr++;
                          return false;		
                  } 
          }
          return false;
           
      });
  });
$(document).ready(function(){
	$("#mail_form").submit(function(e) {
		e.preventDefault();
		var mail = $('#email').val();
		var emailerror  = check_email_validation_free(mail);
		if(emailerror === true){
			$("#mail_form #edit-submit").hide();	 
			$("#spinner").show();	 
			$.ajax({
				url: 'payment-gecko-free-mail.php',
				type: 'post',
				dataType: 'json',
				data: $('#mail_form').serialize(),
				//data: 'email='+mail,
				success: function(response) {
					window.location = 'signup.php';
					return;
					/*code_id = response.code;
					$("#hidden_code").val(code_id);
					user_email = response.email;
					//alert(response.message);
					if(response.message == "success"){
						$("#mail_chk").removeClass("show");
						$("#mail_chk").addClass("hide");
						$("#code_check").removeClass("hide");
						$("#code_check").addClass("show");
					}*/
				}    
			});
		}
	});
        
	$("#name,#email_contact,#phone_contact, #company_footer, #message").bind('keyup click',function(){             
		$('div#msg').hide();
	});
	
	$("#contact_form").submit(function(e){
		e.preventDefault();
		var name = $("#name").val();
		var email = $("#email_contact").val();
		var phone = $("#phone_contact").val();
		var company = $("#company_footer").val();
		var country = $("#footer_country").val();
		var date_time 		 = jQuery.trim($('#schedule_date').val());
	    var time_value 		 = jQuery.trim($('#schedule_time').val());
	    var timezone 		 = jQuery.trim($('#timezone option:selected').text());
		var message = $("#message").val();
		var g_recaptcha_response = $('#g-recaptcha-response-new').val();
		 
		if($('#lead_from').length) {
		  var lead_from = $("#lead_from").val();
		}else{
		  var lead_from = '';  
		}
		 
		var chkerror = check_form_validate_contact();
        //alert(chkerror);
		 
		if(chkerror == true){
                        
			//$('#contact_form .frmloader').show();
			$('#frmloader').show();
			//$('#contact_form .frmloader').hide();
			$("#contact_form #edit-submit").hide();	 
			//$("#spinner").show();	 

			/* jQuery(".nw-sty.form-outr .row").html('<div class="col-12 px-3" id="mesg_div"> <h2 class="text-center text-white" style="display:block;width:100%">Thanks!</h2> <p class="thankyoutext">We appreciate that you’ve taken the time to write us. We’ll get back to you very soon. Please come back and see us often. - Gecko Team. </p> </div>');
			jQuery('html, body').animate({
				scrollTop: jQuery(".footer .main-text-cnt").offset().top
			}, 2000); */
			//window.location.href = 'thank_you.php';
			$.ajax({
				url:'./contact.php',
				type:'post',
				dataType : 'json',
				data: { 
					email: email,
					name:name,
					phone:phone,
					company:company,
					date_time:date_time,
					time_value:time_value,
					timezone:timezone,
					country:country,
					message:message,
					lead_from:lead_from,
					g_recaptcha_response: g_recaptcha_response
				},	
				//data: {'email'+=email+'&name='+name+'&phone='+phone+'&company='+company+'&country='+country+'&message='+message},	
				success:function(response){	
					//alert(response.error);					
					if(response.error){ // it means there is an error..
						$(".pre-instructions").text(response.error);
					}else{ // means no error so redirect to thank you page ....
						$("#frmloader").hide();	
						window.location.href = 'thank_you.php';
					}                                                                                
					console.log(response);
					//$("#contact_form #edit-submit").show();	 					
				}		
			});			
		}
	});
});

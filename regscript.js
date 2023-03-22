function requiredFields() {
    var erroravailable = 'yes';  
 //get references to from element
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var mobile = document.getElementById('mobile');
    var homeaddress = document.getElementById('homeaddress');
    var password1 = document.getElementById('password1');
    var password2 = document.getElementById('password2');
    //validate the 
    if (name == "") {
 document.getElementById("name").className = "error incorrect";
 document.getElementById("errorname").className = "error";
 document.getElementById("errorname").innerHTML = 'Please type your  Name';
     erroravailable = yes;	// if error found return false
     return false;	
 } else if (!!name) {
 document.getElementById("name").className = "success incorrect";
 document.getElementById("errorfname").className = "success";
 document.getElementById("errorfname").innerHTML = 'Success';
             erroravailable = 'no';		

 } 
 
 var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
 if(email.match(mailformat)) { 
 document.getElementById("email").className = "success incorrect";
 document.getElementById("erroremail").className = "success";
 document.getElementById("erroremail").innerHTML = 'Success';
             erroravailable = 'no';		

 }else{
 document.getElementById("email").className = "error incorrect";
 document.getElementById("erroremail").className = "error";
 document.getElementById("erroremail").innerHTML = 'Please type your valid email address';
             erroravailable = 'yes';	
                         return false;	
 }

 if (isNaN(mobile) == true || mobile.length != 10) {
 document.getElementById("mobile").className = "error incorrect";
 document.getElementById("errormobile").className = "error";
 document.getElementById("errormobile").innerHTML = 'Please type your 10 digit mobile no.';
             erroravailable = 'yes';		
             return false;	

 } else if (!!mobile) {
 document.getElementById("mobile").className = "success incorrect";
 document.getElementById("errormobile").className = "success";
 document.getElementById("errormobile").innerHTML = 'Success';
             erroravailable = 'no';		
 } 
 
 
 if (homeaddress == "") {
 document.getElementById("homeaddresse").className = "error incorrect";
 document.getElementById("homeaddress").className = "error";
 document.getElementById("homeaddress").innerHTML = 'Please type your Home Address';
             erroravailable = 'yes';		
     return false;	

 
 } else if (!!homeaddress) {
 document.getElementById("homeaddress").className = "success incorrect";
 document.getElementById("errorhomeaddress").className = "success";
 document.getElementById("errorhomeaddress").innerHTML = 'Success';
             erroravailable = 'no';		
 } 

  if(password1.length > 5 && password1.length <13) {
 document.getElementById("password1").className = "success incorrect";
 document.getElementById("errorpass1").className = "success";
 document.getElementById("errorpass1").innerHTML = 'Success';
             erroravailable = 'no';	
 } else {
 document.getElementById("password1").className = "error incorrect";
 document.getElementById("errorpass1").className = "error";
 document.getElementById("errorpass1").innerHTML = 'Please type your 6 to 12 Characters Password';
          erroravailable = 'yes';		
     return false;	
 }

 if(password2 == password1) {
 document.getElementById("password2").className = "success incorrect";
 document.getElementById("errorpass2").className = "success";
 document.getElementById("errorpass2").innerHTML = 'Success';
             erroravailable = 'no';	
 } else{
        document.getElementById("password2").className = "error incorrect";
 document.getElementById("errorpass2").className = "error";
 document.getElementById("errorpass2").innerHTML = 'Password Mismatch!';
          erroravailable = 'yes';	
                     return false;	

 }
 $("#register").click(function() {
 if(erroravailable == "no") // if no error found and submit form
//			  document.registerform.submit(); 
       document.getElementById("registerform").submit();
         return true;
 });
 
 // alert("status"+erroravailable+""); 
/*           if(document.getElementById("errorfname", "errorlname", "errormobile", "erroremail", "errorpass1", "errorpass2").innerHTML == "Success")
         alert("successful");
         oneTimeMsgClikced = true;
   
function submitform()
{
document.registerform.submit(); 
}*/
}
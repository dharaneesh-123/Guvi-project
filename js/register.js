
// function validate(){
//     var name=document.reg_form.name.value;
//     var email=document.reg_form.email.value;
//     var username=document.reg_form.username.value;
//     var password=document.reg_form.password.value;
//     var conpassword=document.reg_form.conpassword.value;
//     var gender=document.reg_form.gender.value;
//     var phone=document.reg_form.phone.value;
//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
//     var passw=  /^[A-Za-z]\w{7,14}$/;
//     var phoneno = /^\d{10}$/;
//     //window.alert(conpassword);
//     if(name.length<=2){
//         window.alert("Name should have more than 2 characters");
//         return false;
//     }
//     if (!filter.test(email)) {
//         window.alert('Please provide a valid email address');
//         //email.focus;
//         return false;
//     }
//     if(username.length<=2){
//         window.alert("Username should have more than 2 characters");
//         return false;
//     }
//     if(!passw.test(password)){
//         window.alert("password between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter");
//         return false;
//     }
//     if(password!=conpassword){
//         window.alert("Password and Confirm Password Did'nt Match");
//         return false;
//     }
//     if(!phoneno.test(phone)){
//         window.alert("Phone number should have 10 digits and no alphabets or symbols");
//         return false;
//     }
// }


$("#register").on('click',function(){
    var name = $("#name").val();
    var email = $("#email").val();
    var dob = $("#dob").val();
    var phone = $("#phoneno").val();
     var male = $("#male").val();
     var female = $("#female").val();
     var pass = $("#password").val();
     var repass = $("#repassword").val();

     if(name =='' || email == '' || dob == '' || phone == '' || (male ==''  && female =="") || pass == "" || repass == ""){
        alert("fill all the details");
        return;
     }
     else{
        if(name.length < 3 ) {alert("Name should contains minimum length of 3");return;}
        if(!email.endsWith("@gmail.com") || !email.endsWith(".com") || !email.includes("@") ) {alert("Give proper email address");return;}
        var d = new Date(dob);
        if(d.getFullYear() < 1900 || d.getFullYear() > 2024){ alert("Year is invalid");return;}
        if(phone.length != 10) {alert("Phone number must be length 10"); return;}
        var regExp = /[a-zA-Z]/g;
        if(regExp.test(phone)) {alert("phone number should only contains numbers");return;}

        if(!(pass === repass)) {alert("Password is not matching.");return;}
        if(pass.length <= 8) {alert("Password length should be greater than 8.");return;}
     }

    $.ajax({
        url: 'php/register.php',
        type: 'POST',
        data: $("#form").serialize(),
        success:function(response){
            alert(response);
            window.location.href="guvi-project/login.html";
        }
    })
});

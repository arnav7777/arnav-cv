$(document).ready(function validate(){
    console.log("5");
    let f = false;
    var check_fname = false;
    var check_email = false;
    var check_add = false;
    var check_age = false;
    var check_desig = false;
    var check_gen = false;
    var check_file = false;
    var check_box = false;
    //validate fname
    let fname = $("#name").val();
    if (fname == '' || fname == undefined) {
    $("#fname_error_message").html(' Name is required.');
    check_fname = false;
    }
    else {
    $("#fname_error_message").hide();
    check_fname = true;
    }
    
    //validate address
    let add= $("#address").val();
    if (add == '' || add == undefined) {
    $("#add_error_message").html(' address is required.');
    check_add = false;
    }
    else {
    $("#add_error_message").hide();
    check_add = true;
    }
   
    //validate email
    let email = $("#email").val();
    let exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == '' || email == undefined) {
    $("#email_error_message").html('Email is required.');
    check_email = false;
    }
    else if (exp.test(email) == false) {
    $("#email_error_message").html('Invalid email.');
    check_email = false;
    }
    else {
    $("#email_error_message").hide();
    check_email = true;
    }
    //validate designation
    let desig = $("#designation").val();
    if(desig == '' || desig == undefined){
    $("#desig_error_message").html("designation is required.");
    check_desig = false;
    }
    else{
    $("#desig_error_message").hide();
    check_desig = true;
    }

    //validate gender
    if (!($("#male").checked) && !($("#female").checked) && !($("#others").checked)) {
    $("#gen_error_message").html("Please select your gender.");
    }
    else{
    $("#gen_error_message").hide();
    check_gen = true;
    }
   
    //validate age
    let age = $("#age").val();
    if (age =='' || age == undefined){
    $("#age_error_message").html("Please enter your Age.");
    }
    else{
    $("#age_error_message").hide();
    check_dob = true;
    }
    console.log(age);

    //validate file
    let file = $("#file").val();
    if (file == '' || file == undefined) {
    $("#file_error_message").html('photo is required.');
    check_file = false;
    }
    else {
        
        $("#file_error_message").hide();
        check_file = true;
        }
        console.log(file);
    
    
    //validate checkbox
    if (!($("#mycheck").checked) ) {
        $("#box_error_message").html("Please select our privacy policy");
        }
        else{
        $("#box_error_message").hide();
        check_box = true;
        }
    


    if (check_fname === true &&  check_box=== true && check_email === true && check_add === true && check_age === true && check_desig === true && check_gen
    === true && check_file=== true) {
    f = true;
    }
    else {
    f = false;
    }
    return f;
    })
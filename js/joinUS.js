  function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
  }

  function validateForm() {
  var fname = document.getElementById("name").value;
  var fage = document.getElementById("age").value;
  var femail = document.getElementById("email").value;
  var fdesig = document.getElementById("designation").value;
  var fadd = document.getElementById("address").value;
  var ffile = document.getElementById("file").value;
  // var fcheck = document.getElementById("mycheck").value;
  console.log("5");
  if (fname == "") {
    alert("Please enter Name ");
  } 
  
  else if (fage == "") {
    alert("Please enter your Age");
  } 
  
  else if (
    !document.getElementById("male").checked &&
    !document.getElementById("female").checked &&
    !document.getElementById("other").checked
  ) {
    alert("Please select your gender");
  } 

  else if (fdesig == "") {
    alert("Please enter designation");
  }

    else if (fadd == "") {
      alert("Please enter Address");
    } 
   
  
  else if (femail == "") {
    alert("Please enter email");
  } 

  else if (ffile == "") {
    alert("Please upload your photo");
  }
  
  else if (!document.getElementById("myCheck").checked) {
    alert("Please accept our terms and conditions");
  } 
  }

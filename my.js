function myFunction() {
    let age = document.getElementById("myage").value;
    if (18 > age) {
      document.getElementById('yes').innerHTML = '<div class="alert alert-warning m-4" role="alert"><b>You are not allowed to drink.</b></div>';
    } else {
      document.getElementById('yes').innerHTML = '<div class="alert alert-primary m-4" role="alert"><b>You are allowed to drink.</b></div>';
    }
  }
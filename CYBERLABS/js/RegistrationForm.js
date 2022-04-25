var input = document.querySelector(".pswrd");
var eye = document.getElementById("eye");
eye.addEventListener("click", active);

function active() {
  if (input.type === "password") {
    input.type = "text";
    eye.classList.add("fa-eye-slash");
    eye.classList.remove("fa-eye");
  } else {
    input.type = "password";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  }
}

$(document).ready(function () {
  $("#signupBtn").click(function () {
    $('#myModal').modal({ backdrop: 'static', keyboard: false });
    $("#myModal").modal('show');
  });
});

const email = document.getElementById("email");
const emailLabel = document.getElementById("emailLabel");
const password = document.getElementById("password");
const passwordLabel = document.getElementById("passwordLabel");
const username = document.getElementById("username");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const modal = document.getElementById("myModal1");
const file = document.getElementById("file");
let validEmail = false;
let validPassword = false;
let validUsername = false;

email.addEventListener("blur", () => {
  // Validate email here
  let regex =/^[^@]+@\w+(\.\w+)+\w$/;
  let str = email.value;
  if (regex.test(str)) {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
    emailLabel.style.color = "green";
    validEmail = true;
  } else {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    emailLabel.style.color = "red";
    email.focus();
    validEmail = false;
  }
});
password.addEventListener("blur", () => {
  if (password.value.length >= 6) {
    password.classList.remove("is-invalid");
    password.classList.add("is-valid");
    passwordLabel.style.color = "green";
    validPassword = true;
  } else {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
    passwordLabel.style.color = "red";
    password.focus();
    validPassword = false;
  }
});
username.addEventListener("blur", () => {
  let regex = /^([0-9a-zA-Z]){1,}$/;
  let str = username.value;
  if (regex.test(str)) {
    username.classList.remove("is-invalid");
    username.classList.add("is-valid");
    validUsername = true;
  } else {
    username.classList.add("is-invalid");
    username.classList.remove("is-valid");
    username.focus();
    validUsername = false;
  }
});

signupBtn.addEventListener("click", () => {
  if (password.value.length === 0 || email.value.length === 0 || validEmail === false || validPassword === false) {
    modal.removeAttribute('id');
  } else {
    modal.setAttribute('id', 'myModal');
  }
});


const auth = firebase.auth();
const database = firebase.database();


function login() {
  const emailVal = document.getElementById("email").value
  const passwordVal = document.getElementById("password").value
  auth.signInWithEmailAndPassword(emailVal, passwordVal)
    .catch((error) => {
      document.querySelector(".error").innerHTML = error.message;
      document.querySelector(".error2").innerHTML = error.message;

    })
}

function signUp() {
  const emailVal = document.getElementById("email").value;
  const passwordVal = document.getElementById("password").value;
  const confirmbox = document.querySelector(".confirmBox:checked");
  if(validUsername === false || confirmbox === null){
    document.getElementById("username").focus();
    return
  }
  auth.createUserWithEmailAndPassword(emailVal, passwordVal)
  .then(function() {
    let Id = firebase.auth().currentUser.uid;
    database.ref('users/'+Id).set({
      EmailId : email,
      Name : username,
      last_login : Date.now()
    });
    alert('User Created!!');
  })
    .catch((error) => {
      document.querySelector(".error").innerHTML = error.message;
      document.querySelector(".error2").innerHTML = error.message;
    });
    // writeData();
}

// function writeData() {
//   let user = auth.currentUser;
//   firebase.database().child('users/' + user.uid).set({
//          UserName: username.value,
//          EmailId: email.value,
//          last_login : Date.now()
//   });
// }


function forgotPass() {
  const emailVal = document.getElementById("email").value
  auth.sendPasswordResetEmail(emailVal)
    .then(() => {
      alert("Reset link sent to your email id")
    })
    .catch((error) => {
      document.querySelector(".error").innerHTML = error.message;
      document.querySelector(".error2").innerHTML = error.message;
    });
}

auth.onAuthStateChanged((user) => {
  if (user) {
    location.replace("HomePage.html")
  }
})




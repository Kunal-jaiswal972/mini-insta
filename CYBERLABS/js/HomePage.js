firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.replace("RegistrationForm.html")
    } else{
        showAlert();
    }
})

// logging out on clicking log out button 

const logoutlink = document.getElementById("logOutLink");
logoutlink.onclick = () => {
    logout();
}
function logout() {
    firebase.auth().signOut()
}

function settingsToggle() {
    let settingsmenu = document.querySelector(".settings-menu");
    settingsmenu.classList.toggle("settings-menu-height")
}

// closing alert in 7sec 
function showAlert() {
    let alertmsg = document.querySelector(".alert");
    let newAlert = `<p>Hi there <b id="name">user</b>! Welcome to MINI INSTA. If you need any assistance, I'm always here.</p>
    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>`
    alertmsg.insertAdjacentHTML("afterbegin", newAlert);

    setTimeout(() => {
        alertmsg.remove();
    }, 7000);
}


// oppening modal by clicking photos button 

let modal = document.getElementById("myModal");
let btn = document.getElementById("fileLink");
let cbtn = document.getElementById("cancelBtn");
let span = document.getElementsByClassName("close")[0]; 
btn.onclick = function() {
  modal.style.display = "block";
  document.getElementById("body").style.overflow = "hidden";
}
span.onclick = function() {
  modal.style.display = "none";
  document.getElementById("body").style.overflow = "scroll";
  
}
cbtn.onclick = function() {
 span.click();
}

// opening file dialog by clicking on camera icon 

let camera = document.querySelector(".fa-circle-plus");
let filebox = document.getElementById("fileInput");
camera.onclick = function() {
    filebox.click();
}













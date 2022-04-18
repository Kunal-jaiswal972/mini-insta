firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("RegistrationForm.html")
    }
})

const logoutlink = document.getElementById("logOutLink");
logoutlink.onclick = ()=>{
    logout();
}
function logout(){
    firebase.auth().signOut()
}

function settingsToggle(){
    let settingsmenu = document.querySelector(".settings-menu");
    settingsmenu.classList.toggle("settings-menu-height")
}

const filelink = document.getElementById("fileLink");
const fileinput = document.getElementById("file");
filelink.onclick = ()=>{
    fileinput.click();
}







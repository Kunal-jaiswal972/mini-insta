// Opening the modal

var modal = document.getElementById("myModal");
var btn = document.getElementById("modalBtn");
var cbtn = document.getElementById("cancelBtn");
var span = document.getElementsByClassName("close")[0]; 
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


function settingsToggle() {
  let settingsmenu = document.querySelector(".settings-menu");
  settingsmenu.classList.toggle("settings-menu-height")
}

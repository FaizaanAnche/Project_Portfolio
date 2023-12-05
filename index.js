const checkbox = document.getElementById("check");
const navLinks = document.getElementsByClassName("nav-link");
const icon = document.getElementById("icon");

//navbar menu icon change
checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    icon.className = "fa-regular fa-circle-xmark";
  } else {
    icon.className = "fas fa-bars";
  }
});

// navbar menu collapse
for( let i = 0; i<navLinks.length ; i++){
    navLinks[i].addEventListener("click", function(){
        checkbox.checked = false;
        icon.className = "fas fa-bars";
    });
}
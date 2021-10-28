// load navbar on all pages
document.getElementById("placeNavbar").innerHTML = '<div class="navbar" id="navbar"> <a class="navbarText" href=""> EN </a> <span id="span"> - </span> <a class="navbarText" href=""> NO </a> <hr> <div> <a class="logo" href="homepage.html"> <img style="width:35px; float: left" src="images/foodtruck.png" alt="foodtruck logo"> <p class="logoName"> UKA </p> <p class="logoName" style="font-weight: bold"> FOODTRUCK </p> </a> </div> <ul class="navbarList"> <li class="navbarItem"><a class="navbarText" href="menu.html" id="menu.html"> MENU </a></li> <li class="navbarItem"><a class="navbarText" href="about_us.html" id="about_us.html"> ABOUT US  </a></li> <li class="navbarItem"><a class="navbarText" href="contact_us.html" id="contact_us.html"> CONTACT US </a></li> </ul> </div>';

// set color to current page in the navbar
let currentUrl = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
let navbarLinks = document.getElementsByClassName("navbarText");
for(let i = 0; i < navbarLinks.length; i++){
    if(navbarLinks[i].id == currentUrl){
        document.getElementById(currentUrl).style.color = '#C91532';
    }
}

// check if the food truck open
function isOpen() {
    let hour = new Date().getHours();
    let openSign = document.getElementById("open");
    let closedSign = document.getElementById("closed");
    if((hour < 02 && hour >= 0) || (hour >= 19)){
        closedSign.style.display = "none";
        openSign.style.display = "block";
    }
    else {
        openSign.style.display = "none";
        closedSign.style.display = "block";
    }
}
// load navbar on all pages
let navbar = '' +
    '<div class="navbar" id="navbar">' +
        '<a class="navbarText" onclick={changeLanguage("en")} id="en"> EN </a>' +
        '<span id="span"> - </span>' +
        '<a class="navbarText" onclick={changeLanguage("no")} id="no"> NO </a>' +
        '<hr>' +
        '<div>' +
            '<a class="logo" href="homepage.html">' +
                '<img style="width:35px; float: left" src="images/foodtruck.png" alt="foodtruck logo">' +
                '<p class="logoName"> UKA </p>' +
                '<p class="logoName" style="font-weight: bold"> FOODTRUCK </p>' +
            '</a>' +
        '</div>' +
        '<ul class="navbarList">' +
            '<li class="navbarItem">' +
                '<a class="navbarText" href="menu.html" id="menu.html"> MENU </a>' +
            '</li>' +
            '<li class="navbarItem">' +
                '<a class="navbarText" href="about_us.html" id="about_us.html"> ABOUT US  </a>' +
            '</li>' +
            '<li class="navbarItem">' +
                '<a class="navbarText" href="contact_us.html" id="contact_us.html"> CONTACT US </a>' +
            '</li>' +
        '</ul>' +
    '</div>';
document.getElementById("placeNavbar").innerHTML = navbar;


// set color to current page in the navbar
let currentUrl = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
let navbarLinks = document.getElementsByClassName("navbarText");
for (let i = 0; i < navbarLinks.length; i++) {
    if (navbarLinks[i].id == currentUrl) {
        document.getElementById(currentUrl).style.color = '#C91532';
    }
}

// homepage in different languages
//english
const homepage_en = {
    title: "Hungry?",
    welcomeText: "Hello, welcome to UKA's foodtruck! Get our delicious, hot food, either if you're going to or from the festival, or if you're just looking for a midnight snack.",
    location: "We're located just behind the Studentersamfundet.",
    open: "Open: mon-sun | 19 - 02",
    suggestion: "On the fly? Grab one of these",
    foodText: "Some text describing the food",
    other: "Or try one of many other tasty alternatives >>>",
}

//norwegian
const homepage_no = {
    title: "Sulten?",
    welcomeText: "Hei, velkommen til UKAs foodtruck! Kom og prøv vår smaksfulle og varme retter enten du er på vei til eller fra festivalen, eller om du bare er ute etter nattmat.",
    location: "Du finner oss like bak Studentersamfundet.",
    open: "Åpen: man-søn | 19 - 02",
    suggestion: "På farten? Prøv en av disse",
    foodText: "Tekst som beskriver maten ",
    other: "Eller prøv en av mange andre smakfulle retter >>>",
}

function changeHomePageLanguage(id) {
    if (id == "en") {
        document.getElementById("homePageTitle").innerHTML = homepage_en.title;
        document.getElementById("welcomeText").innerHTML = homepage_en.welcomeText;
        document.getElementById("homepageLocation").innerHTML = homepage_en.location;
        document.getElementById("homePageOpen").innerHTML = homepage_en.open;
        document.getElementById("suggestion").innerHTML = homepage_en.suggestion;
        document.getElementById("foodDescription").innerHTML = homepage_en.foodText;
        document.getElementById("homePageOther").innerHTML = homepage_en.other;
    }
    if (id == "no") {
        document.getElementById("homePageTitle").innerHTML = homepage_no.title;
        document.getElementById("welcomeText").innerHTML = homepage_no.welcomeText;
        document.getElementById("homepageLocation").innerHTML = homepage_no.location;
        document.getElementById("homePageOpen").innerHTML = homepage_no.open;
        document.getElementById("suggestion").innerHTML = homepage_no.suggestion;
        document.getElementById("foodDescription").innerHTML = homepage_no.foodText;
        document.getElementById("homePageOther").innerHTML = homepage_no.other;
    }
}

// menu in different languages
//english
const menu_en = {
    addButton: "Add to order",
    addedButton: "Added to order",
}

//norwegian
const menu_no = {
    addButton: "Legg til",
    addedButton: "Lagt til",
}

function changeMenuLanguage(id) {
    if (id == "en") {

    }
    if (id == "no") {

    }
}

// set language and color it in the navbar
if (localStorage.getItem("language") == "no") {
    changeLanguage("no");
} else {
    changeLanguage("en");
}

function changeLanguage(id) {
    if (id == "en") {
        document.getElementById("en").style.color = '#C91532';
        document.getElementById("no").style.color = '';
        localStorage.setItem("language", "en");
        document.getElementById("menu.html").innerHTML = "MENU";
        document.getElementById("about_us.html").innerHTML = "ABOUT US";
        document.getElementById("contact_us.html").innerHTML = "CONTACT US";
    } else {
        document.getElementById("no").style.color = '#C91532';
        document.getElementById("en").style.color = '';
        localStorage.setItem("language", "no");
        // change text in navbar
        document.getElementById("menu.html").innerHTML = "MENY";
        document.getElementById("about_us.html").innerHTML = "OM OSS";
        document.getElementById("contact_us.html").innerHTML = "KONTAKT OSS";
    }
    if (currentUrl == "homepage.html") {
        changeHomePageLanguage(id);
    }
    if (currentUrl == "menu.html") {
        changeMenuLanguage(id);
    }
}

// check if the food truck open
function isOpen() {
    let hour = new Date().getHours();
    let openSign = document.getElementById("open");
    let closedSign = document.getElementById("closed");
    if ((hour < 02 && hour >= 0) || (hour >= 19)) {
        closedSign.style.display = "none";
        openSign.style.display = "block";
    } else {
        openSign.style.display = "none";
        closedSign.style.display = "block";
    }
}
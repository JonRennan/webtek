// load navbar on all pages
let no = "no";
let en = "en";

let navbar = '' +
    '<div class="navbar" id="navbar">' +
    '<a class="navbarText" onclick="changeLanguage(en)" id="en"> EN </a>' +
    '<span id="span"> - </span>' +
    '<a class="navbarText" onclick="changeLanguage(no)" id="no"> NO </a>' +
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


// remove "UKA foodtruck" to save space in navbar on small devices
if (window.innerWidth <= 400) {
    let logoName = document.getElementsByClassName("logoName");
    [].slice.call(logoName).forEach(function (name) {
        name.innerHTML = "";
    });
}

// set color to current page in the navbar
let currentUrl = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
let navbarLinks = document.getElementsByClassName("navbarText");
for (let i = 0; i < navbarLinks.length; i++) {
    if (navbarLinks[i].id === currentUrl || (navbarLinks[i].id === "menu.html" && currentUrl === "order.html")) {
        document.getElementById(navbarLinks[i].id).style.color = '#C91532';
    }
    console.log(currentUrl + " " + navbarLinks[i].id);
}
// set language and color it in the navbar
const navbar_en = {
    menu: "MENU",
    about_us: "ABOUT US",
    contact_us: "CONTACT US",
}

const navbar_no = {
    menu: "MENY",
    about_us: "OM OSS",
    contact_us: "KONTAKT OSS",
}

// Homepage

// check if the food truck open
function isOpen() {
    let hour = new Date().getHours();
    let openSign = document.getElementById("open");
    let closedSign = document.getElementById("closed");
    if ((hour < 2 && hour >= 0) || (hour >= 19)) {
        closedSign.style.display = "none";
        openSign.style.display = "block";
    } else {
        openSign.style.display = "none";
        closedSign.style.display = "block";
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
    other: "Or try one of many other tasty alternatives >>>",
}

//norwegian
const homepage_no = {
    title: "Sulten?",
    welcomeText: "Hei, velkommen til UKAs foodtruck! Kom og prøv vår smaksfulle og varme retter enten du er på vei til eller fra festivalen, eller om du bare er ute etter nattmat.",
    location: "Du finner oss like bak Studentersamfundet.",
    open: "Åpen: man-søn | 19 - 02",
    suggestion: "På farten? Prøv en av disse",
    other: "Eller prøv en av mange andre smakfulle retter >>>",
}

function foodSuggestionLanguage(){
    let index = localStorage.getItem("index");
    let description = getDescription(index).innerHTML;
    document.getElementById("foodDescription").innerHTML = description;
}

function changeHomePageLanguage(lang) {
    let homepage = {};
    if (lang === en) {
        homepage = homepage_en;
    } else if (lang === no) {
        homepage = homepage_no;
    } else {
        return;
    }
    document.getElementById("homePageTitle").innerHTML = homepage.title;
    document.getElementById("welcomeText").innerHTML = homepage.welcomeText;
    document.getElementById("homepageLocation").innerHTML = homepage.location;
    document.getElementById("homePageOpen").innerHTML = homepage.open;
    document.getElementById("suggestion").innerHTML = homepage.suggestion;
    document.getElementById("homePageOther").innerHTML = homepage.other;
    foodSuggestionLanguage();
}


//menu-page

// menu in different languages
//english
const menu_en = {
    addButton: "Add to order",
    countButton: "How many?",
}

//norwegian
const menu_no = {
    addButton: "Legg til",
    countButton: "Hvor mange?",
}

const itemAllergiesEN = [
    ["E", "M", "W", "S"],
    [],
    [],
    ["E", "M", "W", "S"],
    ["E", "M", "W"],
    ["E", "M", "W"],
];

const itemAllergiesNO = [
    ["E", "M", "H", "S"],
    [],
    [],
    ["E", "M", "H", "S"],
    ["E", "M", "H"],
    ["E", "M", "H"],
];

const itemDescriptionsEN = [
    "Dirty dirty fries",
    "Sweet sweet potato fries",
    "Normal, just normal fries",
    "Taco with beans and other good stuff",
    "Taco with chicken and other good stuff",
    "Taco with beef and other good stuff",
];

const itemDescriptionsNO = [
    "Fries med stash på",
    "Søtpotet fries",
    "Helt vanlig fries",
    "Taco med bønner og andre godsaker",
    "Taco med kylling og andre godsaker",
    "Taco med kjøtt og andre godsaker",
];


function changeMenuLanguage(lang) {
    let addButtons = document.getElementsByClassName("itemAdd");
    let countButtons = document.getElementsByClassName("itemCountText");
    let itemDescriptions = document.getElementsByClassName("itemDescription");
    let addButton = "";
    let countButton = "";
    let descriptions = [];
    let allergiesCurrent = [];
    let allergiesOther = [];

    updateTotalPrice();
    updateGoToOrder();

    if (lang === en) {
        addButton = menu_en.addButton;
        countButton = menu_en.countButton;
        descriptions = itemDescriptionsEN;
        allergiesCurrent = itemAllergiesEN;
        allergiesOther = itemAllergiesNO;
    } else if (lang === no) {
        addButton = menu_no.addButton;
        countButton = menu_no.countButton;
        descriptions = itemDescriptionsNO;
        allergiesCurrent = itemAllergiesNO;
        allergiesOther = itemAllergiesEN;
    } else {
        return;
    }

    for (let id = 0; id < allergiesCurrent.length; id++) {
        for (let j = 0; j < allergiesCurrent.length; j++) {
            let allergyC = allergiesCurrent[j];
            let allergyO = allergiesOther[j];
            if (allergyC !== allergyO) {
                let itemAllergyC = document.getElementById(`itemAllergies${id}-${allergyC}`);
                let itemAllergyO = document.getElementById(`itemAllergies${id}-${allergyO}`);
                if (itemAllergyC) {
                    itemAllergyC.innerHTML = allergyC
                } else if (itemAllergyO) {
                    itemAllergyO.innerHTML = allergyC
                }
            }
        }
    }
    [].slice.call(addButtons).forEach(function (button) {
        button.innerHTML = addButton;
    });
    [].slice.call(countButtons).forEach(function (button) {
        button.innerHTML = countButton;
    });
    let x = 0;
    [].slice.call(itemDescriptions).forEach(function (description) {
        description.innerHTML = descriptions[x];
        x += 1;
    });
}


// change language
if (localStorage.getItem("language") === no) {
    changeLanguage(no);
} else {
    changeLanguage(en);
}

function changeLanguage(lang) {
    let menu = document.getElementById("menu.html");
    let about_us = document.getElementById("about_us.html");
    let contact_us = document.getElementById("contact_us.html");
    console.log(currentUrl)
    if (lang === en) {
        document.getElementById("en").style.color = '#C91532';
        document.getElementById("no").style.color = '';
        localStorage.setItem("language", en);
        menu.innerHTML = navbar_en.menu;
        about_us.innerHTML = navbar_en.about_us;
        contact_us.innerHTML = navbar_en.contact_us;
    } else if (lang === no) {
        document.getElementById("no").style.color = '#C91532';
        document.getElementById("en").style.color = '';
        localStorage.setItem("language", no);
        menu.innerHTML = navbar_no.menu;
        about_us.innerHTML = navbar_no.about_us;
        contact_us.innerHTML = navbar_no.contact_us;
    }
    if (currentUrl === "homepage.html") {
        changeHomePageLanguage(lang);
    }
    if (currentUrl === "menu.html") {
        changeMenuLanguage(lang);
    }
}
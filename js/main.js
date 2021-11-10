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
    '<img style="width:35px; float: left" src="images/foodtruck.png" alt="foodtruck logo" id="logo_img">' +
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
    if (navbarLinks[i].id === currentUrl || (navbarLinks[i].id === "menu.html" && currentUrl === "order.html") || (navbarLinks[i].id === "menu.html" && currentUrl === "receipt.html")) {
        document.getElementById(navbarLinks[i].id).style.color = '#C91532';
    }
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

function foodSuggestionLanguage() {
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
    error: "Please order something before contiuing",
}

//norwegian
const menu_no = {
    addButton: "Legg til",
    countButton: "Hvor mange?",
    error: "Venligst bestill noe før du går videre",
}

const order_en = {
    orderNameInput: "Name",
    orderNameLabel: "Your name:",
    orderComment: "Type your comment here...",
    orderCommentLabel: "Allergies, or something you don’t like? Tell us and we will customize your order!",
}

const order_no = {
    orderNameInput: "Navn",
    orderNameLabel: "Ditt Navn:",
    orderComment: "Skriv din kommentar her...",
    orderCommentLabel: "Allergier eller noe du ikke liker? Fortell oss og vi tilpasser bestillingen!",
}

const itemAllergiesEN = [
    ["E", "M", "W", "S"],
    [],
    [],
    ["E", "M", "W", "S"],
    ["E", "M", "W"],
    ["E", "M", "W"],
];

const allergyMeaningEN = [
    ["E", "Egg"],
    ["M", "Milk"],
    ["W", "Wheat"],
    ["S", "Soy"],
];

const itemAllergiesNO = [
    ["E", "M", "H", "S"],
    [],
    [],
    ["E", "M", "H", "S"],
    ["E", "M", "H"],
    ["E", "M", "H"],
];

const allergyMeaningNO = [
    ["E", "Egg"],
    ["M", "Melk"],
    ["H", "Hvete"],
    ["S", "Soya"],
];

function getAllergyMeaning() {
    let allergyMeaning = document.getElementById("allergyMeaning");
    for (let i = 0; i < allergyMeaningEN.length; i++) {
        let allergyItem = document.createElement("li");
        allergyItem.className = `itemAllergy${allergyMeaningEN[i][0]}`;
        allergyItem.id = `itemAllergy${allergyMeaningEN[i][0]}`;
        if (language === en) {
            allergyItem.innerHTML = allergyMeaningEN[i][1];
        }
        if (language === no) {
            allergyItem.innerHTML = allergyMeaningNO[i][1];
        }
        allergyMeaning.appendChild(allergyItem);
    }
}

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

function changeAllergyLanguage(allergiesCurrent) {
    for (let id = 0; id < allergiesCurrent.length; id++) {
        allergiesCurrent.map(function (allergies, index) {
            allergies.map(function (allergy) {
                if (allergy === "H" || allergy === "W") {
                    let itemAllergyH = document.getElementById(`itemAllergies${index}-H`);
                    let itemAllergyW = document.getElementById(`itemAllergies${index}-W`);
                    if (itemAllergyH) {
                        itemAllergyH.innerHTML = allergy;
                    } else if (itemAllergyW) {
                        itemAllergyW.innerHTML = allergy;
                    }
                }
            });
        });
    }
}

function changeOrderBackButtonLang(lang) {
    let orderBackButton = document.getElementById("orderBackButton");
    if (lang === en && orderBackButton) {
        orderBackButton.innerText = "< Back to menu";
    } else if (lang === no && orderBackButton) {
        orderBackButton.innerText = "< Tilbake til menyen";
    }
}


function changeMenuLanguage(lang) {
    let addButtons = document.getElementsByClassName("itemAdd");
    let countButtons = document.getElementsByClassName("itemCountText");
    let itemDescriptions = document.getElementsByClassName("itemDescription");
    let addButton = "";
    let countButton = "";
    let descriptions = [];
    let allergiesCurrent = [];
    let errorElement;
    let orderComment;
    let orderCommentLabel;
    let orderNameInput;
    let orderNameLabel;
    if (currentUrl === "menu.html") {
        errorElement = document.getElementById("error")
    } else if (currentUrl === "order.html") {
        orderComment = document.getElementById("orderComment")
        orderCommentLabel = document.getElementById("orderCommentLabel")
        orderNameInput = document.getElementById("orderNameInput")
        orderNameLabel = document.getElementById("orderNameLabel")
    }

    updateTotalPrice();
    updateGoToOrder();

    if (lang === en) {
        addButton = menu_en.addButton;
        countButton = menu_en.countButton;
        descriptions = itemDescriptionsEN;
        allergiesCurrent = itemAllergiesEN;
        if (currentUrl === "menu.html") {
            errorElement.innerHTML = menu_en.error;
        } else if (currentUrl === "order.html") {
            orderComment.placeholder = order_en.orderComment;
            orderCommentLabel.innerHTML = order_en.orderCommentLabel;
            orderNameInput.placeholder = order_en.orderNameInput;
            orderNameLabel.innerHTML = order_en.orderNameLabel;
        }
    } else if (lang === no) {
        addButton = menu_no.addButton;
        countButton = menu_no.countButton;
        descriptions = itemDescriptionsNO;
        allergiesCurrent = itemAllergiesNO;
        if (currentUrl === "menu.html") {
            errorElement.innerHTML = menu_no.error;
        } else if (currentUrl === "order.html") {
            orderComment.placeholder = order_no.orderComment;
            orderCommentLabel.innerHTML = order_no.orderCommentLabel;
            orderNameInput.placeholder = order_no.orderNameInput;
            orderNameLabel.innerHTML = order_no.orderNameLabel;
        }
    } else {
        return;
    }
    changeAllergyLanguage(allergiesCurrent);
    changeOrderBackButtonLang(lang);

    [].slice.call(addButtons).forEach(function (button) {
        button.innerHTML = addButton;
    });
    [].slice.call(countButtons).forEach(function (button) {
        button.innerHTML = countButton;
    });
    if (itemDescriptions) {
        let x = 0;
        [].slice.call(itemDescriptions).forEach(function (description) {
            description.innerHTML = descriptions[x];
            x += 1;
        });
    }
    for (let i = 0; i < allergyMeaningEN.length; i++) {
        let allergyItem = document.getElementById(`itemAllergy${allergyMeaningEN[i][0]}`);
        if (allergyItem) {
            if (lang === en) {
                allergyItem.innerHTML = allergyMeaningEN[i][1];
            }
            if (lang === no) {
                allergyItem.innerHTML = allergyMeaningNO[i][1];
            }
        }
    }
}

if (currentUrl === "order.html") {
    document.getElementById("orderForm").onsubmit = function (event) {
        event.preventDefault();
        toReceipt();
        return false;
    }
}

// receipt page
const receipt_en = {
    commentLabel: "Your comment:",
}

const receipt_no = {
    commentLabel: "Din kommentar:"
}

function checkNoComment() {
    console.log(localStorage.getItem("comment"))
    if (localStorage.getItem("comment") == "") {
        document.getElementById("commentReceipt").remove()
        document.getElementById("commentLabel").remove()
    }
}

function changeReceiptLanguage(lang) {
    let receipt = {};
    let itemDescriptions = document.getElementsByClassName("itemDescription");
    let descriptions = [];
    if (lang === en) {
        receipt = receipt_en;
    } else if (lang === no) {
        receipt = receipt_no;
    } else {
        return;
    }
    if (itemDescriptions) {
        let x = 0;
        [].slice.call(itemDescriptions).forEach(function (description) {
            description.innerHTML = descriptions[x];
            x += 1;
        });
    }
    document.getElementById("commentLabel").innerHTML = receipt.commentLabel
    headerLanguage()
}

// about us-page
// English text
const about_en = {
    q1: "Who are we?",
    q2: "What do we do?",
    q3: "How to join us",
    image1: "All the people working in the truck",
    image2: "The foodtruck and UKA is love",
    image3: "The foodtruck in action"
}

// Norwegian text
const about_no = {
    q1: "Hvem er vi?",
    q2: "Hva gjør vi",
    q3: "Hvordan bli med",
    image1: "Alle som jobber i trucken",
    image2: "Foodtrucken og UKA er kjærlighet",
    image3: "Foodtrucken i action"
}

// Change page language
function changeAboutPageLanguage(lang) {
    let about = {};
    if (lang === en) {
        about = about_en;
    } else if (lang === no) {
        about = about_no;
    } else {
        return;
    }
    document.getElementById("q1").innerHTML = about.q1;
    document.getElementById("q2").innerHTML = about.q2;
    document.getElementById("q3").innerHTML = about.q3;
    document.getElementById("image1").innerHTML = about.image1;
    document.getElementById("image2").innerHTML = about.image2;
    document.getElementById("image3").innerHTML = about.image3;
}

// contact us-page
// English text
const contact_en = {
    contact_header: "Something wrong? Contact us!",
    firstname: "First Name",
    lastname: "Last Name",
    email: "Email",
    about: "What’s it about?",
    message: "Type your message here...",
    location_header: "Can’t find us? We’re here!",
    location_description: "The foodtruck is located behind Studentersamfundet.",
    response: "Thank you for your input",
    error: "Please fill out all fields"
}

// Norwegian text
const contact_no = {
    contact_header: "Noe galt? Kontakt oss!",
    firstname: "Fornavn",
    lastname: "Etternavn",
    email: "Epost",
    about: "Hva gjelder det?",
    message: "Skriv meldingen din her...",
    location_header: "Finner du oss ikke? Her er vi!",
    location_description: "Foodtrucken er på baksiden av Studentersamfundet.",
    response: "Takk for din tilbakemelding",
    error: "Fyll ut alle felter"
}

// Modal handling in about us and contact us from w3 schools
if (document.getElementById("myModal")) {
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Overriding submit so that modal will pop up instead for contact page
    if (currentUrl === "contact_us") {
        document.getElementById("contact_form").onsubmit = function (event) {
            event.preventDefault();
            modal.style.display = "block";
            return false;
        }
    }

    // When the user clicks on <span> (x), close the modal
    // Special case for contact page so that submit happens on closing the modal
    span.onclick = function () {
        modal.style.display = "none";
        if (currentUrl === "contact_us") {
            document.getElementById("contact_form").submit();
        }
    }

    // When the user clicks anywhere outside of the modal, close it
    // Special case for contact page so that submit happens on closing the modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            if (currentUrl === "contact_us") {
                document.getElementById("contact_form").submit();
            }
        }
    }

    // Image modal handeling, pop up when clicking the picture
    if (currentUrl === "about_us") {
        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img1 = document.getElementById("img1");
        var img2 = document.getElementById("img2");
        var img3 = document.getElementById("img3");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        img1.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
        img2.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
        img3.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }
}

// Change page language
function changeContactPageLanguage(lang) {
    let contact = {};
    if (lang === en) {
        contact = contact_en;
    } else if (lang === no) {
        contact = contact_no;
    } else {
        return;
    }
    document.getElementById("contact_header").innerHTML = contact.contact_header;
    document.getElementById("firstname").placeholder = contact.firstname;
    document.getElementById("lastname").placeholder = contact.lastname;
    document.getElementById("email").placeholder = contact.email;
    document.getElementById("about").placeholder = contact.about;
    document.getElementById("message").placeholder = contact.message;
    document.getElementById("location_header").innerHTML = contact.location_header;
    document.getElementById("location_description").innerHTML = contact.location_description;
    document.getElementById("response").innerHTML = contact.response;
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
    if (lang === en) {
        document.documentElement.setAttribute("lang", "en")
        document.getElementById("en").style.color = '#C91532';
        document.getElementById("no").style.color = '';
        localStorage.setItem("language", en);
        menu.innerHTML = navbar_en.menu;
        about_us.innerHTML = navbar_en.about_us;
        contact_us.innerHTML = navbar_en.contact_us;
    } else if (lang === no) {
        document.documentElement.setAttribute("lang", "no")
        document.getElementById("no").style.color = '#C91532';
        document.getElementById("en").style.color = '';
        localStorage.setItem("language", no);
        menu.innerHTML = navbar_no.menu;
        about_us.innerHTML = navbar_no.about_us;
        contact_us.innerHTML = navbar_no.contact_us;
    }
    if (currentUrl === "homepage.html") {
        changeHomePageLanguage(lang);
    } else if (currentUrl === "menu.html") {
        changeMenuLanguage(lang);
    } else if (currentUrl === "order.html") {
        changeMenuLanguage(lang);
    } else if (currentUrl === "about_us.html") {
        changeAboutPageLanguage(lang);
    } else if (currentUrl === "contact_us.html") {
        changeContactPageLanguage(lang);
    } else if (currentUrl === "receipt.html") {
        changeReceiptLanguage(lang)
    }
}
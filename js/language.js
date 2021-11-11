let no = "no";
let en = "en";

let language = localStorage.getItem("language");

// navbar language
const navbar_en = {
    menu: "MENU",
    about_us: "ABOUT US",
    contact_us: "CONTACT US",
};

const navbar_no = {
    menu: "MENY",
    about_us: "OM OSS",
    contact_us: "KONTAKT OSS",
};

// homepage language
const homepage_en = {
    title: "Hungry?",
    welcomeText: "Hello, welcome to UKA's foodtruck! Get our delicious, hot food, either if you're going to or from the festival, or if you're just looking for a midnight snack.",
    location: "We're located just behind the Studentersamfundet.",
    open: "Open: mon-sun | 19 - 02",
    suggestion: "On the fly? Grab this one",
    other: "Or try one of many other tasty alternatives >>>",
};

const homepage_no = {
    title: "Sulten?",
    welcomeText: "Hei, velkommen til UKAs foodtruck! Kom og prøv vår smaksfulle og varme retter enten du er på vei til eller fra festivalen, eller om du bare er ute etter nattmat.",
    location: "Du finner oss like bak Studentersamfundet.",
    open: "Åpen: man-søn | 19 - 02",
    suggestion: "På farten? Prøv denne",
    other: "Eller prøv en av mange andre smakfulle retter >>>",
};

// menu, order and receipt language
const menu_en = {
    addButton: "Add to order",
    countButton: "How many?",
    toCheckout: "Go to checkout >",
    error: "Please order something before continuing",
};

const menu_no = {
    addButton: "Legg til",
    countButton: "Hvor mange?",
    toCheckout: "Gå til kassen >",
    error: "Venligst bestill noe før du går videre",
};

const order_en = {
    nameInput: "Name",
    nameLabel: "Your name:",
    comment: "Type your comment here...",
    commentLabel: "Allergies, or something you don’t like? Tell us and we will customize your order!",
    toPayment: "Go to payment >",
    toMenu: "< Back to menu",
};

const order_no = {
    nameInput: "Navn",
    nameLabel: "Ditt Navn:",
    comment: "Skriv din kommentar her...",
    commentLabel: "Allergier eller noe du ikke liker? Fortell oss og vi tilpasser bestillingen!",
    toPayment: "Gå til betaling >",
    toMenu: "< Tilbake til menyen",
};

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

const allergyMeaningEN = [
    ["E", "Egg"],
    ["M", "Milk"],
    ["W", "Wheat"],
    ["S", "Soy"],
];

const allergyMeaningNO = [
    ["E", "Egg"],
    ["M", "Melk"],
    ["H", "Hvete"],
    ["S", "Soya"],
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

const receipt_en = {
    commentLabel: "Your comment:",
};

const receipt_no = {
    commentLabel: "Din kommentar:",
};

// about us language
const about_en = {
    q1: "Who are we?",
    q2: "What do we do?",
    q3: "How to join us",
    image1: "All the people working in the truck",
    image2: "The foodtruck and UKA is love",
    image3: "The foodtruck in action",
};

const about_no = {
    q1: "Hvem er vi?",
    q2: "Hva gjør vi",
    q3: "Hvordan bli med",
    image1: "Alle som jobber i trucken",
    image2: "Foodtrucken og UKA er kjærlighet",
    image3: "Foodtrucken i action",
};

// contact us language
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
};

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
};


// make sure the correct language is loaded when the script is loaded
if (localStorage.getItem("language") === no) {
    changeLanguage(no);
} else {
    changeLanguage(en); // Default language
}

function changeLanguage(lang) {
    // update the language variable
    if (lang === en) {
        language = en;
    } else if (lang === no) {
        language = no;
    } else {
        return;
    }
    // store the new language variable
    localStorage.setItem("language", language);
    // update the html language attribute
    document.documentElement.setAttribute("lang", language);

    updateNavbar();

    if (currentUrl === "homepage.html") {
        changeHomePageLanguage();
    } else if (currentUrl === "menu.html" || currentUrl === "order.html") {
        changeMenuOrderLanguage();
    } else if (currentUrl === "receipt.html") {
        changeReceiptLanguage();
    } else if (currentUrl === "about_us.html") {
        changeAboutPageLanguage();
    } else if (currentUrl === "contact_us.html") {
        changeContactPageLanguage();
    }
}

function updateNavbar() {
    let menu = document.getElementById("menu.html");
    let about_us = document.getElementById("about_us.html");
    let contact_us = document.getElementById("contact_us.html");
    if (language === en) {
        document.getElementById("en").style.color = '#C91532';
        document.getElementById("no").style.color = '';
        menu.innerHTML = navbar_en.menu;
        about_us.innerHTML = navbar_en.about_us;
        contact_us.innerHTML = navbar_en.contact_us;
    } else if (language === no) {
        document.getElementById("en").style.color = '';
        document.getElementById("no").style.color = '#C91532';
        menu.innerHTML = navbar_no.menu;
        about_us.innerHTML = navbar_no.about_us;
        contact_us.innerHTML = navbar_no.contact_us;
    }
}


// language change for homepage.html
function updateFoodSuggestionDescription() {
    let homeFoodId = localStorage.getItem("homeFoodId");
    document.getElementById("foodDescription").innerHTML = getFoodDescriptionText(homeFoodId);
}

function changeHomePageLanguage() {
    let homepage;
    if (language === en) {
        homepage = homepage_en;
    } else if (language === no) {
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
    updateFoodSuggestionDescription();
}


// language change for menu.html and order.html
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

function changeAllergyLanguage(allergiesCurrent) {
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

function getFoodDescriptionText(id) {
    if (language === en) {
        return itemDescriptionsEN[id];
    } else if (language === no) {
        return itemDescriptionsNO[id];
    }
}

function getAllergiesText(id) {
    if (language === en) {
        return itemAllergiesEN[id];
    } else if (language === no) {
        return itemAllergiesNO[id];
    }
}

function getAddButtonText() {
    if (language === en) {
        return menu_en.addButton;
    } else if (language === no) {
        return menu_no.addButton;
    }
}

function getItemCountText() {
    if (language === en) {
        return menu_en.countButton;
    } else if (language === no) {
        return menu_no.countButton;
    }
}

function setOrderBackButtonText() {
    let orderBackButton = document.getElementById("orderBackButton");
    if (language === en && orderBackButton) {
        orderBackButton.innerText = order_en.toMenu;
    } else if (language === no && orderBackButton) {
        orderBackButton.innerText = order_no.toMenu;
    }
}

function updateTotalPrice() {
    let orderPrice = document.getElementById("orderPrice");
    let price;
    if (currentUrl === "receipt.html") {
        price = localStorage.getItem("price");
    } else {
        price = getTotalPrice();
    }

    if (language === no) {
        orderPrice.innerText = `Din total: ${price},-`;
    } else if (language === en) {
        orderPrice.innerText = `Your total: ${price},-`;
    }
}

function updateGoToOrder() {
    let orderNextPage = document.getElementById("orderNextPage");
    if (language === no) {
        orderNextPage.innerText = menu_no.toCheckout;
    } else if (language === en) {
        orderNextPage.innerText = menu_en.toCheckout;
    }
}

function updateGoToPayment() {
    let orderNextPage = document.getElementById("orderNextPage");
    if (language === no) {
        orderNextPage.innerText = order_no.toPayment;
    } else if (language === en) {
        orderNextPage.innerText = order_en.toPayment;
    }
}

function changeMenuOrderLanguage() {
    let addButtons = document.getElementsByClassName("itemAdd");
    let countButtons = document.getElementsByClassName("itemCountText");
    let itemDescriptions = document.getElementsByClassName("itemDescription");
    let menu = {};
    let order = {};
    let addButton = "";
    let countButton = "";
    let descriptions = [];
    let allergiesCurrent = [];
    let allergiesMeaning = [];

    if (language === en) {
        menu = menu_en;
        descriptions = itemDescriptionsEN;
        allergiesCurrent = itemAllergiesEN;
        order = order_en;
        allergiesMeaning = allergyMeaningEN;
    } else if (language === no) {
        menu = menu_no;
        descriptions = itemDescriptionsNO;
        allergiesCurrent = itemAllergiesNO;
        order = order_no;
        allergiesMeaning = allergyMeaningNO;
    } else {
        return;
    }

    // updates specific fields for only menu.html or order.html
    if (currentUrl === "menu.html") {
        document.getElementById("error").innerHTML = menu.error;
    } else if (currentUrl === "order.html") {
        document.getElementById("orderComment").placeholder = order.comment;
        document.getElementById("orderCommentLabel").innerHTML = order.commentLabel;
        document.getElementById("orderNameInput").placeholder = order.nameInput;
        document.getElementById("orderNameLabel").innerHTML = order.nameLabel;
    }

    updateTotalPrice();
    updateGoToOrder();
    setOrderBackButtonText();
    changeAllergyLanguage(allergiesCurrent);

    addButton = menu.addButton;
    countButton = menu.countButton;

    [].slice.call(addButtons).forEach(function (button) {
        button.innerHTML = addButton;
    });
    [].slice.call(countButtons).forEach(function (button) {
        button.innerHTML = countButton;
    });
    if (itemDescriptions) {
        let x = 0;
        [].slice.call(itemDescriptions).forEach(function (description) {
            description.innerHTML = descriptions[x]; // Doesn't use getFoodDescriptionText because that uses more if checks
            x += 1;
        });
    }

    for (let i = 0; i < allergiesMeaning.length; i++) {
        let allergyItem = document.getElementById(`itemAllergy${allergyMeaningEN[i][0]}`);
        if (allergyItem) {
            allergyItem.innerHTML = allergiesMeaning[i][1];
        }
    }
}


// language change for receipt.html
function headerLanguage() {
    let name = localStorage.getItem("name");
    let header = document.getElementById("receiptHeader");
    if (language === en) {
        header.innerHTML = name + ", thank you for your purchase!";
    } else if (language === no) {
        header.innerHTML = "Takk for kjøpet " + name + "!";
    }
}

function changeReceiptLanguage() {
    let receipt;
    if (language === en) {
        receipt = receipt_en;
    } else if (language === no) {
        receipt = receipt_no;
    } else {
        return;
    }
    document.getElementById("commentLabel").innerHTML = receipt.commentLabel;
    headerLanguage();
    updateTotalPrice();
}


// language change for about_us.html
function changeAboutPageLanguage() {
    let about;
    if (language === en) {
        about = about_en;
    } else if (language === no) {
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


// language change for contact_us.html
function changeContactPageLanguage() {
    let contact;
    if (language === en) {
        contact = contact_en;
    } else if (language === no) {
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

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
const homepage_en = [
    ["homePageTitle", "Hungry?"],
    ["welcomeText", "Hello, welcome to UKA's foodtruck! Get our delicious, hot food, either if you're going to or from the festival, or if you're just looking for a midnight snack."],
    ["homePageLocation", "We're located just behind the Studentersamfundet."],
    ["homePageOpen", "Open: mon-sun | 19 - 02"],
    ["suggestion", "On the fly? Grab this one"],
    ["homePageOther", "Or try one of many other tasty alternatives >>>"],
];

const homepage_no = [
    ["homePageTitle", "Sulten?"],
    ["welcomeText", "Hei, velkommen til UKAs foodtruck! Kom og prøv vår smaksfulle og varme retter enten du er på vei til eller fra festivalen, eller om du bare er ute etter nattmat."],
    ["homePageLocation", "Du finner oss like bak Studentersamfundet."],
    ["homePageOpen", "Åpen: man-søn | 19 - 02"],
    ["suggestion", "På farten? Prøv denne"],
    ["homePageOther", "Eller prøv en av mange andre smakfulle retter >>>"],
];

// menu, order and receipt language
const menu_en = {
    addButton: "Add to order",
    countButton: "How many?",
    toCheckout: "Go to checkout >",
    response: "Please order something before continuing",
};

const menu_no = {
    addButton: "Legg til",
    countButton: "Hvor mange?",
    toCheckout: "Gå til kassen >",
    response: "Venligst bestill noe før du går videre",
};

const order_en = {
    title: "Confirm your order",
    nameInput: "Name",
    nameLabel: "Your name:",
    comment: "Type your comment here...",
    commentLabel: "Allergies, or something you don’t like? Tell us and we will customize your order!",
    toPayment: "Go to payment >",
    toMenu: "< Back to menu",
};

const order_no = {
    title: "Bekreft bestillingen din",
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
    ["E", "W", "S"],
    ["E", "M", "W", "S"],
];

const itemAllergiesNO = [
    ["E", "M", "H", "S"],
    [],
    [],
    ["E", "M", "H", "S"],
    ["E", "M", "H"],
    ["E", "M", "H"],
    ["E", "H", "S"],
    ["E", "M", "H", "S"],
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
    "Juicy burger with beef and other good stuff",
    "Juicy burger with beef, cheese and other good stuff",
];

const itemDescriptionsNO = [
    "Fries med stash på",
    "Søtpotet fries",
    "Helt vanlig fries",
    "Taco med bønner og andre godsaker",
    "Taco med kylling og andre godsaker",
    "Taco med kjøtt og andre godsaker",
    "Saftig burger av kjøtt med andre godsaker",
    "Saftig burger av kjøtt med ost og andre godsaker",
];

const receipt_en = {
    commentLabel: "Your comment:",
};

const receipt_no = {
    commentLabel: "Din kommentar:",
};

// about-us language
const about_en = [
    ["q1", "Who are we?"],
    ["q2", "What do we do?"],
    ["q3", "How to join us"],
    ["desc1", "All the people working in the truck"],
    ["desc2", "The foodtruck and UKA is love"],
    ["desc3", "The foodtruck in action"],
    ["img1", "A group picture of the foodtruck workers"],
    ["img2", "The foodtruck parked"],
    ["img3", "A bad picture of the truck operating"],
];

const about_no = [
    ["q1", "Hvem er vi?"],
    ["q2", "Hva gjør vi?"],
    ["q3", "Hvordan bli med"],
    ["desc1", "Alle som jobber i trucken"],
    ["desc2", "Foodtrucken og UKA er kjærlighet"],
    ["desc3", "Foodtrucken i action"],
    ["img1", "Et gruppebilde med foodtruckarbeiderne"],
    ["img2", "Foodtrucken parkert"],
    ["img3", "Et dårlig bilde av trucken i drift"],
];

// contact-us language
const contact_en = [
    ["contact_header", "Something wrong? Contact us!"],
    ["firstname", "First Name"],
    ["lastname", "Last Name"],
    ["email", "Email"],
    ["about", "What’s it about?"],
    ["message", "Type your message here..."],
    ["location_header", "Can’t find us? We’re here!"],
    ["location_description", "The foodtruck is located behind Studentersamfundet."],
    ["response", "Thank you for your input"],
];

const contact_no = [
    ["contact_header", "Noe galt? Kontakt oss!"],
    ["firstname", "Fornavn"],
    ["lastname", "Etternavn"],
    ["email", "Epost"],
    ["about", "Hva gjelder det?"],
    ["message", "Skriv meldingen din her..."],
    ["location_header", "Finner du oss ikke? Her er vi!"],
    ["location_description", "Foodtrucken er på baksiden av Studentersamfundet."],
    ["response", "Takk for din tilbakemelding"],
];


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

    if (currentUrl === "menu.html" || currentUrl === "order.html") {
        changeMenuOrderLanguage();
    } else {
        genericChangeLanguage();
    }
}

// updates the navbar to current language
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


// language change for food suggestion on homepage.html
function updateFoodSuggestionDescription() {
    let homeFoodId = localStorage.getItem("homeFoodId");
    document.getElementById("foodDescription").innerHTML = getFoodDescriptionText(homeFoodId);
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

function changeAllergyLanguage(allItemsAllergies) {
    allItemsAllergies.map(function (itemAllergies, index) {
        itemAllergies.map(function (allergy) {
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
    let menu;
    let order;
    let addButton = "";
    let countButton = "";
    let descriptions = [];
    let allergies = [];
    let allergiesMeaning = [];

    if (language === en) {
        menu = menu_en;
        descriptions = itemDescriptionsEN;
        allergies = itemAllergiesEN;
        order = order_en;
        allergiesMeaning = allergyMeaningEN;
    } else if (language === no) {
        menu = menu_no;
        descriptions = itemDescriptionsNO;
        allergies = itemAllergiesNO;
        order = order_no;
        allergiesMeaning = allergyMeaningNO;
    } else {
        return;
    }

    // updates specific fields for only menu.html or order.html
    if (currentUrl === "menu.html") {
        document.getElementById("response").innerHTML = menu.response;
    } else if (currentUrl === "order.html") {
        document.getElementById("orderTitle").innerHTML = order.title;
        document.getElementById("orderComment").placeholder = order.comment;
        document.getElementById("orderCommentLabel").innerHTML = order.commentLabel;
        document.getElementById("orderNameInput").placeholder = order.nameInput;
        document.getElementById("orderNameLabel").innerHTML = order.nameLabel;
    }

    updateTotalPrice();
    updateGoToOrder();
    setOrderBackButtonText();
    changeAllergyLanguage(allergies);

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


// language change for the header in receipt.html
function headerLanguage() {
    let name = localStorage.getItem("name");
    let header = document.getElementById("receiptHeader");
    if (language === en) {
        header.innerHTML = name + ", thank you for your purchase!";
    } else if (language === no) {
        header.innerHTML = "Takk for kjøpet " + name + "!";
    }
}

// a generic language change function for the homepage, about-us, contact-us and receipt pages
function genericChangeLanguage() {
    let languageList = [];
    let homepage;
    let about;
    let contact;
    let receipt;
    let allergies;
    if (language === en) {
        homepage = homepage_en;
        about = about_en;
        contact = contact_en;
        receipt = receipt_en;
        allergies = itemAllergiesEN;
    } else if (language === no) {
        homepage = homepage_no;
        about = about_no;
        contact = contact_no;
        receipt = receipt_no;
        allergies = itemAllergiesNO;
    } else {
        return;
    }
    if (currentUrl === "homepage.html") {
        languageList = homepage;
        updateFoodSuggestionDescription();
    } else if (currentUrl === "about_us.html") {
        languageList = about;
    } else if (currentUrl === "contact_us.html") {
        languageList = contact;
    } else if (currentUrl === "receipt.html") {
        languageList = receipt;
        headerLanguage();
        updateTotalPrice();
        changeAllergyLanguage(allergies);
    }
    for (let key_value of languageList) {
        let documentElement = document.getElementById(key_value[0]);
        if (documentElement.tagName === "INPUT" || documentElement.tagName === "TEXTAREA") {
            documentElement.placeholder = key_value[1];
        } else if (documentElement.tagName === "IMG") {
            documentElement.alt = key_value[1];
        } else {
            documentElement.innerHTML = key_value[1];
        }
    }
}

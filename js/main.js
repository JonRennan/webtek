// load navbar on all pages
let navbar = '' +
    '<div class="navbar" id="navbar">' +
    '<a class="navbarText" onclick="changeLanguage(en)" id="en"> EN </a>' +
    '<span id="span"> - </span>' +
    '<a class="navbarText" onclick="changeLanguage(no)" id="no"> NO </a>' +
    '<hr>' +
    '<div>' +
    '<a class="logo" href="homepage.html">' +
    '<img style="width:35px; float: left" src="images/foodtruck_logo.png" alt="foodtruck logo" id="logo_img">' +
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

// sets currentUrl variable to the name of the html file that is loaded
let currentUrl = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

// set color to current page in the navbar
let navbarLinks = document.getElementsByClassName("navbarText");
for (let i = 0; i < navbarLinks.length; i++) {
    if (navbarLinks[i].id === currentUrl || (navbarLinks[i].id === "menu.html" && currentUrl === "order.html") ||
        (navbarLinks[i].id === "menu.html" && currentUrl === "receipt.html")) {
        document.getElementById(navbarLinks[i].id).style.color = '#C91532';
    }
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


// Order page
// Override the onsubmit function to make the required name field is filled before running the toReceipt function
if (currentUrl === "order.html") {
    document.getElementById("orderForm").onsubmit = function (event) {
        event.preventDefault();
        toReceipt();
        return false;
    };
}


// Receipt page
// Checks if the order had a comment, if it doesnt it hides the comment box
function checkNoComment() {
    if (localStorage.getItem("comment") === "") {
        document.getElementById("commentReceipt").style.display = "none";
        document.getElementById("commentLabel").style.display = "none";
    }
}


// Modals on menu, about us and contact us page

// Modal code from www.w3schools.com
if (currentUrl === "menu.html" || currentUrl === "contact_us.html") {
    document.getElementById("placeModal").innerHTML = '<div id="myModal" class="modal">' +
        '<div class="modal-content2">' +
        '<span class="close">&times;</span>' +
        '<p id="response"></p>' +
        '</div>' +
        '</div>'
}

// Modal handling, base from w3schools.com and customized with custom cases by us
if (document.getElementById("myModal")) {
    let modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    // Special case for contact page so that submit happens on closing the modal
    span.onclick = function () {
        modal.style.display = "none";
        if (currentUrl === "contact_us.html") {
            document.getElementById("contact_form").submit();
        }
    };

    // When the user clicks anywhere outside of the modal, close it
    // Special case for contact page so that submit happens on closing the modal
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            if (currentUrl === "contact_us.html") {
                document.getElementById("contact_form").submit();
            }
        }
    };

    // Overriding onsubmit so that the modal will pop up instead of immediately submitting the form on the contact page
    // and image modal handling on about us page so images pop up when clicking the picture
    if (currentUrl === "contact_us.html") {
        document.getElementById("contact_form").onsubmit = function (event) {
            event.preventDefault();
            modal.style.display = "block";
            return false;
        };
    } else if (currentUrl === "about_us.html") {
        // Get the image and insert it inside the modal - use its "alt" text as a caption
        let img1 = document.getElementById("img1");
        let img2 = document.getElementById("img2");
        let img3 = document.getElementById("img3");
        let modalImg = document.getElementById("img01");
        let captionText = document.getElementById("caption");
        img1.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            captionText.innerHTML = this.alt;
        };
        img2.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            captionText.innerHTML = this.alt;
        };
        img3.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            captionText.innerHTML = this.alt;
        };
    }
}

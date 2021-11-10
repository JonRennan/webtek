const typeFull = "Full";
const typeOrder = "Order";
const typeReceipt = "Receipt";

let language = localStorage.getItem("language");

const itemNames = [
    "Dirty Fries",
    "Sweet Potato Fries",
    "Fries",
    "Veggie Taco",
    "Chicken Taco",
    "Beef Taco",
];

function getName(id) {
    let itemName = document.createElement("h2");
    itemName.id = `itemName${id}`;
    itemName.className = "itemName";
    itemName.innerText = itemNames[id];
    return itemName;
}


function getDescription(id) {
    // to update language on menu item on homepage
    let language = localStorage.getItem("language");

    let itemDescription = document.createElement("p");
    itemDescription.id = `itemDescription${id}`;
    itemDescription.className = "itemDescription";

    if (language === no) {
        itemDescription.innerText = itemDescriptionsNO[id];
    }
    if (language === en) {
        itemDescription.innerText = itemDescriptionsEN[id];
    }
    return itemDescription;
}

function getAllergies(id) {
    let itemAllergiesList = document.createElement("ul");
    itemAllergiesList.id = `itemAllergies${id}`;
    itemAllergiesList.className = "itemAllergies";
    let allergies = itemAllergiesEN[id];

    if (language === no) {
        allergies = itemAllergiesNO[id];
    }
    if (language === en) {
        allergies = itemAllergiesEN[id];
    }

    for (let i = 0; i < allergies.length; i++) {
        let itemAllergy = document.createElement("li");
        let allergy = allergies[i];
        itemAllergy.id = `itemAllergies${id}-${allergy}`;
        itemAllergy.className = `itemAllergy${allergy}`;
        itemAllergy.innerText = allergy;
        itemAllergiesList.appendChild(itemAllergy);
    }

    return itemAllergiesList;
}


const itemPrices = [
    59,
    59,
    49,
    49,
    49,
    49,
];

function getPrice(id) {
    let itemPrice = document.createElement("h2");
    itemPrice.id = `itemPrice${id}`;
    itemPrice.className = "itemPrice";
    itemPrice.innerText = itemPrices[id] + ",-";
    return itemPrice;
}

const itemImages = [
    "placeholder.png",
    "placeholder.png",
    "placeholder.png",
    "placeholder.png",
    "placeholder.png",
    "placeholder.png",
];

function getImage(id, type) {
    let itemImage = document.createElement("img");
    itemImage.id = `itemImage${id}`;
    itemImage.className = `itemImage${type}`;
    itemImage.src = "images/" + itemImages[id];
    itemImage.alt = itemNames[id];
    return itemImage;
}

function getAmountCol(id, display, amount = 0) {
    let itemCountText = document.createElement("p");
    itemCountText.id = `itemCountText${id}`;
    itemCountText.className = "itemCountText";
    if (language === no) {
        itemCountText.innerText = "Hvor mange?";
    }
    if (language === en) {
        itemCountText.innerText = "How many?";
    }
    let itemAmountCol = document.createElement("div");
    itemAmountCol.className = "countCol";
    itemAmountCol.id = `itemCount${id}`;
    itemAmountCol.style.display = display;
    itemAmountCol.appendChild(itemCountText);
    itemAmountCol.appendChild(getAmountDiv(id, display, amount));

    return itemAmountCol;
}

function getAmountDiv(id, display, amount = 0) {
    let itemCountBox = document.createElement("div");
    itemCountBox.id = `itemCountBox${id}`;
    itemCountBox.className = "itemCountBox";
    itemCountBox.innerText = `${amount}`;
    return itemCountBox;
}

function getCountButtons(id, display) {
    let itemCountUp = document.createElement("div");
    itemCountUp.id = `itemCountUp${id}`;
    itemCountUp.className = "itemCount up";
    itemCountUp.innerText = "+";
    itemCountUp.style.display = display;
    itemCountUp.onclick = function () {
        increaseOrder(id)
    };

    let itemCountDown = document.createElement("div");
    itemCountDown.id = `itemCountDown${id}`;
    itemCountDown.className = "itemCount down";
    itemCountDown.innerText = "-";
    itemCountDown.style.display = display;
    itemCountDown.onclick = function () {
        decreaseOrder(id)
    };

    return [itemCountUp, itemCountDown];
}

function getItem(id, type, amount = 0) {
    let itemDiv = document.createElement("div");
    itemDiv.id = `menuItem${id}`;
    itemDiv.className = "menuItem";

    itemDiv.appendChild(getImage(id, type));

    let itemInfo = document.createElement("div");
    itemInfo.id = `itemInfo${id}`;
    itemInfo.className = "itemInfo";

    itemInfo.appendChild(getName(id));
    let priceAndAllergies = document.createElement("div");
    priceAndAllergies.className = "alignPriceAndAllergies";
    priceAndAllergies.appendChild(getPrice(id));
    priceAndAllergies.appendChild(getAllergies(id));
    itemInfo.appendChild(priceAndAllergies);
    //itemInfo.appendChild(getPrice(id));
    //itemInfo.appendChild(getAllergies(id));
    if (type === typeFull) {
        itemInfo.appendChild(getDescription(id));
    }

    itemDiv.appendChild(itemInfo);

    let itemButtons = document.createElement("div");
    itemButtons.id = `itemButtons${id}`;
    itemButtons.className = "row";

    if (type === typeFull) {
        let itemAddCol = document.createElement("div");
        itemAddCol.className = "countCol";
        itemAddCol.id = `countCol1${id}`;

        let addButton = document.createElement("a");
        addButton.id = `itemAddButton${id}`;
        addButton.className = "itemAdd";

        if (language === no) {
            addButton.innerText = "Legg til";
        }
        if (language === en) {
            addButton.innerText = "Add to order";
        }

        addButton.onclick = function () {
            addToOrder(id)
        };
        itemAddCol.appendChild(addButton);
        itemButtons.appendChild(itemAddCol);

        //add buttons to itemButtons
        let countUp;
        let countDown;
        let itemAmountCol;
        if (amount !== 0) {
            itemAddCol.style.display = "none";
            [countUp, countDown] = getCountButtons(id, "flex");
            itemAmountCol = getAmountCol(id, "flex", amount);
        } else {
            [countUp, countDown] = getCountButtons(id, "none");
            itemAmountCol = getAmountCol(id, "none");
        }
        itemButtons.appendChild(countDown);
        itemButtons.appendChild(itemAmountCol);
        itemButtons.appendChild(countUp);
    } else if (type === typeOrder) {

        //add buttons to itemButtons
        let [countUp, countDown] = getCountButtons(id, "flex");
        let itemAmountCol = getAmountCol(id, "flex", amount);
        itemButtons.appendChild(countDown);
        itemButtons.appendChild(itemAmountCol);
        itemButtons.appendChild(countUp);
    } else if (type === typeReceipt) {

        //add buttons to itemButtons
        let itemAmountDiv = getAmountDiv(id, "flex", amount);
        itemButtons.appendChild(itemAmountDiv);
    }

    itemDiv.appendChild(itemButtons);

    return itemDiv;
}

function getNameInput() {
    let nameInput = document.createElement("input");
    nameInput.id = `orderNameInput`;
    nameInput.className = "orderInput";
    nameInput.type = "text";
    nameInput.name = "name";
    nameInput.pattern = "[A-Z a-z æøåÆØÅ]{1,}";
    nameInput.placeholder = "Name";
    nameInput.required = true;
    return nameInput;
}

function getCommentTextarea(disabled = false) {
    let commentTextarea = document.createElement("textarea");
    commentTextarea.id = `orderComment`;
    commentTextarea.className = "orderTextarea";
    commentTextarea.name = "comment";
    commentTextarea.pattern = "[A-Z a-z æøåÆØÅ]{0,}";
    commentTextarea.rows = 6;
    commentTextarea.placeholder = "Type your message here...";
    commentTextarea.disabled = disabled;
    return commentTextarea
}

function getFullMenu() {
    let amounts = getOrderAmounts();
    let menu = document.getElementById("menu");

    for (let i = 0; i < itemNames.length; i++) {
        menu.appendChild(getItem(i, typeFull, amounts[i]));
    }
    updateTotalPrice();
    updateGoToOrder();
    return menu;
}

function addToOrder(id) {
    let countBox = document.getElementById(`itemCount${id}`);
    let upButton = document.getElementById(`itemCountUp${id}`);
    let downButton = document.getElementById(`itemCountDown${id}`);
    countBox.style.display = "flex";
    upButton.style.display = "flex";
    downButton.style.display = "flex";
    increaseOrder(id);

    let addButton = document.getElementById(`countCol1${id}`);
    addButton.style.display = "none";
    updateTotalPrice();
}

function increaseOrder(id) {
    let itemCountText = document.getElementById(`itemCountBox${id}`);
    itemCountText.innerText = parseInt(itemCountText.innerText) + 1;
    updateTotalPrice();
    updateOrder();
}

function decreaseOrder(id) {
    let itemCountText = document.getElementById(`itemCountBox${id}`);
    if (parseInt(itemCountText.innerText) > 0) {
        itemCountText.innerText = parseInt(itemCountText.innerText) - 1;
    }
    updateOrder();
    if (parseInt(itemCountText.innerText) === 0) {
        let currentUrl = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
        if (currentUrl === "order.html") {
            document.getElementById(`menuItem${id}`).remove()
            console.log(orderIsEmpty())
            if (orderIsEmpty()) {
                window.location.href = "menu.html";
            }
        } else {
            let addButton = document.getElementById(`countCol1${id}`);
            addButton.style.display = "flex";
            let countBox = document.getElementById(`itemCount${id}`);
            let upButton = document.getElementById(`itemCountUp${id}`);
            let downButton = document.getElementById(`itemCountDown${id}`);
            countBox.style.display = "none";
            upButton.style.display = "none";
            downButton.style.display = "none";
        }
    }
    updateTotalPrice();
}

function updateOrder() {
    let order = "";

    for (let i = 0; i < itemNames.length; i++) {
        if (order !== "") {
            order += "-";
        }
        let itemCount = document.getElementById(`itemCountBox${i}`);
        if (itemCount) {
            order += itemCount.innerHTML;
        } else {
            order += "0";
        }
    }
    localStorage.setItem("order", order);
}

function getEmptyOrder() {
    let order = "";

    for (let i = 0; i < itemNames.length; i++) {
        if (order !== "") {
            order += "-0";
        } else {
            order += "0";
        }
    }
    return order;
}

function orderIsEmpty() {
    let order = localStorage.getItem("order");

    return !(order && order !== "" && order !== getEmptyOrder());
}

// Modal handeling in menu
if (document.getElementsByClassName("close").length == 1) {
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function toOrder() {
    // localStorage.setItem("order", "") // til testing, fordi man ikke kan sette bestilling til 0
    if (!orderIsEmpty()) {
        window.location.href = "order.html";
    } else {
        document.getElementById("myModal").style.display = "block";
    }
}

function getOrderAmounts() {
    let order = localStorage.getItem("order");
    if (order) {
        return order.split("-").map(amount => parseInt(amount));
    }
    return Array(itemNames.length).fill(0);
}

function getOrder() {
    let amounts = getOrderAmounts();
    let orderDiv = document.getElementById("order");

    for (let i = 0; i < amounts.length; i++) {
        if (amounts[i] > 0) {
            orderDiv.appendChild(getItem(i, typeOrder, amounts[i]));
        }
    }
    orderDiv.appendChild(getNameInput());
    orderDiv.appendChild(getCommentTextarea());
    updateTotalPrice();
    updateGoToPayment();
}


function getTotalPrice() {
    let total = 0;
    for (let i = 0; i < itemNames.length; i++) {
        let itemCount = document.getElementById(`itemCountBox${i}`);
        if (itemCount) {
            let price = itemPrices[i];
            total += price * parseInt(itemCount.innerHTML);
        }
    }
    return total
}

function updateTotalPrice() {
    // to update language on menu item on homepage
    let language = localStorage.getItem("language");

    let orderPrice = document.getElementById("orderPrice");
    let price = getTotalPrice();
    if (language === no) {
        orderPrice.innerText = `Din total: ${price},-`;
    } else if (language === en) {
        orderPrice.innerText = `Your total: ${price},-`;
    }
}

function updateGoToOrder() {
    // to update language on menu item on homepage
    let language = localStorage.getItem("language");

    let orderNextPage = document.getElementById("orderNextPage");
    if (language === no) {
        orderNextPage.innerText = "Gå til kassen >";
    } else if (language === en) {
        orderNextPage.innerText = "Go to checkout >";
    }
}

function updateGoToPayment() {
    // to update language on menu item on homepage
    let language = localStorage.getItem("language");

    let orderNextPage = document.getElementById("orderNextPage");
    if (language === no) {
        orderNextPage.innerText = "Gå til betaling >";
    } else if (language === en) {
        orderNextPage.innerText = "Go to payment >";
    }
}

function clearOrder(){
    localStorage.setItem("order", getEmptyOrder());
}

function getFinalOrder() {
    /* localStorage.setItem("name", "Name Nameson")
    localStorage.setItem("comment", "A new comment that is a little bit longer that the one before, A new comment that is a little bit longer that the one before") */
    let name = localStorage.getItem("name")
    let comment = localStorage.getItem("comment")
    document.getElementById("receiptHeader").innerHTML = name + ", thank you for your purchase!"
    document.getElementById("commentReceipt").innerHTML = comment
    
    let amounts = getOrderAmounts();
    let orderDiv = document.getElementById("order");

    for (let i = 0; i < amounts.length; i++) {
        if (amounts[i] > 0) {
            orderDiv.appendChild(getItem(i, typeReceipt, amounts[i]));
        }
    }
}
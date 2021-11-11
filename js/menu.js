const typeFull = "Full";
const typeOrder = "Order";
const typeReceipt = "Receipt";

const itemNames = [
    "Dirty Fries",
    "Sweet Potato Fries",
    "Fries",
    "Veggie Taco",
    "Chicken Taco",
    "Beef Taco",
    "Burger",
    "Cheeseburger",
];

const itemPrices = [
    59,
    59,
    49,
    49,
    49,
    49,
    59,
    64,
];

const itemImages = [
    "fries.jpg",
    "fries.jpg",
    "fries.jpg",
    "taco.jpg",
    "taco.jpg",
    "taco.jpg",
    "burger.jpg",
    "burger.jpg",
];


// creates the title with the name of the food item
function getName(id) {
    let itemName = document.createElement("h2");
    itemName.id = `itemName${id}`;
    itemName.className = "itemName";
    itemName.innerText = itemNames[id];
    return itemName;
}

// creates the p with the description of the food item
function getDescription(id) {
    let itemDescription = document.createElement("p");
    itemDescription.id = `itemDescription${id}`;
    itemDescription.className = "itemDescription";
    itemDescription.innerText = getFoodDescriptionText(id);
    return itemDescription;
}

// creates the list with the allergies of the food item
function getAllergies(id) {
    let itemAllergiesList = document.createElement("ul");
    itemAllergiesList.id = `itemAllergies${id}`;
    itemAllergiesList.className = "itemAllergies";
    let allergies = getAllergiesText(id);

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

// creates the title with the price of the food item
function getPrice(id) {
    let itemPrice = document.createElement("h2");
    itemPrice.id = `itemPrice${id}`;
    itemPrice.className = "itemPrice";
    itemPrice.innerText = itemPrices[id] + ",-";
    return itemPrice;
}

// creates the image of the food item
function getImage(id, type) {
    let itemImage = document.createElement("img");
    itemImage.id = `itemImage${id}`;
    itemImage.className = `itemImage${type}`;
    itemImage.src = "images/" + itemImages[id];
    itemImage.alt = itemNames[id];
    return itemImage;
}

// creates the div with the amount selected of the food item
function getAmountDiv(id, display, amount = 0) {
    let itemCountBox = document.createElement("div");
    itemCountBox.id = `itemCountBox${id}`;
    itemCountBox.className = "itemCountBox";
    itemCountBox.innerText = `${amount}`;
    return itemCountBox;
}

// creates the colon with the 'How many?' text and amount of the food item
function getAmountCol(id, display, amount = 0) {
    let itemCountText = document.createElement("p");
    itemCountText.id = `itemCountText${id}`;
    itemCountText.className = "itemCountText";
    itemCountText.innerText = getItemCountText();

    let itemAmountCol = document.createElement("div");
    itemAmountCol.className = "countCol";
    itemAmountCol.id = `itemCount${id}`;
    itemAmountCol.style.display = display;
    itemAmountCol.appendChild(itemCountText);
    itemAmountCol.appendChild(getAmountDiv(id, display, amount));

    return itemAmountCol;
}

// creates the + and - buttons for the food item
function getCountButtons(id, display) {
    let itemCountUp = document.createElement("div");
    itemCountUp.id = `itemCountUp${id}`;
    itemCountUp.className = "itemCount up";
    itemCountUp.innerText = "+";
    itemCountUp.style.display = display;
    itemCountUp.onclick = function () {
        increaseOrder(id);
    };

    let itemCountDown = document.createElement("div");
    itemCountDown.id = `itemCountDown${id}`;
    itemCountDown.className = "itemCount down";
    itemCountDown.innerText = "-";
    itemCountDown.style.display = display;
    itemCountDown.onclick = function () {
        decreaseOrder(id);
    };

    return [itemCountUp, itemCountDown];
}


// creates a full food item
function getItem(id, type, amount = 0) {
    // div containing the whole item
    let itemDiv = document.createElement("div");
    itemDiv.id = `menuItem${id}`;
    itemDiv.className = "menuItem";

    itemDiv.appendChild(getImage(id, type));

    // div containing name, price, allergies and sometimes description
    let itemInfo = document.createElement("div");
    itemInfo.id = `itemInfo${id}`;
    itemInfo.className = "itemInfo";

    itemInfo.appendChild(getName(id));

    let priceAndAllergies = document.createElement("div");
    priceAndAllergies.className = "alignPriceAndAllergies";
    priceAndAllergies.appendChild(getPrice(id));
    priceAndAllergies.appendChild(getAllergies(id));

    itemInfo.appendChild(priceAndAllergies);
    if (type === typeFull) {
        itemInfo.appendChild(getDescription(id));
    }

    itemDiv.appendChild(itemInfo);

    // div containing all the buttons
    let itemButtons = document.createElement("div");
    itemButtons.id = `itemButtons${id}`;
    itemButtons.className = "row buttonRow";

    let countUp;
    let countDown;
    let itemAmountCol;

    if (type === typeFull) {
        // creates the 'add to order' button, only on the menu page
        let itemAddCol = document.createElement("div");
        itemAddCol.className = "itemAddCol";
        itemAddCol.id = `itemAddCol${id}`;

        let addButton = document.createElement("a");
        addButton.id = `itemAddButton${id}`;
        addButton.className = "itemAdd";
        addButton.innerText = getAddButtonText();

        addButton.onclick = function () {
            addToOrder(id);
        };
        itemAddCol.appendChild(addButton);

        itemButtons.appendChild(itemAddCol);

        // if an amount of the item exists it hides the 'add to order' button and shows the '+', '-' and amount
        // else it hides the '+', '-' and amount
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
        // order only has '+', '-' and amount
        [countUp, countDown] = getCountButtons(id, "flex");
        itemAmountCol = getAmountCol(id, "flex", amount);
        itemButtons.appendChild(countDown);
        itemButtons.appendChild(itemAmountCol);
        itemButtons.appendChild(countUp);
    } else if (type === typeReceipt) {
        // receipt only has the div with the amount
        itemButtons.appendChild(getAmountDiv(id, "flex", amount));
    }

    itemDiv.appendChild(itemButtons);

    return itemDiv;
}


// hides the 'add to order' and shows the '+', '-' and amount
function addToOrder(id) {
    let addButton = document.getElementById(`itemAddCol${id}`);
    let countBox = document.getElementById(`itemCount${id}`);
    let upButton = document.getElementById(`itemCountUp${id}`);
    let downButton = document.getElementById(`itemCountDown${id}`);
    addButton.style.display = "none";
    countBox.style.display = "flex";
    upButton.style.display = "flex";
    downButton.style.display = "flex";

    increaseOrder(id);
}

// increases the amount of the item
function increaseOrder(id) {
    let itemCountText = document.getElementById(`itemCountBox${id}`);
    itemCountText.innerText = parseInt(itemCountText.innerText) + 1;
    updateOrder();
    updateTotalPrice();
}

// decreases the amount of the item
function decreaseOrder(id) {
    let itemCountText = document.getElementById(`itemCountBox${id}`);
    if (parseInt(itemCountText.innerText) > 0) {
        itemCountText.innerText = parseInt(itemCountText.innerText) - 1;
    }
    updateOrder();
    // if the amount is now 0, remove the item on order page, show 'add to order' and hides '+', '-' and amount on menu page
    if (parseInt(itemCountText.innerText) === 0) {
        if (currentUrl === "order.html") {
            document.getElementById(`menuItem${id}`).remove();
            if (orderIsEmpty()) {
                window.location.href = "menu.html";
            }
        } else {
            let addButton = document.getElementById(`itemAddCol${id}`);
            let countBox = document.getElementById(`itemCount${id}`);
            let upButton = document.getElementById(`itemCountUp${id}`);
            let downButton = document.getElementById(`itemCountDown${id}`);
            addButton.style.display = "flex";
            countBox.style.display = "none";
            upButton.style.display = "none";
            downButton.style.display = "none";
        }
    }
    updateTotalPrice();
}


// reads the item counts and stores a string with the amounts seperated by '-'
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

// creates a string equivalent to an order with 0 items selected
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

// boolean if the order is empty or not
function orderIsEmpty() {
    let order = localStorage.getItem("order");

    return !(order && order !== "" && order !== getEmptyOrder());
}

// converts the order from a string to a list of the amounts of each item
function getOrderAmounts() {
    let order = localStorage.getItem("order");
    if (order) {
        return order.split("-").map(amount => parseInt(amount));
    }
    return Array(itemNames.length).fill(0);
}

// overwrites the order to an empty order
function clearOrder() {
    localStorage.setItem("order", getEmptyOrder());
}


// gets the total price of the order
function getTotalPrice() {
    let total = 0;
    let amounts = getOrderAmounts();

    amounts.map(function (amount, index) {
        total += amount * itemPrices[index]
    })

    return total;
}


// saves the name input of the final order
function saveNameInput() {
    let name = document.getElementById("orderNameInput");
    if (name) {
        localStorage.setItem("name", name.value);
    }
}

// saves the comment input of the final order
function saveComment() {
    let comment = document.getElementById("orderComment");
    if (comment) {
        localStorage.setItem("comment", comment.value);
    }
}

// saves the price input of the final order
function savePrice() {
    let price = getTotalPrice();
    if (price) {
        localStorage.setItem("price", price);
    }
}


// gets everything for showing the menu
function getFullMenu() {
    let amounts = getOrderAmounts();
    let menu = document.getElementById("menu");

    for (let i = 0; i < itemNames.length; i++) {
        menu.appendChild(getItem(i, typeFull, amounts[i]));
    }
    getAllergyMeaning();
    updateTotalPrice();
    updateGoToOrder();
    return menu;
}

// checks if something is in the order or blocks moving to the order page
function toOrder() {
    if (!orderIsEmpty()) {
        window.location.href = "order.html";
    } else {
        document.getElementById("myModal").style.display = "block";
    }
}

// gets everything for showing the order
function getOrder() {
    let amounts = getOrderAmounts();
    let orderDiv = document.getElementById("order");

    for (let i = 0; i < amounts.length; i++) {
        if (amounts[i] > 0) {
            orderDiv.appendChild(getItem(i, typeOrder, amounts[i]));
        }
    }
    setOrderBackButtonText();
    updateTotalPrice();
    updateGoToPayment();
}

// saves the final order before moving to the receipt
function toReceipt() {
    saveNameInput();
    saveComment();
    savePrice();
    window.location.href = "receipt.html";
}

// gets everything for showing the receipt
function getReceipt() {
    let comment = localStorage.getItem("comment");
    updateTotalPrice();
    headerLanguage();
    document.getElementById("commentReceipt").innerHTML = comment;

    checkNoComment();

    let amounts = getOrderAmounts();
    let orderDiv = document.getElementById("order");

    for (let i = 0; i < amounts.length; i++) {
        if (amounts[i] > 0) {
            orderDiv.appendChild(getItem(i, typeReceipt, amounts[i]));
        }
    }

    clearOrder();
}
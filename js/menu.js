const typeFull = "Full";
const typeOrder = "Order";
const typeReceipt = "Receipt";

let language = localStorage.getItem("language");

const itemNames = [
    "Dirty Fries",
    "Sweet Potato Fries",
    "Fries",
    "Chicken Burger",
    "Cheese Burger",
];

function getName(id) {
    let itemName = document.createElement("h2");
    //itemName.id = `item-name-${id}`;
    itemName.id = `itemName${id}`;
    itemName.className = "itemName";
    itemName.innerText = itemNames[id];
    return itemName;
}


const itemDescriptionsEN = [
    "Dirty dirty fries",
    "Sweet sweet potato fries",
    "Normal, just normal fries",
    "Burger but made with chicken",
    "Cheese cheese burger",
];

const itemDescriptionsNO = [
    "Dirty dirty fries",
    "Sweet sweet potato fries",
    "Normal, just normal fries",
    "Burger but made with chicken",
    "Cheese cheese burger",
];

function getDescription(id) {
    let itemDescription = document.createElement("p");
    //itemDescription.id = `item-description-${id}`;
    itemDescription.id = `itemDescription${id}`;
    itemDescription.className = "itemDescription";

    if(language == "no"){
        itemDescription.innerText = itemDescriptionsNO[id];
    }
    if(language == "en"){
        itemDescription.innerText = itemDescriptionsEN[id];
    }
    return itemDescription;
}


const itemAllergiesEN = [
    ["E", "G", "W", "M", "B"],
    ["E", "G", "W", "C", "B"],
    ["E", "G", "W"],
    ["E", "G", "W"],
    ["E", "G", "W"],
];

const itemAllergiesNO = [
    ["E", "G", "W", "M", "B"],
    ["E", "G", "W", "C", "B"],
    ["E", "G", "W"],
    ["E", "G", "W"],
    ["E", "G", "W"],
];

function getAllergies(id) {
    let itemAllergiesList = document.createElement("ul");
    //itemAllergiesList.id = `item-allergies-${id}`;
    itemAllergiesList.id = `itemAllergies${id}`;
    itemAllergiesList.className = "itemAllergies";
    let allergies = itemAllergiesEN[id];

    if(language == "no"){
        allergies = itemAllergiesNO[id];
    }
    if(language == "en"){
        allergies = itemAllergiesEN[id];
    }

    for (let i = 0; i < allergies.length; i++) {
        let itemAllergy = document.createElement("li");
        let allergy = allergies[i];
        //itemAllergy.id = `item-allergies-${id}-${allergy}`;
        itemAllergy.id = `itemAllergies${id}-${allergy}`;
        itemAllergy.className = `itemAllergy${allergy}`;
        itemAllergy.innerText = allergy;
        itemAllergiesList.appendChild(itemAllergy);
    }

    return itemAllergiesList;
}


const itemPrices = [
    79,
    69,
    49,
    129,
    129,
];

function getPrice(id) {
    let itemPrice = document.createElement("h2");
    //itemPrice.id = `item-price-${id}`;
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
];

function getImage(id, type) {
    let itemImage = document.createElement("img");
    //itemImage.id = `item-image-${id}`;
    itemImage.id = `itemImage${id}`;
    itemImage.className = `itemImage${type}`;
    itemImage.src = "images/" + itemImages[id];
    itemImage.alt = itemNames[id];
    return itemImage;
}

function getCountBox(id /*,display*/) {
    let itemCountText = document.createElement("p");
    //itemCountText.id = `item-count-text-${id}`;
    itemCountText.id = `itemCountText${id}`;
    itemCountText.className = "itemCountText";
    if(language == "no"){
        itemCountText.innerText = "Hvor mange?";
    }
    if(language == "en"){
        itemCountText.innerText = "How many?";
    }
    //itemCountText.style.display = display;

    let itemCountBox = document.createElement("div");
    //itemCountBox.id = `item-count-box-${id}`;
    itemCountBox.id = `itemCountBox${id}`;
    itemCountBox.className = "itemCountBox";
    itemCountBox.innerText = "0";

    let col2 = document.createElement("div");
    col2.className = "countCol";
    col2.appendChild(itemCountText);
    col2.appendChild(itemCountBox);

    let itemButtons = document.getElementById(`itemButtons${id}`);
    itemButtons.appendChild(col2);


    //itemCountBox.style.display = display;

    //return [itemCountText, itemCountBox];
}

function getCountButtons(id /*, display*/) {
    let itemCountUp = document.createElement("div");
    //itemCountUp.id = `item-count-up-${id}`;
    itemCountUp.id = `itemCountUp${id}`;
    itemCountUp.className = "itemCountUp";
    itemCountUp.innerText = "+";
    //itemCountUp.style.display = display;
    itemCountUp.onclick = function() {increaseOrder(id)};

    let itemCountDown = document.createElement("div");
    //itemCountDown.id = `item-count-down-${id}`;
    itemCountDown.id = `itemCountDown${id}`;
    itemCountDown.className = "itemCountDown";
    itemCountDown.innerText = "-";
    //itemCountDown.style.display = display;
    itemCountDown.onclick = function() {decreaseOrder(id)};

    let col3 = document.createElement("div");
    col3.className = "countCol3";
    col3.appendChild(itemCountUp);
    col3.appendChild(itemCountDown);

    //return [itemCountUp, itemCountDown];
    let itemButtons = document.getElementById(`itemButtons${id}`);
    itemButtons.appendChild(col3);
}

function getItem(id, type) {
    let itemDiv = document.createElement("div");
    //itemDiv.id = `menu-item-${id}`;
    itemDiv.id = `menuItem${id}`;
    itemDiv.className = "menuItem";

    itemDiv.appendChild(getImage(id, type));

    let itemInfo = document.createElement("div");
    //itemInfo.id = `item-info-${id}`;
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
    //itemButtons.id = `item-buttons-${id}`;
    itemButtons.id = `itemButtons${id}`;
    itemButtons.className = "row";

    if (type === typeFull) {
        let col1 = document.createElement("div");
        col1.className = "countCol";
        let addButton = document.createElement("a");
        //addButton.id = `item-add-button-${id}`;
        addButton.id = `itemAddButton${id}`;
        addButton.className = "itemAdd";
        if(language == "no"){
            addButton.innerText = "Legg til";
        }
        if(language == "en"){
            addButton.innerText = "Add to order";
        }
        addButton.onclick = function () {addToOrder(id)};
        col1.appendChild(addButton);
        itemButtons.appendChild(col1);

        /*
        let addedButton = document.createElement("div");
        //addedButton.id = `item-added-button-${id}`;
        addedButton.id = `itemAddedButton${id}`;
        addedButton.className = "itemAdded";
        addedButton.innerText = "Added to order";
        addedButton.style.display = "none";
        itemButtons.appendChild(addedButton);
        */

        //let countTextBox = getCountBox(id/*, "none"*/);
        //itemButtons.appendChild(countTextBox[0]);
        //itemButtons.appendChild(countTextBox[1]);

        //let upDown = getCountButtons(id/*, "none"*/);
        //itemButtons.appendChild(upDown[0]);
        //itemButtons.appendChild(upDown[1]);
    } 
    else {
        //let countTextBox = getCountBox(id/*, "block"*/);
        //itemButtons.appendChild(countTextBox[0]);
        //itemButtons.appendChild(countTextBox[1]);

        if (type === typeOrder) {
            //let upDown = getCountButtons(id/*, "block"*/);
            //itemButtons.appendChild(upDown[0]);
            //itemButtons.appendChild(upDown[1]);
        }
    }

    itemDiv.appendChild(itemButtons);

    return itemDiv;
}

function getFullMenu() {
    let menu = document.getElementById("Menu");

    for (let i = 0; i < itemNames.length; i++) {
        menu.appendChild(getItem(i, typeFull));
    }

    return menu;
}

function addToOrder(id) {
    let addButton = document.getElementById(`itemAddButton${id}`);
    if(language == "no"){
        addButton.innerText = "Lagt til";
    }
    if(language == "en"){
        addButton.innerText = "Added to order";
    }
    addButton.style.color = "#C91532";
    addButton.style.backgroundColor = "#f2f2f2";
    addButton.style.fontWeight = "bold";
    addButton.onclick = "";
    getCountBox(id);
    getCountButtons(id);
    increaseOrder(id);
}

function increaseOrder(id) {
    let itemCountText = document.getElementById(`itemCountBox${id}`);
    itemCountText.innerHTML = parseInt(itemCountText.innerText) + 1;
}

function decreaseOrder(id) {
    let itemCountText = document.getElementById(`itemCountBox${id}`);
    if(parseInt(itemCountText.innerHTML) > 0){
        itemCountText.innerHTML = parseInt(itemCountText.innerHTML) - 1;
    }
}

function sendOrder() {
    let order = "";

    for (let i = 0; i < itemNames.length; i++) {
        let itemCount = document.getElementById(`itemCountBox${i}`);
        if(itemCount){
            order += itemCount.innerHTML;
        } else {
            order += "0";
        }
    }
    if (order === "00000") {
        // TODO: Respons du må legge noe til i bestillingen
    } else {
        localStorage.setItem("order", order);
        window.location.href = "order.html";
    }
}
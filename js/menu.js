const typeFull = "Full";
const typeOrder = "Order";
const typeReceipt = "Receipt"

const itemNames = [
    "Dirty Fries",
    "Sweet Potato Fries",
    "Fries",
    "Chicken Burger",
    "Cheese Burger",
];

function getName(id) {
    let itemName = document.createElement("h2");
    itemName.id = `item-name-${id}`;
    itemName.className = "itemName";
    itemName.innerText = itemNames[id];
    return itemName
}


const itemDescriptions = [
    "Dirty dirty fries",
    "Sweet sweet potato fries",
    "Normal, just normal fries",
    "Burger but made with chicken",
    "Cheese cheese burger",
];

function getDescription(id) {
    let itemDescription = document.createElement("p");
    itemDescription.id = `item-description-${id}`;
    itemDescription.className = "itemDescription";
    itemDescription.innerText = itemDescriptions[id];
    return itemDescription
}


const itemAllergies = [
    ["E", "G", "W", "M", "B"],
    ["E", "G", "W", "C", "B"],
    ["E", "G", "W"],
    ["E", "G", "W"],
    ["E", "G", "W"],
];

function getAllergies(id) {
    let itemAllergiesList = document.createElement("ul");
    itemAllergiesList.id = `item-allergies-${id}`;
    itemAllergiesList.className = "itemAllergies";
    let allergies = itemAllergies[id];

    for (let i = 0; i < allergies.length; i++) {
        let itemAllergy = document.createElement("li");
        let allergy = allergies[i];
        itemAllergy.id = `item-allergies-${id}-${allergy}`;
        itemAllergy.className = `itemAllergy${allergy}`;
        itemAllergy.innerText = allergy;

        itemAllergiesList.appendChild(itemAllergy);
    }

    return itemAllergiesList
}


const itemPrices = [
    79,
    69,
    49,
    129,
    129,
];

function getPrice(id) {
    let itemPrice = document.createElement("h3");
    itemPrice.id = `item-price-${id}`;
    itemPrice.className = "itemPrice";
    itemPrice.innerText = itemPrices[id] + ",-";
    return itemPrice
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
    itemImage.id = `item-image-${id}`;
    itemImage.className = `itemImage${type}`;
    itemImage.src = "images/" + itemImages[id];
    itemImage.alt = itemNames[id];
    return itemImage
}

function getCountBox(id, display) {
    let itemCountText = document.createElement("p");
    itemCountText.id = `item-count-text-${id}`;
    itemCountText.className = "itemCountText";
    itemCountText.innerText = "How many?";
    itemCountText.style.display = display;

    let itemCountBox = document.createElement("div");
    itemCountBox.id = `item-count-box-${id}`;
    itemCountBox.className = "itemCountBox";
    itemCountBox.innerText = "0";
    itemCountBox.style.display = display;

    return [itemCountText, itemCountBox]
}

function getCountButtons(id, display) {
    let itemCountUp = document.createElement("div");
    itemCountUp.id = `item-count-up-${id}`;
    itemCountUp.className = "itemCountUp";
    itemCountUp.innerText = "+";
    itemCountUp.style.display = display;
    itemCountUp.onclick = increaseOrder(id);

    let itemCountDown = document.createElement("div");
    itemCountDown.id = `item-count-down-${id}`;
    itemCountDown.className = "itemCountDown";
    itemCountDown.innerText = "-";
    itemCountDown.style.display = display;
    itemCountDown.onclick = decreaseOrder(id);

    return [itemCountUp, itemCountDown]
}

function getItem(id, type) {
    let itemDiv = document.createElement("div");
    itemDiv.id = `menu-item-${id}`;
    itemDiv.className = "menuItem";

    itemDiv.appendChild(getImage(id, type));

    let itemInfo = document.createElement("div");
    itemInfo.id = `item-info-${id}`;
    itemInfo.className = "itemInfo";

    itemInfo.appendChild(getName(id));
    itemInfo.appendChild(getPrice(id));
    itemInfo.appendChild(getAllergies(id));
    if (type === typeFull) {
        itemInfo.appendChild(getDescription(id));
    }

    itemDiv.appendChild(itemInfo);

    let itemButtons = document.createElement("div");
    itemButtons.id = `item-buttons-${id}`;
    itemButtons.className = "itemButtons";

    if (type === typeFull) {
        let addButton = document.createElement("div");
        addButton.id = `item-add-button-${id}`;
        addButton.className = "itemAdd";
        addButton.innerText = "Add to order";
        addButton.onclick = addToOrder(id);
        itemButtons.appendChild(addButton);

        let addedButton = document.createElement("div");
        addedButton.id = `item-added-button-${id}`;
        addedButton.className = "itemAdded";
        addedButton.innerText = "Added to order";
        addedButton.style.display = "none";
        itemButtons.appendChild(addedButton);

        let countTextBox = getCountBox(id, "none");
        itemButtons.appendChild(countTextBox[0]);
        itemButtons.appendChild(countTextBox[1]);

        let upDown = getCountButtons(id, "none");
        itemButtons.appendChild(upDown[0]);
        itemButtons.appendChild(upDown[1]);
    } else {
        let countTextBox = getCountBox(id, "block");
        itemButtons.appendChild(countTextBox[0]);
        itemButtons.appendChild(countTextBox[1]);

        if (type === typeOrder) {
            let upDown = getCountButtons(id, "block");
            itemButtons.appendChild(upDown[0]);
            itemButtons.appendChild(upDown[1]);
        }
    }

    itemDiv.appendChild(itemButtons);

    return itemDiv
}

function getFullMenu() {
    let menu = document.getElementById("Menu");

    for (let i = 0; i < itemNames.length; i++) {
        menu.appendChild(getItem(i, typeFull));
    }

    return menu
}


function addToOrder(id) {

}

function increaseOrder(id) {

}

function decreaseOrder(id) {

}

const typeFull = "Full";
const typeOrder = "Order";
// const typeReceipt = "Receipt";

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
    //itemName.id = `item-name-${id}`;
    itemName.id = `itemName${id}`;
    itemName.className = "itemName";
    itemName.innerText = itemNames[id];
    return itemName;
}


function getDescription(id) {
    let itemDescription = document.createElement("p");
    //itemDescription.id = `item-description-${id}`;
    itemDescription.id = `itemDescription${id}`;
    itemDescription.className = "itemDescription";

    if(language === no){
        itemDescription.innerText = itemDescriptionsNO[id];
    }
    if(language === en){
        itemDescription.innerText = itemDescriptionsEN[id];
    }
    return itemDescription;
}

function getAllergies(id) {
    let itemAllergiesList = document.createElement("ul");
    //itemAllergiesList.id = `item-allergies-${id}`;
    itemAllergiesList.id = `itemAllergies${id}`;
    itemAllergiesList.className = "itemAllergies";
    let allergies = itemAllergiesEN[id];

    if(language === no){
        allergies = itemAllergiesNO[id];
    }
    if(language === en){
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
    59,
    59,
    49,
    49,
    49,
    49,
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

function getCountBox(id) {
    let itemCountText = document.createElement("p");
    //itemCountText.id = `item-count-text-${id}`;
    itemCountText.id = `itemCountText${id}`;
    itemCountText.className = "itemCountText";
    if(language === no){
        itemCountText.innerText = "Hvor mange?";
    }
    if(language === en){
        itemCountText.innerText = "How many?";
    }
    let itemCountBox = document.createElement("div");
    //itemCountBox.id = `item-count-box-${id}`;
    itemCountBox.id = `itemCountBox${id}`;
    itemCountBox.className = "itemCountBox";
    itemCountBox.innerText = "0";

    let countCol = document.createElement("div");
    countCol.className = "countCol";
    countCol.id = `itemCount${id}`;
    countCol.appendChild(itemCountText);
    countCol.appendChild(itemCountBox);

    //let itemButtons = document.getElementById(`itemButtons${id}`);
    //itemButtons.appendChild(col1);

    //return [itemCountText, itemCountBox];
    return countCol;
}

function getCountButtons(id /*, display*/) {
    let itemCountUp = document.createElement("div");
    //itemCountUp.id = `item-count-up-${id}`;
    itemCountUp.id = `itemCountUp${id}`;
    itemCountUp.className = "itemCount up";
    itemCountUp.innerText = "+";
    //itemCountUp.style.display = display;
    itemCountUp.onclick = function() {increaseOrder(id)};

    let itemCountDown = document.createElement("div");
    //itemCountDown.id = `item-count-down-${id}`;
    itemCountDown.id = `itemCountDown${id}`;
    itemCountDown.className = "itemCount down";
    itemCountDown.innerText = "-";
    //itemCountDown.style.display = display;
    itemCountDown.onclick = function() {decreaseOrder(id)};

    /*
    let col2 = document.createElement("div");
    col2.className = "countCol2";
    col2.appendChild(itemCountUp);
    col2.appendChild(itemCountDown);

    return [itemCountUp, itemCountDown];
    let itemButtons = document.getElementById(`itemButtons${id}`);
    itemButtons.appendChild(col2);
    */
   return [itemCountUp, itemCountDown];
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
        let countCol = document.createElement("div");
        countCol.className = "countCol";
        countCol.id = `countCol1${id}`;

        let addButton = document.createElement("a");
        //addButton.id = `item-add-button-${id}`;
        addButton.id = `itemAddButton${id}`;
        addButton.className = "itemAdd";
        
        if(language === no){
            addButton.innerText = "Legg til";
        }
        if(language === en){
            addButton.innerText = "Add to order";
        }
        
        addButton.onclick = function () {addToOrder(id)};
        countCol.appendChild(addButton);

        //add buttons to itemButtons
        let [countUp, countDown] = getCountButtons(id);
        let countBox = getCountBox(id);
        itemButtons.appendChild(countDown);
        itemButtons.appendChild(countCol);
        itemButtons.appendChild(countBox);
        itemButtons.appendChild(countUp);
        countUp.style.display = "none";
        countDown.style.display = "none";
        countBox.style.display = "none";

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
    let menu = document.getElementById("menu");

    for (let i = 0; i < itemNames.length; i++) {
        menu.appendChild(getItem(i, typeFull));
    }

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
}

function increaseOrder(id) {
    let itemCountText = document.getElementById(`itemCountBox${id}`);
    itemCountText.innerText = parseInt(itemCountText.innerText) + 1;
}

function decreaseOrder(id) {
    let itemCountText = document.getElementById(`itemCountBox${id}`);
    if(parseInt(itemCountText.innerText) > 0){
        itemCountText.innerText = parseInt(itemCountText.innerText) - 1;
    }
    if(parseInt(itemCountText.innerText) === 0){
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

function sendOrder() {
    let order = "";
    let empty_order = "";

    for (let i = 0; i < itemNames.length; i++) {
        empty_order += "0";
        let itemCount = document.getElementById(`itemCountBox${i}`);
        if(itemCount){
            order += itemCount.innerHTML;
        } else {
            order += "0";
        }
    }
    if (order === empty_order) {
        // TODO: Respons du må legge noe til i bestillingen
    } else {
        localStorage.setItem("order", order);
        window.location.href = "order.html";
    }
}

function getOrder() {
    let order = localStorage.getItem("order");
    let orderDiv = document.getElementById("order");


    for (let i = 0; i < order.length; i++) {
        let amount = parseInt(order.charAt(i));
        if (amount > 0) {
            orderDiv.appendChild(getItem(i, typeOrder));
        }
    }
}
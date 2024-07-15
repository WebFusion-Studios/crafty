// game.js

// Initial elements
let elements = {
    fire: 1,
    water: 1,
    earth: 1,
    air: 1
};

let discoveredElements = { ...elements };
let goldElements = {};
let coins = 0;

// List of potential new elements with prices
const newElementList = [
    {name: "steam", price: 10}, {name: "mud", price: 15}, {name: "dust", price: 20}, 
    {name: "rain", price: 25}, {name: "lightning", price: 30}, {name: "stone", price: 35},
    {name: "plant", price: 40}, {name: "metal", price: 45}, {name: "cloud", price: 50},
    {name: "lava", price: 55}, {name: "sand", price: 60}, {name: "glass", price: 65},
    {name: "crystal", price: 70}, {name: "shadow", price: 75}, {name: "light", price: 80},
    {name: "storm", price: 85}, {name: "ice", price: 90}, {name: "snow", price: 95},
    {name: "fog", price: 100}, {name: "wind", price: 105}, {name: "leaf", price: 110},
    {name: "tree", price: 115}, {name: "flower", price: 120}, {name: "grass", price: 125},
    {name: "beast", price: 130}, {name: "fish", price: 135}, {name: "bird", price: 140},
    {name: "insect", price: 145}, {name: "reptile", price: 150}, {name: "mammal", price: 155},
    {name: "human", price: 160}, {name: "robot", price: 165}, {name: "energy", price: 170},
    {name: "magic", price: 175}, {name: "spirit", price: 180}, {name: "ghost", price: 185},
    {name: "zombie", price: 190}, {name: "vampire", price: 195}, {name: "werewolf", price: 200},
    {name: "dragon", price: 205}, {name: "phoenix", price: 210}, {name: "titan", price: 215},
    {name: "golem", price: 220}, {name: "mermaid", price: 225}, {name: "kraken", price: 230},
    {name: "hydra", price: 235}, {name: "griffin", price: 240}, {name: "unicorn", price: 245},
    {name: "pegasus", price: 250}, {name: "cyclops", price: 255}, {name: "minotaur", price: 260},
    {name: "satyr", price: 265}, {name: "fairy", price: 270}, {name: "elf", price: 275},
    {name: "dwarf", price: 280}, {name: "orc", price: 285}, {name: "troll", price: 290},
    {name: "goblin", price: 295}, {name: "giant", price: 300}, {name: "demon", price: 305},
    {name: "angel", price: 310}, {name: "jewel", price: 315}, {name: "ruby", price: 320},
    {name: "sapphire", price: 325}, {name: "emerald", price: 330}, {name: "diamond", price: 335},
    {name: "opal", price: 340}, {name: "pearl", price: 345}, {name: "amethyst", price: 350},
    {name: "topaz", price: 355}, {name: "turquoise", price: 360}, {name: "obsidian", price: 365},
    {name: "quartz", price: 370}, {name: "agate", price: 375}, {name: "amber", price: 380},
    {name: "beryl", price: 385}, {name: "jade", price: 390}, {name: "lazuli", price: 395},
    {name: "moonstone", price: 400}, {name: "onyx", price: 405}, {name: "peridot", price: 410},
    {name: "zircon", price: 415}, {name: "tanzanite", price: 420}, {name: "alexandrite", price: 425},
    {name: "meteorite", price: 430}, {name: "space", price: 435}, {name: "star", price: 440},
    {name: "planet", price: 445}, {name: "comet", price: 450}, {name: "asteroid", price: 455},
    {name: "galaxy", price: 460}, {name: "nebula", price: 465}, {name: "blackhole", price: 470},
    {name: "universe", price: 475}, {name: "void", price: 480}, {name: "dimension", price: 485},
    {name: "portal", price: 490}, {name: "time", price: 495}, {name: "past", price: 500},
    {name: "present", price: 505}, {name: "future", price: 510}, {name: "eternity", price: 515},
    {name: "infinity", price: 520}, {name: "chaos", price: 525}, {name: "order", price: 530},
    {name: "balance", price: 535}, {name: "alchemy", price: 540}, {name: "potion", price: 545},
    {name: "elixir", price: 550}, {name: "scroll", price: 555}, {name: "rune", price: 560},
    {name: "sigil", price: 565}, {name: "charm", price: 570}, {name: "talisman", price: 575},
    {name: "artifact", price: 580}, {name: "relic", price: 585}, {name: "idol", price: 590},
    {name: "totem", price: 595}, {name: "symbol", price: 600}, {name: "icon", price: 605},
    {name: "myth", price: 610}, {name: "legend", price: 615}, {name: "fable", price: 620},
    {name: "saga", price: 625}, {name: "chronicle", price: 630}, {name: "epic", price: 635},
    {name: "ode", price: 640}, {name: "ballad", price: 645}, {name: "lyric", price: 650},
    {name: "sonnet", price: 655}, {name: "haiku", price: 660}, {name: "tanka", price: 665},
    {name: "limerick", price: 670}, {name: "verse", price: 675}, {name: "stanza", price: 680},
    {name: "rhyme", price: 685}, {name: "prose", price: 690}, {name: "narrative", price: 695},
    {name: "parable", price: 700}
];

// Function to render the inventory
function renderInventory() {
    const inventoryList = document.getElementById('inventoryList');
    inventoryList.innerHTML = '';
    for (let item in elements) {
        let li = document.createElement('li');
        li.textContent = `${item}: ${elements[item]} (Price: ${getPrice(item)})`;
        let sellButton = document.createElement('button');
        sellButton.textContent = 'Sell';
        sellButton.onclick = () => sellElement(item);
        li.appendChild(sellButton);
        inventoryList.appendChild(li);
    }
}

// Function to render discovered elements
function renderDiscoveredElements() {
    const craftingList = document.getElementById('craftingList');
    craftingList.innerHTML = '';
    for (let item in discoveredElements) {
        let li = document.createElement('li');
        li.textContent = `${item} (Price: ${getPrice(item)})`;
        let buyButton = document.createElement('button');
        buyButton.textContent = 'Buy Gold';
        buyButton.onclick = () => buyGoldElement(item);
        li.appendChild(buyButton);
        craftingList.appendChild(li);
    }
}

// Function to render gold inventory
function renderGoldInventory() {
    const goldInventoryList = document.getElementById('goldInventoryList');
    goldInventoryList.innerHTML = '';
    for (let item in goldElements) {
        let li = document.createElement('li');
        li.textContent = `${item}: ${goldElements[item]}`;
        goldInventoryList.appendChild(li);
    }
}

// Function to render combiner options
function renderCombinerOptions() {
    const element1 = document.getElementById('element1');
    const element2 = document.getElementById('element2');
    element1.innerHTML = '<option value="">Select Element</option>';
    element2.innerHTML = '<option value="">Select Element</option>';

    for (let item in discoveredElements) {
        let option1 = document.createElement('option');
        let option2 = document.createElement('option');
        option1.value = item;
        option1.textContent = item;
        option2.value = item;
        option2.textContent = item;
        element1.appendChild(option1);
        element2.appendChild(option2);
    }
}

// Function to combine elements
function combineElements() {
    const element1 = document.getElementById('element1').value;
    const element2 = document.getElementById('element2').value;

    if (element1 && element2 && element1 !== element2) {
        const newElement = generateNewElement();
        if (!discoveredElements[newElement]) {
            discoveredElements[newElement] = 1;
            playUnlockSound();
        } else {
            discoveredElements[newElement] += 1;
        }
        elements[newElement] = (elements[newElement] || 0) + 1;
        renderInventory();
        renderDiscoveredElements();
        renderCombinerOptions();
    } else {
        alert('Select two different elements to combine.');
    }
}

// Function to generate a new element
function generateNewElement() {
    let newElement = newElementList[Math.floor(Math.random() * newElementList.length)].name;
    // Ensure uniqueness in discovered elements
    while (discoveredElements[newElement]) {
        newElement = newElementList[Math.floor(Math.random() * newElementList.length)].name;
    }
    return newElement;
}

// Function to play unlock sound
function playUnlockSound() {
    const unlockSound = document.getElementById('unlockSound');
    unlockSound.play();
}

// Function to get the price of an element
function getPrice(element) {
    for (let el of newElementList) {
        if (el.name === element) {
            return el.price;
        }
    }
    return 0;
}

// Function to sell an element
function sellElement(element) {
    if (elements[element] > 0) {
        elements[element] -= 1;
        coins += getPrice(element);
        document.getElementById('coinCount').textContent = coins;
        if (elements[element] === 0) {
            delete elements[element];
        }
        renderInventory();
    }
}

// Function to buy a gold element
function buyGoldElement(element) {
    const price = getPrice(element) * 10; // Gold element price is 10 times the normal price
    if (coins >= price) {
        coins -= price;
        document.getElementById('coinCount').textContent = coins;
        goldElements[element] = (goldElements[element] || 0) + 1;
        renderGoldInventory();
    } else {
        alert('Not enough coins to buy this gold element.');
    }
}

// Initial render
renderInventory();
renderDiscoveredElements();
renderCombinerOptions();
renderGoldInventory();

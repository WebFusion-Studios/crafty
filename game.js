// game.js

// Initial elements
let elements = {
    fire: 1,
    water: 1,
    earth: 1,
    air: 1
};

let discoveredElements = { ...elements };

// List of potential new elements
const newElementList = [
    "steam", "mud", "dust", "rain", "lightning", "stone", "plant", "metal", "cloud",
    "lava", "sand", "glass", "crystal", "shadow", "light", "storm", "ice", "snow",
    "fog", "wind", "leaf", "tree", "flower", "grass", "beast", "fish", "bird", "insect",
    "reptile", "mammal", "human", "robot", "energy", "magic", "spirit", "ghost", "zombie",
    "vampire", "werewolf", "dragon", "phoenix", "titan", "golem", "mermaid", "kraken", "hydra",
    "griffin", "unicorn", "pegasus", "cyclops", "minotaur", "satyr", "fairy", "elf", "dwarf",
    "orc", "troll", "goblin", "giant", "demon", "angel", "jewel", "ruby", "sapphire", "emerald",
    "diamond", "opal", "pearl", "amethyst", "topaz", "turquoise", "obsidian", "quartz", "agate",
    "amber", "beryl", "jade", "lazuli", "moonstone", "onyx", "peridot", "zircon", "tanzanite",
    "alexandrite", "meteorite", "space", "star", "planet", "comet", "asteroid", "galaxy", "nebula",
    "blackhole", "universe", "void", "dimension", "portal", "time", "past", "present", "future",
    "eternity", "infinity", "chaos", "order", "balance", "alchemy", "potion", "elixir", "scroll",
    "rune", "sigil", "charm", "talisman", "artifact", "relic", "idol", "totem", "symbol", "icon",
    "myth", "legend", "fable", "saga", "chronicle", "epic", "ode", "ballad", "lyric", "sonnet",
    "haiku", "tanka", "limerick", "verse", "stanza", "rhyme", "prose", "narrative", "parable"
];

// Function to render the inventory
function renderInventory() {
    const inventoryList = document.getElementById('inventoryList');
    inventoryList.innerHTML = '';
    for (let item in elements) {
        let li = document.createElement('li');
        li.textContent = `${item}: ${elements[item]}`;
        inventoryList.appendChild(li);
    }
}

// Function to render discovered elements
function renderDiscoveredElements() {
    const craftingList = document.getElementById('craftingList');
    craftingList.innerHTML = '';
    for (let item in discoveredElements) {
        let li = document.createElement('li');
        li.textContent = item;
        craftingList.appendChild(li);
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
    let newElement = newElementList[Math.floor(Math.random() * newElementList.length)];
    // Ensure uniqueness in discovered elements
    while (discoveredElements[newElement]) {
        newElement = newElementList[Math.floor(Math.random() * newElementList.length)];
    }
    return newElement;
}

// Function to play unlock sound
function playUnlockSound() {
    const unlockSound = document.getElementById('unlockSound');
    unlockSound.play();
}

// Initial render
renderInventory();
renderDiscoveredElements();
renderCombinerOptions();

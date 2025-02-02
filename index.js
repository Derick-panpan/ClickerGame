let gem = document.querySelector('.gem-cost')
let clickButton = document.querySelector('.default')
let upgradeBotButton = document.querySelector('.upgrade-bot');
let botCost = document.querySelector('.bot-cost');
let botLevel = document.querySelector('.bot-level');
let autoClickers = 0;


function incrementGem() {
    gem.innerHTML = parseFloat(gem.innerHTML) + 1;
}

function buyBotUpgrade() {
    let currentGems = parseFloat(gem.innerHTML);
    let cost = parseFloat(botCost.innerHTML);

    if (currentGems >= cost) {
        gem.innerHTML = currentGems - cost;
        autoClickers += 1;
        botCost.innerHTML = Math.floor(cost * 1.5);
        botLevel.innerHTML = parseInt(botLevel.innerHTML) + 1;
        startAutoClicker();
    } else {
        alert('Not enough gems to buy bot');
    }
}

function startAutoClicker() {
    setInterval(() => {
        incrementGem();
    }, 1000);
}


clickButton.addEventListener('click', incrementGem)
upgradeBotButton.addEventListener('click', buyBotUpgrade);
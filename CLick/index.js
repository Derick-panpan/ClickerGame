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


clickButton.addEventListener('click', incrementGem);
upgradeBotButton.addEventListener('click', buyBotUpgrade);

document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');
    const originalSrc = logo.src;
    const hoverSrc = './assets/Emoji_uh.png';

    logo.addEventListener('mouseover', () => {
        logo.src = hoverSrc;
    });

    logo.addEventListener('mouseout', () => {
        logo.src = originalSrc;
    }); 
});

function checkGemCount() {
    let currentGems = parseFloat(gem.innerHTML);
    if (currentGems >= 10) {
        showModal();
    }
}

function showModal() {
    const modal = document.getElementById('gemModal');
    const span = document.getElementsByClassName('close')[0];

    modal.style.display = 'block';

    span.onclick = () => {
        modal.style.display = 'none';
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

clickButton.addEventListener('click', incrementGem);
upgradeBotButton.addEventListener('click', buyBotUpgrade);
const coin = document.querySelector('#coin')
let scoreEl = document.querySelector('#score')
const buyUpgrade = document.querySelector('#buyUpgrade')
const message = document.querySelector('#message')
const buyBoost = document.querySelector('#buyBoost')

let score = 1000
let clickValue = 1
let upgradeCost = 100
let boostCost = 50
let boostDuration = 5000

coin.addEventListener('click', () => {
    score += clickValue
   scoreEl.innerText = score
})


buyUpgrade.addEventListener('click', () => {
    if(score >= upgradeCost) {
        score -= upgradeCost
        scoreEl.innerText = score 
        clickValue++
        upgradeCost = Math.floor(upgradeCost * 1.5)
        buyUpgrade.innerText = `Купить улучшение (${upgradeCost} коинов)`
        message.innerText = 'Вы успешно купили улучшение⭐'
    }
    else {
        message.innerText = 'Вы бомж вам не хватает 😂😂😂😂'

    }

})

buyBoost.addEventListener('click', () => {
    if(score >= boostCost) {
        score -= boostCost
        clickValue *= 2
        boostCost = Math.floor(upgradeCost * 1.5)
        buyBoost.innerText = `Купить boost (${boostCost} коинов)`
        message.innerText = 'Вы успешно купили boost⭐'
        
        setTimeout(() => {
            clickValue = 1
            message.innerText = 'Ваш буст закончился😥'
        }, boostDuration);
    }
    else {
        message.innerText = 'Недостаточно очков для буста('
    }
})
let money = 0;
let upgradePrice = 50;
let upgrades = 0;
let upgradePriceAutoclicker = 125;
let upgradesAutoclicker = 0;
let ammount = 1;
let ammountAutoclicker = 0;

function cheat() {
    if (money < 99999) {
        money = + 99999;
        updateMoney();
    }
}

function addMoney(ammount) {
    money = money + ammount;
    updateMoney();
}

function intervalMoney() {
    money = money + ammountAutoclicker;
    if (ammountAutoclicker > 0) {
        document.getElementById("lgbtClick").style.color = "rgba(255,255,255,1)";
        setTimeout(clearFont, 200);
    }
    setTimeout(intervalMoney, 1000);
    updateMoney();
}

function clearFont() {
    document.getElementById("lgbtClick").style.color = "rgba(255,255,255,0)";
}

function buyAutoclicker1() {
    if (money >= upgradePriceAutoclicker) {
        ammountAutoclicker = ammountAutoclicker + 1;
        money = money - upgradePriceAutoclicker;
        upgradePriceAutoclicker = upgradePriceAutoclicker + 150;
        upgradesAutoclicker++;
        document.getElementById("upgradePriceAutoclicker").innerHTML = upgradePriceAutoclicker;
        document.getElementById("upgradesAutoclicker").innerHTML = upgradesAutoclicker;
    }
    updateMoney();
}

function buyUpgrade1() {
    if (money >= upgradePrice) {
        ammount = ammount + 1;
        money = money - upgradePrice;
        upgradePrice = upgradePrice + 80;
        upgrades++;
        document.getElementById("upgradePrice").innerHTML = upgradePrice;
        document.getElementById("upgrades").innerHTML = upgrades;
        updateMoney();
    }
}

function updateMoney() {
    document.getElementById("money").innerHTML = money;
}
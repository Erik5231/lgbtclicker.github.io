let money = 0;

let upgradePrice = 50;
let upgrades = 0;
let ammount = 1;

let upgradePriceAutoclicker = 125;
let upgradesAutoclicker = 0;
let ammountAutoclicker = 0;

let inadaptablePrice = 0;

let upgradePricegender = 1500;
let upgradesGender = 0;
let ammountAutoclickergender = 0;

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
        upgradePriceAutoclicker = upgradePriceAutoclicker + 160;
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

function buyInadaptable() {
    if(money >= inadaptablePrice) {
        money = money - 100;
        document.getElementById("inadaptablePrice").innerHTML = inadaptablePrice;
        updateMoney();
    }
}

function buyGender() {
    if(money >= upgradePricegender) {
        ammountAutoclickergender = ammountAutoclickergender + 1;
        money = money - upgradePricegender;
        upgradePricegender = upgradePricegender + 1750;
        upgradesGender++;
        document.getElementById("upgradePricegender").innerHTML = upgradePricegender;
        document.getElementById("upgradesGender").innerHTML = upgradesGender;
    }
    updateMoney();
}

function intervalMoney2 () {
    money = money + ammountAutoclickergender;
    if (ammountAutoclickergender > 0) {
        document.getElementById("lgbtClick").style.color = "rgba(255,255,255,1)";
        setTimeout(clearFont, 200);
    }
    setTimeout(intervalMoney2, 1000);
    updateMoney();
}
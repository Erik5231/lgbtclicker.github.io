let money = 0;

let upgradePrice = 50;
let upgrades = 0;
let ammount = 1;
let ammountAutoqueer = 0;

let upgradePriceAutoclicker = 125;
let upgradesAutoclicker = 0;
let ammountAutoclicker = 0;

let upgradePricegender = 1500;
let upgradesGender = 0;
let ammountAutoclickergender = 0;

let menuSwitch = 0;


function changeText() { 
   let change = document.getElementById("cheatButton");
   change.innerHTML = "We appreciate your support!";
}

function cheat() {
        money = + 99999;
        updateMoney();
        var audio = new Audio('dobryDen.mp3');
        audio.play();
}

function addMoney(ammount) {
    money = money + ammount;
    updateMoney();
}

function intervalMoney() {
    money = money + ammountAutoclicker + ammountAutoclickergender + ammountAutoqueer;
    if (ammountAutoclicker > 0 || ammountAutoclickergender > 0 || ammountAutoqueer > 0) {
        document.getElementById("lgbtClick").style.color = "rgba(255,255,255,1)";
        setTimeout(clearFont, 200);
    }
    setTimeout(intervalMoney, 400);
    updateMoney();
}

/*
function intervalMoney2 () {
    money = money + ammountAutoclickergender;
    if (ammountAutoclickergender > 0) {
        document.getElementById("lgbtClick").style.color = "rgba(255,255,255,1)";
        setTimeout(clearFont, 200);
    }
    setTimeout(intervalMoney2, 1000);
    updateMoney();
}
*/

function clearFont() {
    document.getElementById("lgbtClick").style.color = "rgba(255,255,255,0)";
}

function buyAutoclicker1() {
    if (money >= upgradePriceAutoclicker) {
        ammountAutoclicker = ammountAutoclicker + 5;
        money = money - upgradePriceAutoclicker;
        upgradePriceAutoclicker = upgradePriceAutoclicker + 240;
        upgradesAutoclicker++;
        document.getElementById("upgradePriceAutoclicker").innerHTML = upgradePriceAutoclicker;
        document.getElementById("upgradesAutoclicker").innerHTML = upgradesAutoclicker;
    }
    updateMoney();
}

function buyUpgrade1() {
    if (money >= upgradePrice) {
        ammount = ammount + 1;
        ammountAutoqueer = ammountAutoqueer + 1;
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
        money = money - 100;
        var audio = new Audio('ja.mp3');
        audio.play();
        updateMoney();
}

function buyGender() {
    if(money >= upgradePricegender) {
        ammountAutoclickergender = ammountAutoclickergender + 25;
        money = money - upgradePricegender;
        upgradePricegender = upgradePricegender + 2250;
        upgradesGender++;
        document.getElementById("upgradePricegender").innerHTML = upgradePricegender;
        document.getElementById("upgradesGender").innerHTML = upgradesGender;
    }
    updateMoney();
}

function menuShow() {
    if (menuSwitch === 0) {
        document.getElementById("store").style.left = "0";
        document.getElementById("burgir").style.left = "0";
        menuSwitch = 1;
    } else {
        document.getElementById("store").style.left = "100%";
        document.getElementById("burgir").style.left = "-64px";
        menuSwitch = 0;
    }
}

/*function playAudio() {
    var audio = new Audio('dobryDen.mp3');
    audio.play();
}*/

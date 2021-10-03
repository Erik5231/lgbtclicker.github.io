 let money = 0;

 let upgradePrice = 50;
 let upgrades = 0;
 let ammount = 1;
 let ammountAutoqueer = 0;

 let upgradePriceAutoclicker = 350;
 let upgradesAutoclicker = 0;
 let ammountAutoclicker = 0;

 let upgradePricegender = 2250;
 let upgradesGender = 0;
 let ammountAutoclickergender = 0;

 let multiplier = 1;

 let qps = 0 * multiplier;
 let qpc = 1 * multiplier;
 let multi = 1;

 let upgradePricemulti = 1000000;
 let upgradesMultiplier = 0;

 let turboPrice = 10;

 let clicks = 0;


 let menuSwitch = 0;



function changeText() { 
    change = document.getElementById("cheatButton");
   change.innerHTML = "We appreciate your support!";
}

function cheat() {
        money = + 9999999;
        updateMoney();
        var audio = new Audio('dobryDen.mp3');
        audio.play();
}

function addMoney(ammount) {
    money = money + ammount;
    clicks++;
    updateMoney();
    QPS();
}

function intervalMoney() {
    money = money + ammountAutoclicker + ammountAutoclickergender + ammountAutoqueer;
    if (ammountAutoclicker > 0 || ammountAutoclickergender > 0 || ammountAutoqueer > 0) {
        document.getElementById("lgbtClick").style.color = "rgba(255,255,255,1)";
        setTimeout(clearFont, 200);
    }
    setTimeout(intervalMoney, 1000);
    updateMoney();
    save();
}


/*function bezdekMode () {
    money = money + bezdekBooster;
    if (bezdekBooster > 0) {
    }
    setTimeout(bezdekMode, 10);
    updateMoney();
}
*/

function clearFont() {
    document.getElementById("lgbtClick").style.color = "rgba(255,255,255,0)";
}

function buyAutoclicker1() {
    if (money >= upgradePriceAutoclicker) {
        ammountAutoclicker = ammountAutoclicker + 10 * multiplier;
        money = money - upgradePriceAutoclicker;
        upgradePriceAutoclicker = upgradePriceAutoclicker + 380;
        upgradesAutoclicker++;
        document.getElementById("upgradePriceAutoclicker").innerHTML = upgradePriceAutoclicker;
        document.getElementById("upgradesAutoclicker").innerHTML = upgradesAutoclicker;
        qps = qps + 5;
    } else {
        showRadek();
    }
    updateMoney();
    QPS();
}

function buyUpgrade1() {
    if (money >= upgradePrice) {
        ammount = ammount + 1*multiplier;
        ammountAutoqueer = ammountAutoqueer + 1*multiplier;
        money = money - upgradePrice;
        upgradePrice = upgradePrice + 205;
        upgrades++;
        document.getElementById("upgradePrice").innerHTML = upgradePrice;
        document.getElementById("upgrades").innerHTML = upgrades;
        qpc = qpc + 1;
        qps = qps + 1;
        updateMoney();
        QPS();
        multi();
    } else {
        showRadek();
    }
}

function updateMoney() {
    document.getElementById("money").innerHTML = money;
    document.getElementById("money2").innerHTML = money;
}

function buyInadaptable() {
        money = money - 100;
        var audio = new Audio('ja.mp3');
        audio.play();
        updateMoney();
        QPS();
}

function buyGender() {
    if(money >= upgradePricegender) {
        ammountAutoclickergender = ammountAutoclickergender + 25*multiplier;
        money = money - upgradePricegender;
        upgradePricegender = upgradePricegender + 2550;
        upgradesGender++;
        ammount = ammount + 5;
        document.getElementById("upgradePricegender").innerHTML = upgradePricegender;
        document.getElementById("upgradesGender").innerHTML = upgradesGender;
        qps = qps + 20;
        qpc = qpc + 5;
    } else {
        showRadek();
    }
    updateMoney();
    QPS();
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

function QPS() {
    document.getElementById("qps").innerHTML = qps*multiplier;
    document.getElementById("qpc").innerHTML = qpc;
    document.getElementById("qps2").innerHTML = qps*multiplier;
    document.getElementById("qpc2").innerHTML = qpc;
    document.getElementById("multi").innerHTML = multiplier;
    document.getElementById("multi2").innerHTML = multiplier;
    document.getElementById("clicks").innerHTML = clicks;
    document.getElementById("clicks2").innerHTML = clicks;
}

function showRadek() {
    document.getElementById("raderror").style.display = "inline";
    document.getElementById("raderror").style.opacity = "1";
    var audio = new Audio('perkele.mp3');
    audio.play();
}

function hideRadek() {
    document.getElementById("raderror").style.display = "none";
    document.getElementById("raderror").style.opacity = "0";
}

function multiply() {
    if(money >= upgradePricemulti)
    {
     money = 0;
     multiplier = multiplier + 0.5;
     upgradesMultiplier++;

     upgradePrice = 50;
     upgrades = 0;
     ammount = 1 * multiplier;
     ammountAutoqueer = 0;

     upgradePriceAutoclicker = 350;
     upgradesAutoclicker = 0;
     ammountAutoclicker = 0;

     upgradePricegender = 2250;
     upgradesGender = 0;
     ammountAutoclickergender = 0;

     qps = 0 * multiplier;
     qpc = 1 * multiplier;
     

    

     upgradePricemulti = 1000000;
     document.getElementById("upgradesMultiplier").innerHTML = upgradesMultiplier;
     document.getElementById("upgradePricemulti").innerHTML = upgradePricemulti;
     document.getElementById("upgradePricegender").innerHTML = upgradePricegender;
     document.getElementById("upgradesGender").innerHTML = upgradesGender;
     document.getElementById("upgradePrice").innerHTML = upgradePrice;
     document.getElementById("upgrades").innerHTML = upgrades;
     document.getElementById("upgradePriceAutoclicker").innerHTML = upgradePriceAutoclicker;
     document.getElementById("upgradesAutoclicker").innerHTML = upgradesAutoclicker;
    } else {
        showRadek();
    }
    updateMoney();
    QPS();
}

/*function playAudio() {
    var audio = new Audio('dobryDen.mp3');
    audio.play();
}*/



function save() {
    localStorage.setItem("earnedMoney", money);
    localStorage.setItem("upgradePrice", upgradePrice);
    localStorage.setItem("upgrades", upgrades);
    localStorage.setItem("ammount", ammount);
    localStorage.setItem("ammountAutoqueer", ammountAutoqueer);
    localStorage.setItem("upgradePriceAutoclicker", upgradePriceAutoclicker);
    localStorage.setItem("upgradesAutoclicker", upgradesAutoclicker);
    localStorage.setItem("ammountAutoclicker", ammountAutoclicker);
    localStorage.setItem("upgradePricegender", upgradePricegender);
    localStorage.setItem("upgradesGender", upgradesGender);
    localStorage.setItem("ammountAutoclickergender", ammountAutoclickergender);
    localStorage.setItem("qps", qps);
    localStorage.setItem("qpc", qpc);
}

function load() {
    money = localStorage.getItem("earnedMoney");
    money = parseInt(money);
    upgradePrice = localStorage.getItem("upgradePrice");
    upgradePrice = parseInt(upgradePrice);
    upgrades = localStorage.getItem("upgrades");
    upgrades = parseInt(upgrades);
    ammount = localStorage.getItem("ammount");
    ammount = parseInt(ammount);
    ammountAutoqueer = localStorage.getItem("ammountAutoqueer");
    ammountAutoqueer = parseInt(ammountAutoqueer);
    upgradePriceAutoclicker = localStorage.getItem("upgradePriceAutoclicker");
    upgradePriceAutoclicker = parseInt(upgradePriceAutoclicker);
    upgradesAutoclicker = localStorage.getItem("upgradesAutoclicker");
    upgradesAutoclicker = parseInt(upgradesAutoclicker);
    ammountAutoclicker = localStorage.getItem("ammountAutoclicker");
    ammountAutoclicker = parseInt(ammountAutoclicker);
    upgradePricegender = localStorage.getItem("upgradePricegender");
    upgradePricegender = parseInt(upgradePricegender);
    upgradesGender = localStorage.getItem("upgradesGender");
    upgradesGender = parseInt(upgradesGender);
    ammountAutoclickergender = localStorage.getItem("ammountAutoclickergender");
    ammountAutoclickergender = parseInt(ammountAutoclickergender);
    qps = localStorage.getItem("qps");
    qps = parseInt(qps);
    qpc = localStorage.getItem("qpc");
    qpc = parseInt(qpc);
    updateMoney();
    QPS();
}

function turboStart() {
    turbo = setInterval(function() {
            addMoney(ammount);
    }, 4);
}

function turboEnd() {
    clearInterval(turbo);;
}
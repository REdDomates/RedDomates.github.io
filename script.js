const inputEnDOM = document.getElementById("inputEn");
const inputTrDOM = document.getElementById("inputTr");
const infoDOM = document.getElementById("info");
const warningDOM = document.getElementById("warning");
const tempTimesObjectList = [];
const timesObjectList = [];
let lastObject;
let displayObject;

function TimesInfo(enName, trName) {
    this.enName = enName;
    this.trName = trName;
    this.count = 0;
}

const temporaryRimes = {
    presentSimple: new TimesInfo("present simple", "genis zaman"),
    presentContinuous: new TimesInfo("present continuous", "simdiki zaman"),
    pastContinuous: new TimesInfo(
        "past continuous",
        "simdiki zamanin hikayesi"
    ),
    presentPerfectSimple: new TimesInfo(
        "present perfect simple",
        "yakin gecmis zaman"
    ),
    presentPerfectContinuous: new TimesInfo(
        "present perfect continuous",
        "sureklilik belirten yakin gecmis zaman"
    ),
    pastSimple: new TimesInfo("past simple", "gecmis zaman"),
    pastPerfectSimple: new TimesInfo(
        "past perfect simple",
        "onceki gecmis zaman"
    ),
    pastPerfectContiuous: new TimesInfo(
        "past perfect continuous",
        "misli gecmis zaman"
    ),
    futureSimple: new TimesInfo("future simple will", "will gelecek zaman"),
    nearFuture: new TimesInfo("near future", "yakin gelecek zaman"),
    futureContinuous: new TimesInfo(
        "future continuous",
        "gelecektedi simdiki zaman"
    ),
    futurePerfectSimple: new TimesInfo(
        "future perfect simple",
        "gelecekteki bitmis zaman"
    ),
};

for (const i in temporaryRimes) {
    temporaryRimes[i];
    tempTimesObjectList.push(temporaryRimes[i]);
}

function display() {
    while (true) {
        displayObject = getRandomTimeObject();
        if(displayObject.count < 30)
            break;
    }
    infoDOM.innerHTML = displayObject.enName;
}

function readInputs() {
    if (inputAccuracyCheck(inputEnDOM.value, inputTrDOM.value)) {
        displayObject.count += 1;
        console.log(displayObject.count);
        if (lastObject.count > 15) {
            addNewObject();
        }
        console.log(displayObject);
        display(displayObject.enName);
    } else {
        displayObject.count -= 1;
        warningDOM.style.display = "block";
        warningDOM.children[1].innerHTML = displayObject.trName;

        setTimeout(function () {
            warningDOM.style.display = "none";
        }, 5000);
    }
    inputEnDOM.value = "";
    inputTrDOM.value = "";
    inputEnDOM.focus();
    display();
}

function inputAccuracyCheck(enText, trText) {
    if (enText == displayObject.enName && trText == displayObject.trName) {
        return true;
    } else {
        return false;
    }
}

function getRandomTimeObject() {
    return timesObjectList[
        Math.round(Math.random() * (timesObjectList.length - 1))
    ];
}

function addNewObject() {
    if (tempTimesObjectList.length > 0) {
        timesObjectList.unshift(tempTimesObjectList.shift());
        lastObject = timesObjectList[0];
    }
}

timesObjectList.unshift(tempTimesObjectList.shift());
lastObject = timesObjectList[0];

displayObject = timesObjectList[0];
display();

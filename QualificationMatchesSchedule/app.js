// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
//ref(): to refer to the targeted database
//push(): to save values to database
//onValue(): to get values from database
//remove(): to remove values from database

// Follow this pattern to import other Firebase services
    // import {} from "https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-analytics.js";
    // import {} from "https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-app-check.js";
    // import {} from "https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-auth.js";
    // import {} from "https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-functions.js";
    // import {} from "https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-firestore.js";
    // import {} from "https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-storage.js";
    // import {} from "https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-performance.js";
    // import {} from "https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-remote-config.js";
    // import {} from "https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-messaging.js";
    // import {} from "https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-database.js";


const appSettings = {
    databaseURL: "https://scoutingapp-e16c4-default-rtdb.firebaseio.com/"
}
      
// Initialize Firebase
const app = initializeApp(appSettings);

//Connects database to app
const database = getDatabase(app);

//Refering to each folders in database and store in variables
const qualTime = ref(database, "qualSchedule/Time");
const qualMatch = ref(database, "qualSchedule/Match");
const qualRed1 = ref(database, "qualSchedule/Red1");
const qualRed2 = ref(database, "qualSchedule/Red2");
const qualRed3 = ref(database, "qualSchedule/Red3");
const qualBlue1 = ref(database, "qualSchedule/Blue1");
const qualBlue2 = ref(database, "qualSchedule/Blue2");
const qualBlue3 = ref(database, "qualSchedule/Blue3");

const tbody = document.getElementById("tbody");
const tr = document.getElementsByClassName("tr");
const removeRowButton = document.getElementById("removeRowButton");
const saveButton = document.getElementById("saveButton");

let rowCount = 0;

//TODO: access folders from outside path, and insert link
//TODO: make sure table rows and rowCount are saved and printed after user exit
//TODO: if time >= localTime, then change color --see HTML JavaScript w3schools

//Codes for saveButton: prints inputs to row below and add row
saveButton.addEventListener("click", function() {
    console.log("save_"+(rowCount));

    saveTime();
    // saveLink();
    saveMatchNum();
    saveRed1();
    saveRed2();
    saveRed3();
    saveBlue1();
    saveBlue2();
    saveBlue3();
});

//Codes for removeRowButton: removes last printed row
removeRowButton.addEventListener("click", function() {
    if(tr.length > 1){
        let desigRow = tr[tr.length - 2];
        console.log(desigRow.parentNode.removeChild(desigRow));
        //rowCount--; //Somehow leaving this out got it work, but row number kept going.
        console.log("remove row"+(rowCount));
    }
});

function saveTime() {
    let timeInput = document.getElementById("timeInput").value;
    push(qualTime, timeInput);

    onValue(qualTime, function(snapshot) {
    let timeArray = Object.values(snapshot.val());
    console.log(timeArray[rowCount])
    document.getElementById("timeInput_"+(rowCount)).innerHTML = timeArray[rowCount];
    });
}

function saveMatchNum() {
    let matchInput = document.getElementById("matchInput").value;
    push(qualMatch, matchInput);

    onValue(qualMatch, function(snapshot) {
    let matchArray = Object.values(snapshot.val());
    document.getElementById("matchInput_"+(rowCount)).innerHTML = matchArray[rowCount];
    });
}

function saveRed1() {
    let red1 = document.getElementById("red1").value;
    push(qualRed1, red1);

    onValue(qualRed1, function(snapshot) {
    let red1Array = Object.values(snapshot.val());
    document.getElementById("red1_"+(rowCount)).innerHTML = red1Array[rowCount];
    });
    
}

function saveRed2() {
    let red2 = document.getElementById("red2").value;
    push(qualRed2, red2);

    onValue(qualRed2, function(snapshot) {
    let red2Array = Object.values(snapshot.val());
    document.getElementById("red2_"+(rowCount)).innerHTML = red2Array[rowCount];
    });
}

function saveRed3() {
    let red3 = document.getElementById("red3").value;
    push(qualRed3, red3);

    onValue(qualRed3, function(snapshot) {
    let red3Array = Object.values(snapshot.val());
    document.getElementById("red3_"+(rowCount)).innerHTML = red3Array[rowCount];
    });
}

function saveBlue1() {
    let blue1 = document.getElementById("blue1").value;
    push(qualBlue1, blue1);

    onValue(qualBlue1, function(snapshot) {
    let blue1Array = Object.values(snapshot.val());
    document.getElementById("blue1_"+(rowCount)).innerHTML = blue1Array[rowCount];
    });
}

function saveBlue2() {
    let blue2 = document.getElementById("blue2").value;
    push(qualBlue2, blue2);

    onValue(qualBlue2, function(snapshot) {
    let blue2Array = Object.values(snapshot.val());
    document.getElementById("blue2_"+(rowCount)).innerHTML = blue2Array[rowCount];
    });
}

function saveBlue3() {
    let blue3 = document.getElementById("blue3").value;
    push(qualBlue3, blue3);

    onValue(qualBlue3, function(snapshot) {
    let blue3Array = Object.values(snapshot.val());
    document.getElementById("blue3_"+(rowCount)).innerHTML = blue3Array[rowCount];
    });
}

function addEmptyRow() {
    tbody.innerHTML += `
    <tr class="tr">
        <td class = "time" id="timeInput_${rowCount + 1}">
        </td>
        <td class = "matchNumber" id="matchInput_${rowCount + 1}" >
        </td>
        <td class = "redAlliance" id="red1_${rowCount + 1}">
        </td>
        <td class = "redAlliance" id="red2_${rowCount + 1}">
        </td>
        <td class = "redAlliance" id="red3_${rowCount + 1}">
        </td>
        <td class = "blueAlliance" id="blue1_${rowCount + 1}">
        </td>
        <td class = "blueAlliance" id="blue2_${rowCount + 1}">
        </td>
        <td class = "blueAlliance" id="blue3_${rowCount + 1}">
        </td>
    </tr>`;  
    rowCount++;
}

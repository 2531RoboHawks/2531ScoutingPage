// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getDatabase, ref, push, onValue, update, remove } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
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
const qualTable = ref(database, "qualSchedule/Table")
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
const addRowButton = document.getElementById("addRowButton");
const saveButton = document.getElementById("saveButton");


//TODO: push tbody to database and make values show in desig place
//TODO: add a delete function that deletes the whole table
//TODO: if time >= localTime, then change color --see HTML JavaScript w3schools

//Codes for saveButton: prints inputs to row below and add row
saveButton.addEventListener("click", function() {
    console.log("save_"+(tr.length - 1));

    saveTime();
    saveMatchNum();
    saveRed1();
    saveRed2();
    saveRed3();
    saveBlue1();
    saveBlue2();
    saveBlue3();
});

//Codes for removeRowButton: removes last row
removeRowButton.addEventListener("click", function() {
    if(tr.length > 1){
        let desigRow = tr[tr.length - 2];
        console.log(desigRow.parentNode.removeChild(desigRow));
        console.log("remove row"+(tr.length - 1));
    }
});

addRowButton.addEventListener("click", function() {
    addEmptyRow();
    console.log(tbody.innerHTML);
})

function saveTime() {
    let timeInput = document.getElementById("timeInput").value;
    push(qualTime, timeInput);

    onValue(qualTime, function(snapshot) {
    let timeArray = Object.values(snapshot.val());
    document.getElementById("timeInput_"+(tr.length - 1)).innerHTML = timeArray[tr.length - 1];
    });
}

function saveMatchNum() {
    let matchInput = document.getElementById("matchInput").value;
    push(qualMatch, matchInput);

    onValue(qualMatch, function(snapshot) {
    let matchArray = Object.values(snapshot.val());
    document.getElementById("matchInput_"+(tr.length - 1)).innerHTML = matchArray[tr.length - 1];
    });
}

function saveRed1() {
    let red1 = document.getElementById("red1").value;
    push(qualRed1, red1);

    onValue(qualRed1, function(snapshot) {
    let red1Array = Object.values(snapshot.val());
    document.getElementById("red1_"+(tr.length - 1)).innerHTML = red1Array[tr.length - 1];
    });
    
}

function saveRed2() {
    let red2 = document.getElementById("red2").value;
    push(qualRed2, red2);

    onValue(qualRed2, function(snapshot) {
    let red2Array = Object.values(snapshot.val());
    document.getElementById("red2_"+(tr.length - 1)).innerHTML = red2Array[tr.length - 1];
    });
}

function saveRed3() {
    let red3 = document.getElementById("red3").value;
    push(qualRed3, red3);

    onValue(qualRed3, function(snapshot) {
    let red3Array = Object.values(snapshot.val());
    document.getElementById("red3_"+(tr.length - 1)).innerHTML = red3Array[tr.length - 1];
    });
}

function saveBlue1() {
    let blue1 = document.getElementById("blue1").value;
    push(qualBlue1, blue1);

    onValue(qualBlue1, function(snapshot) {
    let blue1Array = Object.values(snapshot.val());
    document.getElementById("blue1_"+(tr.length - 1)).innerHTML = blue1Array[tr.length - 1];
    });
}

function saveBlue2() {
    let blue2 = document.getElementById("blue2").value;
    push(qualBlue2, blue2);

    onValue(qualBlue2, function(snapshot) {
    let blue2Array = Object.values(snapshot.val());
    document.getElementById("blue2_"+(tr.length - 1)).innerHTML = blue2Array[tr.length - 1];
    });
}

function saveBlue3() {
    let blue3 = document.getElementById("blue3").value;
    push(qualBlue3, blue3);

    onValue(qualBlue3, function(snapshot) {
    let blue3Array = Object.values(snapshot.val());
    document.getElementById("blue3_"+(tr.length - 1)).innerHTML = blue3Array[tr.length - 1];
    });
}

function addEmptyRow() {
    tbody.innerHTML += `
    <tr class="tr">
        <td class = "time" id="timeInput_${tr.length}">
        </td>
        <td class = "matchNumber" id="matchInput_${tr.length}" >
        </td>
        <td class = "redAlliance" id="red1_${tr.length}">
        </td>
        <td class = "redAlliance" id="red2_${tr.length}">
        </td>
        <td class = "redAlliance" id="red3_${tr.length}">
        </td>
        <td class = "blueAlliance" id="blue1_${tr.length}">
        </td>
        <td class = "blueAlliance" id="blue2_${tr.length}">
        </td>
        <td class = "blueAlliance" id="blue3_${tr.length}">
        </td>
    </tr>`;
}

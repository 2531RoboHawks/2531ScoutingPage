// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

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

const database = getDatabase(app);


const qualTime = ref(database, "qualTime");
const qualLink = ref(database, "qualLink");
const qualMatch = ref(database, "qualMatch");
const qualRed1 = ref(database, "qualRed1");
const qualRed2 = ref(database, "qualRed2");
const qualRed3 = ref(database, "qualRed3");
const qualBlue1 = ref(database, "qualBlue1");
const qualBlue2 = ref(database, "qualBlue2");
const qualBlue3 = ref(database, "qualBlue3");

const tbody = document.getElementById("tbody");
const tr = document.getElementsByClassName("tr");
const removeRowButton = document.getElementById("removeRowButton");
const saveButton = document.getElementById("saveButton");

let rowCount = 1;

//TODO: access folders
//TODO: make matchInputs not sync with all teamInputs
//TODO: make video link not shown in other columns when it's too long

//Codes for removeRowButton: removes last row
removeRowButton.addEventListener("click", function() {
    if(tr.length > 1){
        let desigRow = tr[tr.length - 2];
        console.log(desigRow.parentNode.removeChild(desigRow));
        //rowCount--; //Somehow leaving this out made it work, but row number kept going.
        console.log("remove row"+(rowCount));
    }
});

//Codes for saveButton: prints inputs to row below and add row
saveButton.addEventListener("click", function() {
    console.log("save_"+(rowCount-1));

    let timeInput = document.getElementById("timeInput").value;
    push(qualTime, timeInput);
    document.getElementById("timeInput_"+(rowCount-1)).innerHTML = timeInput;

    let linkInput = document.getElementById("linkInput").value;
    push(qualLink, linkInput);
    document.getElementById("linkInput_"+(rowCount-1)).innerHTML = linkInput;

    let matchInput = document.getElementById("matchInput").value;
    push(qualMatch, matchInput);
    document.getElementById("matchInput_"+(rowCount-1)).innerHTML = matchInput;

    let red1 = document.getElementById("red1").value;
    push(qualRed1, red1);
    document.getElementById("red1_"+(rowCount-1)).innerHTML = matchInput;

    let red2 = document.getElementById("red2").value;
    push(qualRed2, red2);
    document.getElementById("red2_"+(rowCount-1)).innerHTML = matchInput;

    let red3 = document.getElementById("red3").value;
    push(qualRed3, red3);
    document.getElementById("red3_"+(rowCount-1)).innerHTML = matchInput;

    let blue1 = document.getElementById("blue1").value;
    push(qualBlue1, blue1);
    document.getElementById("blue1_"+(rowCount-1)).innerHTML = matchInput;

    let blue2 = document.getElementById("blue2").value;
    push(qualBlue2, blue2);
    document.getElementById("blue2_"+(rowCount-1)).innerHTML = matchInput;

    let blue3 = document.getElementById("blue3").value;
    push(qualBlue3, blue3);
    document.getElementById("blue3_"+(rowCount-1)).innerHTML = matchInput;

    tbody.innerHTML += `
    <tr class="tr">
        <td class = "time" id="timeInput_${rowCount}">
        </td>
        <td class = "matchVideo" id="linkInput_${rowCount}">
        </td>
        <td class = "matchNumber" id="matchInput_${rowCount}" >
        </td>
        <td class = "redAlliance" id="red1_${rowCount}">
        </td>
        <td class = "redAlliance" id="red2_${rowCount}">
        </td>
        <td class = "redAlliance" id="red3_${rowCount}">
        </td>
        <td class = "blueAlliance" id="blue1_${rowCount}">
        </td>
        <td class = "blueAlliance" id="blue2_${rowCount}">
        </td>
        <td class = "blueAlliance" id="blue3_${rowCount}">
        </td>
    </tr>`;  
    rowCount++;
    });

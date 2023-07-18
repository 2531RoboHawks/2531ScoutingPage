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


const appSetting = {
    databaseURL: "https://scoutingapp-e16c4-default-rtdb.firebaseio.com/"
}
      
// Initialize Firebase
const app = initializeApp(appSetting);

const database = getDatabase(app);
const qualMatchSchedule = ref(database, "qualMatchSchedule");


const tbody = document.getElementById("tbody");
const tr = document.getElementsByClassName("tr");

let timeRow = document.getElementById("time");
let matchRow = document.getElementById("matchNumber");
let rowCount = 1;

//TODO: add row from a form with user input
function addRow(){
    tbody.innerHTML += `
    <tr class="tr">
        <td class = "time">
            <input class="timeInput" id="timeInput_${rowCount}" type="text">
        </td>
        <td class = "matchVideo">
            <input class="linkInput" id="link_${rowCount}" type="url">
        </td>
        <td class = "matchNumber">
            <input class="matchInput" id="matchInput_${rowCount}" type="number">
        </td>
        <td class = "redAlliance" href="">
            <input class="redInput" id="red1_${rowCount}" type="number">
        </td>
        <td class = "redAlliance">
            <input class="redInput" id="red2_${rowCount}" type="number">
        </td>
        <td class = "redAlliance">
            <input class="redInput" id="red3_${rowCount}" type="number">
        </td>
        <td class = "blueAlliance">
            <input class="blueInput" id="blue1_${rowCount}" type="number">
        </td>
        <td class = "blueAlliance">
            <input class="blueInput" id="blue2_${rowCount}" type="number">
        </td>
        <td class = "blueAlliance">
            <input class="blueInput" id="blue3_${rowCount}" type="number">
        </td>
        <td>
            <button id="removeRowButton_${rowCount}" onclick="removeRow()" style="background-color: gold;">delete</button>
            <button id="editRowButon_${rowCount}" onclick="editRow()" style="background-color: gold;">edit</button>
        </td>
    </tr>`;
    rowCount++;
}

function getID(){
    //TODO: figure out how to get HTML IDs
}

//TODO: remove designated row
function removeRow(){
    console.log("remove row");
    if(tr.length > 1){
        let desigRow = tr[tr.length - 1];
        console.log(desigRow.parentNode.removeChild(desigRow));
        rowCount--;
    }
    getID();
}


//TODO: figure out how to save data to firebase.
function saveInput() {
    console.log("save");
    for(let i = 0; i < tr.length; i++){
        let timeInput = document.getElementById("timeInput_"+i).value;
        //timeInput.innerHTML = timeInput;
        console.log(timeInput);
    }

    for(let i = 0; i < tr.length; i++){
        let matchInput = document.getElementById("matchInput_"+i).value;
        //matchInput.innerHTML = matchInput;
        console.log(matchInput);
    }
    
}

function editRow() {
    console.log("edit row");
}
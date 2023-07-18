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
// const linkDatabase = getDatabase(app);


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
const addRowButton = document.getElementById("addRowButton");
const saveButton = document.getElementById("saveButton");



addRowButton.addEventListener("click", function() {
    let rowCount = 1;
    tbody.innerHTML += `
    <tr class="tr">
        <td class = "time">
            <a id="timeInput_${rowCount}"></a>
        </td>
        <td class = "matchVideo">
            <a id="linkInput_${rowCount}"></a>
        </td>
        <td class = "matchNumber">
            <a id="matchInput_${rowCount}" ></a>
        </td>
        <td class = "redAlliance">
            <a id="red1_${rowCount}" ></a>
        </td>
        <td class = "redAlliance">
            <a id="red2_${rowCount}" ></a>
        </td>
        <td class = "redAlliance">
            <a id="red3_${rowCount}" ></a>
        </td>
        <td class = "blueAlliance">
            <a id="blue1_${rowCount}" ></a>
        </td>
        <td class = "blueAlliance">
            <a id="blue2_${rowCount}" ></a>
        </td>
        <td class = "blueAlliance">
            <a id="blue3_${rowCount}" ></a>
        </td>
    </tr>`;  
    rowCount++;
});


// function removeRow(){
//     console.log("remove row");
//     if(tr.length > 1){
//         let desigRow = tr[tr.length - 1];
//         console.log(desigRow.parentNode.removeChild(desigRow));
//         rowCount--;
//     }
//     getID();
// }



    for(let i = 0; i < tr.length; i++){
        saveButton.addEventListener("click", function() {
            console.log("save_"+i);

            let timeInput = document.getElementById("timeInput").value;
            push(qualTime, timeInput);
            document.getElementById("timeInput_"+i).innerHTML = timeInput;

            let linkInput = document.getElementById("linkInput").value;
            push(qualLink, linkInput);
            document.getElementById("linkInput_"+i).innerHTML = linkInput;

            let matchInput = document.getElementById("matchInput").value;
            push(qualMatch, matchInput);
            document.getElementById("matchInput_"+i).innerHTML = matchInput;

            let red1 = document.getElementById("red1").value;
            push(qualRed1, red1);
            document.getElementById("red1_"+i).innerHTML = matchInput;

            let red2 = document.getElementById("red2").value;
            push(qualRed2, red2);
            document.getElementById("red2_"+i).innerHTML = matchInput;

            let red3 = document.getElementById("red3").value;
            push(qualRed3, red3);
            document.getElementById("red3_"+i).innerHTML = matchInput;

            let blue1 = document.getElementById("blue1").value;
            push(qualBlue1, blue1);
            document.getElementById("blue1_"+i).innerHTML = matchInput;

            let blue2 = document.getElementById("blue2").value;
            push(qualBlue2, blue2);
            document.getElementById("blue2_"+i).innerHTML = matchInput;

            let blue3 = document.getElementById("blue3").value;
            push(qualBlue3, blue3);
            document.getElementById("blue3_"+i).innerHTML = matchInput;
        });
        i++;
    }

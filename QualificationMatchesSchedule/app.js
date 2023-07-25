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

//Table and row
const tbody = document.getElementById("tbody");
const tr = document.getElementsByClassName("tr");

//Buttons
const removeRowButton = document.getElementById("removeRowButton");
const saveButton = document.getElementById("saveButton");
const resetButton = document.getElementById("resetButton");

//Input fields
const timeInput = document.getElementById("timeInput");
const matchInput = document.getElementById("matchInput");
const red1Input = document.getElementById("red1");
const red2Input = document.getElementById("red2");
const red3Input = document.getElementById("red3");
const blue1Input = document.getElementById("blue1");
const blue2Input = document.getElementById("blue2");
const blue3Input = document.getElementById("blue3");


//TODO: make sure removeRow removes only one row without having to refresh page
//Substitution: add edit function designated to each row so we wouldn't have to remove row

//TODO: separate all firebase code in a different file
//TODO: add a delete function that deletes the whole table
//TODO: if time >= localTime, then change color --see HTML JavaScript w3schools

//Push input to database and add row
saveButton.addEventListener("click", function() {
    //These will push user inputs to database
    saveTime();
    saveMatchNum();
    saveRed1();
    saveRed2();
    saveRed3();
    saveBlue1();
    saveBlue2();
    saveBlue3();
    
    addEmptyRow(); //Adds empty row for new inputs that are programmed to display immediately
    resetInputFields(); //Empty input fields after inputs are saved.
    console.log("save_" + (tr.length - 1));
});

//removes last row (supposedly)
removeRowButton.addEventListener("click", function() {
    removeLastRow();
});

//resets the whole table
resetButton.addEventListener("dblclick", function() {
    reset();
});

//Get saved data from database
onValue(qualTable, function(snapshot) {
let rowArray = Object.values(snapshot.val());
tbody.innerHTML = rowArray.join(""); //join("") replaces "," to "" between values in rowArray

    for(let i = 0; i < tr.length; i++) {
        onValue(qualTime, function(snapshot) {
        let timeArray = Object.values(snapshot.val());
        document.getElementById("timeInput_"+(i)).innerHTML = timeArray[i];
        console.log(timeArray[i]); 
        });
    
        onValue(qualMatch, function(snapshot) {
        let matchArray = Object.values(snapshot.val());
        document.getElementById("matchInput_"+(i)).innerHTML = matchArray[i];
        console.log(matchArray[i]);
        });
    
        onValue(qualRed1, function(snapshot) {
        let red1Array = Object.values(snapshot.val());
        document.getElementById("red1_"+(i)).innerHTML = red1Array[i];
        console.log(red1Array[i]);
        });
        
        onValue(qualRed2, function(snapshot) {
        let red2Array = Object.values(snapshot.val());
        document.getElementById("red2_"+(i)).innerHTML = red2Array[i];
        console.log(red2Array[i]);
        });
        
        onValue(qualRed3, function(snapshot) {
        let red3Array = Object.values(snapshot.val());
        document.getElementById("red3_"+(i)).innerHTML = red3Array[i];
        console.log(red3Array[i]);
        });
    
        onValue(qualBlue1, function(snapshot) {
        let blue1Array = Object.values(snapshot.val());
        document.getElementById("blue1_"+(i)).innerHTML = blue1Array[i];
        console.log(blue1Array[i]);
        });
    
        onValue(qualBlue2, function(snapshot) {
        let blue2Array = Object.values(snapshot.val());
        document.getElementById("blue2_"+(i)).innerHTML = blue2Array[i];
        console.log(blue2Array[i]);
        });
        
        onValue(qualBlue3, function(snapshot) {
        let blue3Array = Object.values(snapshot.val());
        document.getElementById("blue3_"+(i)).innerHTML = blue3Array[i];
        console.log(blue3Array[i]);
        });
    }
});






//Below are only for functions
function saveTime() {
    let timeInput = document.getElementById("timeInput").value;
    push(qualTime, timeInput);
}

function saveMatchNum() {
    let matchInput = document.getElementById("matchInput").value;
    push(qualMatch, matchInput);
}

function saveRed1() {
    let red1 = document.getElementById("red1").value;
    push(qualRed1, red1);
}

function saveRed2() {
    let red2 = document.getElementById("red2").value;
    push(qualRed2, red2);
}

function saveRed3() {
    let red3 = document.getElementById("red3").value;
    push(qualRed3, red3);
}

function saveBlue1() {
    let blue1 = document.getElementById("blue1").value;
    push(qualBlue1, blue1);
}

function saveBlue2() {
    let blue2 = document.getElementById("blue2").value;
    push(qualBlue2, blue2);
}

function saveBlue3() {
    let blue3 = document.getElementById("blue3").value;
    push(qualBlue3, blue3);
}

function addEmptyRow() {
    let newRow = `<tr class="tr">
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
    tbody.innerHTML += newRow;
    push(qualTable, newRow);
}

function resetInputFields() {
    timeInput.value = "";
    matchInput.value = "";
    red1Input.value = "";
    red2Input.value = "";
    red3Input.value = "";
    blue1Input.value = "";
    blue2Input.value = "";
    blue3Input.value = "";
}

function removeLastRow() {
    onValue(qualTable, function(snapshot) {
    let rowArray = Object.values(snapshot.val());
    let rowIDs = Object.keys(snapshot.val());

        if(rowArray.length > 0) {
            //Removes last value from table on database
            let lastRowID = rowIDs[rowArray.length - 1]; //Gets the ID of last row
            let lastRow = ref(database, `qualSchedule/Table/${lastRowID}`); //Refers to last row
            remove(lastRow);

            //Removes last value from time on database
            onValue(qualTime, function(snapshot) {
            let timeIDs = Object.keys(snapshot.val());
            let lastTimeID = timeIDs[rowArray.length - 1]; //Gets the timeID of last row
            let lastTime = ref(database, `qualSchedule/Time/${lastTimeID}`); //Refers to time of last row
            remove(lastTime);
            });

            //Removes last value from matches on database
            onValue(qualMatch, function(snapshot) {
            let matchIDs = Object.keys(snapshot.val());
            let lastMatchID = matchIDs[rowArray.length - 1]; //Gets the matchID of last row
            let lastMatch = ref(database, `qualSchedule/Match/${lastMatchID}`); //Refers to match of last row
            remove(lastMatch);
            });

            //Removes last value from red1 on database
            onValue(qualRed1, function(snapshot) {
            let red1IDs = Object.keys(snapshot.val());
            let lastRed1ID = red1IDs[rowArray.length - 1]; //Gets the red1ID of last row
            let lastRed1 = ref(database, `qualSchedule/Red1/${lastRed1ID}`); //Refers to red1 of last row
            remove(lastRed1);
            });

            //Removes last value from red2 on database
            onValue(qualRed2, function(snapshot) {
            let red2IDs = Object.keys(snapshot.val());
            let lastRed2ID = red2IDs[rowArray.length - 1]; //Gets the red2ID of last row
            let lastRed2 = ref(database, `qualSchedule/Red2/${lastRed2ID}`); //Refers to red2 of last row
            remove(lastRed2);
            });

            //Removes last value from red3 on database
            onValue(qualRed3, function(snapshot) {
            let red3IDs = Object.keys(snapshot.val());
            let lastRed3ID = red3IDs[rowArray.length - 1]; //Gets the red3ID of last row
            let lastRed3 = ref(database, `qualSchedule/Red3/${lastRed3ID}`); //Refers to red3 of last row
            remove(lastRed3);
            });

            //Removes last value from blue1 on database
            onValue(qualBlue1, function(snapshot) {
            let blue1IDs = Object.keys(snapshot.val());
            let lastBlue1ID = blue1IDs[rowArray.length - 1]; //Gets the blue1ID of last row
            let lastBlue1 = ref(database, `qualSchedule/Blue1/${lastBlue1ID}`); //Refers to blue1 of last row
            remove(lastBlue1);
            });

            //Removes last value from blue2 on database
            onValue(qualBlue2, function(snapshot) {
            let blue2IDs = Object.keys(snapshot.val());
            let lastBlue2ID = blue2IDs[rowArray.length - 1]; //Gets the blue2ID of last row
            let lastBlue2 = ref(database, `qualSchedule/Blue2/${lastBlue2ID}`); //Refers to blue2 of last row
            remove(lastBlue2);
            });

            //Removes last value from blue3 on database
            onValue(qualBlue3, function(snapshot) {
            let blue3IDs = Object.keys(snapshot.val());
            let lastBlue3ID = blue3IDs[rowArray.length - 1]; //Gets the blue3ID of last row
            let lastBlue3 = ref(database, `qualSchedule/Blue3/${lastBlue3ID}`); //Refers to blue3 of last row
            remove(lastBlue3);
            });
        }
        location.reload(); //This is a temporary solution for not deleting multiple rows at once.
    });
}

function reset() {
    let table = ref(database, "qualSchedule");
    remove(table);
    location.reload();
}
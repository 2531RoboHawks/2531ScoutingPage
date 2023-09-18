//(import *) lets you import everything from that file
import * as teamDatabase from "../firebase.js";
import {ref, push, onValue, update, remove, set, child, get} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

//Buttons
const guestSignIn = document.getElementById("guestSignIn");
const loginButton = document.getElementById("loginButton");

//InputFields
const userInput = document.getElementById("loginUsername");
const passInput = document.getElementById("loginPassword");

let user = guest;

//TODO: hide error message

//Below are only for functions
function userLogin() {
    onValue(teamDatabase.memberUser, function(snapshots) {
        let memberUser = Object.values(snapshot.val());
    });
    onValue(teamDatabase.memberPass, function(snapshots) {
        let memberPass = Object.values(snapshot.val());
    });

    if(userInput.value == memberUser && passInput.value == memberPass) {
        
    }
}
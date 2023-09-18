//(import *) lets you import everything from that file
import * as teamDatabase from "../firebase.js";
import {ref, push, onValue, update, remove, set, child, get} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

//Buttons
const guestSignIn = document.getElementById("guestSignIn");
const loginButton = document.getElementById("loginButton");

//InputFields
const userInput = document.getElementById("loginUsername");
const passInput = document.getElementById("loginPassword");

//TODO: hide error message

loginButton.addEventListener('click', function(){
    userLogin();
});

//Below are only for functions
function userLogin() {
    onValue(teamDatabase.memberUser, function(snapshot) {
        let memberUser = Object.values(snapshot.val());
        // if(userInput.value == memberUser) {
        //     localStorage.setItem('user', 'userValid');
        // }
        // console.log(localStorage.getItem('user'));
        console.log(memberUser);
    });

    onValue(teamDatabase.memberPass, function(snapshot) {
        let memberPass = Object.values(snapshot.val());
        // if(passInput.value == memberPass) {
        //     localStorage.setItem('user', 'passValid');
        // }
        // console.log(localStorage.getItem('user'));
        console.log(memberPass);
    });

}
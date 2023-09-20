//(import *) lets you import everything from that file
import * as teamDatabase from "../firebase.js";
import {ref, push, onValue, update, remove, set, child, get} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

//Buttons
const guestSignIn = document.getElementById("guestSignIn");
const loginButton = document.getElementById("loginButton");

//InputFields
const userInput = document.getElementById("loginUsername");
const passInput = document.getElementById("loginPassword");

//Users
export let user = 'guest';

//TODO: hide error message
//TODO: logout and clear local storage

loginButton.addEventListener('click', function(){
    userLogin();
    console.log(user);
});
guestSignIn.addEventListener('click', function() {
    // Only for testing logouts; not used here
    localStorage.clear('memberUser');
    localStorage.clear('memberPass');
    console.log(localStorage.getItem('memberUser'));
    console.log(localStorage.getItem('memberPass'));
    if(localStorage.getItem('memberUser') == 'userValid'  &&  localStorage.getItem('memberPass') == 'passValid') {
        user = 'member';
    } else {
        user = 'guest';
    }
    console.log(user);
});

//Below are only for functions

//Checking login validation
function userLogin() {
    onValue(teamDatabase.memberUser, function(snapshot) {
        let memberUser = Object.values(snapshot.val());
        if(userInput.value == memberUser) {
            localStorage.setItem('memberUser', 'userValid');
        }
    });

    onValue(teamDatabase.memberPass, function(snapshot) {
        let memberPass = Object.values(snapshot.val());
        if(passInput.value == memberPass) {
            localStorage.setItem('memberPass', 'passValid');
        }
    });

    if(localStorage.getItem('memberUser') == 'userValid'  &&  localStorage.getItem('memberPass') == 'passValid') {
        user = 'member';
    } else {
        user = 'guest';
    }
    return user;
}
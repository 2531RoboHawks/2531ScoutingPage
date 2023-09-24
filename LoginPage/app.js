//(import *) lets you import everything from that file
import * as teamDatabase from "../firebase.js";
import {ref, push, onValue, update, remove, set, child, get} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

//Buttons
const guestSignIn = document.getElementById("guestSignIn");
const loginButton = document.getElementById("loginButton");

//InputFields
const userInput = document.getElementById("loginUsername");
const passInput = document.getElementById("loginPassword");

export let user = 'guest'; //set userStatus initially as guest

//TODO: logout
//TODO: transfer page after login as member/guest
//TODO: gets 5 tries for wrong password

loginButton.addEventListener('click', function(){
    userLogin();
    console.log(user);
});


guestSignIn.addEventListener('click', function() {
    clearUserStatus();
    user = 'guest'; //set user as guest
    // location.replace("../app.js");
});



/*
 ********* Below are only for FUNCTIONS ********
 *Because of scope issues with onValue(), localStorage is needed.
 *Meaning any variables declared within onValue() cannot be used outside of onValue(), and vice versa.
*/

//Checking login validation
function userLogin() {
    onValue(teamDatabase.memberUser, function(snapshot) {
        let memberUser = Object.values(snapshot.val()); //Get member's username from firebase 
        //Verify username
        if(userInput.value == memberUser) {
            localStorage.setItem('memberUser', 'userValid'); //Store user validation locally
        }
    });

    onValue(teamDatabase.memberPass, function(snapshot) {
        let memberPass = Object.values(snapshot.val()); //Get member's password from firebase
        //Verify pass
        if(passInput.value == memberPass) {
            localStorage.setItem('memberPass', 'passValid'); //Store pass validation locally
        }
    });

    if(localStorage.getItem('memberUser') == 'userValid'  &&  localStorage.getItem('memberPass') == 'passValid') {
        user = 'member';
    } else {
        clearUserStatus();
        user = 'guest';
        alert("Email/password is invalid. Please try again!")
        userInput.value = '';
        passInput.value = '';
    }
}

function clearUserStatus() {
    //clear user status locally
    localStorage.clear('memberUser');
    localStorage.clear('memberPass');
    user = 'guest'; //set user as guest

    console.log(localStorage.getItem('memberUser'));
    console.log(localStorage.getItem('memberPass'));
}
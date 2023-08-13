import { 
    getAuth, 
    connectAuthEmulator, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

import * as teamDatabase from "../firebase.js";

//Buttons
const guestSignInButton = document.getElementById("guestSignInButton");
const sumbitButton = document.getElementById("sumbitButton");


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
//initializeApp(): *one-time-use*, to initialize our app with app settings *app settings are set on firebase*

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

import { getDatabase, ref, push, onValue, update, remove, set, child, get} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
    /* 
        All functions listed after ref() are not used in this js file.
        They're just there for future coders to reference.
        You can find out what each one does in firebase documentation.
        Import only the functions that you need.
    */

import { 
    getAuth, 
    connectAuthEmulator, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, //We will not be using this function
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const appSettings = {
    databaseURL: "https://scoutingapp-e16c4-default-rtdb.firebaseio.com/"
}
      
// Initialize Firebase
const app = initializeApp(appSettings);

//Connects database to app
const database = getDatabase(app); //Realtime-database

//There is something wrong with auth that causes it unable to push data.
// const auth = getAuth(app); //Authentication

//Users and authentication

// Database for Qualification Matches Schedule
export const qualTable = ref(database, "qualSchedule")
export const qualRow = ref(database, "qualSchedule/Row");
export const qualTime = ref(database, "qualSchedule/Time");
export const qualMatch = ref(database, "qualSchedule/Match");
export const qualRed1 = ref(database, "qualSchedule/Red1");
export const qualRed2 = ref(database, "qualSchedule/Red2");
export const qualRed3 = ref(database, "qualSchedule/Red3");
export const qualBlue1 = ref(database, "qualSchedule/Blue1");
export const qualBlue2 = ref(database, "qualSchedule/Blue2");
export const qualBlue3 = ref(database, "qualSchedule/Blue3");


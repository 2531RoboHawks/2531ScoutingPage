// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";

import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore-lite.js';

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

    
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAq-jvjPKjhd3-vDIUoTSc7vM8YQ423bA",
  authDomain: "frcscoutingproject.firebaseapp.com",
  projectId: "frcscoutingproject",
  storageBucket: "frcscoutingproject.appspot.com",
  messagingSenderId: "876940474031",
  appId: "1:876940474031:web:aac6b1516554856ac9c65a",
  measurementId: "G-RE7ZJFQEWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

<<<<<<< HEAD
//Example:
  // async function getMatchSchedule(database) {
  //   const matchSchedule = collection(database, 'matchSchedule');
  //   const matchScheduleData = await getDocs(matchSchedule);
  //   const matchScheduleDataList = matchScheduleData.docs.map(doc => doc.data());
  //   return matchScheduleDataList;
  // }
  //const matchSchedule = getMatchSchedule(database);
  //console.log(matchSchedule);
=======
// Ex: Get a list of cities from your databasegetCities
async function getMatchSchedule(db) {
  const matchSchedule = collection(db, 'matchSchedule');
  const matchScheduleData = await getDocs(matchSchedule);
  const matchScheduleDataList = matchScheduleData.docs.map(doc => doc.data());
  return matchScheduleDataList;
}

const matchSchedule = getMatchSchedule(db);

console.log(matchSchedule);
>>>>>>> parent of 612d8c0 (add todos)

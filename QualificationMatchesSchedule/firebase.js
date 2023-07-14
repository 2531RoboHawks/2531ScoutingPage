// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
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

// Ex: Get a list of cities from your database
  // async function getCities(db) {
  //   const citiesCol = collection(db, 'cities');
  //   const citySnapshot = await getDocs(citiesCol);
  //   const cityList = citySnapshot.docs.map(doc => doc.data());
  //   return cityList;
  // }
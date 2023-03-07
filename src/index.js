// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyIPFI49EblageGdW0Im74f9JXWLxq1H8",
  authDomain: "gettingstartedwithfireba-74b0c.firebaseapp.com",
  projectId: "gettingstartedwithfireba-74b0c",
  storageBucket: "gettingstartedwithfireba-74b0c.appspot.com",
  messagingSenderId: "762056945012",
  appId: "1:762056945012:web:7457ac03b9f100af94d021",
  measurementId: "G-CSKSXJD49S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);;
console.log(app)
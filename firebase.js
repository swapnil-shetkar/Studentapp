// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIDAX_Ns0xvZ3tqCsJE0fDDeAzhiHzMRw",
  authDomain: "studentapp-28179.firebaseapp.com",
  projectId: "studentapp-28179",
  storageBucket: "studentapp-28179.appspot.com",
  messagingSenderId: "497005905220",
  appId: "1:497005905220:web:84a2490122e5e7a7fe0311"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { validatePassword, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyARZ9ptkEbX8ArKSdys-oYxcPSZWaSJeiA",
    authDomain: "sign-in-b2c32.firebaseapp.com",
    projectId: "sign-in-b2c32",
    storageBucket: "sign-in-b2c32.firebasestorage.app",
    messagingSenderId: "983095967422",
    appId: "1:983095967422:web:eff14c5ae41b26266b28ef",
    measurementId: "G-3D53DWQFGV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
window.signin = () => {

    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
   
            const user = userCredential.user;
            alert("signup successfully")
        })
        .catch((error) => {
            alert(error)
            const errorCode = error.code;
            const errorMessage = error.message;
        })
};

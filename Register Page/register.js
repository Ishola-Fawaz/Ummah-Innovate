import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDj4sx1iXOh0HJxj0Fgy2Mi_FOfy45KEAQ",
  authDomain: "login-7820d.firebaseapp.com",
  projectId: "login-7820d",
  storageBucket: "login-7820d.appspot.com",
  messagingSenderId: "828751953055",
  appId: "1:828751953055:web:e57ff00e1ad48d99e676aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Event listener for registration button
document.getElementById('register').addEventListener("click", function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Account created successfully!");
        // You can also store `username` in Firestore or localStorage here
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
});

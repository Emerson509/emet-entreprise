// Fichier de configuration Firebase.
// Remplace les valeurs ci-dessous par celles de TON projet Firebase
// (Console Firebase > Paramètres du projet > Tes applications > Config).
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
 apiKey: "AIzaSyDAOgvme0c6klBv_GyE2IjlcQUgs5N09IM",
    authDomain: "emet-entreprise.firebaseapp.com",
    projectId: "emet-entreprise",
    storageBucket: "emet-entreprise.firebasestorage.app",
    messagingSenderId: "1087753648509",
    appId: "1:1087753648509:web:a019bdc08c68591f65b414",
    measurementId: "G-ZX7LJFZ7L7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

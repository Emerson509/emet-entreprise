// Garde d'accès : à charger sur chaque page à protéger.
// Si le client n'est pas connecté, il est renvoyé vers login.html.
import { auth } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

onAuthStateChanged(auth, (utilisateur) => {
  if (!utilisateur) {
    window.location.href = "login.html"; // pas connecté : retour à la connexion
  } else {
    document.body.style.display = "block"; // connecté : on affiche la page
  }
});

// Pour un bouton de déconnexion : <button id="logout">Déconnexion</button>
const boutonLogout = document.getElementById("logout");
if (boutonLogout) {
  boutonLogout.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "login.html";
  });
}

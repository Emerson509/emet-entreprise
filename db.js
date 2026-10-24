// Connexion à la base de données Firestore.
// On importe d'abord firebase-config.js pour que Firebase soit déjà démarré.
import "./firebase-config.js";
import { getApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

export const db = getFirestore(getApp());

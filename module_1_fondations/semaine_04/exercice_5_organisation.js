// ╔═══════════════════════════════════════════════════════════════════╗
// ║         EXERCICE 5 : Organiser son code                           ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Les fonctions permettent d'ORGANISER son code.
// Un bon programme est divisé en fonctions claires !
//
// ═══════════════════════════════════════════════════════════════════

// 5.1 MAUVAIS EXEMPLE : Code mélangé
console.log("=== MAUVAIS EXEMPLE ===");

// Ce code marche, mais il est difficile à lire...
let pv1 = 20;
console.log("Bienvenue dans le jeu !");
console.log("═════════════════════════");
let choix1 = "combattre";
if (choix1 === "combattre") {
    let degats1 = 5;
    pv1 -= degats1;
    console.log(`Tu subis ${degats1} dégâts !`);
}
console.log(`PV restants : ${pv1}/20`);
console.log("═════════════════════════");

// ═══════════════════════════════════════════════════════════════════
// 5.2 BON EXEMPLE : Code organisé
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== BON EXEMPLE ===");

// Fonctions utilitaires
function afficherSeparateur() {
    console.log("═════════════════════════");
}

function afficherBienvenue() {
    console.log("Bienvenue dans le jeu !");
    afficherSeparateur();
}

function subirDegats(pvActuels, degats) {
    console.log(`Tu subis ${degats} dégâts !`);
    return pvActuels - degats;
}

function afficherPV(pv, pvMax) {
    console.log(`PV restants : ${pv}/${pvMax}`);
}

// Programme principal (clair et lisible !)
let pv2 = 20;
let pvMax = 20;

afficherBienvenue();
pv2 = subirDegats(pv2, 5);
afficherPV(pv2, pvMax);
afficherSeparateur();

// ═══════════════════════════════════════════════════════════════════
// 5.3 À TOI : Réorganise ce code avec des fonctions
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== À TOI DE JOUER ===");

// Voici du code "en vrac". Réorganise-le avec des fonctions !

/*
// CODE À RÉORGANISER :
let pseudo = "Steve";
let score = 0;
console.log("╔═══════════════════════╗");
console.log("║   QUIZ MINECRAFT      ║");
console.log("╚═══════════════════════╝");
console.log(`Joueur : ${pseudo}`);
let reponse = "diamant";
let bonneReponse = "diamant";
if (reponse === bonneReponse) {
    score += 10;
    console.log("✅ Bonne réponse !");
} else {
    console.log("❌ Mauvaise réponse !");
}
console.log(`Score : ${score} points`);
*/

// CRÉE CES FONCTIONS :
// - afficherTitre() → affiche le cadre "QUIZ MINECRAFT"
// - afficherJoueur(pseudo) → affiche "Joueur : X"
// - verifierReponse(reponse, bonneReponse) → renvoie true/false
// - ajouterPoints(score, points) → renvoie le nouveau score
// - afficherResultat(correct) → affiche ✅ ou ❌
// - afficherScore(score) → affiche "Score : X points"

// Écris tes fonctions ici :


// Réécris le programme principal avec tes fonctions :


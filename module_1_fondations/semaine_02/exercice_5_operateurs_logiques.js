// ╔═══════════════════════════════════════════════════════════════════╗
// ║         EXERCICE 5 : Opérateurs logiques (&&, ||, !)              ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// && (ET)  : les DEUX conditions doivent être vraies
// || (OU)  : AU MOINS UNE condition doit être vraie
// !  (NON) : inverse true/false
//
// Exemples :
//   true && true   → true
//   true && false  → false
//   true || false  → true
//   false || false → false
//   !true          → false
//   !false         → true
//
// ═══════════════════════════════════════════════════════════════════

// 5.1 PRÉDIS les résultats (true ou false ?)

console.log("=== PRÉDICTIONS && ===");
console.log("true && true   :", true && true);     // Ta prédiction :
console.log("true && false  :", true && false);    // Ta prédiction :
console.log("false && false :", false && false);   // Ta prédiction :

console.log("\n=== PRÉDICTIONS || ===");
console.log("true || true   :", true || true);     // Ta prédiction :
console.log("true || false  :", true || false);    // Ta prédiction :
console.log("false || false :", false || false);   // Ta prédiction :

console.log("\n=== PRÉDICTIONS ! ===");
console.log("!true  :", !true);    // Ta prédiction :
console.log("!false :", !false);   // Ta prédiction :

// ═══════════════════════════════════════════════════════════════════
// 5.2 Utilisation avec des variables
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== AVEC VARIABLES ===");

let aEpee = true;
let aBouclier = false;
let niveau = 20;

// Complète les conditions :

// 5.2.1 Affiche "Équipement complet !" si on a une épée ET un bouclier
if (aEpee && aBouclier) {
    console.log("Équipement complet !");
} else {
    console.log("Il te manque quelque chose...");
}

// 5.2.2 Affiche "Tu peux te défendre !" si on a une épée OU un bouclier
// Écris ton if ici :


// 5.2.3 Affiche "Tu es désarmé !" si on n'a PAS d'épée
// Utilise !aEpee
// Écris ton if ici :


// ═══════════════════════════════════════════════════════════════════
// 5.3 Conditions combinées
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== CONDITIONS COMBINÉES ===");

let age = 12;
let aPermission = true;
let argent = 15;
let prixJeu = 20;

// 5.3.1 "Tu peux acheter le jeu" si :
//       - age >= 12 ET aPermission est true ET argent >= prixJeu
// Écris ton if/else ici :


// ═══════════════════════════════════════════════════════════════════
// DÉFI MINECRAFT : Accès au Nether
// ═══════════════════════════════════════════════════════════════════

console.log("\n--- DÉFI NETHER ---");

let aPortailNether = true;
let aBriquet = true;
let niveauJoueur = 15;
let estEnCreatif = false;

// Pour aller dans le Nether, il faut :
// - (avoir un portail ET un briquet ET niveau >= 10) OU être en mode créatif
//
// Affiche "🔥 Bienvenue dans le Nether !" si OK
// Sinon affiche ce qui manque

// Écris ton code ici :


// BONUS : Teste en changeant les valeurs !

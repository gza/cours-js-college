// ╔═══════════════════════════════════════════════════════════════════╗
// ║           DÉFI FINAL : Choisis ton aventure ! ⚔️                  ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Tu vas créer un mini-jeu d'aventure textuel !
// L'utilisateur fait des choix, et l'histoire change.
//
// Pour récupérer le choix du joueur, on utilise process.argv :
//   node defi_aventure.js 1    → choix = "1"
//   node defi_aventure.js 2    → choix = "2"
//
// ═══════════════════════════════════════════════════════════════════

// Configuration du joueur
let pseudo = "Aventurier";
let pv = 20;
let aEpee = true;
let aPotion = true;

// Récupère le choix du joueur
let choix = process.argv[2];

// ═══════════════════════════════════════════════════════════════════
// INTRODUCTION
// ═══════════════════════════════════════════════════════════════════

console.log("╔═══════════════════════════════════════════╗");
console.log("║       ⚔️  CHOISIS TON AVENTURE  ⚔️        ║");
console.log("╠═══════════════════════════════════════════╣");
console.log(`║  Joueur : ${pseudo}`);
console.log(`║  PV : ${pv}/20  ❤️`);
console.log(`║  Épée : ${aEpee ? "Oui ⚔️" : "Non"}`);
console.log(`║  Potion : ${aPotion ? "Oui 🧪" : "Non"}`);
console.log("╚═══════════════════════════════════════════╝");
console.log("");

// ═══════════════════════════════════════════════════════════════════
// SCÈNE 1 : La grotte
// ═══════════════════════════════════════════════════════════════════

console.log("Tu marches dans la forêt quand tu découvres");
console.log("l'entrée d'une grotte sombre... 🕳️");
console.log("");

if (choix === undefined) {
    // Pas de choix donné, afficher les options
    console.log("Que fais-tu ?");
    console.log("  1 - Entrer dans la grotte");
    console.log("  2 - Contourner et continuer dans la forêt");
    console.log("");
    console.log("👉 Relance avec : node defi_aventure.js [1 ou 2]");
    
} else if (choix === "1") {
    // CHOIX 1 : Entrer dans la grotte
    console.log("🚶 Tu entres prudemment dans la grotte...");
    console.log("");
    
    // TODO : Complète cette branche !
    // - Un zombie apparaît (affiche un message)
    // - Si tu as une épée :
    //     - Tu combats et gagnes ! (+5 diamants trouvés)
    // - Sinon :
    //     - Tu fuis et perds 5 PV
    // - Affiche les PV restants
    
    
} else if (choix === "2") {
    // CHOIX 2 : Contourner
    console.log("🌲 Tu préfères contourner la grotte...");
    console.log("");
    
    // TODO : Complète cette branche !
    // - Tu trouves un village ! (affiche un message)
    // - Un marchand te propose une épée pour 10 émeraudes
    // - Si tu n'as pas d'épée :
    //     - "Tu achètes l'épée !" (aEpee = true)
    // - Sinon :
    //     - "Tu as déjà une épée, tu continues..."
    
    
} else {
    // Choix invalide
    console.log("❓ Choix non reconnu !");
    console.log("Utilise 1 ou 2.");
}

// ═══════════════════════════════════════════════════════════════════
// BONUS : Ajoute d'autres scènes !
// ═══════════════════════════════════════════════════════════════════

// Idées :
// - Après la grotte, un dragon apparaît !
// - Après le village, tu peux acheter une potion
// - Ajoute un système de score
// - Ajoute un 3ème choix : "Faire demi-tour"

// ═══════════════════════════════════════════════════════════════════
// FIN
// ═══════════════════════════════════════════════════════════════════

console.log("");
console.log("--- Fin de l'aventure (pour l'instant) ---");

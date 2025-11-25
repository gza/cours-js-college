// ╔═══════════════════════════════════════════════════════════════════╗
// ║         EXERCICE 6 : Conditions imbriquées (if dans if)           ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// On peut mettre des "if" à l'intérieur d'autres "if" !
// C'est utile pour des décisions en plusieurs étapes.
//
// Exemple :
//   if (condition1) {
//       if (condition2) {
//           // les deux conditions sont vraies
//       }
//   }
//
// ═══════════════════════════════════════════════════════════════════

// 6.1 Analyse ce code et prédis ce qu'il affiche

let aArme = true;
let pvEnnemi = 15;

if (aArme) {
    console.log("Tu dégaines ton arme !");
    
    if (pvEnnemi <= 20) {
        console.log("L'ennemi est faible, tu attaques !");
    } else {
        console.log("L'ennemi est fort, prudence...");
    }
} else {
    console.log("Tu n'as pas d'arme, tu fuis !");
}

// Ta prédiction AVANT d'exécuter :
// Ligne 1 : ???
// Ligne 2 : ???

// ═══════════════════════════════════════════════════════════════════
// 6.2 Complète les conditions imbriquées
// ═══════════════════════════════════════════════════════════════════

console.log("\n--- EXERCICE 6.2 ---");

let estJour = true;
let aTorche = false;

// Si c'est le jour :
//   Affiche "☀️ Tu vois clairement"
// Sinon (c'est la nuit) :
//   Si tu as une torche :
//     Affiche "🔦 Ta torche éclaire le chemin"
//   Sinon :
//     Affiche "🌑 Tu ne vois rien !"

// Écris ton code ici :


// ═══════════════════════════════════════════════════════════════════
// DÉFI MINECRAFT : Le combat
// ═══════════════════════════════════════════════════════════════════

console.log("\n--- DÉFI COMBAT ---");

let pvJoueur = 18;
let aEpee = true;
let typeEpee = "diamant";  // "bois", "pierre", "fer", "diamant"
let pvZombie = 20;

// Logique du combat :
//
// 1. Si pvJoueur <= 0 : "💀 Tu es déjà mort !"
//
// 2. Sinon, si tu n'as pas d'épée : "🏃 Tu fuis le zombie !"
//
// 3. Sinon (tu as une épée), calcule les dégâts selon le type :
//    - "bois"    : 4 dégâts
//    - "pierre"  : 6 dégâts
//    - "fer"     : 8 dégâts
//    - "diamant" : 10 dégâts
//
//    Affiche "⚔️ Tu attaques avec ton épée en [type] !"
//    Affiche "💥 Tu infliges [dégâts] dégâts !"
//
//    Ensuite, si dégâts >= pvZombie :
//      Affiche "🎉 Le zombie est vaincu !"
//    Sinon :
//      Affiche "🧟 Le zombie a encore [pvZombie - dégâts] PV !"

// Écris ton code ici :


// BONUS : Teste avec différentes épées et différents PV !

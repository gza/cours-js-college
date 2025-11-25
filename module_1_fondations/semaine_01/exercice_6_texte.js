// ╔═══════════════════════════════════════════════════════════════════╗
// ║          EXERCICE 6 : Assembler du texte (concaténation)          ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// On peut assembler du texte de 2 façons :
//
// 1) Avec + (concaténation)
//    "Bonjour " + "Alex"  →  "Bonjour Alex"
//    "Score : " + 100     →  "Score : 100"
//
// 2) Avec les template literals (backticks ` `)
//    `Bonjour ${prenom}`  →  "Bonjour Alex"
//    `Score : ${score}`   →  "Score : 100"
//
// Les backticks sont sous la touche 7 (AltGr + 7) sur clavier français
//
// ═══════════════════════════════════════════════════════════════════

let hero = "Steve";
let pv = 100;
let arme = "épée en diamant";

console.log("hero =", hero);
console.log("pv =", pv);
console.log("arme =", arme);
console.log("---");

// 6.1 Affiche "Steve a 100 PV" en utilisant + pour concaténer
console.log();  // Utilise hero + " a " + pv + ...

// 6.2 Affiche "Steve combat avec une épée en diamant" 
//     en utilisant les template literals (``)
console.log();  // Utilise `${hero} combat avec...`

// 6.3 Affiche "Steve a 100 PV et combat avec une épée en diamant"
//     (avec template literals)
console.log();

// ═══════════════════════════════════════════════════════════════════
// DÉFI : Message de bienvenue
// ═══════════════════════════════════════════════════════════════════

console.log("\n--- DÉFI ---");

let pseudo = "DragonSlayer";
let niveau = 42;
let monde = "The End";

// Affiche : "Bienvenue DragonSlayer ! Tu es niveau 42 dans The End."
// Utilise les template literals :
console.log();

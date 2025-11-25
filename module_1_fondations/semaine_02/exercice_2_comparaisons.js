// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 2 : Les opérateurs de comparaison           ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Opérateurs de comparaison :
//   ===  égal à
//   !==  différent de
//   >    supérieur à
//   <    inférieur à
//   >=   supérieur ou égal
//   <=   inférieur ou égal
//
// Une comparaison renvoie true (vrai) ou false (faux)
//
// ═══════════════════════════════════════════════════════════════════

// 2.1 PRÉDIS le résultat avant d'exécuter, puis vérifie !

let a = 10;
let b = 5;
let c = 10;

console.log("=== PRÉDICTIONS ===");
console.log("a = 10, b = 5, c = 10");
console.log("---");

// Avant d'exécuter, devine : true ou false ?
console.log("a === b :", a === b);   // Ta prédiction : ???
console.log("a === c :", a === c);   // Ta prédiction : ???
console.log("a !== b :", a !== b);   // Ta prédiction : ???
console.log("a > b   :", a > b);     // Ta prédiction : ???
console.log("a < b   :", a < b);     // Ta prédiction : ???
console.log("a >= c  :", a >= c);    // Ta prédiction : ???
console.log("b <= a  :", b <= a);    // Ta prédiction : ???

// ═══════════════════════════════════════════════════════════════════
// 2.2 COMPLÈTE les comparaisons
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== COMPLÈTE ===");

let score = 100;
let scoreMax = 100;
let vies = 0;

// Complète avec le bon opérateur pour que ça affiche true :
console.log("score égal à scoreMax :", score ___ scoreMax);      // Remplace ___
console.log("vies égal à zéro :", vies ___ 0);                   // Remplace ___
console.log("score supérieur à 50 :", score ___ 50);             // Remplace ___
console.log("vies inférieur à 1 :", vies ___ 1);                 // Remplace ___

// ═══════════════════════════════════════════════════════════════════
// 2.3 PIÈGE : String vs Number
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== PIÈGE ===");

let nombre = 42;
let texte = "42";

console.log("nombre === 42 :", nombre === 42);     // ???
console.log("texte === 42 :", texte === 42);       // ???
console.log("texte === '42' :", texte === "42");   // ???

// QUESTION : Pourquoi texte === 42 donne false ?
// Écris ta réponse en commentaire ici :
// Réponse : 

// ═══════════════════════════════════════════════════════════════════
// DÉFI : Quiz de comparaisons
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== DÉFI QUIZ ===");

let pv = 18;
let pvMax = 20;
let faim = 8;
let faimMax = 20;

// Sans exécuter, devine le résultat (true/false), puis vérifie :
console.log("pv < pvMax        :", pv < pvMax);         // Ta prédiction :
console.log("pv === pvMax      :", pv === pvMax);       // Ta prédiction :
console.log("faim <= 10        :", faim <= 10);         // Ta prédiction :
console.log("faim !== faimMax  :", faim !== faimMax);   // Ta prédiction :
console.log("pv >= 10          :", pv >= 10);           // Ta prédiction :

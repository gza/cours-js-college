// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 3 : return (renvoyer une valeur)            ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// return permet à une fonction de RENVOYER un résultat.
// Sans return, la fonction ne fait qu'afficher ou modifier.
//
// Syntaxe :
//   function calculer(a, b) {
//       return a + b;  // Renvoie le résultat
//   }
//
//   let resultat = calculer(5, 3);  // resultat = 8
//
// ═══════════════════════════════════════════════════════════════════

// 3.1 Différence avec et sans return
console.log("=== 3.1 ===");

// SANS return (affiche seulement)
function doubleAffiche(n) {
    console.log(n * 2);
}

// AVEC return (renvoie la valeur)
function doubleReturn(n) {
    return n * 2;
}

doubleAffiche(5);           // Affiche 10
let a = doubleAffiche(5);   // Affiche 10, mais a = undefined !
console.log("a =", a);

let b = doubleReturn(5);    // N'affiche rien, mais b = 10 !
console.log("b =", b);

// ═══════════════════════════════════════════════════════════════════
// 3.2 Crée des fonctions avec return
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== 3.2 ===");

// Crée une fonction "triple" qui renvoie le triple d'un nombre

// Écris ta fonction ici :


// Teste :
// console.log(triple(4));   // Doit afficher 12
// console.log(triple(10));  // Doit afficher 30

// ═══════════════════════════════════════════════════════════════════
// 3.3 Fonction avec calcul et return
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== 3.3 ===");

// Crée une fonction "calculerAire" qui prend largeur et hauteur
// et renvoie l'aire (largeur × hauteur)

// Écris ta fonction ici :


// Teste :
// let surface = calculerAire(10, 5);
// console.log(`Aire = ${surface}`);  // Doit afficher : Aire = 50

// ═══════════════════════════════════════════════════════════════════
// 3.4 Fonction qui renvoie un booléen
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== 3.4 ===");

// Crée une fonction "estMajeur" qui prend un âge
// et renvoie true si age >= 18, sinon false

// Écris ta fonction ici :


// Teste :
// console.log(estMajeur(20));  // true
// console.log(estMajeur(12));  // false
// 
// if (estMajeur(15)) {
//     console.log("Tu peux voter !");
// } else {
//     console.log("Tu es trop jeune pour voter.");
// }

// ═══════════════════════════════════════════════════════════════════
// DÉFI MINECRAFT : Calcul de dégâts
// ═══════════════════════════════════════════════════════════════════

console.log("\n--- DÉFI DÉGÂTS ---");

// Crée une fonction "calculerDegats" qui prend :
// - attaque (du joueur)
// - defense (du monstre)
// Et renvoie les dégâts infligés = attaque - defense
// (minimum 1, on fait toujours au moins 1 dégât)

// Écris ta fonction ici :


// Teste :
// console.log(calculerDegats(15, 5));   // Doit afficher 10
// console.log(calculerDegats(10, 10));  // Doit afficher 1 (minimum)
// console.log(calculerDegats(5, 20));   // Doit afficher 1 (minimum)

// Utilise ta fonction dans un combat :
let attaqueSteve = 12;
let defenseZombie = 4;
// let degats = calculerDegats(attaqueSteve, defenseZombie);
// console.log(`Steve inflige ${degats} dégâts au zombie !`);

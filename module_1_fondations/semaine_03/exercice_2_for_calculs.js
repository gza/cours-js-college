// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 2 : Boucle for avec calculs                 ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// On peut utiliser la variable i pour faire des calculs !
//
// ═══════════════════════════════════════════════════════════════════

// 2.1 Table de multiplication
console.log("=== TABLE DE 7 ===");

let nombre = 7;

// Complète cette boucle pour afficher la table de 7 :
// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 10 = 70

for (let i = 1; i <= 10; i++) {
    // Complète avec un console.log utilisant nombre, i et le résultat
    
}

// ═══════════════════════════════════════════════════════════════════
// 2.2 Somme des nombres
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== SOMME ===");

// Calcule la somme de tous les nombres de 1 à 50
let somme = 0;

for (let i = 1; i <= 50; i++) {
    // Ajoute i à somme
    
}

console.log(`La somme de 1 à 50 = ${somme}`);
// Résultat attendu : 1275

// ═══════════════════════════════════════════════════════════════════
// 2.3 Factorielle
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== FACTORIELLE ===");

// La factorielle de 5 (notée 5!) = 5 × 4 × 3 × 2 × 1 = 120
// Calcule la factorielle de 6

let n = 6;
let factorielle = 1;  // On commence à 1 (pas 0 !)

for (let i = 1; i <= n; i++) {
    // Multiplie factorielle par i
    
}

console.log(`${n}! = ${factorielle}`);
// Résultat attendu : 720

// ═══════════════════════════════════════════════════════════════════
// DÉFI MINECRAFT : Calcul d'XP
// ═══════════════════════════════════════════════════════════════════

console.log("\n--- DÉFI XP ---");

// Tu tues 10 zombies. Chaque zombie donne (numéro × 5) points d'XP.
// Zombie 1 = 5 XP
// Zombie 2 = 10 XP
// Zombie 3 = 15 XP
// ...
// Zombie 10 = 50 XP
//
// Calcule et affiche le total d'XP gagné !

let totalXP = 0;

// Écris ta boucle ici :


console.log(`🧟 10 zombies tués !`);
console.log(`⭐ Total XP gagné : ${totalXP}`);
// Résultat attendu : 275 XP

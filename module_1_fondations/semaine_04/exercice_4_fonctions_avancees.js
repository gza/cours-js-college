// ╔═══════════════════════════════════════════════════════════════════╗
// ║         EXERCICE 4 : Fonctions avancées                           ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// On peut :
// - Utiliser une fonction dans une autre
// - Utiliser le résultat d'une fonction comme paramètre
//
// ═══════════════════════════════════════════════════════════════════

// 4.1 Fonctions qui s'utilisent entre elles
console.log("=== 4.1 ===");

function carre(n) {
    return n * n;
}

function cube(n) {
    return n * carre(n);  // cube = n × n² = n³
}

console.log("Carré de 3 :", carre(3));  // 9
console.log("Cube de 3 :", cube(3));    // 27

// ═══════════════════════════════════════════════════════════════════
// 4.2 Crée une chaîne de fonctions
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== 4.2 ===");

// Crée ces 3 fonctions :
// - addition(a, b) → renvoie a + b
// - double(n) → renvoie n × 2
// - additionDouble(a, b) → renvoie le double de l'addition de a et b

// Écris tes fonctions ici :


// Teste :
// console.log(addition(3, 5));        // 8
// console.log(double(4));             // 8
// console.log(additionDouble(3, 5));  // 16 (car (3+5) × 2)

// ═══════════════════════════════════════════════════════════════════
// 4.3 Fonction avec condition
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== 4.3 ===");

// Crée une fonction "max" qui prend deux nombres
// et renvoie le plus grand

// Écris ta fonction ici :


// Teste :
// console.log(max(10, 5));   // 10
// console.log(max(3, 15));   // 15
// console.log(max(7, 7));    // 7

// ═══════════════════════════════════════════════════════════════════
// 4.4 Fonction avec boucle
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== 4.4 ===");

// Crée une fonction "sommeJusquA" qui prend un nombre n
// et renvoie la somme de 1 à n
// Exemple : sommeJusquA(5) = 1+2+3+4+5 = 15

// Écris ta fonction ici :


// Teste :
// console.log(sommeJusquA(5));   // 15
// console.log(sommeJusquA(10));  // 55
// console.log(sommeJusquA(100)); // 5050

// ═══════════════════════════════════════════════════════════════════
// DÉFI MINECRAFT : Système de combat complet
// ═══════════════════════════════════════════════════════════════════

console.log("\n--- DÉFI COMBAT ---");

// Crée les fonctions suivantes :

// 1. calculerDegats(attaque, defense) → dégâts (minimum 1)

// 2. estMort(pv) → true si pv <= 0

// 3. attaquer(attaque, defense, pvCible) 
//    → Calcule les dégâts, les retire aux PV, renvoie les nouveaux PV

// 4. afficherCombat(nomAttaquant, nomCible, degats, pvRestants)
//    → Affiche "X attaque Y ! -Z PV (reste W PV)"

// Écris tes fonctions ici :


// Teste le système complet :
/*
let pvZombie = 20;
let attaqueSteve = 12;
let defenseZombie = 4;

// Tour 1
let degats = calculerDegats(attaqueSteve, defenseZombie);
pvZombie = attaquer(attaqueSteve, defenseZombie, pvZombie);
afficherCombat("Steve", "Zombie", degats, pvZombie);

// Tour 2
degats = calculerDegats(attaqueSteve, defenseZombie);
pvZombie = attaquer(attaqueSteve, defenseZombie, pvZombie);
afficherCombat("Steve", "Zombie", degats, pvZombie);

if (estMort(pvZombie)) {
    console.log("🎉 Le zombie est vaincu !");
}
*/

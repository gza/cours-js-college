// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 4 : La boucle while                         ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// while = "tant que" → on répète TANT QUE la condition est vraie
//
// Syntaxe :
//   while (condition) {
//       // code répété
//       // IMPORTANT : modifier quelque chose pour que la condition
//       // devienne fausse un jour !
//   }
//
// ═══════════════════════════════════════════════════════════════════

// 4.1 Compte à rebours
console.log("=== 4.1 COMPTE À REBOURS ===");

let compteur = 5;

while (compteur > 0) {
    console.log(compteur);
    compteur--;  // On décrémente, sinon boucle infinie !
}
console.log("🚀 Décollage !");

// ═══════════════════════════════════════════════════════════════════
// 4.2 Transforme ce for en while
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== 4.2 FOR → WHILE ===");

// Voici un for :
console.log("Version for :");
for (let i = 1; i <= 5; i++) {
    console.log(`Numéro ${i}`);
}

// Réécris-le avec while :
console.log("\nVersion while :");
// Écris ton code ici :


// ═══════════════════════════════════════════════════════════════════
// 4.3 Diviser jusqu'à 1
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== 4.3 DIVISION ===");

// Divise 64 par 2 jusqu'à obtenir 1
// Affiche chaque étape :
// 64
// 32
// 16
// 8
// 4
// 2
// 1

let nombre = 64;

// Écris ta boucle while ici :


// ═══════════════════════════════════════════════════════════════════
// 4.4 Trouver un multiple
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== 4.4 MULTIPLE ===");

// Trouve le premier multiple de 7 supérieur à 100
// Indice : un nombre est multiple de 7 si nombre % 7 === 0

let n = 100;

// Écris ta boucle while ici :
// (continue tant que n % 7 !== 0)


console.log(`Le premier multiple de 7 > 100 est : ${n}`);
// Résultat attendu : 105

// ═══════════════════════════════════════════════════════════════════
// DÉFI MINECRAFT : Minage jusqu'à épuisement
// ═══════════════════════════════════════════════════════════════════

console.log("\n--- DÉFI MINAGE ---");

// Ta pioche a 10 points de durabilité.
// Chaque bloc miné coûte 1 à 3 points (aléatoire).
// Mine jusqu'à ce que la pioche casse !

let durabilite = 10;
let blocsMines = 0;

while (durabilite > 0) {
    // Coût aléatoire entre 1 et 3
    let cout = Math.floor(Math.random() * 3) + 1;
    
    // TODO : Retire le coût de la durabilité
    
    // TODO : Ajoute 1 au compteur de blocs minés
    
    // TODO : Affiche "⛏️ Bloc miné ! Durabilité restante : X"
    
}

console.log(`💥 Pioche cassée après ${blocsMines} blocs !`);

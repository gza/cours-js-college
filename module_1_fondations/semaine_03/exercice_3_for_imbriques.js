// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 3 : Boucles imbriquées                      ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// On peut mettre une boucle DANS une boucle !
// La boucle intérieure s'exécute complètement à chaque tour de l'extérieure.
//
// ═══════════════════════════════════════════════════════════════════

// 3.1 ANALYSE : Combien de fois "X" sera affiché ?
console.log("=== 3.1 ===");

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        process.stdout.write("X ");  // Affiche sans retour à la ligne
    }
    console.log("");  // Retour à la ligne
}

// Ta prédiction : ??? fois
// (Vérifie en comptant les X affichés)

// ═══════════════════════════════════════════════════════════════════
// 3.2 Rectangle de blocs
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== 3.2 RECTANGLE ===");

// Crée un rectangle de 5 colonnes × 3 lignes avec des 🟫
// Attendu :
// 🟫🟫🟫🟫🟫
// 🟫🟫🟫🟫🟫
// 🟫🟫🟫🟫🟫

let largeur = 5;
let hauteur = 3;

// Écris tes boucles imbriquées ici :


// ═══════════════════════════════════════════════════════════════════
// 3.3 Triangle rectangle
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== 3.3 TRIANGLE ===");

// Crée un triangle comme ça :
// 🟩
// 🟩🟩
// 🟩🟩🟩
// 🟩🟩🟩🟩
// 🟩🟩🟩🟩🟩

// Indice : à la ligne i, on affiche i blocs

// Écris ton code ici :


// ═══════════════════════════════════════════════════════════════════
// 3.4 Triangle inversé
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== 3.4 TRIANGLE INVERSÉ ===");

// Crée un triangle inversé :
// 🟥🟥🟥🟥🟥
// 🟥🟥🟥🟥
// 🟥🟥🟥
// 🟥🟥
// 🟥

// Écris ton code ici :


// ═══════════════════════════════════════════════════════════════════
// DÉFI MINECRAFT : Grille de craft
// ═══════════════════════════════════════════════════════════════════

console.log("\n--- DÉFI GRILLE DE CRAFT ---");

// Affiche une grille de craft 3x3 avec les coordonnées :
// [0,0] [1,0] [2,0]
// [0,1] [1,1] [2,1]
// [0,2] [1,2] [2,2]

// Écris ton code ici :


// BONUS : Remplace le centre [1,1] par "⭐" !

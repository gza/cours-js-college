// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 4 : Modifier une case                       ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Pour modifier une case : grille[ligne][colonne] = nouvelleValeur;
//
// ═══════════════════════════════════════════════════════════════════

let grille = [
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."]
];

function afficherGrille() {
    for (let ligne of grille) {
        console.log(ligne.join(" "));
    }
    console.log("");
}

console.log("Grille de départ :");
afficherGrille();

// 4.1 Place "X" au centre


// 4.2 Place "O" en haut à gauche


// 4.3 Place "X" en bas à droite


console.log("Grille modifiée :");
afficherGrille();

// 4.4 Complète la fonction placer(symbole, ligne, colonne)
function placer(symbole, ligne, colonne) {

}

// 4.5 Utilise placer pour ajouter deux nouveaux symboles


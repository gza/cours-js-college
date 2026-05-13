// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 6 : Base de morpion                         ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// On prépare les fonctions principales d'un morpion.
// Pour rester simple, les coups sont écrits dans le code.
//
// ═══════════════════════════════════════════════════════════════════

let grille = [
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."]
];

let joueurActuel = "X";

function afficherGrille() {
    console.log("  0 1 2");
    for (let numeroLigne = 0; numeroLigne < grille.length; numeroLigne++) {
        console.log(numeroLigne + " " + grille[numeroLigne].join(" "));
    }
    console.log("");
}

function placerSymbole(ligne, colonne) {
    // 6.1 Vérifie que la case est vide


    // 6.2 Place joueurActuel dans la grille


    // 6.3 Renvoie true si le coup a été joué, false sinon

}

function changerJoueur() {
    // 6.4 Alterne entre "X" et "O"

}

function verifierGagnant() {
    // 6.5 Vérifie au moins les 3 lignes

}

// 6.6 Teste une suite de coups
afficherGrille();

// Exemple :
// placerSymbole(0, 0); changerJoueur(); afficherGrille();

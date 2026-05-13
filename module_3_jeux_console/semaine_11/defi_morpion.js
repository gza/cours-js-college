// ╔═══════════════════════════════════════════════════════════════════╗
// ║              DÉFI : Morpion en console ❌⭕                        ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Objectif : créer un morpion simple avec des coups écrits dans le code.
//
// Contraintes :
//   - grille 3x3
//   - fonction afficherGrille()
//   - fonction placerSymbole(ligne, colonne)
//   - fonction changerJoueur()
//   - fonction verifierGagnant()
//   - empêcher de jouer sur une case déjà prise
//
// Bonus : vérifier aussi les colonnes et les diagonales.
//
// ═══════════════════════════════════════════════════════════════════

let grille = [
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."]
];

let joueurActuel = "X";
let partieTerminee = false;

function afficherGrille() {

}

function placerSymbole(ligne, colonne) {

}

function changerJoueur() {

}

function verifierGagnant() {

}

function jouerCoup(ligne, colonne) {
    if (partieTerminee) {
        return;
    }

    // ÉTAPE 1 : essayer de placer le symbole


    // ÉTAPE 2 : afficher la grille


    // ÉTAPE 3 : vérifier si quelqu'un gagne


    // ÉTAPE 4 : changer de joueur si la partie continue


}

afficherGrille();

// ÉTAPE 5 : écris ici une suite de coups pour tester ton jeu
// jouerCoup(0, 0);
// jouerCoup(1, 0);
// jouerCoup(0, 1);
// jouerCoup(1, 1);
// jouerCoup(0, 2);

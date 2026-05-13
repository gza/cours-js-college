// ╔═══════════════════════════════════════════════════════════════════╗
// ║              DÉFI : Personnage mobile 🕹️                          ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Objectif : créer un personnage qui avance tout seul.
// Les flèches changent seulement sa direction.
//
// Contraintes :
//   - utiliser terminal-kit
//   - utiliser setInterval pour la boucle de jeu
//   - séparer mettreAJour() et afficher()
//   - détecter les murs
//   - afficher un score qui augmente à chaque déplacement
//
// Bonus : ajouter une pièce à ramasser.
//
// ═══════════════════════════════════════════════════════════════════

const term = require("terminal-kit").terminal;

const largeur = 40;
const hauteur = 15;
const vitesse = 120;

let joueur = {
    colonne: 20,
    ligne: 8
};

let direction = { colonne: 1, ligne: 0 };
let score = 0;
let partieTerminee = false;

term.clear();
term.hideCursor(true);
term.grabInput(true);

function quitter() {
    clearInterval(boucleJeu);
    term.grabInput(false);
    term.hideCursor(false);
    term.clear();
    term("Score : " + score + "\n");
    term.processExit(0);
}

function changerDirection(nomTouche) {
    // ÉTAPE 1 : transforme les flèches en direction { colonne, ligne }

}

function toucheUnMur() {
    // ÉTAPE 2 : renvoie true si le joueur sort de la zone

}

function mettreAJour() {
    if (partieTerminee) {
        return;
    }

    // ÉTAPE 3 : déplace le joueur avec direction


    // ÉTAPE 4 : augmente le score


    // ÉTAPE 5 : termine la partie si le joueur touche un mur


}

function afficherCadre() {
    // ÉTAPE 6 : affiche un cadre avec des #

}

function afficher() {
    term.clear();
    term.moveTo(1, 1, "Score : " + score + " | Échap pour quitter");
    afficherCadre();
    term.moveTo(joueur.colonne, joueur.ligne, "@");

    if (partieTerminee) {
        term.moveTo(12, hauteur + 3, "Collision ! Appuie sur Échap.");
    }
}

term.on("key", function(nomTouche) {
    if (nomTouche === "ESCAPE" || nomTouche === "CTRL_C") {
        quitter();
        return;
    }

    changerDirection(nomTouche);
});

const boucleJeu = setInterval(function() {
    mettreAJour();
    afficher();
}, vitesse);

afficher();

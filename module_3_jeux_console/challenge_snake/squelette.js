// ╔═══════════════════════════════════════════════════════════════════╗
// ║              CHALLENGE MODULE 3 : Snake ASCII 🐍                  ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Exécute ce fichier avec Node.js :
//
//     node squelette.js
//
// Si terminal-kit n'est pas installé :
//     npm init -y
//     npm install terminal-kit
//
// ═══════════════════════════════════════════════════════════════════

const term = require("terminal-kit").terminal;

// ═══════════════════════════════════════════════════════════════════
// CONSTANTES
// ═══════════════════════════════════════════════════════════════════

const LARGEUR = 30;
const HAUTEUR = 15;
const VITESSE = 140;

const CASE_VIDE = " ";
const MUR = "#";
const TETE = "@";
const CORPS = "o";
const POMME = "*";

// ═══════════════════════════════════════════════════════════════════
// DONNÉES DU JEU
// ═══════════════════════════════════════════════════════════════════

let serpent = [
    { colonne: 10, ligne: 8 },
    { colonne: 9,  ligne: 8 },
    { colonne: 8,  ligne: 8 }
];

let direction = { colonne: 1, ligne: 0 };
let directionDemandee = { colonne: 1, ligne: 0 };

let pomme = { colonne: 18, ligne: 8 };
let score = 0;
let partieTerminee = false;
let messageFin = "";

// ═══════════════════════════════════════════════════════════════════
// OUTILS
// ═══════════════════════════════════════════════════════════════════

function positionsEgales(positionA, positionB) {
    return positionA.colonne === positionB.colonne && positionA.ligne === positionB.ligne;
}

function nombreAleatoire(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function positionOccupee(position) {
    return serpent.some(function(partieSerpent) {
        return positionsEgales(partieSerpent, position);
    });
}

function placerPomme() {
    // À compléter :
    //  - choisir une colonne entre 1 et LARGEUR
    //  - choisir une ligne entre 1 et HAUTEUR
    //  - recommencer si la position est occupée par le serpent
    //  - mettre à jour la variable pomme

}

// ═══════════════════════════════════════════════════════════════════
// TERMINAL
// ═══════════════════════════════════════════════════════════════════

function demarrerTerminal() {
    term.clear();
    term.hideCursor(true);
    term.grabInput(true);
}

function quitter() {
    clearInterval(boucleJeu);
    term.grabInput(false);
    term.hideCursor(false);
    term.moveTo(1, HAUTEUR + 5, "\n");
    term.processExit(0);
}

// ═══════════════════════════════════════════════════════════════════
// CLAVIER
// ═══════════════════════════════════════════════════════════════════

function directionsOpposees(directionA, directionB) {
    return directionA.colonne + directionB.colonne === 0 &&
           directionA.ligne + directionB.ligne === 0;
}

function changerDirection(nomTouche) {
    let nouvelleDirection = null;

    if (nomTouche === "UP") {
        nouvelleDirection = { colonne: 0, ligne: -1 };
    } else if (nomTouche === "DOWN") {
        nouvelleDirection = { colonne: 0, ligne: 1 };
    } else if (nomTouche === "LEFT") {
        nouvelleDirection = { colonne: -1, ligne: 0 };
    } else if (nomTouche === "RIGHT") {
        nouvelleDirection = { colonne: 1, ligne: 0 };
    }

    // À compléter :
    //  - si nouvelleDirection existe
    //  - et si elle n'est pas opposée à direction
    //  - alors directionDemandee devient nouvelleDirection

}

term.on("key", function(nomTouche) {
    if (nomTouche === "ESCAPE" || nomTouche === "CTRL_C") {
        quitter();
        return;
    }

    changerDirection(nomTouche);
});

// ═══════════════════════════════════════════════════════════════════
// COLLISIONS
// ═══════════════════════════════════════════════════════════════════

function toucheMur(position) {
    // À compléter : renvoie true si position est hors de la grille

}

function toucheCorps(position) {
    // À compléter : renvoie true si position touche le corps du serpent
    // Indice : on ne compare pas avec serpent[0], qui est la tête actuelle.

}

function terminerPartie(message) {
    partieTerminee = true;
    messageFin = message;
}

// ═══════════════════════════════════════════════════════════════════
// BOUCLE DE JEU
// ═══════════════════════════════════════════════════════════════════

function calculerNouvelleTete() {
    let teteActuelle = serpent[0];

    return {
        colonne: teteActuelle.colonne + direction.colonne,
        ligne: teteActuelle.ligne + direction.ligne
    };
}

function mettreAJour() {
    if (partieTerminee) {
        return;
    }

    // ÉTAPE 1 : appliquer directionDemandee à direction


    // ÉTAPE 2 : calculer la nouvelle tête


    // ÉTAPE 3 : vérifier les collisions avec mur et corps


    // ÉTAPE 4 : ajouter la nouvelle tête au début du tableau serpent


    // ÉTAPE 5 : si la pomme est mangée, augmenter le score et replacer la pomme


    // ÉTAPE 6 : sinon, retirer la dernière case du serpent


}

// ═══════════════════════════════════════════════════════════════════
// AFFICHAGE
// ═══════════════════════════════════════════════════════════════════

function creerGrilleVide() {
    let grille = [];

    for (let numeroLigne = 0; numeroLigne < HAUTEUR; numeroLigne++) {
        let ligne = [];

        for (let numeroColonne = 0; numeroColonne < LARGEUR; numeroColonne++) {
            ligne.push(CASE_VIDE);
        }

        grille.push(ligne);
    }

    return grille;
}

function placerDansGrille(grille, position, symbole) {
    grille[position.ligne - 1][position.colonne - 1] = symbole;
}

function dessinerCadre() {
    let ligneMur = MUR.repeat(LARGEUR + 2);

    term.moveTo(1, 2, ligneMur);

    for (let numeroLigne = 1; numeroLigne <= HAUTEUR; numeroLigne++) {
        term.moveTo(1, numeroLigne + 2, MUR);
        term.moveTo(LARGEUR + 2, numeroLigne + 2, MUR);
    }

    term.moveTo(1, HAUTEUR + 3, ligneMur);
}

function afficherGrille(grille) {
    for (let numeroLigne = 0; numeroLigne < grille.length; numeroLigne++) {
        term.moveTo(2, numeroLigne + 3, grille[numeroLigne].join(""));
    }
}

function afficherJeu() {
    let grille = creerGrilleVide();

    placerDansGrille(grille, pomme, POMME);

    for (let indexSerpent = serpent.length - 1; indexSerpent >= 0; indexSerpent--) {
        let symbole = indexSerpent === 0 ? TETE : CORPS;
        placerDansGrille(grille, serpent[indexSerpent], symbole);
    }

    term.clear();
    term.moveTo(1, 1, "Score : " + score + " | Flèches pour jouer | Échap pour quitter");
    dessinerCadre();
    afficherGrille(grille);

    if (partieTerminee) {
        term.moveTo(1, HAUTEUR + 5, messageFin + " Score final : " + score);
    }
}

// ═══════════════════════════════════════════════════════════════════
// DÉMARRAGE
// ═══════════════════════════════════════════════════════════════════

function jouer() {
    mettreAJour();
    afficherJeu();
}

demarrerTerminal();

const boucleJeu = setInterval(jouer, VITESSE);

afficherJeu();

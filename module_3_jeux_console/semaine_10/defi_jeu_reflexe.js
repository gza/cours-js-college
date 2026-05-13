// ╔═══════════════════════════════════════════════════════════════════╗
// ║              DÉFI : Jeu de réflexe ⚡                              ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Le programme choisit une touche parmi A, Z, E, R.
// Le joueur doit appuyer sur la bonne touche le plus vite possible.
//
// Objectifs :
//   - choisir une touche aléatoire
//   - mesurer le temps de réaction
//   - compter les bonnes réponses
//   - faire 5 manches
//
// ═══════════════════════════════════════════════════════════════════

const term = require("terminal-kit").terminal;

const touchesPossibles = ["a", "z", "e", "r"];
const NOMBRE_MANCHES = 5;

let mancheActuelle = 0;
let score = 0;
let toucheDemandee = "";
let debutChrono = 0;
let enAttenteReponse = false;

term.clear();
term.hideCursor(true);
term.grabInput(true);

function nombreAleatoire(maximum) {
    return Math.floor(Math.random() * maximum);
}

function choisirTouche() {
    // Renvoie une touche au hasard dans touchesPossibles

}

function quitter() {
    term.grabInput(false);
    term.hideCursor(false);
    term.clear();
    term("Score final : " + score + "/" + NOMBRE_MANCHES + "\n");
    term.processExit(0);
}

function afficherIntroManche() {
    term.clear();
    term.cyan("Manche " + mancheActuelle + "/" + NOMBRE_MANCHES + "\n");
    term("Prépare-toi...\n");
}

function demarrerManche() {
    mancheActuelle = mancheActuelle + 1;

    if (mancheActuelle > NOMBRE_MANCHES) {
        quitter();
        return;
    }

    afficherIntroManche();

    setTimeout(function() {
        // ÉTAPE 1 : choisir la touche demandée


        // ÉTAPE 2 : afficher la touche en grand


        // ÉTAPE 3 : démarrer le chrono et attendre la réponse


    }, 1000);
}

term.on("key", function(nomTouche) {
    if (nomTouche === "ESCAPE" || nomTouche === "CTRL_C") {
        quitter();
        return;
    }

    if (!enAttenteReponse) {
        return;
    }

    // ÉTAPE 4 : comparer la touche pressée avec toucheDemandee


    // ÉTAPE 5 : calculer et afficher le temps si c'est réussi


    // ÉTAPE 6 : lancer la manche suivante après une courte pause


});

demarrerManche();

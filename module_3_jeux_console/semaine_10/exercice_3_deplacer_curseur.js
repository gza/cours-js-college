// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 3 : Déplacer un personnage                  ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Le joueur est représenté par @.
// Les flèches changent sa position.
//
// ═══════════════════════════════════════════════════════════════════

const term = require("terminal-kit").terminal;

let colonneJoueur = 20;
let ligneJoueur = 10;

term.clear();
term.hideCursor(true);
term.grabInput(true);

function afficher() {
    term.clear();
    term.moveTo(1, 1, "Déplace @ avec les flèches. Échap pour quitter.");
    term.moveTo(colonneJoueur, ligneJoueur, "@");
}

function quitter() {
    term.grabInput(false);
    term.hideCursor(false);
    term.clear();
    term.processExit(0);
}

term.on("key", function(nomTouche) {
    // 3.1 Modifie ligneJoueur ou colonneJoueur selon la flèche pressée


    // 3.2 Empêche le joueur de sortir trop haut ou trop à gauche


    // 3.3 Appelle afficher() après chaque déplacement


    if (nomTouche === "ESCAPE" || nomTouche === "CTRL_C") {
        quitter();
    }
});

afficher();

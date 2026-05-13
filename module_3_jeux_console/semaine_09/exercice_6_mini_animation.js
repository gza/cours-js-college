// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 6 : Mini-animation                          ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// setInterval répète une fonction toutes les X millisecondes.
// 1000 ms = 1 seconde.
//
// ═══════════════════════════════════════════════════════════════════

const term = require("terminal-kit").terminal;

const images = ["⛏️", "💎", "✨", "💎"];
let numeroImage = 0;

term.hideCursor(true);

const animation = setInterval(function() {
    term.clear();

    // 6.1 Affiche le titre "Minerai magique"


    // 6.2 Affiche l'image actuelle : images[numeroImage]


    // 6.3 Passe à l'image suivante


    // 6.4 Quand numeroImage arrive à la fin du tableau, reviens à 0


}, 300);

setTimeout(function() {
    clearInterval(animation);
    term.hideCursor(false);
    term.clear();
    term("Animation terminée.\n");
    term.processExit(0);
}, 4000);

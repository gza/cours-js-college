// ╔═══════════════════════════════════════════════════════════════════╗
// ║              DÉFI : Texte arc-en-ciel animé 🌈                    ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Objectif : créer une enseigne de jeu vidéo qui change de couleur.
//
// Contraintes :
//   - utiliser terminal-kit
//   - utiliser un tableau de fonctions/couleurs
//   - utiliser setInterval
//   - quitter proprement après quelques secondes ou avec Ctrl+C
//
// ═══════════════════════════════════════════════════════════════════

const term = require("terminal-kit").terminal;

const message = "=== SUPER DONJON ASCII ===";
const couleurs = [
    function(texte) { term.red(texte); },
    function(texte) { term.yellow(texte); },
    function(texte) { term.green(texte); },
    function(texte) { term.cyan(texte); },
    function(texte) { term.blue(texte); },
    function(texte) { term.magenta(texte); }
];

let indexCouleur = 0;

term.clear();
term.hideCursor(true);
term.grabInput(true);

function quitter() {
    term.grabInput(false);
    term.hideCursor(false);
    term.clear();
    term("À bientôt !\n");
    term.processExit(0);
}

term.on("key", function(nomTouche) {
    if (nomTouche === "CTRL_C" || nomTouche === "ESCAPE") {
        quitter();
    }
});

const animation = setInterval(function() {
    term.clear();

    // ÉTAPE 1 : choisis la couleur actuelle dans le tableau


    // ÉTAPE 2 : place le curseur au milieu de l'écran avec moveTo


    // ÉTAPE 3 : affiche le message avec la couleur choisie


    // ÉTAPE 4 : passe à la couleur suivante


}, 250);

setTimeout(function() {
    clearInterval(animation);
    quitter();
}, 8000);

// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 2 : Détecter les touches                    ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Objectif : reconnaître les flèches du clavier.
//
// ═══════════════════════════════════════════════════════════════════

const term = require("terminal-kit").terminal;

term.clear();
term.grabInput(true);
term("Utilise les flèches. Échap pour quitter.\n\n");

function quitter() {
    term.grabInput(false);
    term("\nÀ bientôt !\n");
    term.processExit(0);
}

term.on("key", function(nomTouche) {
    // 2.1 Si nomTouche vaut "UP", affiche "Tu montes"


    // 2.2 Si nomTouche vaut "DOWN", affiche "Tu descends"


    // 2.3 Si nomTouche vaut "LEFT", affiche "Tu vas à gauche"


    // 2.4 Si nomTouche vaut "RIGHT", affiche "Tu vas à droite"


    // 2.5 Si nomTouche vaut "ESCAPE" ou "CTRL_C", quitte


});

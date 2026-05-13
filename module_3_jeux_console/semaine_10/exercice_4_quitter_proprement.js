// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 4 : Quitter proprement                      ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Quand un programme cache le curseur ou capture le clavier,
// il doit tout remettre en ordre avant de quitter.
//
// ═══════════════════════════════════════════════════════════════════

const term = require("terminal-kit").terminal;

let nombreTouches = 0;

term.clear();
term.hideCursor(true);
term.grabInput(true);

function afficher() {
    term.clear();
    term.green("Terminal interactif actif.\n");
    term("Touches pressées : " + nombreTouches + "\n");
    term("Échap ou Ctrl+C pour quitter.\n");
}

function quitter() {
    // 4.1 Désactive grabInput


    // 4.2 Réaffiche le curseur


    // 4.3 Efface l'écran et affiche un message final


    // 4.4 Termine le programme


}

term.on("key", function(nomTouche) {
    if (nomTouche === "ESCAPE" || nomTouche === "CTRL_C") {
        quitter();
        return;
    }

    nombreTouches = nombreTouches + 1;
    afficher();
});

afficher();

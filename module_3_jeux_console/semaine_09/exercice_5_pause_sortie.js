// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 5 : Pause et sortie propre                  ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Un programme interactif doit prévoir comment se terminer.
// Ici, on quitte avec Échap ou Ctrl+C.
//
// ═══════════════════════════════════════════════════════════════════

const term = require("terminal-kit").terminal;

term.clear();
term.grabInput(true);

term.green("Programme en pause.\n");
term("Appuie sur Échap ou Ctrl+C pour quitter.\n");

function quitter() {
    term.grabInput(false);
    term("\nFin du programme.\n");
    term.processExit(0);
}

term.on("key", function(nomTouche) {
    // 5.1 Affiche le nom de la touche pressée


    // 5.2 Si la touche est ESCAPE ou CTRL_C, appelle quitter()


});

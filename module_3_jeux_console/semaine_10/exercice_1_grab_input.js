// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 1 : grabInput                               ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// grabInput(true) permet de recevoir les touches tout de suite,
// sans attendre la touche Entrée.
//
// ═══════════════════════════════════════════════════════════════════

const term = require("terminal-kit").terminal;

term.clear();
term.grabInput(true);

term.cyan("Appuie sur des touches.\n");
term("Échap ou Ctrl+C pour quitter.\n\n");

function quitter() {
    term.grabInput(false);
    term("\nFin.\n");
    term.processExit(0);
}

term.on("key", function(nomTouche) {
    // 1.1 Affiche le nom de la touche reçue
    term("Touche reçue : " + nomTouche + "\n");

    // 1.2 Quitte si la touche est ESCAPE ou CTRL_C
    if (nomTouche === "ESCAPE" || nomTouche === "CTRL_C") {
        quitter();
    }
});

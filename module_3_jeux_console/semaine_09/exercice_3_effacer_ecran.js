// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 3 : Effacer l'écran                         ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// term.clear() vide le terminal.
// C'est très utile pour redessiner l'écran d'un jeu.
//
// ═══════════════════════════════════════════════════════════════════

const term = require("terminal-kit").terminal;

term.clear();

// 3.1 Affiche un titre de jeu en haut de l'écran
term.cyan.bold("=== DONJON ASCII ===\n\n");

// 3.2 Affiche 3 lignes : nom du joueur, PV, or


// 3.3 Change des valeurs, relance le fichier, observe que l'écran est nettoyé


term.processExit(0);

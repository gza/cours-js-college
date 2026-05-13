// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 2 : Couleurs et styles                      ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// terminal-kit permet d'écrire avec des couleurs :
//   term.red("rouge\n");
//   term.green("vert\n");
//   term.yellow.bold("jaune et gras\n");
//
// ═══════════════════════════════════════════════════════════════════

const term = require("terminal-kit").terminal;

// 2.1 Affiche le nom de 4 minerais Minecraft avec 4 couleurs différentes


// 2.2 Affiche une barre de vie simple : "PV : 20/20" avec les PV en vert
term("PV : ");


// 2.3 Affiche un message d'alerte en rouge et en gras


// 2.4 Bonus : invente une ligne de menu avec 3 couleurs


term.processExit(0);

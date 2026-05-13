// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 1 : Importer terminal-kit                   ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Exécute ce fichier avec :
//
//     node exercice_1_import_terminal.js
//
// Si Node.js dit "Cannot find module 'terminal-kit'", installe terminal-kit
// depuis la racine du projet : npm init -y puis npm install terminal-kit
//
// ═══════════════════════════════════════════════════════════════════

const term = require("terminal-kit").terminal;

// 1.1 Affiche une phrase normale avec term(...)
term("Terminal-kit est prêt !\n");

// 1.2 Affiche une phrase verte avec term.green(...)
term.green("Ce texte devrait être vert.\n");

// 1.3 Ajoute une phrase de ton choix en bleu


term.processExit(0);

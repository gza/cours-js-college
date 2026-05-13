// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 4 : Positionner le texte                    ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// term.moveTo(colonne, ligne, texte)
// Attention : colonne d'abord, ligne ensuite.
//
// ═══════════════════════════════════════════════════════════════════

const term = require("terminal-kit").terminal;

term.clear();

// 4.1 Écris ton nom en colonne 5, ligne 3
term.moveTo(5, 3, "Nom du joueur");

// 4.2 Écris "PV : 20" en colonne 5, ligne 5


// 4.3 Écris "Inventaire" en colonne 25, ligne 3


// 4.4 Complète cette fonction pour placer un texte facilement
function afficherALaPosition(colonne, ligne, texte) {

}

// 4.5 Utilise la fonction pour afficher 3 objets d'inventaire


term.moveTo(1, 12, "\n");
term.processExit(0);

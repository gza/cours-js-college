// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 6 : Déplacement automatique                 ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Les touches changent la direction.
// La boucle de jeu fait avancer le joueur automatiquement.
//
// ═══════════════════════════════════════════════════════════════════

const term = require("terminal-kit").terminal;

const largeur = 30;
const hauteur = 12;

let joueur = {
    colonne: 10,
    ligne: 6
};

let direction = "RIGHT";

term.clear();
term.hideCursor(true);
term.grabInput(true);

function quitter() {
    clearInterval(boucleJeu);
    term.grabInput(false);
    term.hideCursor(false);
    term.clear();
    term.processExit(0);
}

function changerDirection(nomTouche) {
    // 6.1 Change direction selon UP, DOWN, LEFT, RIGHT

}

function mettreAJour() {
    // 6.2 Fais avancer joueur selon direction


    // 6.3 Si le joueur sort de la zone, fais-le revenir de l'autre côté


}

function afficher() {
    term.clear();
    term.moveTo(1, 1, "Flèches pour changer de direction. Échap pour quitter.");
    term.moveTo(joueur.colonne, joueur.ligne, "@");
}

term.on("key", function(nomTouche) {
    if (nomTouche === "ESCAPE" || nomTouche === "CTRL_C") {
        quitter();
        return;
    }

    changerDirection(nomTouche);
});

const boucleJeu = setInterval(function() {
    mettreAJour();
    afficher();
}, 150);

afficher();

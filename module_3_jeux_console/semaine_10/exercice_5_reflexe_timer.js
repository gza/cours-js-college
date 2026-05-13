// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 5 : Chronomètre de réflexe                  ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Date.now() donne le temps actuel en millisecondes.
// En comparant deux valeurs, on obtient une durée.
//
// ═══════════════════════════════════════════════════════════════════

const term = require("terminal-kit").terminal;

let toucheDemandee = "SPACE";
let debutChrono = 0;
let jeuActif = false;

term.clear();
term.grabInput(true);

function quitter() {
    term.grabInput(false);
    term("\nFin du test.\n");
    term.processExit(0);
}

function demarrerTest() {
    term.clear();
    term.yellow("Prépare-toi...\n");

    setTimeout(function() {
        term.clear();
        term.green("APPUIE SUR ESPACE !\n");

        // 5.1 Enregistre le moment de départ avec Date.now()


        // 5.2 Active le jeu


    }, 1500);
}

term.on("key", function(nomTouche) {
    if (nomTouche === "ESCAPE" || nomTouche === "CTRL_C") {
        quitter();
        return;
    }

    if (!jeuActif) {
        return;
    }

    // 5.3 Si la touche est la bonne, calcule et affiche le temps de réaction


    // 5.4 Sinon, affiche "Mauvaise touche !"


});

demarrerTest();

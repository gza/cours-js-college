// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 2 : setInterval                             ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// setInterval répète une action.
// clearInterval arrête cette répétition.
//
// ═══════════════════════════════════════════════════════════════════

let compteur = 0;

const boucle = setInterval(function() {
    compteur = compteur + 1;
    console.log("Tour de boucle :", compteur);

    // 2.1 Si compteur vaut 5, arrête la boucle


}, 500);

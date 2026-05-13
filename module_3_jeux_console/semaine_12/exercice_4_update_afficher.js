// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 4 : update + afficher                       ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Une boucle de jeu sépare souvent :
//   - mettreAJour() : change les données
//   - afficher()    : montre les données
//
// ═══════════════════════════════════════════════════════════════════

let joueur = {
    colonne: 0,
    ligne: 0
};

function mettreAJour() {
    // 4.1 Fais avancer le joueur vers la droite

}

function afficher() {
    console.clear();
    console.log("Position du joueur :");
    console.log("colonne =", joueur.colonne);
    console.log("ligne    =", joueur.ligne);
}

const boucle = setInterval(function() {
    mettreAJour();
    afficher();

    // 4.2 Arrête la boucle quand colonne atteint 10


}, 300);

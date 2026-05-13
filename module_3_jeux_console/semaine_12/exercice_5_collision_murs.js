// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 5 : Collision avec les murs                 ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Un personnage touche un mur s'il sort des limites de la carte.
//
// ═══════════════════════════════════════════════════════════════════

const largeur = 10;
const hauteur = 6;

let joueur = {
    colonne: 4,
    ligne: 2
};

function toucheUnMur(position) {
    // 5.1 Renvoie true si position.colonne est hors limites


    // 5.2 Renvoie true si position.ligne est hors limites


    // 5.3 Sinon, renvoie false


}

// 5.4 Teste plusieurs positions
console.log("Centre :", toucheUnMur(joueur));
console.log("Trop à gauche :", toucheUnMur({ colonne: -1, ligne: 2 }));
console.log("Trop à droite :", toucheUnMur({ colonne: 10, ligne: 2 }));
console.log("Trop haut :", toucheUnMur({ colonne: 4, ligne: -1 }));
console.log("Trop bas :", toucheUnMur({ colonne: 4, ligne: 6 }));

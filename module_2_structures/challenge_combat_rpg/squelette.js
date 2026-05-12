// ╔═══════════════════════════════════════════════════════════════════╗
// ║         CHALLENGE MODULE 2 : Combat RPG tour par tour ⚔️          ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Exécute ce fichier avec Node.js :
//
//     node squelette.js
//
// ═══════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════
// CONSTANTES
// ═══════════════════════════════════════════════════════════════════

const LARGEUR_BARRE = 20;

// ═══════════════════════════════════════════════════════════════════
// DONNÉES DU JEU
// ═══════════════════════════════════════════════════════════════════

let heros = {
    nom: "Steve",
    pv: 30,
    pvMax: 30,
    stats: { attaque: 8, defense: 3 },
    equipement: {
        arme:   { nom: "Épée en fer",      degats: 4 },
        armure: { nom: "Cotte de mailles", reduction: 2 }
    },
    inventaire: [
        { type: "potion", nom: "Petite potion", soin: 10 },
        { type: "potion", nom: "Grande potion", soin: 25 }
    ],
    enDefense: false
};

let monstre = {
    nom: "Zombie",
    pv: 25,
    pvMax: 25,
    stats: { attaque: 6, defense: 1 },
    equipement: {
        arme:   { nom: "Griffes",     degats: 2 },
        armure: { nom: "Peau pourrie", reduction: 0 }
    }
};


// ═══════════════════════════════════════════════════════════════════
// AFFICHAGE
// ═══════════════════════════════════════════════════════════════════

// Affiche une barre de vie en texte pour un personnage.
function afficherBarreVie(perso) {
    // À compléter :
    //  - calculer le nombre de █ pleins selon (pv / pvMax) * LARGEUR_BARRE
    //  - construire une barre avec des █ pleins et des ░ vides
    //  - afficher une ligne du style :
    //      Steve [████████████░░░░░░░░] 18/30

}

// Affiche les deux combattants.
function afficherCombat() {
    console.log("\n──────── COMBAT ────────");
    afficherBarreVie(heros);
    afficherBarreVie(monstre);
    console.log("");
}


// ═══════════════════════════════════════════════════════════════════
// CALCULS
// ═══════════════════════════════════════════════════════════════════

// Renvoie un nombre aléatoire entre min et max (inclus).
function alea(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Calcule les dégâts infligés par "attaquant" à "cible".
// Formule : (attaque + arme.degats) - (defense + armure.reduction) + alea(-1, 2)
// Minimum 1 dégât.
function calculerDegats(attaquant, cible) {

}


// ═══════════════════════════════════════════════════════════════════
// ACTIONS DU HÉROS
// ═══════════════════════════════════════════════════════════════════

function attaquer(attaquant, cible) {
    // À compléter :
    //  - calculer les dégâts
    //  - si la cible est en défense (cible.enDefense), diviser par 2
    //  - retirer les dégâts de cible.pv (ne pas descendre sous 0)
    //  - afficher un message du genre :
    //      "Steve attaque Zombie avec Épée en fer (-7 PV)"

}

function defendre(perso) {
    perso.enDefense = true;
    // Affiche un message
}

function utiliserPotion(perso) {
    // À compléter :
    //  - chercher la première potion dans l'inventaire (find)
    //  - si aucune : afficher "Plus de potion !"
    //  - sinon : ajouter potion.soin aux pv (sans dépasser pvMax)
    //           puis retirer la potion de l'inventaire
    //           afficher "<nom> boit <potion.nom> (+X PV)"

}

function fuir() {
    // 50% de chance de réussir.
    // Renvoie true si réussi, false sinon.

}


// ═══════════════════════════════════════════════════════════════════
// TOUR DU MONSTRE
// ═══════════════════════════════════════════════════════════════════

function tourMonstre() {
    if (monstre.pv <= 0) return;
    attaquer(monstre, heros);
}


// ═══════════════════════════════════════════════════════════════════
// BOUCLE DE JEU
// ═══════════════════════════════════════════════════════════════════

// Pour commencer SIMPLE : enchaîne ici une suite d'actions
// "à la main" pour tester. Tu pourras ensuite remplacer par
// une vraie boucle de jeu, puis plus tard par un menu interactif.
function jouer() {
    afficherCombat();

    // Exemple de tours scriptés (à modifier / remplacer) :
    //
    // attaquer(heros, monstre); tourMonstre(); afficherCombat();
    // defendre(heros);          tourMonstre(); afficherCombat();
    // utiliserPotion(heros);    tourMonstre(); afficherCombat();
    // attaquer(heros, monstre); afficherCombat();

    // Quand tu seras prêt, transforme ça en boucle :
    //   tant que heros.pv > 0 ET monstre.pv > 0
    //     - demander l'action du héros
    //     - faire l'action
    //     - si combat pas fini : tourMonstre()
    //     - heros.enDefense = false (fin de tour)

    // Annonce du gagnant
    if (heros.pv <= 0 && monstre.pv <= 0) {
        console.log("\n💥 Égalité !");
    } else if (heros.pv <= 0) {
        console.log(`\n💀 ${monstre.nom} a vaincu ${heros.nom}...`);
    } else if (monstre.pv <= 0) {
        console.log(`\n🏆 ${heros.nom} a vaincu ${monstre.nom} !`);
    }

    process.exit();
}

jouer();

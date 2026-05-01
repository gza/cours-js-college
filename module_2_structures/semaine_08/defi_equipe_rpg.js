// ╔═══════════════════════════════════════════════════════════════════╗
// ║              DÉFI : Équipe RPG complète 🛡️                        ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Crée une équipe de 3 héros, chacun avec stats imbriquées,
// équipement et liste de compétences.
//
// ═══════════════════════════════════════════════════════════════════

// ÉTAPE 1 : Crée le tableau "equipe" (3 héros).
// Chaque héros doit avoir :
//   - nom        (string)
//   - classe     (string)
//   - pv, pvMax  (number)
//   - stats      : { force, agilite, intelligence }
//   - equipement : { arme: { nom, degats }, armure: { nom, reduction } }
//   - competences: tableau de strings (au moins 2)
let equipe;



// ───────────────────────────────────────────────────────────────────
// ÉTAPE 2 : Fonctions
// ───────────────────────────────────────────────────────────────────

// 2.1 afficherEquipe()
//     Affiche chaque héros sur plusieurs lignes lisibles.
function afficherEquipe() {

}

// 2.2 puissance(heros)
//     Renvoie : stats.force + equipement.arme.degats
function puissance(heros) {

}

// 2.3 plusPuissant()
//     Renvoie le héros avec la plus grande puissance.
function plusPuissant() {

}

// 2.4 equiperArme(nomHeros, nouvelleArme)
//     Trouve le héros par son nom et change son arme.
//     nouvelleArme est un objet { nom, degats }.
function equiperArme(nomHeros, nouvelleArme) {

}

// 2.5 totalCompetences()
//     Renvoie le nombre total de compétences dans l'équipe.
function totalCompetences() {

}


// ───────────────────────────────────────────────────────────────────
// ÉTAPE 3 : Démo
// ───────────────────────────────────────────────────────────────────

// afficherEquipe();
// console.log("Plus puissant :", plusPuissant().nom);
// equiperArme("Steve", { nom: "Hache de diamant", degats: 12 });
// afficherEquipe();
// console.log("Total compétences :", totalCompetences());

// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 5 : Parcourir avec for...in                 ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Syntaxe :
//   for (let cle in objet) {
//       // utiliser cle et objet[cle]
//   }
//
// ═══════════════════════════════════════════════════════════════════

let stats = {
    force: 12,
    agilite: 8,
    intelligence: 5,
    chance: 3
};

// 5.1 Affiche toutes les propriétés sous la forme :
//   force = 12
//   agilite = 8
//   ...



// 5.2 Calcule la SOMME de toutes les valeurs
let total = 0;



console.log("Total des stats :", total);

// 5.3 Trouve la propriété avec la plus GRANDE valeur
let meilleureStat;
let meilleureValeur = 0;



console.log(`Meilleure stat : ${meilleureStat} (${meilleureValeur})`);

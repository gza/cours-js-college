// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 5 : filter                                  ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// tab.filter(function(item) { return ... });
//   → renvoie un NOUVEAU tableau avec tous les items qui correspondent.
//
// ═══════════════════════════════════════════════════════════════════

let mobs = [
    { nom: "Zombie",    type: "hostile",  pv: 20 },
    { nom: "Vache",     type: "passif",   pv: 10 },
    { nom: "Creeper",   type: "hostile",  pv: 20 },
    { nom: "Cochon",    type: "passif",   pv: 10 },
    { nom: "Squelette", type: "hostile",  pv: 20 },
    { nom: "Mouton",    type: "passif",   pv: 8  }
];

// 5.1 Garde uniquement les mobs hostiles
let hostiles;


console.log("Hostiles :", hostiles);

// 5.2 Garde uniquement les mobs passifs
let passifs;


console.log("Passifs :", passifs);

// 5.3 Garde uniquement les mobs avec pv >= 15
let costauds;


console.log("Costauds :", costauds);

// 5.4 Combien y a-t-il de mobs hostiles ?
console.log("Nombre d'hostiles :");

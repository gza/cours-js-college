// ╔═══════════════════════════════════════════════════════════════════╗
// ║           EXERCICE 8 : Entrée utilisateur (process.argv)          ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Quand tu lances un programme avec node, tu peux lui passer des infos :
//
//   node monFichier.js argument1 argument2
//
// Ces arguments sont stockés dans process.argv :
//   process.argv[0] → chemin vers node
//   process.argv[1] → chemin vers ton fichier
//   process.argv[2] → premier argument (argument1)
//   process.argv[3] → deuxième argument (argument2)
//
// ═══════════════════════════════════════════════════════════════════

// 8.1 TESTE D'ABORD : Exécute ce fichier avec ton prénom
//     Exemple : node exercice_8_entree_utilisateur.js Lucas

let prenom = process.argv[2];
console.log(`Salut ${prenom} !`);

// 8.2 Ajoute un deuxième argument pour l'âge
//     Exemple : node exercice_8_entree_utilisateur.js Lucas 12

let age = process.argv[3];
console.log(`Tu as ${age} ans.`);

// ═══════════════════════════════════════════════════════════════════
// DÉFI : Calculatrice en ligne de commande
// ═══════════════════════════════════════════════════════════════════

console.log("\n--- DÉFI CALCULATRICE ---");

// Lance le programme avec deux nombres :
//   node exercice_8_entree_utilisateur.js Lucas 12 15 7
//
// Les nombres seront en position [4] et [5]

let nombre1 = process.argv[4];
let nombre2 = process.argv[5];

// ATTENTION ! process.argv donne des TEXTES (strings)
// Il faut les convertir en nombres avec Number()

let n1 = Number(nombre1);
let n2 = Number(nombre2);

// Affiche les 4 opérations entre n1 et n2
// Ta réponse ici :


// ═══════════════════════════════════════════════════════════════════
// SUPER DÉFI : Message personnalisé Minecraft
// ═══════════════════════════════════════════════════════════════════

console.log("\n--- SUPER DÉFI ---");

// Lance avec : node exercice_8_entree_utilisateur.js Steve 100 Nether
// Où Steve = pseudo, 100 = PV, Nether = biome
//
// Et affiche :
// "Bienvenue Steve ! Tu as 100 PV et tu explores le Nether."

// Récupère les arguments ici :


// Affiche le message ici :


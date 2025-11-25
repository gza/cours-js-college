// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 5 : Modifier des variables                  ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// On peut changer la valeur d'une variable après l'avoir créée.
// C'est comme le bloc "Ajouter à..." dans Scratch !
//
// Raccourcis pratiques :
//   score += 10    équivaut à    score = score + 10
//   score -= 5     équivaut à    score = score - 5
//   score *= 2     équivaut à    score = score * 2
//   score /= 2     équivaut à    score = score / 2
//
// ═══════════════════════════════════════════════════════════════════

let score = 0;
console.log("Score initial :", score);

// 5.1 Ajoute 100 points au score (utilise +=)
// Ta réponse ici :

console.log("Après bonus :", score);  // Doit afficher 100

// 5.2 Retire 25 points au score (utilise -=)
// Ta réponse ici :

console.log("Après malus :", score);  // Doit afficher 75

// 5.3 Multiplie le score par 2 (utilise *=)
// Ta réponse ici :

console.log("Score doublé :", score);  // Doit afficher 150

// ═══════════════════════════════════════════════════════════════════
// DÉFI : Simulation de jeu Minecraft
// ═══════════════════════════════════════════════════════════════════

console.log("\n--- DÉFI MINECRAFT ---");

let pv = 20;  // Points de vie max dans Minecraft
console.log("PV de départ :", pv);

// Un zombie te frappe ! Tu perds 6 PV
// Écris le code pour retirer 6 PV :

console.log("Après attaque zombie :", pv);

// Tu manges une côtelette ! Tu regagnes 8 PV
// Écris le code pour ajouter 8 PV :

console.log("Après avoir mangé :", pv);

// Tu tombes de haut ! Tu perds la moitié de tes PV
// Écris le code pour diviser tes PV par 2 :

console.log("Après la chute :", pv);

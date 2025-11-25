// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 5 : break et continue                       ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// break    → sort immédiatement de la boucle
// continue → saute au tour suivant (ignore le reste du code)
//
// ═══════════════════════════════════════════════════════════════════

// 5.1 ANALYSE : Que va afficher ce code ?
console.log("=== 5.1 BREAK ===");

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

// Ta prédiction : ???

// ═══════════════════════════════════════════════════════════════════
// 5.2 ANALYSE : Et celui-ci ?
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== 5.2 CONTINUE ===");

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

// Ta prédiction : ???

// ═══════════════════════════════════════════════════════════════════
// 5.3 Sauter les multiples de 3
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== 5.3 SAUTER MULTIPLES DE 3 ===");

// Affiche les nombres de 1 à 15, SAUF les multiples de 3
// Résultat attendu : 1, 2, 4, 5, 7, 8, 10, 11, 13, 14

for (let i = 1; i <= 15; i++) {
    // Ajoute un if avec continue pour sauter les multiples de 3
    // Indice : i % 3 === 0 signifie que i est multiple de 3
    
    console.log(i);
}

// ═══════════════════════════════════════════════════════════════════
// 5.4 Chercher et s'arrêter
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== 5.4 RECHERCHE ===");

// Cherche le premier nombre divisible par 7 ET par 3 entre 1 et 100
// Dès que tu le trouves, affiche-le et arrête la boucle avec break

for (let i = 1; i <= 100; i++) {
    // Écris ta condition et ton break ici
    
}

// Résultat attendu : 21

// ═══════════════════════════════════════════════════════════════════
// DÉFI MINECRAFT : Chercher un diamant
// ═══════════════════════════════════════════════════════════════════

console.log("\n--- DÉFI DIAMANT ---");

// Tu creuses jusqu'à trouver un diamant.
// À chaque bloc, il y a 10% de chance de trouver un diamant.
// Affiche chaque bloc creusé, et arrête-toi quand tu trouves !

let blocs = 0;
let diamantTrouve = false;

while (!diamantTrouve) {
    blocs++;
    
    // 10% de chance de diamant (Math.random() < 0.1)
    if (Math.random() < 0.1) {
        // TODO : Affiche "💎 DIAMANT trouvé au bloc X !"
        // TODO : Utilise break pour sortir
        
    } else {
        console.log(`⛏️ Bloc ${blocs} : Pierre...`);
    }
    
    // Sécurité : arrête après 50 blocs si pas de chance
    if (blocs >= 50) {
        console.log("😢 Pas de diamant après 50 blocs...");
        break;
    }
}

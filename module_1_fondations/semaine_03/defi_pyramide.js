// ╔═══════════════════════════════════════════════════════════════════╗
// ║              DÉFI FINAL : Pyramide d'étoiles ⭐                   ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Tu vas créer plusieurs pyramides avec des boucles !
//
// Lance le programme avec la taille en argument :
//   node defi_pyramide.js 5
//
// ═══════════════════════════════════════════════════════════════════

// Récupère la taille depuis les arguments (ou 5 par défaut)
let taille = Number(process.argv[2]) || 5;

console.log(`\n🏗️ Construction de pyramides de taille ${taille}\n`);

// ═══════════════════════════════════════════════════════════════════
// NIVEAU 1 : Triangle simple (aligné à gauche)
// ═══════════════════════════════════════════════════════════════════

console.log("=== NIVEAU 1 : Triangle simple ===");

// Attendu pour taille 5 :
// ⭐
// ⭐⭐
// ⭐⭐⭐
// ⭐⭐⭐⭐
// ⭐⭐⭐⭐⭐

// Écris ton code ici :


// ═══════════════════════════════════════════════════════════════════
// NIVEAU 2 : Triangle inversé
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== NIVEAU 2 : Triangle inversé ===");

// Attendu pour taille 5 :
// ⭐⭐⭐⭐⭐
// ⭐⭐⭐⭐
// ⭐⭐⭐
// ⭐⭐
// ⭐

// Écris ton code ici :


// ═══════════════════════════════════════════════════════════════════
// NIVEAU 3 : Pyramide centrée (le plus dur !)
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== NIVEAU 3 : Pyramide centrée ===");

// Attendu pour taille 5 :
//     ⭐
//    ⭐⭐⭐
//   ⭐⭐⭐⭐⭐
//  ⭐⭐⭐⭐⭐⭐⭐
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐

// Indice :
// - Ligne 1 : 4 espaces + 1 étoile
// - Ligne 2 : 3 espaces + 3 étoiles
// - Ligne 3 : 2 espaces + 5 étoiles
// - Ligne i : (taille - i) espaces + (2*i - 1) étoiles

// Écris ton code ici :


// ═══════════════════════════════════════════════════════════════════
// NIVEAU BONUS : Sapin de Noël 🎄
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== BONUS : Sapin de Noël ===");

// Attendu pour taille 5 :
//     🌟
//     ⭐
//    ⭐⭐⭐
//   ⭐⭐⭐⭐⭐
//  ⭐⭐⭐⭐⭐⭐⭐
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐
//     🟫
//     🟫

// Indices :
// 1. Une étoile spéciale 🌟 au sommet
// 2. La pyramide centrée avec ⭐
// 3. Un tronc 🟫 de 2 blocs de haut, centré

// Écris ton code ici :


console.log("\n🎉 Bravo, tu maîtrises les boucles !");

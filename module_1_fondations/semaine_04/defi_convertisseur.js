// ╔═══════════════════════════════════════════════════════════════════╗
// ║           DÉFI FINAL : Convertisseur Minecraft 🔄                 ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Tu vas créer un convertisseur d'unités Minecraft !
//
// Dans Minecraft :
// - 1 stack = 64 blocs
// - 1 coffre simple = 27 stacks = 1728 blocs
// - 1 double coffre = 54 stacks = 3456 blocs
//
// ═══════════════════════════════════════════════════════════════════

// CONSTANTES (ne changent jamais)
const BLOCS_PAR_STACK = 64;
const STACKS_PAR_COFFRE = 27;
const STACKS_PAR_DOUBLE_COFFRE = 54;

// ═══════════════════════════════════════════════════════════════════
// ÉTAPE 1 : Fonctions de conversion
// ═══════════════════════════════════════════════════════════════════

// 1.1 blocsEnStacks(blocs)
// Renvoie un objet { stacks: X, reste: Y }
// Exemple : blocsEnStacks(200) → { stacks: 3, reste: 8 }
function blocsEnStacks(blocs) {
    // Indice : utilise Math.floor() pour arrondir vers le bas
    // let stacks = Math.floor(blocs / BLOCS_PAR_STACK);
    // let reste = blocs % BLOCS_PAR_STACK;
    
    // Écris ton code ici :
    
}

// 1.2 stacksEnBlocs(stacks)
// Renvoie le nombre de blocs
// Exemple : stacksEnBlocs(3) → 192
function stacksEnBlocs(stacks) {
    // Écris ton code ici :
    
}

// 1.3 blocsEnCoffres(blocs)
// Renvoie un objet { coffres: X, stacks: Y, blocs: Z }
// Exemple : blocsEnCoffres(2000) → { coffres: 1, stacks: 4, blocs: 16 }
function blocsEnCoffres(blocs) {
    // Écris ton code ici :
    
}

// ═══════════════════════════════════════════════════════════════════
// ÉTAPE 2 : Fonctions d'affichage
// ═══════════════════════════════════════════════════════════════════

function afficherTitre() {
    console.log("╔═══════════════════════════════════════╗");
    console.log("║     🔄 CONVERTISSEUR MINECRAFT 🔄     ║");
    console.log("╚═══════════════════════════════════════╝");
}

// 2.1 afficherConversionBlocs(blocs)
// Affiche joliment la conversion blocs → stacks
function afficherConversionBlocs(blocs) {
    // Utilise blocsEnStacks() et affiche le résultat
    // Exemple : "200 blocs = 3 stacks + 8 blocs"
    
    // Écris ton code ici :
    
}

// 2.2 afficherConversionStacks(stacks)
// Affiche joliment la conversion stacks → blocs
function afficherConversionStacks(stacks) {
    // Utilise stacksEnBlocs() et affiche le résultat
    // Exemple : "3 stacks = 192 blocs"
    
    // Écris ton code ici :
    
}

// 2.3 afficherConversionCoffres(blocs)
// Affiche joliment la conversion blocs → coffres
function afficherConversionCoffres(blocs) {
    // Utilise blocsEnCoffres() et affiche le résultat
    // Exemple : "5000 blocs = 2 coffres + 22 stacks + 16 blocs"
    
    // Écris ton code ici :
    
}

// ═══════════════════════════════════════════════════════════════════
// ÉTAPE 3 : Programme principal
// ═══════════════════════════════════════════════════════════════════

// Récupère l'argument depuis la ligne de commande
// Usage : node defi_convertisseur.js 200
let nombreBlocs = Number(process.argv[2]) || 200;

// Affiche le titre
afficherTitre();
console.log("");

// Affiche les conversions
console.log(`📦 Conversion de ${nombreBlocs} blocs :`);
console.log("─────────────────────────────────────────");

// TODO : Appelle tes fonctions d'affichage ici !
// afficherConversionBlocs(nombreBlocs);
// afficherConversionCoffres(nombreBlocs);

console.log("");
console.log("📊 Conversion inverse (exemple avec 5 stacks) :");
console.log("─────────────────────────────────────────");
// afficherConversionStacks(5);

// ═══════════════════════════════════════════════════════════════════
// BONUS : Ajoute d'autres conversions !
// ═══════════════════════════════════════════════════════════════════

// Idées :
// - Conversion double coffre
// - Conversion shulker box (27 stacks)
// - Combien de voyages pour transporter X blocs (inventaire = 36 stacks)

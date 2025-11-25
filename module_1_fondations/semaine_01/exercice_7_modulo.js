// ╔═══════════════════════════════════════════════════════════════════╗
// ║               EXERCICE 7 : Le modulo (reste de division)          ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Le modulo (%) donne le RESTE d'une division.
//
// Exemples :
//   10 % 3 = 1    car 10 = 3×3 + 1
//   15 % 5 = 0    car 15 = 5×3 + 0
//   17 % 5 = 2    car 17 = 5×3 + 2
//
// ASTUCE IMPORTANTE :
//   Si nombre % 2 === 0  →  le nombre est PAIR
//   Si nombre % 2 === 1  →  le nombre est IMPAIR
//
// C'est super utile dans les jeux !
//
// ═══════════════════════════════════════════════════════════════════

// 7.1 Calcule et affiche le reste de 17 divisé par 2
let nombre1 = 17;
let reste1;  // Calcule : nombre1 % 2
console.log(`${nombre1} % 2 = ${reste1}`);
console.log(`${nombre1} est pair ou impair ?`);  // Réponds !

console.log("---");

// 7.2 Calcule et affiche le reste de 24 divisé par 2
let nombre2 = 24;
let reste2;  // À toi !
console.log(`${nombre2} % 2 = ${reste2}`);
console.log(`${nombre2} est pair ou impair ?`);

console.log("---");

// 7.3 Calcule le reste de 64 divisé par 10
// (Utile pour avoir le chiffre des unités !)
let nombre3 = 64;
let reste3;
console.log(`${nombre3} % 10 = ${reste3}`);

// ═══════════════════════════════════════════════════════════════════
// DÉFI MINECRAFT : Combien de stacks ?
// ═══════════════════════════════════════════════════════════════════

console.log("\n--- DÉFI MINECRAFT ---");

// Tu as 200 blocs de cobblestone.
// Un stack = 64 blocs.
// Combien de stacks complets ? Et combien de blocs restants ?

let totalBlocs = 200;
let tailleStack = 64;

let stacksComplets;  // Utilise la division entière : Math.floor(totalBlocs / tailleStack)
let blocsRestants;   // Utilise le modulo : totalBlocs % tailleStack

console.log(`Avec ${totalBlocs} blocs :`);
console.log(`- Stacks complets : ${stacksComplets}`);
console.log(`- Blocs restants : ${blocsRestants}`);

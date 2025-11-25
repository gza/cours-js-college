// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 4 : else if (plusieurs conditions)          ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Quand il y a plus de 2 cas possibles, on utilise "else if" :
//
// Syntaxe :
//   if (condition1) {
//       // cas 1
//   } else if (condition2) {
//       // cas 2
//   } else if (condition3) {
//       // cas 3
//   } else {
//       // tous les autres cas
//   }
//
// ═══════════════════════════════════════════════════════════════════

// 4.1 Complète ce système de notes

let note = 15;

if (note >= 16) {
    console.log("🏆 Excellent !");
} else if (note >= 14) {
    console.log();  // Complète : "😊 Très bien !"
} else if (note >= 10) {
    console.log();  // Complète : "👍 Assez bien"
} else {
    console.log();  // Complète : "📚 À améliorer"
}

// 4.2 Teste avec différentes valeurs de note : 18, 14, 10, 5

// ═══════════════════════════════════════════════════════════════════
// 4.3 Écris ton propre système de niveaux
// ═══════════════════════════════════════════════════════════════════

let niveau = 25;

// Crée un système qui affiche :
// - niveau >= 50 : "🐉 Maître"
// - niveau >= 30 : "⚔️ Guerrier"
// - niveau >= 15 : "🗡️ Apprenti"
// - niveau >= 5  : "🌱 Débutant"
// - sinon        : "👶 Nouveau joueur"

// Écris ton code ici :


// ═══════════════════════════════════════════════════════════════════
// DÉFI MINECRAFT : La météo
// ═══════════════════════════════════════════════════════════════════

console.log("\n--- DÉFI MÉTÉO MINECRAFT ---");

let meteo = "orage";  // Valeurs possibles : "soleil", "pluie", "orage", "neige"

// Affiche un message différent selon la météo :
// - "soleil" : "☀️ Parfait pour explorer !"
// - "pluie"  : "🌧️ Les mobs ne brûlent pas aujourd'hui..."
// - "orage"  : "⛈️ Attention aux éclairs ! Reste à l'abri !"
// - "neige"  : "❄️ Biome froid détecté !"
// - autre    : "🌫️ Météo inconnue..."

// Écris ton code ici :


// BONUS : Teste avec toutes les valeurs de météo !

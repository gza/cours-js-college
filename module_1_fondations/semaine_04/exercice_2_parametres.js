// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 2 : Les paramètres                          ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Un paramètre permet de passer des informations à une fonction.
//
// Syntaxe :
//   function saluer(nom) {       // nom est un paramètre
//       console.log(`Bonjour ${nom} !`);
//   }
//
//   saluer("Steve");  // "Steve" est l'argument passé
//
// ═══════════════════════════════════════════════════════════════════

// 2.1 Fonction avec un paramètre
console.log("=== 2.1 ===");

function saluer(nom) {
    console.log(`Bonjour ${nom} !`);
}

saluer("Steve");
saluer("Alex");
saluer("Creeper");

// ═══════════════════════════════════════════════════════════════════
// 2.2 Crée une fonction avec un paramètre
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== 2.2 ===");

// Crée une fonction "afficherNiveau" qui prend un paramètre "niveau"
// et affiche "Tu es niveau X !"

// Écris ta fonction ici :


// Teste avec différentes valeurs :
// afficherNiveau(10);
// afficherNiveau(25);
// afficherNiveau(50);

// ═══════════════════════════════════════════════════════════════════
// 2.3 Fonction avec plusieurs paramètres
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== 2.3 ===");

// Crée une fonction "afficherCombat" qui prend 2 paramètres :
// - joueur
// - monstre
// et affiche "⚔️ [joueur] combat [monstre] !"

// Écris ta fonction ici :


// Teste :
// afficherCombat("Steve", "Zombie");
// afficherCombat("Alex", "Squelette");

// ═══════════════════════════════════════════════════════════════════
// 2.4 Paramètre avec valeur par défaut
// ═══════════════════════════════════════════════════════════════════

console.log("\n=== 2.4 ===");

function saluerJoueur(nom = "Aventurier") {
    console.log(`Bienvenue, ${nom} !`);
}

saluerJoueur("Steve");  // Bienvenue, Steve !
saluerJoueur();         // Bienvenue, Aventurier !

// Crée une fonction "afficherPV" avec :
// - paramètre "pv" (obligatoire)
// - paramètre "pvMax" avec valeur par défaut 20

// Écris ta fonction ici :


// Teste :
// afficherPV(15);       // Doit afficher : PV: 15/20
// afficherPV(80, 100);  // Doit afficher : PV: 80/100

// ═══════════════════════════════════════════════════════════════════
// DÉFI MINECRAFT : Fiche de mob
// ═══════════════════════════════════════════════════════════════════

console.log("\n--- DÉFI FICHE MOB ---");

// Crée une fonction "afficherMob" qui prend 4 paramètres :
// - nom (ex: "Zombie")
// - emoji (ex: "🧟")
// - pv (ex: 20)
// - attaque (ex: 3)
//
// Et affiche une fiche comme :
// ┌─────────────────────┐
// │ 🧟 ZOMBIE           │
// │ PV: 20  ATK: 3      │
// └─────────────────────┘

// Écris ta fonction ici :


// Teste avec différents mobs :
// afficherMob("Zombie", "🧟", 20, 3);
// afficherMob("Squelette", "💀", 20, 4);
// afficherMob("Creeper", "💥", 20, 10);

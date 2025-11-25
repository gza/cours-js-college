// ╔═══════════════════════════════════════════════════════════════════╗
// ║          ⛏️ MINECRAFT MATH MINING - SQUELETTE ⛏️                  ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Ce fichier contient la structure du jeu.
// À toi de compléter les fonctions !
//
// Pour tester : node squelette.js
//
// ═══════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════
// CONSTANTES
// ═══════════════════════════════════════════════════════════════════

const TABLES_FACILES = [2, 5, 10];     // Pour la terre
const TABLES_MOYENNES = [3, 4];        // Pour la pierre
const TABLES_DIFFICILES = [6, 7];      // Pour le fer
const TABLES_EXPERT = [8, 9];          // Pour le diamant

const BLOCS = {
    terre:   { emoji: "🟫", tables: TABLES_FACILES, points: 1 },
    pierre:  { emoji: "🪨", tables: TABLES_MOYENNES, points: 2 },
    fer:     { emoji: "🔶", tables: TABLES_DIFFICILES, points: 5 },
    diamant: { emoji: "💎", tables: TABLES_EXPERT, points: 10 }
};

const TYPES_BLOCS = ["terre", "pierre", "fer", "diamant"];

// ═══════════════════════════════════════════════════════════════════
// VARIABLES DU JEU
// ═══════════════════════════════════════════════════════════════════

let score = 0;
let durabilite = 100;
let questionsTotal = 10;
let inventaire = {
    terre: 0,
    pierre: 0,
    fer: 0,
    diamant: 0
};

// ═══════════════════════════════════════════════════════════════════
// FONCTIONS D'AFFICHAGE
// ═══════════════════════════════════════════════════════════════════

function afficherTitre() {
    console.log("");
    console.log("╔═══════════════════════════════════════════════════╗");
    console.log("║         ⛏️  MINECRAFT MATH MINING  ⛏️              ║");
    console.log("╠═══════════════════════════════════════════════════╣");
    console.log("║  Résous les multiplications pour miner des blocs  ║");
    console.log("╚═══════════════════════════════════════════════════╝");
    console.log("");
}

function afficherDurabilite() {
    // TODO : Affiche la durabilité de la pioche
    // Exemple : Pioche : [████████░░] 80%
    // Indice : utilise "█".repeat(x) et "░".repeat(y)
    
    let barresPleines = Math.floor(durabilite / 10);
    let barresVides = 10 - barresPleines;
    // Complète ici...
    
}

function afficherInventaire() {
    // TODO : Affiche l'inventaire des blocs minés
    // Exemple :
    // 📦 Inventaire :
    // 🟫 Terre: 3  🪨 Pierre: 2  🔶 Fer: 1  💎 Diamant: 0
    
}

function afficherScore() {
    console.log(`\n⭐ Score : ${score} points`);
}

function afficherBloc(typeBloc) {
    let bloc = BLOCS[typeBloc];
    console.log(`\n${bloc.emoji} Un bloc de ${typeBloc.toUpperCase()} apparaît !`);
    console.log(`   (${bloc.points} points)`);
}

// ═══════════════════════════════════════════════════════════════════
// FONCTIONS DE GÉNÉRATION
// ═══════════════════════════════════════════════════════════════════

function choisirBlocAleatoire() {
    // TODO : Renvoie un type de bloc au hasard
    // Les blocs rares devraient être moins fréquents !
    // Suggestion de probabilités :
    // - Terre : 40%
    // - Pierre : 30%
    // - Fer : 20%
    // - Diamant : 10%
    
    let chance = Math.random() * 100;
    
    if (chance < 40) {
        return "terre";
    } else if (chance < 70) {
        return "pierre";
    }
    // Complète pour fer et diamant...
    
    return "terre";  // Par défaut
}

function choisirTableAleatoire(tables) {
    // TODO : Choisit une table au hasard dans le tableau
    // Exemple : choisirTableAleatoire([2, 5, 10]) → peut renvoyer 2, 5 ou 10
    
    let index = Math.floor(Math.random() * tables.length);
    return tables[index];
}

function genererQuestion(typeBloc) {
    // TODO : Génère une question de multiplication
    // Renvoie un objet { table, multiplicateur, resultat, texte }
    
    let bloc = BLOCS[typeBloc];
    let table = choisirTableAleatoire(bloc.tables);
    let multiplicateur = Math.floor(Math.random() * 10) + 1;  // 1 à 10
    let resultat = table * multiplicateur;
    
    return {
        table: table,
        multiplicateur: multiplicateur,
        resultat: resultat,
        texte: `${table} × ${multiplicateur} = ?`
    };
}

// ═══════════════════════════════════════════════════════════════════
// FONCTIONS DE JEU
// ═══════════════════════════════════════════════════════════════════

function verifierReponse(reponseJoueur, resultatAttendu) {
    // TODO : Vérifie si la réponse est correcte
    // Renvoie true ou false
    
    return Number(reponseJoueur) === resultatAttendu;
}

function minerBloc(typeBloc, reponseCorrecte) {
    // TODO : Gère le résultat du minage
    // Si réponse correcte :
    //   - Ajoute le bloc à l'inventaire
    //   - Ajoute les points au score
    //   - Affiche un message de succès
    // Si réponse incorrecte :
    //   - Réduit la durabilité de 20
    //   - Affiche la bonne réponse
    
    if (reponseCorrecte) {
        // Succès !
        
    } else {
        // Échec...
        
    }
}

function estGameOver() {
    // TODO : Renvoie true si la pioche est cassée (durabilité <= 0)
    
    return durabilite <= 0;
}

// ═══════════════════════════════════════════════════════════════════
// BOUCLE DE JEU PRINCIPALE
// ═══════════════════════════════════════════════════════════════════

function jouerUnTour(numeroTour, reponseJoueur) {
    // Cette fonction joue un tour du jeu
    // Elle reçoit la réponse du joueur en argument
    
    console.log(`\n═══ TOUR ${numeroTour}/${questionsTotal} ═══`);
    
    // 1. Choisir un bloc
    let typeBloc = choisirBlocAleatoire();
    afficherBloc(typeBloc);
    
    // 2. Générer la question
    let question = genererQuestion(typeBloc);
    console.log(`\n❓ ${question.texte}`);
    
    // 3. Vérifier la réponse
    let correct = verifierReponse(reponseJoueur, question.resultat);
    
    // 4. Miner ou non
    minerBloc(typeBloc, correct);
    
    // 5. Afficher l'état actuel
    afficherDurabilite();
    afficherScore();
    
    return !estGameOver();
}

// ═══════════════════════════════════════════════════════════════════
// LANCEMENT DU JEU
// ═══════════════════════════════════════════════════════════════════

// Mode simple : on passe la réponse en argument
// Exemple : node squelette.js 42

afficherTitre();

// Récupère le numéro du tour et la réponse
let tour = Number(process.argv[2]) || 1;
let reponse = process.argv[3];

if (!reponse) {
    // Pas de réponse : on démarre/affiche une question
    console.log(`\n═══ TOUR ${tour}/${questionsTotal} ═══`);
    
    let typeBloc = choisirBlocAleatoire();
    afficherBloc(typeBloc);
    
    let question = genererQuestion(typeBloc);
    console.log(`\n❓ ${question.texte}`);
    console.log(`\n👉 Réponds avec : node squelette.js ${tour} [ta réponse]`);
    console.log(`   Exemple : node squelette.js ${tour} ${question.resultat}`);
} else {
    // Réponse fournie : on joue le tour
    jouerUnTour(tour, reponse);
    
    if (!estGameOver() && tour < questionsTotal) {
        console.log(`\n👉 Tour suivant : node squelette.js ${tour + 1}`);
    } else if (estGameOver()) {
        console.log("\n💥 GAME OVER ! Ta pioche est cassée !");
        afficherInventaire();
        console.log(`\nScore final : ${score} points`);
    } else {
        console.log("\n🎉 FÉLICITATIONS ! Tu as terminé !");
        afficherInventaire();
        console.log(`\nScore final : ${score} points`);
    }
}

// ═══════════════════════════════════════════════════════════════════
// BONUS : VERSION INTERACTIVE (pour plus tard)
// ═══════════════════════════════════════════════════════════════════

// Quand tu maîtriseras les modules Node.js, tu pourras utiliser
// readline pour créer une vraie interaction en temps réel !
//
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// rl.question('Ta réponse : ', (reponse) => {
//     // traiter la réponse
//     rl.close();
// });

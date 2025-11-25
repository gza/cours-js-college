# ⛏️ Challenge Module 1 : Minecraft Math Mining

> **Objectif** : Créer un jeu de quiz de tables de multiplication avec thème Minecraft  
> **Compétences utilisées** : Variables, conditions, boucles, fonctions, Math.random()  
> **Temps estimé** : 2-3 heures

---

## 🎮 Le concept

Tu vas créer un jeu où le joueur doit résoudre des multiplications pour miner des blocs.  
Chaque type de bloc a une difficulté différente !

---

## 📋 Règles du jeu

### Les blocs à miner

| Bloc | Emoji | Tables | Points |
|------|-------|--------|--------|
| Terre | 🟫 | ×2, ×5, ×10 | 1 |
| Pierre | 🪨 | ×3, ×4 | 2 |
| Fer | 🔶 | ×6, ×7 | 5 |
| Diamant | 💎 | ×8, ×9 | 10 |

### La pioche

- Durabilité de départ : **100%**
- Bonne réponse : tu mines le bloc (+points)
- Mauvaise réponse : la pioche s'abîme (-20%)
- Si durabilité = 0% : **Game Over !**

### Bonus : Le Creeper ! 💀

Parfois (1 chance sur 10), un Creeper apparaît !
- Tu as **5 secondes** pour répondre
- Si tu réponds juste : tu survis
- Si tu te trompes ou trop lent : -50% de durabilité !

---

## 🏗️ Structure suggérée

```javascript
// ═══════════════════════════════════════════════════════════════
// CONSTANTES
// ═══════════════════════════════════════════════════════════════
const TABLES_FACILES = [2, 5, 10];
const TABLES_MOYENNES = [3, 4];
const TABLES_DIFFICILES = [6, 7];
const TABLES_EXPERT = [8, 9];

// ═══════════════════════════════════════════════════════════════
// VARIABLES DU JEU
// ═══════════════════════════════════════════════════════════════
let score = 0;
let durabilite = 100;
let blocsExtraits = { terre: 0, pierre: 0, fer: 0, diamant: 0 };

// ═══════════════════════════════════════════════════════════════
// FONCTIONS À CRÉER
// ═══════════════════════════════════════════════════════════════

// Affichage
function afficherTitre() { ... }
function afficherInventaire() { ... }
function afficherPioche() { ... }

// Génération de questions
function choisirTable(difficulte) { ... }
function genererQuestion(table) { ... }

// Logique de jeu
function choisirBlocAleatoire() { ... }
function verifierReponse(reponse, resultatAttendu) { ... }
function minerBloc(typeBloc) { ... }

// Boucle principale
function jouer() { ... }
```

---

## 🎯 Objectifs par niveau

### Niveau 1 : Version simple
- [ ] Afficher une question (table au choix)
- [ ] Vérifier la réponse
- [ ] Afficher "Correct !" ou "Faux !"
- [ ] Boucle de 10 questions
- [ ] Afficher le score final

### Niveau 2 : Ajout des blocs
- [ ] Bloc aléatoire à chaque tour
- [ ] Difficulté selon le bloc
- [ ] Points selon le bloc
- [ ] Inventaire des blocs minés

### Niveau 3 : La pioche
- [ ] Durabilité qui diminue
- [ ] Game Over si durabilité = 0
- [ ] Affichage graphique de la durabilité

### Niveau 4 : Le Creeper (bonus)
- [ ] Apparition aléatoire (10% de chance)
- [ ] Système de chrono (setTimeout)
- [ ] Grosse pénalité si raté

---

## 💡 Indices

### Générer un nombre aléatoire

```javascript
// Nombre entre 1 et 10
let nombre = Math.floor(Math.random() * 10) + 1;

// Choisir un élément au hasard dans un tableau
let tables = [2, 5, 10];
let index = Math.floor(Math.random() * tables.length);
let tableChoisie = tables[index];
```

### Afficher une barre de durabilité

```javascript
function afficherDurabilite(pourcentage) {
    let barresPleines = Math.floor(pourcentage / 10);
    let barresVides = 10 - barresPleines;
    let barre = "█".repeat(barresPleines) + "░".repeat(barresVides);
    console.log(`Pioche : [${barre}] ${pourcentage}%`);
}

afficherDurabilite(70);
// Affiche : Pioche : [███████░░░] 70%
```

### Lire une entrée utilisateur (mode simple)

```javascript
// En ligne de commande
// node jeu.js 42
let reponseJoueur = process.argv[2];
```

---

## 🚀 Lance-toi !

1. Commence par le **squelette.js** fourni
2. Implémente les fonctions une par une
3. Teste souvent ton code
4. Ajoute des fonctionnalités progressivement

**Bon courage, mineur ! ⛏️💎**

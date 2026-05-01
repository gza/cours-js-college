# 📚 Plan de Cours JavaScript - 5ème

> **Élève** : 5ème, maîtrise Scratch  
> **Durée** : 2h / semaine  
> **Environnement** : Linux/GNOME, Geany + Node.js  
> **Objectif** : Passer de Scratch à JavaScript via des projets ludiques

---

## 🎯 Philosophie du cours

- **Projets concrets** dès le début (pas de théorie abstraite)
- **Comparaisons visuelles** Scratch ↔ JavaScript
- **Progression** : Console → Console colorée (terminal-kit) → Canvas Web
- **Un challenge** pour valider chaque module
- **Thème fil rouge** : Minecraft / Jeux
- **Un fichier par exercice** : plus clair, progression pas à pas
- **Pas de fichier solutions** : on cherche par soi-même !
- **Exercices intégrés au cours** : on pratique au fur et à mesure de la lecture

---

## 📅 Vue d'ensemble

| Module | Semaines | Environnement | Challenge Final |
|--------|----------|---------------|-----------------|
| 1 - Fondations | 1-4 | Console Node.js | ⛏️ Minecraft Math Mining |
| 2 - Structures de données | 5-8 | Console + terminal-kit | ⚔️ Combat RPG tour par tour |
| 3 - Jeux console | 9-12 | terminal-kit avancé | 🐍 Snake ASCII |
| 4 - Canvas Web | 13-16 | Navigateur (HTML minimal) | 👾 Space Invaders mini |

---

## 📖 Module 1 : Fondations (Semaines 1-4)

**Objectif** : Maîtriser la syntaxe de base de JavaScript

### Semaine 1 : Variables, types et console
- `console.log()` pour afficher
- Variables avec `let` et `const`
- Types : `string`, `number`, `boolean`
- Opérations mathématiques
- **Mini-projet** : Calculatrice parlante
- **Lien Scratch** : Variables orange

### Semaine 2 : Conditions
- `if`, `else`, `else if`
- Opérateurs de comparaison (`===`, `!==`, `<`, `>`, etc.)
- Opérateurs logiques (`&&`, `||`, `!`)
- **Mini-projet** : Choisis ton aventure (1 choix)
- **Lien Scratch** : Bloc "Si/Sinon"

### Semaine 3 : Boucles
- Boucle `for`
- Boucle `while`
- `break` et `continue`
- **Mini-projet** : Pyramide d'étoiles
- **Lien Scratch** : Bloc "Répéter"

### Semaine 4 : Fonctions
- Déclarer une fonction
- Paramètres et `return`
- Réutiliser son code
- **Mini-projet** : Convertisseur d'unités
- **Lien Scratch** : Blocs personnalisés

### 🎮 Challenge Module 1 : Minecraft Math Mining

```
⛏️ MINECRAFT MATH MINING ⛏️

Concept : Quiz de tables de multiplication avec thème Minecraft
- Blocs à miner (💎💎🥇🪨🥬) = difficulté variable
- Bonne réponse = bloc obtenu
- Mauvaise réponse = pioche s'use
- Creeper 💀 = calcul chrono sinon explosion !

Mécaniques :
- Inventaire de ressources
- Durabilité de pioche
- Niveaux de difficulté (tables faciles → difficiles)
- Score et record

Compétences validées :
✅ Variables (score, inventaire, durabilité)
✅ Aléatoire (Math.random)
✅ Conditions (vérifier réponse, type bloc)
✅ Boucles (boucle de jeu)
✅ Fonctions (genererCalcul, afficherInventaire, etc.)
```

---

## 📖 Module 2 : Structures de données (Semaines 5-8)

**Objectif** : Manipuler tableaux et objets, simples puis imbriqués

### Semaine 5 : Tableaux
- Créer un tableau `[]`
- `push()`, `pop()`, `length`
- Parcourir avec `for` et `forEach`
- **Mini-projet** : Liste de courses interactive

### Semaine 6 : Objets
- Créer un objet `{}`
- Propriétés et méthodes
- Accéder aux données
- **Mini-projet** : Fiche de personnage RPG

### Semaine 7 : Tableaux d'objets
- Combiner tableaux et objets
- Rechercher (`find`), filtrer (`filter`)
- **Mini-projet** : Inventaire d'items Minecraft

### Semaine 8 : Objets imbriqués 🎁
- Objets dans objets (`hero.equipement.arme.degats`)
- Tableaux dans objets, objets dans tableaux d'objets
- Modifier en profondeur
- **Mini-projet** : Équipe RPG (3 héros avec stats et compétences)

### ⚔️ Challenge Module 2 : Combat RPG tour par tour

```
Concept : Combat au tour par tour style RPG
- Héros vs Monstre (objets avec stats imbriquées)
- Équipement : arme et armure (sous-objets)
- Actions : Attaquer, Défendre, Potion, Fuir
- Inventaire d'objets équipables (tableau d'objets)
- Barres de vie colorées (intro terminal-kit)

Compétences validées :
✅ Objets imbriqués (hero.stats, hero.equipement.arme...)
✅ Tableaux d'objets (inventaire de potions/items)
✅ Logique de jeu complexe
✅ Introduction terminal-kit (couleurs)
```

---

## 📖 Module 3 : Jeux console avancés (Semaines 9-12)

**Objectif** : Créer des jeux interactifs en terminal avec terminal-kit

### Semaine 9 : Introduction terminal-kit
- Installation et import
- Couleurs et styles
- Effacer l'écran
- **Mini-projet** : Texte arc-en-ciel animé

### Semaine 10 : Entrées clavier temps réel
- Écouter les touches
- Réagir sans appuyer sur Entrée
- **Mini-projet** : Jeu de réflexe

### Semaine 11 : Grilles 2D
- Tableau de tableaux
- Coordonnées (x, y)
- Afficher une grille
- **Mini-projet** : Morpion

### Semaine 12 : Boucle de jeu (Game Loop)
- `setInterval` / `setTimeout`
- Mettre à jour → Afficher → Répéter
- **Mini-projet** : Personnage qui bouge

### 🐍 Challenge Module 3 : Snake ASCII

```
Concept : Snake classique en terminal
- Serpent qui grandit
- Pommes à manger 🍎
- Collision murs et soi-même
- Score et record

Compétences validées :
✅ Grille 2D (tableau de tableaux)
✅ Boucle de jeu (setInterval)
✅ Gestion clavier temps réel
✅ Logique de collision
```

---

## 📖 Module 4 : Canvas Web (Semaines 13-16)

**Objectif** : Créer des jeux graphiques avec Canvas (HTML minimal)

### Semaine 13 : Bases du Canvas
- HTML minimal (template fourni)
- Contexte 2D
- Dessiner : rectangles, cercles, lignes
- Couleurs et styles
- **Mini-projet** : Dessiner des formes

### Semaine 14 : Animation
- `requestAnimationFrame`
- Effacer et redessiner
- Vélocité et position
- **Mini-projet** : Balle qui rebondit

### Semaine 15 : Interactivité
- Événements clavier
- Événements souris
- **Mini-projet** : Contrôler un vaisseau

### Semaine 16 : Finalisation
- Charger des images
- Sons (basique)
- Polish du jeu
- **Mini-projet** : Finalisation Space Invaders

### 👾 Challenge Module 4 : Space Invaders mini

```
Concept : Space Invaders simplifié
- Vaisseau contrôlé au clavier
- Vagues d'aliens (tableaux)
- Tirs et collisions
- Score et vies

Compétences validées :
✅ Canvas (dessiner, animer)
✅ Boucle de jeu web (requestAnimationFrame)
✅ Gestion clavier
✅ Collision 2D
✅ Tableaux d'ennemis
```

---

## 📁 Structure du workspace

```
cours_JS_enfant/
├── README.md                  # Ce fichier (plan du cours)
├── installation.md            # Guide installation Node.js + Geany
│
├── module_1_fondations/
│   ├── semaine_01/
│   │   ├── cours.md                         # Fiche de cours
│   │   ├── exercice_1_console_log.js        # Un fichier par exercice
│   │   ├── exercice_2_variables.js
│   │   ├── exercice_3_types.js
│   │   ├── exercice_4_calculs.js
│   │   ├── exercice_5_modifier_variables.js
│   │   ├── exercice_6_texte.js
│   │   ├── exercice_7_modulo.js
│   │   ├── exercice_8_entree_utilisateur.js
│   │   └── defi_fiche_joueur.js             # Défi bonus
│   ├── semaine_02/
│   ├── semaine_03/
│   ├── semaine_04/
│   └── challenge_minecraft_math/
│       ├── enonce.md
│       └── squelette.js
│
├── module_2_structures/
│   ├── semaine_05/            # Tableaux
│   ├── semaine_06/            # Objets
│   ├── semaine_07/            # Tableaux d'objets
│   ├── semaine_08/            # Objets imbriqués
│   └── challenge_combat_rpg/
│
├── module_3_jeux_console/
│   ├── semaine_09/
│   ├── semaine_10/
│   ├── semaine_11/
│   ├── semaine_12/
│   └── challenge_snake/
│
├── module_4_canvas/
│   ├── template.html          # HTML minimal réutilisable
│   ├── semaine_13/
│   ├── semaine_14/
│   ├── semaine_15/
│   ├── semaine_16/
│   └── challenge_space_invaders/
│
└── aide-memoire/
    ├── syntaxe_js.md          # Résumé syntaxe JavaScript
    ├── scratch_vs_js.md       # Comparaisons Scratch ↔ JS
    ├── terminal-kit.md        # Référence terminal-kit
    └── canvas.md              # Référence Canvas
```

---

## 📋 Format type d'une séance (2h)

| Durée | Activité |
|-------|----------|
| 0-10 min | Rappel semaine précédente (quiz rapide) |
| 10-30 min | Lecture du cours + exercices au fil de la lecture |
| 30-90 min | Suite des exercices (guidés → autonomes) |
| 90-120 min | Défi bonus ou avancement projet |

---

## 🔗 Ponts Scratch → JavaScript

| Scratch | JavaScript |
|---------|------------|
| Quand drapeau vert cliqué | Appel de fonction `main()` |
| Variables (orange) | `let maVariable = 5` |
| Répéter X fois | `for (let i = 0; i < x; i++)` |
| Répéter jusqu'à | `while (!condition)` |
| Si... Alors... Sinon | `if... else` |
| Listes | `let tableau = []` |
| Ajouter à liste | `tableau.push(element)` |
| Blocs personnalisés | `function monBloc() {}` |
| Nombre aléatoire | `Math.random()` |
| Dire "Hello" | `console.log("Hello")` |

---

## 📝 Notes pour la suite

- Le challenge "Minecraft Math Mining" permet aussi à sa sœur de réviser ses tables
- Possibilité d'ajouter un mode 2 joueurs / compétition
- Adapter les thèmes selon ses intérêts (Minecraft, autres jeux...)

---

*Document créé le 25 novembre 2025*

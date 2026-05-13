# 📖 Semaine 9 : Introduction à terminal-kit 🌈

> **Objectif** : Passer de `console.log()` à un terminal coloré et contrôlé
> **Durée** : 2 heures

---

## 🎯 Ce que tu vas apprendre

1. Importer une bibliothèque avec `require(...)`
2. Afficher du texte avec `terminal-kit`
3. Utiliser les couleurs et les styles
4. Effacer l'écran
5. Placer du texte à une position précise
6. Préparer une petite animation

---

## 1️⃣ Avant de commencer

Cette semaine utilise une bibliothèque externe : **terminal-kit**.

Si Node.js affiche une erreur du style `Cannot find module 'terminal-kit'`, installe la bibliothèque depuis la racine du projet :

```bash
npm init -y
npm install terminal-kit
```

> 📝 Le guide complet est dans `installation.md`.

---

## 2️⃣ Importer terminal-kit

Jusqu'ici, on affichait avec `console.log()` :

```javascript
console.log("Bonjour !");
```

Avec `terminal-kit`, on commence par importer l'outil :

```javascript
const term = require("terminal-kit").terminal;

term("Bonjour avec terminal-kit !\n");
```

`term(...)` ressemble à `console.log(...)`, mais il permet beaucoup plus de choses.

> 📝 **Exercice** : `exercice_1_import_terminal.js`

---

## 3️⃣ Couleurs et styles

`terminal-kit` ajoute des méthodes pour écrire en couleur :

```javascript
term.red("Texte rouge\n");
term.green("Texte vert\n");
term.blue("Texte bleu\n");
term.yellow.bold("Texte jaune et gras\n");
```

On peut aussi mélanger texte normal et texte coloré :

```javascript
term("PV : ");
term.green("20/20\n");
```

> 📝 **Exercice** : `exercice_2_couleurs_styles.js`

---

## 4️⃣ Effacer l'écran

Pour un jeu, on ne veut pas afficher des lignes à l'infini.
On veut souvent **redessiner** le même écran.

```javascript
term.clear();
term("Nouvel écran !\n");
```

C'est le début de l'idée de boucle de jeu :

1. effacer
2. afficher l'état actuel
3. recommencer

> 📝 **Exercice** : `exercice_3_effacer_ecran.js`

---

## 5️⃣ Placer du texte

Dans le terminal, les positions commencent en haut à gauche.

```text
colonne 1, ligne 1  → coin haut gauche
colonne 10, ligne 5 → plus à droite et plus bas
```

Avec `terminal-kit` :

```javascript
term.moveTo(10, 5, "Ici !");
```

⚠️ L'ordre est : **colonne**, puis **ligne**.

> 📝 **Exercice** : `exercice_4_positionner_texte.js`

---

## 6️⃣ Pause et sortie propre

Quand un programme utilise le terminal en mode interactif, on doit prévoir une sortie propre.

```javascript
term.grabInput(true);

term.on("key", function(nomTouche) {
    if (nomTouche === "CTRL_C" || nomTouche === "ESCAPE") {
        term.grabInput(false);
        term.processExit(0);
    }
});
```

On reverra ça en détail la semaine prochaine.

> 📝 **Exercice** : `exercice_5_pause_sortie.js`

---

## 7️⃣ Mini-animation

Une animation console, c'est souvent une suite d'images affichées très vite :

```javascript
let numeroImage = 0;

setInterval(function() {
    term.clear();
    term("Image : " + numeroImage + "\n");
    numeroImage = numeroImage + 1;
}, 300);
```

Cette semaine, on garde une animation très simple. La vraie boucle de jeu arrive en semaine 12.

> 📝 **Exercice** : `exercice_6_mini_animation.js`

---

## 🎮 Défi de la semaine

> 📝 **Défi** : `defi_texte_arc_en_ciel.js`

Crée un texte animé qui change de couleur, comme une enseigne de jeu vidéo.

---

## 🧠 À retenir

- `require("terminal-kit").terminal` permet d'utiliser `terminal-kit`
- `term.red(...)`, `term.green(...)`, etc. affichent en couleur
- `term.clear()` efface l'écran
- `term.moveTo(colonne, ligne, texte)` écrit à une position précise
- Pour un jeu interactif, il faut toujours prévoir une sortie propre

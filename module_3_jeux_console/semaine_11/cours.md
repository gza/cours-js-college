# 📖 Semaine 11 : Grilles 2D 🧩

> **Objectif** : Représenter un plateau de jeu avec un tableau de tableaux
> **Durée** : 2 heures

---

## 🎯 Ce que tu vas apprendre

1. Créer une grille avec un tableau de tableaux
2. Accéder à une case avec ligne et colonne
3. Modifier une case
4. Afficher une grille lisible
5. Détecter des alignements simples
6. Préparer un mini-morpion

---

## 1️⃣ Une grille, c'est un tableau de lignes

Une grille 2D peut se représenter comme un tableau qui contient d'autres tableaux.

```javascript
let grille = [
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."]
];
```

Chaque sous-tableau représente une **ligne**.

Visuellement :

```text
. . .
. . .
. . .
```

> 📝 **Exercice** : `exercice_1_creer_grille.js`

---

## 2️⃣ Ligne et colonne

Pour accéder à une case, on utilise deux index :

```javascript
grille[ligne][colonne]
```

⚠️ En JavaScript, les index commencent à `0`.

```javascript
grille[0][0] // première ligne, première colonne
grille[1][2] // deuxième ligne, troisième colonne
```

> 📝 **Exercice** : `exercice_2_afficher_grille.js`
> 📝 **Exercice** : `exercice_3_coordonnees.js`

---

## 3️⃣ Modifier une case

Comme pour un tableau simple, on peut remplacer une valeur :

```javascript
grille[1][1] = "X";
```

La grille devient :

```text
. . .
. X .
. . .
```

> 📝 **Exercice** : `exercice_4_modifier_case.js`

---

## 4️⃣ Afficher toute la grille

Pour afficher une grille, on parcourt chaque ligne, puis chaque case.

```javascript
for (let ligne of grille) {
    console.log(ligne.join(" "));
}
```

`join(" ")` transforme un tableau en texte, avec un espace entre les éléments.

---

## 5️⃣ Détecter une ligne gagnante

Dans un morpion, une ligne est gagnante si ses trois cases sont identiques et non vides.

```javascript
let ligne = ["X", "X", "X"];

if (ligne[0] !== "." && ligne[0] === ligne[1] && ligne[1] === ligne[2]) {
    console.log("Ligne gagnante !");
}
```

> 📝 **Exercice** : `exercice_5_detecter_ligne.js`

---

## 6️⃣ Mini-morpion

Le morpion est parfait pour s'entraîner :

- une grille 3x3
- deux symboles : `X` et `O`
- des coordonnées
- des lignes, colonnes et diagonales à vérifier

> 📝 **Exercice** : `exercice_6_morpion_base.js`

---

## 🎮 Défi de la semaine

> 📝 **Défi** : `defi_morpion.js`

Crée un morpion en console simple, avec une suite de coups écrits dans le code.

---

## 🧠 À retenir

- Une grille 2D est souvent un tableau de tableaux
- On lit une case avec `grille[ligne][colonne]`
- Les index commencent à `0`
- `join(" ")` aide à afficher une ligne
- Les jeux comme Snake utilisent exactement cette logique de coordonnées

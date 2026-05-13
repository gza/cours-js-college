# 🐍 Challenge Module 3 : Snake ASCII

> **Objectif** : Créer un Snake jouable dans le terminal
> **Compétences utilisées** : terminal-kit, clavier temps réel, grilles 2D, boucle de jeu, collisions
> **Temps estimé** : 2-3 heures

---

## 🎮 Le concept

Le serpent avance tout seul dans une grille.
Le joueur change sa direction avec les flèches du clavier.
Quand le serpent mange une pomme, il grandit et le score augmente.
La partie se termine si le serpent touche un mur ou se mord lui-même.

---
<div class="page-break"></div>

## 🧱 Données principales

Le serpent peut être représenté par un **tableau de positions**.
La première position est la tête.

```javascript
let serpent = [
    { colonne: 10, ligne: 6 },
    { colonne: 9,  ligne: 6 },
    { colonne: 8,  ligne: 6 }
];
```

La direction peut être un petit objet :

```javascript
let direction = { colonne: 1, ligne: 0 }; // avance vers la droite
```

La pomme est une position :

```javascript
let pomme = { colonne: 15, ligne: 6 };
```

---
<div class="page-break"></div>

## 🕹️ Contrôles

| Touche | Effet |
|--------|-------|
| Flèche haut | Aller vers le haut |
| Flèche bas | Aller vers le bas |
| Flèche gauche | Aller vers la gauche |
| Flèche droite | Aller vers la droite |
| Échap / Ctrl+C | Quitter proprement |

Règle importante : le serpent ne peut pas faire demi-tour directement.
S'il va à droite, la touche gauche doit être ignorée.

---
<div class="page-break"></div>

## 🔁 Boucle de jeu

À chaque tour :

1. Lire la direction demandée par le joueur
2. Calculer la nouvelle tête du serpent
3. Vérifier les collisions
4. Ajouter la nouvelle tête
5. Si une pomme est mangée : garder la queue et placer une nouvelle pomme
6. Sinon : retirer la dernière case du serpent
7. Effacer et réafficher le jeu

---

## 💥 Collisions

### Mur

Le serpent touche un mur si :

```javascript
position.colonne < 1
position.colonne > LARGEUR
position.ligne < 1
position.ligne > HAUTEUR
```

### Corps

La tête touche le corps si sa position est égale à une autre position du serpent.

---
<div class="page-break"></div>

## 🎨 Affichage attendu

Exemple simple :

```text
Score : 3
######################
#                    #
#      ooo@          #
#          *         #
#                    #
######################
```

Symboles proposés :

| Élément | Symbole |
|---------|---------|
| Mur | `#` |
| Tête | `@` |
| Corps | `o` |
| Pomme | `*` |
| Vide | espace |

---

## 📋 Étapes suggérées

1. **Terminal** : prépare `term.clear()`, `grabInput(true)`, `hideCursor(true)` et une fonction `quitter()`.
2. **Affichage** : dessine le cadre, la pomme et le serpent fixe.
3. **Clavier** : transforme les flèches en direction.
4. **Mouvement** : calcule une nouvelle tête et ajoute-la au début du tableau.
5. **Queue** : retire la dernière case quand aucune pomme n'est mangée.
6. **Pomme** : détecte quand la tête arrive sur la pomme, augmente le score et replace la pomme.
7. **Collisions** : arrête la partie si la tête touche un mur ou le corps.
8. **Polish** : message de fin, vitesse, record, couleurs.

---

## ✅ Compétences validées

- ✅ `terminal-kit` pour contrôler l'écran du terminal
- ✅ Entrées clavier en temps réel
- ✅ Coordonnées et grille 2D
- ✅ Boucle de jeu avec `setInterval`
- ✅ Tableaux d'objets pour le serpent
- ✅ Fonctions pour organiser la logique
- ✅ Conditions de collision

---

## 🚀 Bonus

- 🍎 Pommes bonus qui valent plus de points
- ⚡ Vitesse qui augmente avec le score
- 🧱 Obstacles dans la grille
- 🏆 Record de score dans une variable
- 🎨 Couleurs différentes pour la tête, le corps et la pomme

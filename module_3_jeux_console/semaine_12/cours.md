# 📖 Semaine 12 : Boucle de jeu 🔁

> **Objectif** : Construire le rythme d'un jeu : mettre à jour, afficher, recommencer
> **Durée** : 2 heures

---

## 🎯 Ce que tu vas apprendre

1. Utiliser `setTimeout` et `setInterval`
2. Séparer l'état du jeu de l'affichage
3. Écrire une fonction `mettreAJour()`
4. Écrire une fonction `afficher()`
5. Détecter les collisions avec les murs
6. Déplacer un personnage en continu

---

## 1️⃣ `setTimeout` : faire plus tard

`setTimeout` exécute une fonction une seule fois après un délai.

```javascript
setTimeout(function() {
    console.log("Boom !");
}, 1000);
```

Ici, le message apparaît après 1000 millisecondes, donc 1 seconde.

> 📝 **Exercice** : `exercice_1_set_timeout.js`

---

## 2️⃣ `setInterval` : répéter

`setInterval` répète une fonction tant qu'on ne l'arrête pas.

```javascript
let compteur = 0;

let boucle = setInterval(function() {
    compteur = compteur + 1;
    console.log(compteur);
}, 500);
```

Pour arrêter :

```javascript
clearInterval(boucle);
```

> 📝 **Exercice** : `exercice_2_set_interval.js`

---

## 3️⃣ L'état du jeu

L'état du jeu, c'est tout ce que le jeu doit retenir.

```javascript
let jeu = {
    score: 0,
    joueur: {
        colonne: 5,
        ligne: 3,
        direction: "RIGHT"
    }
};
```

Un bon réflexe : les données du jeu sont dans des variables ou objets, et l'affichage lit ces données.

> 📝 **Exercice** : `exercice_3_etat_du_jeu.js`

---

## 4️⃣ Mettre à jour puis afficher

Une boucle de jeu suit souvent ce rythme :

```javascript
function mettreAJour() {
    // changer les positions, score, collisions...
}

function afficher() {
    // dessiner l'état actuel
}

setInterval(function() {
    mettreAJour();
    afficher();
}, 200);
```

> 📝 **Exercice** : `exercice_4_update_afficher.js`

---

## 5️⃣ Collisions avec les murs

Dans un jeu sur grille, une collision peut être une simple condition :

```javascript
if (joueur.colonne < 0 || joueur.colonne >= largeur) {
    console.log("Mur !");
}
```

Pour Snake, on vérifiera aussi si la tête du serpent touche son corps.

> 📝 **Exercice** : `exercice_5_collision_murs.js`

---

## 6️⃣ Déplacement automatique

Snake avance tout seul. Les touches ne déplacent pas directement le serpent : elles changent seulement sa **direction**.

```javascript
let direction = "RIGHT";

function mettreAJour() {
    if (direction === "RIGHT") {
        joueur.colonne = joueur.colonne + 1;
    }
}
```

> 📝 **Exercice** : `exercice_6_deplacement_auto.js`

---

## 🎮 Défi de la semaine

> 📝 **Défi** : `defi_personnage_mobile.js`

Crée un personnage qui avance automatiquement dans la direction choisie avec les flèches.

---

## 🧠 À retenir

- `setTimeout` exécute une action plus tard
- `setInterval` répète une action
- Une boucle de jeu fait souvent : `mettreAJour()` puis `afficher()`
- Les touches changent l'intention du joueur, la boucle applique le mouvement
- Les collisions sont des conditions qui surveillent les limites du monde

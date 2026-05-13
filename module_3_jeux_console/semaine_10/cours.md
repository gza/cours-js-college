# 📖 Semaine 10 : Entrées clavier en temps réel ⌨️

> **Objectif** : Réagir aux touches sans demander d'appuyer sur Entrée
> **Durée** : 2 heures

---

## 🎯 Ce que tu vas apprendre

1. Activer l'écoute du clavier avec `grabInput(true)`
2. Réagir à une touche avec `term.on("key", ...)`
3. Lire les flèches du clavier
4. Déplacer un personnage dans le terminal
5. Quitter proprement un programme interactif
6. Mesurer un temps de réaction

---

## 1️⃣ Pourquoi ce n'est pas comme `prompt()` ?

Dans les premières semaines, quand on voulait une réponse, on attendait une entrée complète.
Pour un jeu, c'est trop lent : le joueur doit pouvoir appuyer sur une flèche et voir l'effet tout de suite.

Avec `terminal-kit`, on peut écouter les touches en direct :

```javascript
const term = require("terminal-kit").terminal;

term.grabInput(true);

term.on("key", function(nomTouche) {
    term("Touche : " + nomTouche + "\n");
});
```

> 📝 **Exercice** : `exercice_1_grab_input.js`

---

## 2️⃣ Le nom des touches

`terminal-kit` donne un nom aux touches spéciales :

| Touche | Nom reçu |
|--------|----------|
| Flèche haut | `UP` |
| Flèche bas | `DOWN` |
| Flèche gauche | `LEFT` |
| Flèche droite | `RIGHT` |
| Échap | `ESCAPE` |
| Ctrl+C | `CTRL_C` |

On peut tester avec des conditions :

```javascript
if (nomTouche === "UP") {
    term.green("Le joueur monte !\n");
}
```

> 📝 **Exercice** : `exercice_2_detecter_touches.js`

---

## 3️⃣ Déplacer un personnage

Un personnage dans un terminal peut être représenté par deux nombres :

```javascript
let colonneJoueur = 10;
let ligneJoueur = 5;
```

Quand le joueur appuie sur une flèche, on modifie une coordonnée :

```javascript
if (nomTouche === "RIGHT") {
    colonneJoueur = colonneJoueur + 1;
}
```

Puis on efface et on réaffiche :

```javascript
term.clear();
term.moveTo(colonneJoueur, ligneJoueur, "@");
```

> 📝 **Exercice** : `exercice_3_deplacer_curseur.js`

---

## 4️⃣ Sortie propre

Quand on cache le curseur ou qu'on capture le clavier, il faut remettre le terminal en état normal à la fin.

```javascript
function quitter() {
    term.grabInput(false);
    term.hideCursor(false);
    term.clear();
    term.processExit(0);
}
```

Cette fonction deviendra un réflexe dans les jeux console.

> 📝 **Exercice** : `exercice_4_quitter_proprement.js`

---

## 5️⃣ Mesurer un temps de réaction

JavaScript peut mesurer le temps avec `Date.now()` :

```javascript
let debut = Date.now();

// plus tard...
let duree = Date.now() - debut;
term("Temps : " + duree + " ms\n");
```

On peut donc faire un jeu : afficher une touche à presser, puis mesurer la vitesse du joueur.

> 📝 **Exercice** : `exercice_5_reflexe_timer.js`

---

## 🎮 Défi de la semaine

> 📝 **Défi** : `defi_jeu_reflexe.js`

Crée un jeu de réflexe : le programme choisit une touche, le joueur doit appuyer dessus le plus vite possible.

---

## 🧠 À retenir

- `term.grabInput(true)` active l'écoute du clavier
- `term.on("key", function(nomTouche) { ... })` réagit aux touches
- Les flèches s'appellent `UP`, `DOWN`, `LEFT`, `RIGHT`
- Pour bouger un personnage : modifier ses coordonnées, effacer, réafficher
- Un programme interactif doit toujours prévoir une fonction `quitter()`

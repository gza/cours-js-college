# ⚔️ Challenge Module 2 : Combat RPG tour par tour

> **Objectif** : Créer un combat tour par tour entre un héros et un monstre
> **Compétences utilisées** : objets imbriqués, tableaux d'objets, fonctions, conditions, boucles, affichage console
> **Temps estimé** : 2-3 heures

---

## 🎮 Le concept

Un héros affronte un monstre dans un combat au tour par tour.
À chaque tour, le héros choisit une action (Attaquer, Défendre, Potion, Fuir).
Le monstre attaque automatiquement.
Le combat s'arrête quand l'un des deux tombe à 0 PV.

---
<div class="page-break"></div>

## 🧱 Structure des données

Le héros est un **objet imbriqué** :

```javascript
let heros = {
    nom: "Steve",
    pv: 30,
    pvMax: 30,
    stats: {
        attaque: 8,
        defense: 3
    },
    equipement: {
        arme:   { nom: "Épée en fer", degats: 4 },
        armure: { nom: "Cotte de mailles", reduction: 2 }
    },
    inventaire: [
        { type: "potion", nom: "Petite potion", soin: 10 },
        { type: "potion", nom: "Grande potion", soin: 25 }
    ]
};
```

Le monstre suit la même logique (en plus simple).

---
<div class="page-break"></div>

## ⚔️ Règles du combat

### Calcul des dégâts

```
degats_infliges = (attaquant.stats.attaque + attaquant.equipement.arme.degats)
                  - (cible.stats.defense + cible.equipement.armure.reduction)
                  + un peu d'aléatoire (entre -1 et +2)
```

Si le résultat est < 1 → on inflige quand même 1 dégât.

### Actions du héros

| Action      | Effet                                                              |
|-------------|--------------------------------------------------------------------|
| Attaquer    | Inflige des dégâts au monstre                                      |
| Défendre    | Divise par 2 les dégâts subis ce tour                              |
| Potion      | Choisit une potion de l'inventaire et soigne (sans dépasser pvMax) |
| Fuir        | 50% de chance : si réussi, fin du combat. Sinon, tour perdu.       |

### Tour du monstre

Le monstre attaque toujours (sauf si le héros a déjà gagné).

---
<div class="page-break"></div>

## 🎨 Affichage console simple

Pour ce challenge, on reste en **console Node.js**, sans bibliothèque externe.

### Idée de barre de vie

```javascript
function afficherBarreVie(nom, pv, pvMax) {
    let largeur = 20;
    let pleins = Math.round((pv / pvMax) * largeur);
    let vides  = largeur - pleins;
    let barre  = "█".repeat(pleins) + "░".repeat(vides);

    console.log(`${nom} [${barre}] ${pv}/${pvMax}`);
}
```

---

## 📋 Étapes suggérées

1. **Données** : crée `heros` et `monstre` (objets imbriqués) + l'inventaire de potions.
2. **Affichage** : écris `afficherCombat()` qui affiche les deux barres de vie.
3. **Calcul** : écris `calculerDegats(attaquant, cible)`.
4. **Actions** :
   - `attaquer(attaquant, cible)` → calcule, applique, affiche.
   - `defendre()` → marque le héros en mode défense pour ce tour.
   - `utiliserPotion(heros)` → prend la première potion, soigne, retire de l'inventaire.
   - `fuir()` → renvoie `true` si réussi.
5. **Tour du monstre** : choisit toujours d'attaquer (au début).
6. **Boucle de jeu** : tant que les deux ont `pv > 0`, faire un tour. Afficher le gagnant à la fin.

> 💡 **Pour démarrer simple** : commence par enchaîner les actions **dans le code** (pas d'input clavier). Tu pourras ajouter un vrai menu interactif plus tard, au module 3.

---

## ✅ Compétences validées

- ✅ Objets imbriqués (`hero.equipement.arme.degats`)
- ✅ Tableaux d'objets (inventaire de potions)
- ✅ Fonctions avec paramètres et `return`
- ✅ Conditions et boucles
- ✅ Affichage console clair et lisible

---

## 🚀 Bonus

- 🌀 Plusieurs monstres à enchaîner (boss final)
- 📈 Système d'XP et montée de niveau
- 🛡️ Plusieurs armures à équiper en cours de combat
- 🎲 Coups critiques (1 chance sur 10, dégâts ×2)
- 🧠 Le monstre choisit son action selon ses PV

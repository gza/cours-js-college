# 📖 Semaine 7 : Tableaux d'objets

> **Objectif** : Manipuler des collections de fiches (inventaire, monstres, joueurs…)
> **Durée** : 2 heures

---

## 🎯 Ce que tu vas apprendre

1. Créer un tableau qui contient des objets
2. Accéder à une propriété d'un objet du tableau
3. Parcourir et afficher tous les objets
4. Chercher un objet précis avec `find`
5. Filtrer les objets avec `filter`
6. Faire un calcul global sur le tableau

---

## 1️⃣ Pourquoi combiner ?

Un tableau seul → des valeurs simples.
Un objet seul → **une** fiche.
Un **tableau d'objets** → **plusieurs** fiches !

Exemple : un inventaire d'items Minecraft.

```javascript
let inventaire = [
    { nom: "Pioche en fer", type: "outil", quantite: 1, durabilite: 250 },
    { nom: "Pomme",          type: "nourriture", quantite: 12 },
    { nom: "Diamant",        type: "ressource", quantite: 5 }
];
```

---

## 2️⃣ Accéder aux données

```javascript
inventaire[0]              // l'objet entier en position 0
inventaire[0].nom          // "Pioche en fer"
inventaire[1].quantite     // 12
inventaire.length          // 3
```

> 📝 **Exercice** : `exercice_1_tableau_objets.js`

---

## 3️⃣ Parcourir tous les objets

### Avec `for...of` (très lisible)

```javascript
for (let item of inventaire) {
    console.log(`${item.nom} x${item.quantite}`);
}
```

### Avec `forEach`

```javascript
inventaire.forEach(function(item) {
    console.log(`${item.nom} x${item.quantite}`);
});
```

> 📝 **Exercice** : `exercice_2_parcourir_afficher.js`

---

## 4️⃣ Modifier un objet du tableau

```javascript
inventaire[0].durabilite = inventaire[0].durabilite - 1;
inventaire[1].quantite = inventaire[1].quantite + 5;
```

> 📝 **Exercice** : `exercice_3_modifier_un_objet.js`

---

## 5️⃣ Chercher un objet : `find`

`find` renvoie le **premier** objet pour lequel la fonction renvoie `true`.

```javascript
let pomme = inventaire.find(function(item) {
    return item.nom === "Pomme";
});

console.log(pomme);          // { nom: "Pomme", ... }
console.log(pomme.quantite); // 12
```

Si rien n'est trouvé : `find` renvoie `undefined`.

> 📝 **Exercice** : `exercice_4_find.js`

---

## 6️⃣ Filtrer : `filter`

`filter` renvoie un **nouveau tableau** avec tous les objets pour lesquels la fonction renvoie `true`.

```javascript
let nourriture = inventaire.filter(function(item) {
    return item.type === "nourriture";
});

console.log(nourriture.length);  // nombre d'items "nourriture"
```

> 📝 **Exercice** : `exercice_5_filter.js`

---

## 7️⃣ Calcul global

On peut additionner une propriété sur tout le tableau :

```javascript
let totalQuantite = 0;
for (let item of inventaire) {
    totalQuantite = totalQuantite + item.quantite;
}
```

> 📝 **Exercice** : `exercice_6_classement.js`

---

## 🎮 Défi de la semaine

> 📝 **Défi** : `defi_inventaire_items.js`

Crée un inventaire d'items Minecraft avec : afficher, chercher, filtrer, ajouter une quantité.

---

## 🧠 À retenir

- `tab[i].propriete` → accès à une propriété
- `for (let x of tab)` → boucler avec un nom clair
- `find` → un objet (ou `undefined`)
- `filter` → un sous-tableau
- Combine `for` + `if` pour des calculs personnalisés

# 📖 Semaine 6 : Les objets

> **Objectif** : Regrouper plusieurs informations dans une seule "fiche"
> **Durée** : 2 heures
> **Lien Scratch** : Pas d'équivalent direct (super pouvoir JS !)

---

## 🎯 Ce que tu vas apprendre

1. Créer un objet
2. Accéder aux propriétés (point et crochets)
3. Modifier, ajouter, supprimer une propriété
4. Parcourir un objet
5. Mettre une fonction dans un objet (méthode)

---

## 1️⃣ Pourquoi un objet ?

Un **tableau** range des valeurs côte à côte (par index : 0, 1, 2…).
Un **objet** range des valeurs avec un **nom** (une étiquette).

Imagine la fiche d'un héros RPG :

```
┌──────────────────┐
│  HÉROS           │
│  nom    : Steve  │
│  pv     : 20     │
│  niveau : 5      │
│  classe : Mineur │
└──────────────────┘
```

En JavaScript :

```javascript
let heros = {
    nom: "Steve",
    pv: 20,
    niveau: 5,
    classe: "Mineur"
};
```

Chaque ligne est une **propriété** : `nom de la propriété : valeur`.

---

## 2️⃣ Accéder à une propriété

Deux façons :

### Notation point (la plus courante)

```javascript
console.log(heros.nom);     // "Steve"
console.log(heros.pv);      // 20
```

### Notation crochets (utile quand le nom est dans une variable)

```javascript
console.log(heros["nom"]);  // "Steve"

let prop = "pv";
console.log(heros[prop]);   // 20
```

> 📝 **Exercice** : `exercice_1_creer_objet.js`
> 📝 **Exercice** : `exercice_2_acceder_proprietes.js`

---

## 3️⃣ Modifier et ajouter

```javascript
heros.pv = 18;              // modifie
heros.classe = "Guerrier";  // modifie
heros.experience = 0;       // ajoute une nouvelle propriété
```

> 📝 **Exercice** : `exercice_3_modifier_ajouter.js`

---

## 4️⃣ Supprimer une propriété

```javascript
delete heros.experience;
```

> 📝 **Exercice** : `exercice_4_supprimer_propriete.js`

---

## 5️⃣ Parcourir un objet : `for...in`

```javascript
for (let cle in heros) {
    console.log(`${cle} = ${heros[cle]}`);
}
```

`cle` prend tour à tour le nom de chaque propriété.
On utilise les **crochets** car le nom est dans une variable.

> 📝 **Exercice** : `exercice_5_parcours_for_in.js`

---

## 6️⃣ Une fonction dans un objet : la méthode

Un objet peut contenir une **fonction**. On parle alors de **méthode**.

```javascript
let heros = {
    nom: "Steve",
    pv: 20,
    seSoigner: function() {
        this.pv = 20;
        console.log(`${this.nom} récupère toute sa vie !`);
    }
};

heros.seSoigner();
```

Le mot-clé `this` désigne **l'objet lui-même** : `this.pv` = la propriété `pv` de `heros`.

> 📝 **Exercice** : `exercice_6_methodes.js`

---

## 7️⃣ Tout combiner

> 📝 **Exercice** : `exercice_7_compte_minecraft.js`

---

## 🎮 Défi de la semaine

> 📝 **Défi** : `defi_fiche_personnage.js`

Crée une fiche de personnage RPG complète, avec ses méthodes.

---

## 🧠 À retenir

- Objet = `{ cle1: valeur1, cle2: valeur2 }`
- Accès : `obj.cle` ou `obj["cle"]`
- Ajouter / modifier : `obj.nouveau = ...`
- Supprimer : `delete obj.cle`
- Parcourir : `for (let cle in obj)`
- Méthode = fonction dans l'objet, avec `this`

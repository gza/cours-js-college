# 📖 Semaine 3 : Les boucles (for, while)

> **Objectif** : Répéter des actions automatiquement  
> **Durée** : 2 heures  
> **Lien Scratch** : Les blocs "Répéter" 🟠

---

## 🎯 Ce que tu vas apprendre

1. Répéter X fois avec `for`
2. Répéter tant que... avec `while`
3. Sortir d'une boucle avec `break`
4. Sauter une itération avec `continue`

---

## 1️⃣ La boucle `for` : répéter X fois

En Scratch, tu utilises le bloc **"Répéter X fois"**.  
En JavaScript, on utilise `for`.

### Scratch vs JavaScript

```
┌─────────────────────────────────┐
│ 🟠 Répéter 10 fois              │       for (let i = 0; i < 10; i++) {
│   ┌───────────────────────────┐ │           // code répété 10 fois
│   │ faire quelque chose       │ │       }
│   └───────────────────────────┘ │
└─────────────────────────────────┘
```

### Anatomie d'une boucle for

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Affiche : 0, 1, 2, 3, 4
```

**Décomposition :**
- `let i = 0` → **Initialisation** : on commence à 0
- `i < 5` → **Condition** : on continue tant que i < 5
- `i++` → **Incrémentation** : on ajoute 1 à i à chaque tour

### Exemples

```javascript
// Compter de 1 à 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Affiche : 1, 2, 3, 4, 5

// Compter de 0 à 10 par pas de 2
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
// Affiche : 0, 2, 4, 6, 8, 10

// Compte à rebours
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
// Affiche : 5, 4, 3, 2, 1
```

### Utiliser i dans la boucle

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(`Tour numéro ${i}`);
}
```

> 📝 **Exercice** : `exercice_1_for_basique.js`

---

## 2️⃣ Boucle for avec des calculs

### Table de multiplication

```javascript
let nombre = 7;

console.log(`Table de ${nombre} :`);
for (let i = 1; i <= 10; i++) {
    let resultat = nombre * i;
    console.log(`${nombre} x ${i} = ${resultat}`);
}
```

### Calculer une somme

```javascript
let somme = 0;

for (let i = 1; i <= 100; i++) {
    somme += i;  // somme = somme + i
}

console.log(`La somme de 1 à 100 = ${somme}`);
// Affiche : 5050
```

> 📝 **Exercice** : `exercice_2_for_calculs.js`

---

## 3️⃣ Boucles imbriquées

On peut mettre une boucle dans une boucle !

### Exemple : Rectangle d'étoiles

```javascript
for (let ligne = 0; ligne < 3; ligne++) {
    let texte = "";
    for (let colonne = 0; colonne < 5; colonne++) {
        texte += "⭐";
    }
    console.log(texte);
}
// Affiche :
// ⭐⭐⭐⭐⭐
// ⭐⭐⭐⭐⭐
// ⭐⭐⭐⭐⭐
```

### Exemple : Pyramide

```javascript
for (let ligne = 1; ligne <= 5; ligne++) {
    let texte = "";
    for (let j = 0; j < ligne; j++) {
        texte += "🟩";
    }
    console.log(texte);
}
// Affiche :
// 🟩
// 🟩🟩
// 🟩🟩🟩
// 🟩🟩🟩🟩
// 🟩🟩🟩🟩🟩
```

> 📝 **Exercice** : `exercice_3_for_imbriques.js`

---

## 4️⃣ La boucle `while` : répéter tant que...

En Scratch, tu utilises **"Répéter jusqu'à"**.  
En JavaScript, on utilise `while` (tant que).

### Scratch vs JavaScript

```
┌─────────────────────────────────┐
│ 🟠 Répéter jusqu'à <condition>  │       while (condition) {
│   ┌───────────────────────────┐ │           // code répété
│   │ faire quelque chose       │ │       }
│   └───────────────────────────┘ │
└─────────────────────────────────┘
```

**Attention** : Scratch dit "jusqu'à" (on s'arrête quand c'est vrai), JavaScript dit "tant que" (on continue tant que c'est vrai). C'est l'inverse !

### Exemple simple

```javascript
let compteur = 0;

while (compteur < 5) {
    console.log(compteur);
    compteur++;  // IMPORTANT : sinon boucle infinie !
}
// Affiche : 0, 1, 2, 3, 4
```

### ⚠️ Boucle infinie

```javascript
// NE PAS FAIRE ÇA !
let x = 0;
while (x < 10) {
    console.log(x);
    // Oups ! On a oublié x++
    // La boucle ne s'arrête JAMAIS !
}
```

**Règle** : Dans un `while`, assure-toi que la condition finira par devenir fausse !

### Quand utiliser while vs for ?

- **for** : quand tu sais combien de fois répéter (10 fois, etc.)
- **while** : quand tu ne sais pas à l'avance (jusqu'à ce que l'utilisateur tape "quit", etc.)

> 📝 **Exercice** : `exercice_4_while.js`

---

## 5️⃣ `break` et `continue`

### `break` : sortir de la boucle

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Stop à 5 !");
        break;  // On sort de la boucle
    }
    console.log(i);
}
// Affiche : 1, 2, 3, 4, Stop à 5 !
```

### `continue` : sauter au tour suivant

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;  // On saute le 3
    }
    console.log(i);
}
// Affiche : 1, 2, 4, 5 (pas de 3 !)
```

### Exemple pratique : chercher un élément

```javascript
let nombreSecret = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`Test de ${i}...`);
    if (i === nombreSecret) {
        console.log(`🎉 Trouvé ! C'était ${i}`);
        break;  // Pas besoin de continuer
    }
}
```

> 📝 **Exercice** : `exercice_5_break_continue.js`

---

## 📋 Résumé

| Concept | Syntaxe |
|---------|---------|
| Répéter X fois | `for (let i = 0; i < X; i++) { }` |
| Tant que... | `while (condition) { }` |
| Sortir de la boucle | `break;` |
| Sauter une itération | `continue;` |
| Incrémenter | `i++` ou `i += 1` |
| Décrémenter | `i--` ou `i -= 1` |

---
<div class="page-break"></div>

## 🎮 Mini-projet : Pyramide d'étoiles

À la fin de cette séance, tu sauras créer :

```
       ⭐
      ⭐⭐⭐
     ⭐⭐⭐⭐⭐
    ⭐⭐⭐⭐⭐⭐⭐
   ⭐⭐⭐⭐⭐⭐⭐⭐⭐
```

---

## ➡️ Prochaine étape

1. Termine par le défi bonus : `defi_pyramide.js`
2. Semaine prochaine : les fonctions !

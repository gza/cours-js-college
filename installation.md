# 🛠️ Guide d'installation

Ce guide explique comment installer les outils nécessaires pour le cours de JavaScript.

---

## 📋 Ce qu'on va installer

| Outil | Rôle |
|-------|------|
| **Node.js** | Exécuter du JavaScript dans le terminal |
| **Geany** | Éditeur de code simple et efficace |
| **terminal-kit** | Bibliothèque pour les couleurs/animations (à partir du module 3) |

---

## 🐧 Installation sur Manjaro Linux

### 1. Installer Node.js

Ouvre un terminal et tape :

```bash
# Mettre à jour les paquets
sudo pacman -Syu

# Installer Node.js et npm
sudo pacman -S nodejs npm
```

Vérifie l'installation :

```bash
node --version
# Devrait afficher quelque chose comme : v20.x.x

npm --version
# Devrait afficher quelque chose comme : 10.x.x
```

### 2. Installer Geany

```bash
sudo pacman -S geany
```

Tu peux maintenant lancer Geany depuis le menu des applications ou avec :

```bash
geany &
```

### 3. Configurer Geany pour JavaScript

1. Ouvre Geany
2. Va dans **Édition → Préférences**
3. Onglet **Terminal** : vérifie que le terminal est activé
4. Va dans **Construire → Définir les commandes de construction**
5. Dans la section **Exécuter**, ajoute :
   - Commande : `node "%f"`
   - Cela permet d'exécuter ton fichier JS avec **F5**

### 4. Tester l'installation

1. Dans Geany, crée un nouveau fichier
2. Tape ce code :

```javascript
console.log("🎮 Salut ! JavaScript fonctionne !");
console.log("2 + 2 =", 2 + 2);
```

3. Sauvegarde le fichier sous le nom `test.js`
4. Appuie sur **F5** pour exécuter

Tu devrais voir dans le terminal :
```
🎮 Salut ! JavaScript fonctionne !
2 + 2 = 4
```

🎉 **Bravo, c'est prêt !**

---

## 🐧 Installation sur Ubuntu / Debian

### 1. Installer Node.js

Ouvre un terminal et tape :

```bash
# Mettre à jour les paquets
sudo apt update && sudo apt upgrade -y

# Installer Node.js et npm
sudo apt install nodejs npm -y
```

**Note** : Sur Ubuntu, la version de Node.js peut être ancienne. Pour avoir une version récente :

```bash
# Installer Node.js 20.x (LTS) via NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install nodejs -y
```

Vérifie l'installation :

```bash
node --version
# Devrait afficher quelque chose comme : v20.x.x

npm --version
# Devrait afficher quelque chose comme : 10.x.x
```

### 2. Installer Geany

```bash
sudo apt install geany -y
```

Tu peux maintenant lancer Geany depuis le menu des applications ou avec :

```bash
geany &
```

### 3. Configurer Geany pour JavaScript

1. Ouvre Geany
2. Va dans **Édition → Préférences**
3. Onglet **Terminal** : vérifie que le terminal est activé
4. Va dans **Construire → Définir les commandes de construction**
5. Dans la section **Exécuter**, ajoute :
   - Commande : `node "%f"`
   - Cela permet d'exécuter ton fichier JS avec **F5**

### 4. Tester l'installation

1. Dans Geany, crée un nouveau fichier
2. Tape ce code :

```javascript
console.log("🎮 Salut ! JavaScript fonctionne !");
console.log("2 + 2 =", 2 + 2);
```

3. Sauvegarde le fichier sous le nom `test.js`
4. Appuie sur **F5** pour exécuter

Tu devrais voir dans le terminal :
```
🎮 Salut ! JavaScript fonctionne !
2 + 2 = 4
```

🎉 **Bravo, c'est prêt !**

---

## 📦 Installation de terminal-kit (Module 3)

> ⚠️ À faire seulement quand on arrive au Module 3 !

Dans le dossier de ton projet, ouvre un terminal et tape :

```bash
# Initialiser un projet npm (une seule fois)
npm init -y

# Installer terminal-kit
npm install terminal-kit
```

Pour tester, crée un fichier `test_couleurs.js` :

```javascript
const term = require('terminal-kit').terminal;

term.red("Ce texte est rouge !\n");
term.green("Ce texte est vert !\n");
term.blue("Ce texte est bleu !\n");
term.yellow.bold("Jaune et gras !\n");

term.processExit(0);
```

Exécute avec `node test_couleurs.js` et tu verras les couleurs ! 🌈

---

## 🔧 En cas de problème

### "node: command not found"

Node.js n'est pas installé ou pas dans le PATH. Réinstalle-le avec les commandes ci-dessus.

### "permission denied" avec npm

Ne jamais utiliser `sudo` avec npm pour installer des packages. Si tu as ce problème :

```bash
# Manjaro
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Ubuntu
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### Geany n'exécute pas le fichier

- Vérifie que le fichier est sauvegardé avec l'extension `.js`
- Vérifie que la commande de build est bien `node "%f"`

---

## 📱 Alternative : Exécution dans le terminal

Si tu préfères ne pas utiliser F5 dans Geany, tu peux toujours :

1. Ouvrir un terminal
2. Aller dans le dossier de ton fichier : `cd chemin/vers/dossier`
3. Exécuter : `node monfichier.js`

---

## ✅ Checklist finale

- [ ] `node --version` fonctionne
- [ ] `npm --version` fonctionne  
- [ ] Geany est installé
- [ ] Je peux créer un fichier `.js` et l'exécuter avec F5
- [ ] Le test affiche bien "JavaScript fonctionne !"

**Tu es prêt pour le cours ! 🚀**

---

*Guide créé le 25 novembre 2025*

// ╔═══════════════════════════════════════════════════════════════════╗
// ║       EXERCICE 5 : Tableau d'objets contenant des objets          ║
// ╚═══════════════════════════════════════════════════════════════════╝

let equipe = [
    {
        nom: "Steve",
        stats: { force: 12, agilite: 8 },
        equipement: { arme: { nom: "Épée", degats: 6 } }
    },
    {
        nom: "Alex",
        stats: { force: 9, agilite: 14 },
        equipement: { arme: { nom: "Arc", degats: 5 } }
    },
    {
        nom: "Notch",
        stats: { force: 15, agilite: 10 },
        equipement: { arme: { nom: "Marteau", degats: 8 } }
    }
];

// 5.1 Affiche le nom du deuxième héros


// 5.2 Affiche la force du troisième héros


// 5.3 Affiche le nom de l'arme du premier héros


// 5.4 Affiche les dégâts de l'arme du deuxième héros


// 5.5 Le troisième héros gagne 1 en force


// 5.6 Le premier héros change d'arme : "Hache" (dégâts 7)


// 5.7 Affiche l'équipe complète
console.log(JSON.stringify(equipe, null, 2));

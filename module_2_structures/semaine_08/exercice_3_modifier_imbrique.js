// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 3 : Modifier en profondeur                  ║
// ╚═══════════════════════════════════════════════════════════════════╝

let heros = {
    nom: "Steve",
    pv: 20,
    stats: { force: 10, agilite: 8, intelligence: 5 },
    equipement: {
        arme:   { nom: "Épée en bois", degats: 2 },
        armure: { nom: "Tunique",      reduction: 1 }
    }
};

// 3.1 Le héros gagne 2 en force


// 3.2 Le héros gagne 1 en intelligence


// 3.3 Il change d'arme : "Épée en fer", dégâts 6


// 3.4 Il améliore son armure : "Cotte de mailles", reduction 3


// 3.5 Il subit 5 dégâts


// 3.6 Affiche le héros final
console.log(JSON.stringify(heros, null, 2));

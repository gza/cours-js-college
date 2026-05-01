// ╔═══════════════════════════════════════════════════════════════════╗
// ║              EXERCICE 6 : Méthodes (fonctions dans objets)        ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Une méthode = une fonction stockée dans une propriété.
// Dans la méthode, "this" désigne l'objet lui-même.
//
// ═══════════════════════════════════════════════════════════════════

let chien = {
    nom: "Rex",
    energie: 5,

    aboyer: function() {
        console.log(`${this.nom} : Wouf wouf !`);
    },

    jouer: function() {
        this.energie = this.energie - 1;
        console.log(`${this.nom} joue. Énergie restante : ${this.energie}`);
    }
};

// 6.1 Appelle la méthode aboyer


// 6.2 Appelle 3 fois la méthode jouer


// ───────────────────────────────────────────────────────────────────

let heros = {
    nom: "Steve",
    pv: 20,
    pvMax: 20

    // 6.3 Ajoute une méthode "prendreDegats(montant)"
    //     qui retire montant de pv et affiche le nouveau pv.

    // 6.4 Ajoute une méthode "seSoigner()"
    //     qui remet pv à pvMax et affiche un message.

};

// 6.5 Teste tes méthodes
// heros.prendreDegats(5);
// heros.prendreDegats(10);
// heros.seSoigner();

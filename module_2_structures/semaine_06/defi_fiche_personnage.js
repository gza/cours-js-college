// ╔═══════════════════════════════════════════════════════════════════╗
// ║              DÉFI : Fiche de personnage RPG ⚔️                    ║
// ╚═══════════════════════════════════════════════════════════════════╝
//
// Crée la fiche complète d'un héros, avec ses méthodes.
//
// ═══════════════════════════════════════════════════════════════════

// ÉTAPE 1 : Crée un objet "heros" avec :
//   - nom        (string)
//   - classe     (string : "Guerrier", "Mage", "Archer"...)
//   - niveau     (number)
//   - pv         (number)
//   - pvMax      (number)
//   - attaque    (number)
//   - defense    (number)
//   - or         (number)



// ───────────────────────────────────────────────────────────────────
// ÉTAPE 2 : Ajoute les méthodes suivantes à ton héros.
// ───────────────────────────────────────────────────────────────────

// 2.1 afficher()
//     Affiche une fiche lisible (lignes "Nom : ...", "PV : x/y"...).

// 2.2 prendreDegats(montant)
//     Retire (montant - defense) de pv (au moins 1).
//     Si pv <= 0, affiche "<nom> est K.O. !" et met pv à 0.

// 2.3 attaquer(cible)
//     Appelle cible.prendreDegats(this.attaque).
//     (cible doit aussi être un héros avec la méthode prendreDegats)

// 2.4 monterNiveau()
//     niveau +1, pvMax +5, pv = pvMax, attaque +2, defense +1.
//     Affiche "<nom> monte au niveau X !".


// ───────────────────────────────────────────────────────────────────
// ÉTAPE 3 : Démo
// ───────────────────────────────────────────────────────────────────

// Crée un deuxième héros (un ennemi) et fais-les combattre tour à tour.


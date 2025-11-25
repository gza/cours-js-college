#!/usr/bin/env node
// ═══════════════════════════════════════════════════════════════════
// 📄 Générateur de PDFs des cours JavaScript
// Utilise md-to-pdf (https://github.com/simonhaenisch/md-to-pdf)
// 
// Usage : node generer_pdf.js
// ═══════════════════════════════════════════════════════════════════

const { mdToPdf } = require('md-to-pdf');
const fs = require('fs');
const path = require('path');

// ═══════════════════════════════════════════════════════════════════
// CONFIGURATION
// ═══════════════════════════════════════════════════════════════════

const SCRIPT_DIR = __dirname;
const PDF_DIR = path.join(SCRIPT_DIR, 'pdf_cours');

// Options de style pour les PDFs
const PDF_OPTIONS = {
    stylesheet: [],
    css: `
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            color: #333;
        }
        h1 {
            color: #2c3e50;
            border-bottom: 3px solid #3498db;
            padding-bottom: 10px;
        }
        h2 {
            color: #34495e;
            border-bottom: 1px solid #bdc3c7;
            padding-bottom: 5px;
        }
        h3 {
            color: #7f8c8d;
        }
        code {
            background-color: #f4f4f4;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Consolas', 'Monaco', monospace;
        }
        pre {
            background-color: #2d2d2d;
            color: #f8f8f2;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
        }
        pre code {
            background-color: transparent;
            color: inherit;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 15px 0;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #3498db;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        blockquote {
            border-left: 4px solid #3498db;
            margin: 15px 0;
            padding: 10px 20px;
            background-color: #f8f9fa;
        }
        /* Support des sauts de page */
        .page-break {
            page-break-after: always;
            break-after: page;
        }
        /* Éviter les coupures au milieu des blocs de code */
        pre {
            page-break-inside: avoid;
        }
        /* Garder les titres avec leur contenu */
        h1, h2, h3 {
            page-break-after: avoid;
        }
    `,
    // Autoriser le HTML dans le markdown (pour les <div class="page-break">)
    marked_options: {
        headerIds: true,
        mangle: false
    },
    // Important : md-to-pdf utilise marked qui parse le HTML par défaut
    pdf_options: {
        format: 'A4',
        margin: {
            top: '20mm',
            bottom: '20mm',
            left: '20mm',
            right: '20mm'
        },
        printBackground: true
    }
};

// ═══════════════════════════════════════════════════════════════════
// FONCTIONS UTILITAIRES
// ═══════════════════════════════════════════════════════════════════

// Couleurs pour le terminal
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m'
};

function log(color, message) {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function logInline(color, message) {
    process.stdout.write(`${colors[color]}${message}${colors.reset}`);
}

// Trouver tous les fichiers .md récursivement
function trouverFichiersMd(dossier, fichiers = []) {
    const elements = fs.readdirSync(dossier);
    
    for (const element of elements) {
        const cheminComplet = path.join(dossier, element);
        const stats = fs.statSync(cheminComplet);
        
        if (stats.isDirectory()) {
            // Ignorer node_modules et pdf_cours
            if (element !== 'node_modules' && element !== 'pdf_cours') {
                trouverFichiersMd(cheminComplet, fichiers);
            }
        } else if (element.endsWith('.md')) {
            fichiers.push(cheminComplet);
        }
    }
    
    return fichiers;
}

// Générer le nom du PDF à partir du chemin
function genererNomPdf(cheminMd) {
    const relatif = path.relative(SCRIPT_DIR, cheminMd);
    const nomPdf = relatif
        .replace(/\//g, '_')
        .replace(/\.md$/, '.pdf');
    return path.join(PDF_DIR, nomPdf);
}

// ═══════════════════════════════════════════════════════════════════
// FONCTION PRINCIPALE
// ═══════════════════════════════════════════════════════════════════

async function genererPdfs() {
    console.log('');
    log('blue', '═══════════════════════════════════════════════════════════');
    log('blue', '   📄 Génération des PDFs des cours JavaScript');
    log('blue', '═══════════════════════════════════════════════════════════');
    console.log('');
    
    // Créer le dossier de sortie
    if (!fs.existsSync(PDF_DIR)) {
        fs.mkdirSync(PDF_DIR, { recursive: true });
        log('green', `📁 Dossier créé : pdf_cours/`);
        console.log('');
    }
    
    // Trouver tous les fichiers markdown
    const fichiersMd = trouverFichiersMd(SCRIPT_DIR);
    
    if (fichiersMd.length === 0) {
        log('yellow', '⚠️  Aucun fichier .md trouvé !');
        return;
    }
    
    log('cyan', `📚 ${fichiersMd.length} fichiers markdown trouvés`);
    console.log('');
    
    // Compteurs
    let succes = 0;
    let echecs = 0;
    
    // Convertir chaque fichier
    for (const fichierMd of fichiersMd) {
        const relatif = path.relative(SCRIPT_DIR, fichierMd);
        const sortie = genererNomPdf(fichierMd);
        
        logInline('reset', `  📝 ${relatif} ... `);
        
        try {
            const pdf = await mdToPdf(
                { path: fichierMd },
                PDF_OPTIONS
            );
            
            if (pdf && pdf.content) {
                fs.writeFileSync(sortie, pdf.content);
                log('green', '✅');
                succes++;
            } else {
                log('red', '❌ (contenu vide)');
                echecs++;
            }
        } catch (erreur) {
            log('red', `❌ (${erreur.message})`);
            echecs++;
        }
    }
    
    // Résumé
    console.log('');
    log('blue', '═══════════════════════════════════════════════════════════');
    log('green', '✅ Terminé !');
    console.log(`   Total: ${fichiersMd.length} fichiers`);
    log('green', `   Réussis: ${succes}`);
    if (echecs > 0) {
        log('red', `   Échoués: ${echecs}`);
    }
    console.log('');
    log('yellow', `📁 Les PDFs sont dans : pdf_cours/`);
    log('blue', '═══════════════════════════════════════════════════════════');
    
    // Lister les fichiers générés
    console.log('');
    console.log('Fichiers générés :');
    const pdfs = fs.readdirSync(PDF_DIR).filter(f => f.endsWith('.pdf'));
    for (const pdf of pdfs) {
        const stats = fs.statSync(path.join(PDF_DIR, pdf));
        const taille = (stats.size / 1024).toFixed(1);
        console.log(`  📄 ${pdf} (${taille} Ko)`);
    }
    console.log('');
}

// ═══════════════════════════════════════════════════════════════════
// LANCEMENT
// ═══════════════════════════════════════════════════════════════════

genererPdfs().catch(erreur => {
    log('red', `\n❌ Erreur fatale : ${erreur.message}`);
    
    if (erreur.message.includes("Cannot find module 'md-to-pdf'")) {
        console.log('');
        log('yellow', '💡 md-to-pdf n\'est pas installé. Installe-le avec :');
        console.log('');
        console.log('   npm install md-to-pdf');
        console.log('');
    }
    
    process.exit(1);
});

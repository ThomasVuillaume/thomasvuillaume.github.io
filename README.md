# thomasvuillaume.fr

Site bilingue FR/EN, statique, minimaliste. HTML/CSS pur via Astro SSG. Zéro dépendance JS runtime. Cible WCAG 2.2.

## Stack

- **Framework** : [Astro](https://astro.build/) v6.1 — Static Site Generation
- **Langage** : HTML, CSS, TypeScript (build uniquement)
- **Typographie** : DM Serif Display (h1) + Inter (corps)
- **Hébergement** : GitHub Pages (export statique)
- **Node** : >= 24 (LTS pair uniquement)

## Démarrage rapide

```bash
npm install
npm run dev       # serveur local → http://localhost:4321
npm run build     # génère dist/
npm run preview   # prévisualise le build
```

## Structure du projet

```
src/
├── pages/
│   ├── index.astro          # Page FR → /
│   └── en/index.astro       # Page EN → /en/
├── layouts/
│   └── BaseLayout.astro     # <html>, <head>, SEO, OG, JSON-LD
├── components/
│   ├── Header.astro         # Photo, nom, titre, switcher FR|EN
│   ├── Bio.astro            # Présentation + citation
│   ├── Contributions.astro  # Contributions (content collection)
│   ├── Publications.astro   # Dernières publications (content collection)
│   ├── CurrentReads.astro   # Lectures en cours (content collection)
│   └── Footer.astro         # Liens, whisper, humor signal
├── content/
│   ├── contributions/       # Entrées .md — projets & stratégie groupés
│   ├── publications/        # Entrées .md — articles, talks, webinaires
│   └── reads/               # Entrées .md — lectures en cours
├── content.config.ts        # Schémas des content collections (Zod)
└── styles/
    └── global.css           # Tous les styles + design tokens
public/
├── TVU.png                  # Photo de profil
└── favicon.svg              # Favicon
```

## Ajouter/modifier du contenu

### Contributions

Créer un fichier `src/content/contributions/<slug>.md` :

```yaml
---
group: "code"       # strategy | code
order: 1            # ordre d'affichage dans le groupe
year: 2026
text: "Texte FR"
textEn: "Text EN"
url: ""             # Optionnel — lien externe
urlText: ""         # Optionnel — libellé du lien
---
```

Les contributions sont affichées en deux groupes :
- `strategy` → "Stratégie & Organisation"
- `code` → "IA & Code"

### Publications

Créer un fichier `src/content/publications/<slug>.md` :

```yaml
---
date: "2026-03"
title: "Titre FR"
titleEn: "Title EN"
venue: "linkedin.com"
venueEn: "linkedin.com"
url: ""                # Optionnel
lang: "both"
---
```

### Lectures en cours

Créer un fichier `src/content/reads/<slug>.md` :

```yaml
---
title: "Nom du livre"
author: "Auteur"
status: "reading"      # reading | finished
lang: "both"
source: "livre"        # Optionnel — affiché à droite
sourceEn: "book"       # Optionnel
url: ""                # Optionnel
---
```

## Design tokens

Définis dans `src/styles/global.css` :

| Token | Valeur | Usage |
|-------|--------|-------|
| `--bg` | `#FFFBF5` | Fond blanc chaud |
| `--text` | `#1C1917` | Texte principal |
| `--text-secondary` | `#57534E` | Texte secondaire |
| `--accent` | `#C2410C` | Décoratif (bordures, fonds) |
| `--accent-text` | `#9A3412` | Texte interactif (AAA) |
| `--accent-year` | `#7C2D12` | Labels année (AAA) |
| `--accent-hover` | `#7C2D12` | État hover des liens |
| `--border` | `#E7E5E4` | Séparateurs |
| `--font-serif` | DM Serif Display | Titre h1 uniquement |
| `--font-sans` | Inter | Tout le reste |

## Routing

| Route | Langue | Fichier |
|-------|--------|---------|
| `/` | FR | `src/pages/index.astro` |
| `/en/` | EN | `src/pages/en/index.astro` |

Le switcher FR|EN est un lien statique entre les deux pages.

## Accessibilité

- WCAG 2.1 AAA ciblé
- Skip-link, `:focus-visible` (3px accent ring)
- `aria-label` sur toutes les sections
- `<html lang>` correct par page
- `prefers-reduced-motion: reduce` supporté
- Contraste vérifié sur tous les tokens texte

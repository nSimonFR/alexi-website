# Tina CMS Configuration Guide

## Overview

Your website is now fully configured with Tina CMS. All content is editable through the Tina admin interface, and users can proactively create new projects (fictions or documentaries).

## What's Been Configured

### Admin Organization

The Tina CMS admin interface is organized into the following sections (all in French):
- **Projets** - All your projects (fictions and documentaries)
- **Navigation** - Combined header and footer settings
- **Bande démo** - Demo video page
- **Contact** - Contact page

### 1. **Projets** (Projects/Films)

Collection name: `post`
Location: `content/posts/*.md`

**Champs:**
- Titre (requis)
- Réalisateur (optionnel)
- Image principale (requis)
- Catégorie (requis): Fiction ou Documentaire
- Contenu (texte enrichi)

**Fonctionnalité clé:** Les utilisateurs peuvent créer de nouveaux projets directement depuis l'interface d'administration Tina. Chaque projet est automatiquement catégorisé comme "fiction" ou "documentaire".

### 2. **Bande démo** (Demo Page)

Location: `content/demo.md`

**Champs:**
- Titre
- URL Vimeo (l'URL complète d'intégration depuis Vimeo)
- Contenu

**Fonctionnalité clé:** Le lien vidéo Vimeo est entièrement configurable via Tina CMS.

### 3. **Contact**

Location: `content/contact.md`

**Champs:**
- Titre
- Nom
- Titre professionnel
- Email
- Téléphone

**Fonctionnalité clé:** Toutes les informations de contact sont éditables via Tina CMS.

### 4. **Navigation** (Header & Footer)

Tous les paramètres de navigation sont consolidés dans un seul fichier de configuration plat pour une gestion plus facile.

Location: `_data/navigation.json`

**Champs:**
- `title` - Titre du site (affiché au centre de l'en-tête)
- `phone` - Numéro de téléphone (affiché dans le pied de page)
- `email` - Adresse email (affichée dans le pied de page)
- `instagramUrl` - URL du profil Instagram (affichée dans le pied de page)
- `imdbUrl` - URL du profil IMDB (affichée dans le pied de page)

## How to Use Tina CMS

### Starting the Development Server

```bash
npm run dev
```

This command will:
1. Start the Tina CMS admin interface
2. Start the Eleventy development server
3. Watch for changes and rebuild automatically

### Accessing the Admin Interface

Once the dev server is running, visit:

```
http://localhost:1313/admin/
```

### Créer de nouveaux projets

1. Accédez à l'interface d'administration
2. Cliquez sur "Projets" dans la barre latérale
3. Cliquez sur "Create New"
4. Remplissez les champs:
   - Titre
   - Réalisateur (optionnel)
   - Téléchargez ou sélectionnez une image
   - Choisissez la catégorie: "Fiction" ou "Documentaire"
   - Ajoutez le contenu
5. Enregistrez

Le nouveau projet apparaîtra automatiquement dans la bonne section (Fictions ou Documentaires) de votre site web.

### Editing Existing Content

#### Pour modifier un projet:
1. Allez dans "Projets" dans l'interface d'administration
2. Sélectionnez le projet que vous souhaitez modifier
3. Effectuez vos modifications
4. Enregistrez

#### Pour modifier les paramètres de navigation (Header/Footer):
1. Allez dans "Navigation" dans l'interface d'administration
2. Vous verrez tous les champs dans une liste plate:
   - **Titre du site** - Apparaît dans l'en-tête
   - **Informations de contact** - Téléphone, email (apparaissent dans le pied de page)
   - **Liens sociaux** - Instagram, IMDB (apparaissent dans le pied de page)
3. Effectuez vos modifications
4. Enregistrez

Tous les paramètres de navigation sont dans une configuration simple et plate!

#### Pour modifier la vidéo démo:
1. Allez dans "Bande démo" dans l'interface d'administration
2. Mettez à jour l'URL Vimeo
3. Enregistrez

#### Pour modifier les informations de contact:
1. Allez dans "Contact" dans l'interface d'administration
2. Mettez à jour n'importe quel champ
3. Enregistrez

## Image Management

Images are stored in the `public/` folder. When you upload an image through Tina CMS:
- It will be saved to the `public/` folder
- The path will automatically be set correctly in your content
- Images are automatically copied to the build output

## Building for Production

```bash
npm run build
```

This will:
1. Generate the Tina schema
2. Build your Eleventy site to the `_site/` folder

## Project Structure

```
alexi-website/
├── _data/              # Global data files
│   └── navigation.json # Combined header and footer configuration
├── _includes/          # Templates
│   ├── header.njk      # Site header
│   ├── footer.njk      # Site footer
│   ├── home.njk        # Fictions page layout
│   ├── documentaire.njk # Documentaries page layout
│   ├── post.njk        # Individual project layout
│   └── layout.njk      # Base layout
├── content/            # All editable content
│   ├── index.md        # Home page (Fictions)
│   ├── demo.md         # Demo page
│   ├── contact.md      # Contact page
│   ├── documentaire.md # Documentaries page
│   └── posts/          # Individual projects
│       ├── project-two.md
│       ├── project-three.md
│       └── ...
├── public/             # Static assets (images, CSS)
├── tina/
│   └── config.ts       # Tina CMS configuration
└── _site/              # Generated site (don't edit)
```

## Tips for Content Editors

1. **Always use the Tina admin interface** - Don't edit markdown files directly
2. **Image paths** - When uploading images, Tina will handle the path automatically
3. **Category matters** - Make sure to select the correct category (Fiction vs Documentaire) when creating projects
4. **Save regularly** - Tina auto-saves, but it's good to click save explicitly

## Troubleshooting

### If the admin interface doesn't load:
- Make sure the dev server is running: `npm run dev`
- Check that port 1313 is not in use by another application

### If images don't display:
- Verify the image is in the `public/` folder
- Check that the image path starts with `/public/`

### If changes don't appear:
- Save your changes in Tina
- Wait for Eleventy to rebuild (watch the terminal)
- Refresh your browser

## Technical Notes

- The site uses Eleventy as the static site generator
- Tina CMS manages all content through Git
- All changes are saved to markdown/JSON files
- The site template engine is Nunjucks/Liquid
- Collections are automatically filtered by category:
  - Fiction posts appear on the home page (/)
  - Documentaire posts appear on /documentaries/

## Next Steps

Your Tina CMS is now fully configured and ready to use! You can:
- Start creating new projects
- Update existing content
- Customize the header and footer
- Change the demo video
- Update contact information

All through the user-friendly Tina CMS interface!


# Alexi Website

A portfolio website built with 11ty and TinaCMS, featuring a project gallery with a 3-column grid layout.

## Features

- **Project Gallery**: 3-column grid layout inspired by modern portfolio designs
- **Hover Effects**: Smooth hover transitions with title overlays
- **TinaCMS Integration**: Easy content management through the admin panel
- **Responsive Design**: Adapts to mobile, tablet, and desktop screens
- **Individual Project Pages**: Each project has its own detail page

## Development

To start the development server:

```bash
npm run dev
```

Then access:
- **Website**: http://localhost:8080
- **TinaCMS Admin**: http://localhost:8080/admin

## Managing Projects

### Adding a New Project

1. Run `npm run dev`
2. Navigate to http://localhost:8080/admin
3. Log in to TinaCMS
4. Click on "Posts" in the sidebar
5. Click "Create New Post"
6. Fill in:
   - **Title**: Your project name
   - **Featured Image**: Upload or select a project image
   - **Body**: Project description and details
7. Save the post

### Editing Existing Projects

1. Go to http://localhost:8080/admin
2. Click on "Posts"
3. Select the project you want to edit
4. Make your changes and save

### Project Images

- Images should be uploaded through TinaCMS admin panel
- Alternatively, place images in the `public/` folder
- Reference them with `/public/your-image.jpg` in the frontmatter
- Images are automatically displayed in a square aspect ratio on the grid

## File Structure

```
content/
  ├── index.md              # Homepage (displays project grid)
  └── posts/                # Project posts
      ├── hello-world.md
      ├── project-two.md
      └── ...

_includes/
  ├── home.njk              # Homepage grid layout
  └── post.njk              # Individual project page layout

public/
  └── (your images here)

tina/
  └── config.ts             # TinaCMS schema configuration
```

## Build

To build for production:

```bash
npm run build
```

This will generate your static site in the `_site` directory.

To build for GitHub Pages deployment (with subdirectory path):

```bash
npm run build:prod
```

## Environment Variables

The site supports configurable base paths for deployment:

- **`PATH_PREFIX`**: Base path for Eleventy (default: `/`)
  - Example: `PATH_PREFIX=/alexi-website/`
  
- **`TINA_BASE_PATH`**: Base path for TinaCMS admin (default: `""`)
  - Example: `TINA_BASE_PATH=alexi-website`

These are automatically set by the GitHub Actions workflow for production deployment.

## Customization

### Grid Layout

Edit `_includes/home.njk` to customize:
- Grid columns (default: 3)
- Spacing between items
- Hover effects
- Colors and typography

### Individual Project Pages

Edit `_includes/post.njk` to customize:
- Project detail page layout
- Typography and spacing
- Image display


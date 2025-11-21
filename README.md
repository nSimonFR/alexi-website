# Alexi Website

A simple website built with 11ty and TinaCMS.

## Setup Complete

Your website now includes:

- **Homepage**: Located at `content/index.md`
- **TinaCMS Integration**: Edit your homepage through the TinaCMS admin panel
- **Basic Layout**: A clean, modern design in `_includes/layout.njk`

## Development

To start the development server:

```bash
npm run dev
```

Then access:
- **Website**: http://localhost:8080
- **TinaCMS Admin**: http://localhost:8080/admin

## Editing the Homepage

1. Run `npm run dev`
2. Navigate to http://localhost:8080/admin
3. Log in to TinaCMS
4. Click on "Pages" in the sidebar
5. Select "index" to edit your homepage title and content

## Build

To build for production:

```bash
npm run build
```

This will generate your static site in the `_site` directory.


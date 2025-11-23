import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "post",
        label: "Projets",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true,
          },

          {
            type: "string",
            name: "category",
            label: "Catégorie",
            required: true,
            options: [
              {
                value: "fiction",
                label: "Fiction",
              },
              {
                value: "documentaire",
                label: "Documentaire",
              },
            ],
          },
          {
            type: "string",
            name: "director",
            label: "Réalisateur",
            required: false,
          },
          {
            type: "image",
            name: "image",
            label: "Image principale",
            required: true,
          },
          {
            type: "string",
            name: "layout",
            label: "Mise en page",
            required: true,
            options: ["post.njk"],
            ui: {
              component: "hidden",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu",
            isBody: true,
          },
        ],
      },
      {
        name: "navigation",
        label: "Navigation",
        path: "_data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          global: true,
        },
        match: {
          include: "navigation",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre du site",
            required: true,
          },
          {
            type: "string",
            name: "phone",
            label: "Numéro de téléphone",
            required: true,
          },
          {
            type: "string",
            name: "email",
            label: "Adresse email",
            required: true,
          },
          {
            type: "string",
            name: "instagramUrl",
            label: "Lien Instagram",
            required: true,
          },
          {
            type: "string",
            name: "imdbUrl",
            label: "Lien IMDB",
            required: true,
          },
        ],
      },
      {
        name: "demo",
        label: "Bande démo",
        path: "content",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "demo",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            required: true,
          },
          {
            type: "string",
            name: "vimeoUrl",
            label: "URL Vimeo",
            required: true,
          },
          {
            type: "string",
            name: "layout",
            label: "Mise en page",
            required: true,
            ui: {
              component: "hidden",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu",
            isBody: true,
          },
        ],
      },
      {
        name: "contact",
        label: "Contact",
        path: "content",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "contact",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            required: true,
          },
          {
            type: "string",
            name: "name",
            label: "Nom",
            required: true,
          },
          {
            type: "string",
            name: "jobTitle",
            label: "Titre professionnel",
            required: true,
          },
          {
            type: "string",
            name: "email",
            label: "Email",
            required: true,
          },
          {
            type: "string",
            name: "phone",
            label: "Téléphone",
            required: true,
          },
          {
            type: "string",
            name: "layout",
            label: "Mise en page",
            required: true,
            ui: {
              component: "hidden",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu",
            isBody: true,
          },
        ],
      },
    ],
  },
});

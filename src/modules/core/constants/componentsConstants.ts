export const NAVBAR_LINKS: {
  [key: string]: { text: string; href: `/${string}` };
} = {
  HOME: {
    href: "/",
    text: "Inicio",
  },
  CATEGORIES: {
    href: "/categories",
    text: "Categorías",
  },
  NEWS: {
    text: "Noticias",
    href: "/news",
  },
  RECOMMENDED_NEWS: {
    text: "Noticias Recomendadas",
    href: "/news/recommended",
  },
};

export const FOOTER_LINKS: {
  [key: string]: { text: string; href: `/${string}` };
} = {
  TERMS_OF_SERVICE: {
    href: "/terms-of-service",
    text: "Términos de Servicio",
  },
  PRIVACY: {
    href: "/privacy",
    text: "Privacidad",
  },
  ABOUT_US: {
    href: "/about",
    text: "Nosotros",
  },
  CONTACT: {
    href: "/contact",
    text: "Contacto",
  },
};

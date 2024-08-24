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

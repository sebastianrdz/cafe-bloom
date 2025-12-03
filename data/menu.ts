import { MenuItem } from "./types";

export const menuItems: MenuItem[] = [
  // Café & Espresso
  {
    id: "espresso",
    name: "Espresso",
    description: "Shot rico y audaz de espresso premium",
    category: "coffee-espresso",
    price: "$45",
  },
  {
    id: "americano",
    name: "Americano",
    description: "Espresso con agua caliente para un sabor suave y rico",
    category: "coffee-espresso",
    price: "$50",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Espresso con leche vaporizada y espuma aterciopelada",
    category: "coffee-espresso",
    price: "$60",
  },
  {
    id: "latte",
    name: "Latte",
    description: "Espresso suave con leche vaporizada",
    category: "coffee-espresso",
    price: "$60",
  },

  // Lattes Especiales & Matcha
  {
    id: "bloom-latte",
    name: "Bloom Latte",
    description: "Nuestro latte insignia de la casa - una mezcla cuidadosamente elaborada que los amantes del café adoran",
    category: "specialty-lattes",
    price: "$75",
    tags: ["house-special", "best-seller"],
    featured: true,
  },
  {
    id: "strawberry-matcha",
    name: "Latte de Matcha con Fresa",
    description: "Probablemente el matcha más rico que probarás, con un delicioso toque de fresa",
    category: "specialty-lattes",
    price: "$80",
    tags: ["customer-favorite", "best-seller"],
    featured: true,
  },
  {
    id: "iced-hazelnut-latte",
    name: "Latte Helado de Avellana",
    description: "Sabor increíblemente rico a avellana que no es fácil de encontrar en otro lugar",
    category: "specialty-lattes",
    price: "$75",
    tags: ["customer-favorite"],
    featured: true,
  },
  {
    id: "hot-matcha-latte",
    name: "Latte de Matcha Caliente",
    description: "Matcha muy bueno, no muy dulce - perfectamente balanceado",
    category: "specialty-lattes",
    price: "$70",
  },
  {
    id: "vanilla-latte",
    name: "Latte de Vainilla",
    description: "Dulzura clásica de vainilla con espresso suave",
    category: "specialty-lattes",
    price: "$70",
  },
  {
    id: "caramel-latte",
    name: "Latte de Caramelo",
    description: "Rico sabor a caramelo con espresso y leche vaporizada",
    category: "specialty-lattes",
    price: "$70",
  },

  // Sin Café & Refrescantes
  {
    id: "lavender-lemonade",
    name: "Limonada de Lavanda",
    description: "Deliciosa y refrescante limonada con infusión de lavanda",
    category: "non-coffee",
    price: "$60",
    tags: ["customer-favorite"],
    featured: true,
  },
  {
    id: "iced-tea",
    name: "Té Helado",
    description: "Refrescante té preparado en frío",
    category: "non-coffee",
    price: "$50",
  },
  {
    id: "hot-chocolate",
    name: "Chocolate Caliente",
    description: "Chocolate caliente rico y cremoso",
    category: "non-coffee",
    price: "$60",
  },

  // Postres & Repostería
  {
    id: "affogato",
    name: "Affogato",
    description: "Delicioso helado de vainilla ahogado en espresso rico",
    category: "desserts",
    price: "$85",
    tags: ["customer-favorite"],
    featured: true,
  },
  {
    id: "tiramisu",
    name: "Tiramisú",
    description: "Postre italiano clásico, preparado con mucho cuidado",
    category: "desserts",
    price: "$90",
    tags: ["best-seller"],
  },
  {
    id: "cheesecake",
    name: "Cheesecake de Requesón",
    description: "Cheesecake único hecho con requesón - delicioso y ligero",
    category: "desserts",
    price: "$85",
  },
  {
    id: "croissant",
    name: "Croissant de Mantequilla",
    description: "Croissant hojaldrado y mantecoso recién horneado",
    category: "desserts",
    price: "$55",
  },
  {
    id: "cookies",
    name: "Galletas Artesanales",
    description: "Galletas recién horneadas, preparadas con amor",
    category: "desserts",
    price: "$45",
  },

  // Comida
  {
    id: "breakfast-plate",
    name: "Plato de Desayuno",
    description: "Desayuno abundante con huevos, pan tostado y acompañamientos",
    category: "food",
    price: "$120",
  },
  {
    id: "sandwich",
    name: "Sándwich Gourmet",
    description: "Sándwich fresco con ingredientes premium, servido con papas fritas",
    category: "food",
    price: "$110",
  },
];

// Helper functions
export const getMenuByCategory = (category: MenuItem["category"]) => {
  return menuItems.filter((item) => item.category === category);
};

export const getFeaturedItems = () => {
  return menuItems.filter((item) => item.featured);
};

export const getItemsByTag = (tag: NonNullable<MenuItem["tags"]>[number]) => {
  return menuItems.filter((item) => item.tags?.includes(tag));
};


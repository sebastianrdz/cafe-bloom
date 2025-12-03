import { Review } from "./types";

export const reviews: Review[] = [
  {
    id: "1",
    author: "María G.",
    rating: 5,
    text: "Probablemente el matcha más rico que he probado. ¡El latte de matcha con fresa es absolutamente increíble!",
    category: "coffee",
  },
  {
    id: "2",
    author: "Carlos R.",
    rating: 5,
    text: "Un ambiente maravilloso, vibra súper relajada y muy acogedor. Lugar perfecto para relajarse.",
    category: "vibe",
  },
  {
    id: "3",
    author: "Ana L.",
    rating: 5,
    text: "Si eres fan del café de calidad, este lugar es definitivamente uno de los mejores. ¡Me encanta el Bloom latte!",
    category: "coffee",
  },
  {
    id: "4",
    author: "Roberto M.",
    rating: 5,
    text: "Internet rápido, perfecto para trabajar o estudiar. Pasé horas aquí y fue genial.",
    category: "workspace",
  },
  {
    id: "5",
    author: "Sofía P.",
    rating: 5,
    text: "El café es delicioso, preparado con mucho cuidado y amor. Realmente puedes notar la diferencia.",
    category: "coffee",
  },
  {
    id: "6",
    author: "Diego F.",
    rating: 5,
    text: "Latte helado de avellana increíblemente rico - ¡no es fácil encontrar esta calidad en otro lugar!",
    category: "coffee",
  },
  {
    id: "7",
    author: "Valentina S.",
    rating: 5,
    text: "Espacio luminoso, plantas y vibra acogedora. Vine y trabajé una hora, relajada por la música.",
    category: "workspace",
  },
  {
    id: "8",
    author: "Luis H.",
    rating: 5,
    text: "No había cafetería con esas vibras en Santa Catarina. ¡Esta es una joya escondida!",
    category: "vibe",
  },
  {
    id: "9",
    author: "Isabella C.",
    rating: 5,
    text: "El affogato es delicioso, y el café en general es muy bueno. ¡Muy recomendado!",
    category: "desserts",
  },
  {
    id: "10",
    author: "Miguel A.",
    rating: 5,
    text: "El servicio fue muy amable y relajante. Son rápidos, que es lo mejor porque a veces no tengo tiempo.",
    category: "service",
  },
  {
    id: "11",
    author: "Camila V.",
    rating: 5,
    text: "Acogedor y relajante, perfecto para disfrutar café o escapar del calor. ¡Me encanta este lugar!",
    category: "vibe",
  },
  {
    id: "12",
    author: "Fernando D.",
    rating: 5,
    text: "El latte de matcha caliente es muy bueno, no muy dulce. Todo está preparado con mucho cuidado.",
    category: "coffee",
  },
  {
    id: "13",
    author: "Lucía B.",
    rating: 5,
    text: "¡La limonada de lavanda es deliciosa! Bebida refrescante perfecta.",
    category: "coffee",
  },
  {
    id: "14",
    author: "Javier N.",
    rating: 5,
    text: "El internet es muy rápido, perfecto para trabajar. Gran ambiente con música relajante.",
    category: "workspace",
  },
  {
    id: "15",
    author: "Patricia O.",
    rating: 5,
    text: "El servicio al cliente es muy amable y relajante. Te hace sentir bienvenido inmediatamente.",
    category: "service",
  },
  {
    id: "16",
    author: "Ricardo T.",
    rating: 5,
    text: "¡El tiramisú es increíble! Todo está preparado con amor.",
    category: "desserts",
  },
  {
    id: "17",
    author: "Gabriela K.",
    rating: 4,
    text: "Gran cafetería en general. Los postres son deliciosos, especialmente el cheesecake.",
    category: "desserts",
  },
  {
    id: "18",
    author: "Andrés W.",
    rating: 5,
    text: "Lugar perfecto para trabajar, estudiar o simplemente pasar el rato. La vibra es inigualable en Santa Catarina.",
    category: "workspace",
  },
];

export const averageRating = 4.8;
export const totalReviews = 72;

// Helper functions
export const getReviewsByCategory = (category: Review["category"]) => {
  return reviews.filter((review) => review.category === category);
};

export const getTopReviews = (count: number = 6) => {
  return reviews.slice(0, count);
};


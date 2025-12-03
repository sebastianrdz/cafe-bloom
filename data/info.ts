import { Hours, Feature, ContactInfo } from "./types";

export const hours: Hours[] = [
  { day: "Lunes", open: "8:00 AM", close: "8:00 PM" },
  { day: "Martes", open: "8:00 AM", close: "8:00 PM" },
  { day: "Miércoles", open: "8:00 AM", close: "8:00 PM" },
  { day: "Jueves", open: "8:00 AM", close: "8:00 PM" },
  { day: "Viernes", open: "8:00 AM", close: "9:00 PM" },
  { day: "Sábado", open: "9:00 AM", close: "9:00 PM" },
  { day: "Domingo", open: "9:00 AM", close: "7:00 PM" },
];

export const features: Feature[] = [
  {
    icon: "coffee",
    title: "Café de Calidad y Bebidas Especiales",
    description:
      "Desde nuestro famoso Bloom Latte hasta el matcha con fresa más rico que probarás, cada bebida está elaborada con cuidado e ingredientes premium.",
  },
  {
    icon: "workspace",
    title: "Espacio de Trabajo Acogedor",
    description:
      "Wi-Fi rápido, muchos enchufes, asientos cómodos y música de fondo relajante. Perfecto para trabajo remoto, estudiar o proyectos creativos.",
  },
  {
    icon: "dessert",
    title: "Postres y Bocadillos",
    description:
      "Delicioso tiramisú, cheesecake de requesón, croissants frescos, galletas artesanales y platos de comida abundantes - todo preparado con amor.",
  },
  {
    icon: "service",
    title: "Servicio Amable",
    description:
      "Nuestro equipo es acogedor, atento y rápido. Escuchamos comentarios y mejoramos continuamente para hacer tu experiencia mejor.",
  },
];

export const contactInfo: ContactInfo = {
  address: "Av. Industrial 123",
  neighborhood: "Zona Industrial",
  city: "Santa Catarina",
  state: "Nuevo León",
  phone: "+52 81 1234 5678",
  email: "hola@cafebloom.mx",
  googleMapsUrl: "https://maps.google.com/?q=Santa+Catarina+Nuevo+Leon+Mexico",
};

export const socialLinks = {
  instagram: "https://instagram.com/cafebloom",
  tiktok: "https://tiktok.com/@cafebloom",
  facebook: "https://facebook.com/cafebloom",
};

export const aboutContent = {
  story: `Cafe Bloom comenzó con una visión simple: traer la cultura del café de especialidad y un ambiente acogedor y cálido a la zona industrial de Santa Catarina. Vimos un vecindario lleno de gente trabajadora que merecía un espacio hermoso para relajarse, trabajar y conectar sobre café de calidad.

Lo que comenzó como un sueño ha florecido en un favorito local - una joya escondida donde lo industrial se encuentra con lo botánico, donde el aroma del café recién preparado se mezcla con el verdor de nuestro espacio lleno de plantas.`,

  values: [
    {
      title: "Calidad y Artesanía",
      description:
        "Somos apasionados del café. Desde obtener granos premium hasta perfeccionar nuestro Bloom Latte insignia, experimentamos y refinamos para traerte lo mejor.",
    },
    {
      title: "Comunidad y Comodidad",
      description:
        "Más que una cafetería, somos un espacio para la comunidad. Ya sea que vengas a trabajar, estudiar, reunirte con amigos o escapar del calor, siempre eres bienvenido.",
    },
    {
      title: "Escuchar y Mejorar",
      description:
        "Valoramos tus comentarios. Cada reseña nos ayuda a crecer y servirte mejor. Estamos comprometidos con la mejora continua y la excelencia.",
    },
  ],

  team: [
    {
      name: "Elena Martínez",
      role: "Fundadora y Barista Principal",
      bio: "Entusiasta del café con más de 10 años de experiencia en café de especialidad.",
    },
    {
      name: "Marco Silva",
      role: "Chef Pastelero",
      bio: "Crea nuestros deliciosos postres con pasión y atención al detalle.",
    },
    {
      name: "Sofía Reyes",
      role: "Gerente",
      bio: "Asegura que cada huésped tenga una experiencia maravillosa en Cafe Bloom.",
    },
  ],
};

export const workspaceFeatures = [
  "Wi-Fi de alta velocidad (100+ Mbps)",
  "Enchufes en cada mesa",
  "Comodidad con aire acondicionado",
  "Música de fondo tranquila y relajante",
  "Asientos cómodos para horas",
  "Luz natural y plantas",
  "Servicio amable y no intrusivo",
];


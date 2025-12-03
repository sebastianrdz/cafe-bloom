"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ReviewCard from "@/components/ReviewCard";
import { reviews, averageRating, totalReviews } from "@/data/reviews";
import { ReviewCategory } from "@/data/types";

const categories: { id: ReviewCategory | "all"; label: string }[] = [
  { id: "all", label: "Todas las Reseñas" },
  { id: "coffee", label: "Café" },
  { id: "desserts", label: "Postres" },
  { id: "vibe", label: "Ambiente" },
  { id: "service", label: "Servicio" },
  { id: "workspace", label: "Espacio de Trabajo" },
];

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    ReviewCategory | "all"
  >("all");

  const filteredReviews =
    selectedCategory === "all"
      ? reviews
      : reviews.filter((review) => review.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-cream/20 to-latte/20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green to-coffee text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-6">
            Lo Que Dicen Nuestros Clientes
          </h1>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-8 h-8 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-4xl font-bold">{averageRating}</span>
          </div>
          <p className="text-xl text-white/90">
            Basado en {totalReviews}+ reseñas de clientes felices en Google
          </p>
        </div>
      </section>

      {/* Reviews Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-green text-white shadow-lg"
                      : "bg-white text-charcoal hover:bg-latte"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* We Listen Section */}
          <div className="mt-16 bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold text-coffee mb-4">
                Escuchamos y Mejoramos
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                Tus comentarios nos importan. Leemos cada reseña y usamos tus
                opiniones para mejorar continuamente nuestro servicio, bebidas y
                ambiente. Aunque estamos orgullosos de nuestra calificación de
                4.8★, sabemos que siempre hay espacio para crecer.
              </p>
              <p className="text-charcoal/70">
                ¿Tienes comentarios? Nos encantaría escucharte. Visítanos y
                cuéntanos cómo podemos hacer tu experiencia aún mejor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-coffee text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Experiméntalo Tú Mismo
          </h2>
          <p className="text-xl text-cream/90 mb-8">
            Únete a los más de 70 clientes felices que han hecho de Cafe Bloom
            su lugar favorito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="inline-block bg-green text-white px-8 py-4 rounded-xl hover:bg-white hover:text-coffee transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Ver Menú
            </a>
            <a
              href="/visit"
              className="inline-block bg-white text-coffee px-8 py-4 rounded-xl hover:bg-green hover:text-white transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Planea tu Visita
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

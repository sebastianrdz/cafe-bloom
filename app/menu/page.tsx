"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import MenuItemCard from "@/components/MenuItemCard";
import { menuItems } from "@/data/menu";
import { MenuCategory } from "@/data/types";

const categories: { id: MenuCategory; label: string }[] = [
  { id: "coffee-espresso", label: "Café & Espresso" },
  { id: "specialty-lattes", label: "Lattes Especiales & Matcha" },
  { id: "non-coffee", label: "Sin Café & Refrescantes" },
  { id: "desserts", label: "Postres & Repostería" },
  { id: "food", label: "Comida" },
];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    MenuCategory | "all"
  >("all");

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-latte/20 to-cream/20">
      {/* Hero */}
      <section className="bg-coffee text-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nuestro Menú"
            subtitle="Café de especialidad, bebidas especiales, deliciosos postres y más"
            centered
          />
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === "all"
                    ? "bg-green text-white shadow-lg"
                    : "bg-white text-charcoal hover:bg-latte"
                }`}
              >
                Todos los Artículos
              </button>
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

          {/* Menu Items by Category */}
          {selectedCategory === "all" ? (
            // Show all categories
            categories.map((category) => {
              const categoryItems = menuItems.filter(
                (item) => item.category === category.id
              );
              if (categoryItems.length === 0) return null;

              return (
                <div key={category.id} className="mb-16">
                  <h2 className="text-3xl font-serif font-bold text-coffee mb-8 pb-4 border-b-2 border-green/30">
                    {category.label}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryItems.map((item) => (
                      <MenuItemCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            // Show filtered category
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          )}

          {/* Note */}
          <div className="mt-16 text-center bg-white rounded-xl p-8 shadow-md">
            <p className="text-charcoal/80 text-lg mb-2">
              <span className="font-semibold text-coffee">Nota:</span> Los
              precios están en Pesos Mexicanos (MXN) y pueden variar.
            </p>
            <p className="text-charcoal/60">
              Todos los artículos están preparados con cuidado usando
              ingredientes premium.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-coffee text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            ¿Listo para Visitarnos?
          </h2>
          <p className="text-xl text-cream/90 mb-8">
            Ven a experimentar nuestro ambiente acogedor y delicioso café en
            persona.
          </p>
          <a
            href="/visit"
            className="inline-block bg-green text-white px-8 py-4 rounded-xl hover:bg-white hover:text-coffee transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Cómo Llegar
          </a>
        </div>
      </section>
    </div>
  );
}

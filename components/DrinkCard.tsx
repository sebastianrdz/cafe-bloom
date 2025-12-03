"use client";

import { MenuItem } from "@/data/types";
import Badge from "./Badge";

interface DrinkCardProps {
  drink: MenuItem;
  className?: string;
}

export default function DrinkCard({ drink, className = "" }: DrinkCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 min-w-[280px] sm:min-w-[320px] ${className}`}
    >
      {/* Placeholder for drink image - using gradient */}
      <div className="w-full h-48 bg-gradient-to-br from-latte via-cream to-pink rounded-xl mb-4 flex items-center justify-center">
        <div className="text-6xl">☕</div>
      </div>

      {/* Tags */}
      {drink.tags && drink.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {drink.tags.map((tag) => (
            <Badge key={tag} tag={tag} />
          ))}
        </div>
      )}

      {/* Name */}
      <h3 className="text-2xl font-serif font-bold text-coffee mb-2">
        {drink.name}
      </h3>

      {/* Description */}
      <p className="text-charcoal/80 leading-relaxed mb-4">
        {drink.description}
      </p>

      {/* Price */}
      {drink.price && (
        <div className="flex justify-between items-center pt-4 border-t border-latte">
          <span className="text-2xl font-bold text-green">{drink.price}</span>
          <span className="text-sm text-charcoal/60">MXN</span>
        </div>
      )}
    </div>
  );
}


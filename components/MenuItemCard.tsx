import { MenuItem } from "@/data/types";
import Badge from "./Badge";

interface MenuItemCardProps {
  item: MenuItem;
  className?: string;
}

export default function MenuItemCard({ item, className = "" }: MenuItemCardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      {/* Tags */}
      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {item.tags.map((tag) => (
            <Badge key={tag} tag={tag} />
          ))}
        </div>
      )}

      {/* Name and Price */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-serif font-semibold text-coffee flex-1">
          {item.name}
        </h3>
        {item.price && (
          <span className="text-lg font-semibold text-green ml-4">
            {item.price}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-charcoal/80 leading-relaxed">{item.description}</p>
    </div>
  );
}


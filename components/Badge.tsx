import { MenuTag } from "@/data/types";

interface BadgeProps {
  tag: MenuTag;
  className?: string;
}

const badgeStyles: Record<MenuTag, string> = {
  "best-seller": "bg-pink/20 text-pink border-pink/30",
  "customer-favorite": "bg-green/20 text-green border-green/30",
  new: "bg-coffee/20 text-coffee border-coffee/30",
  "house-special": "bg-yellow-500/20 text-yellow-700 border-yellow-500/30",
};

const badgeLabels: Record<MenuTag, string> = {
  "best-seller": "Best Seller",
  "customer-favorite": "Customer Favorite",
  new: "New",
  "house-special": "House Special",
};

export default function Badge({ tag, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${badgeStyles[tag]} ${className}`}
    >
      {badgeLabels[tag]}
    </span>
  );
}


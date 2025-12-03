interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-coffee mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg sm:text-xl text-charcoal/80 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}


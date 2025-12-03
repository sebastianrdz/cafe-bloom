import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import DrinkCard from "@/components/DrinkCard";
import ReviewCard from "@/components/ReviewCard";
import { features, contactInfo, workspaceFeatures } from "@/data/info";
import { getFeaturedItems } from "@/data/menu";
import { getTopReviews, averageRating, totalReviews } from "@/data/reviews";

export default function HomePage() {
  const featuredDrinks = getFeaturedItems();
  const topReviews = getTopReviews(6);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-latte via-cream to-white py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-green rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-coffee mb-6 leading-tight">
              Cafe <span className="text-green">Bloom</span>
            </h1>
            <p className="text-xl sm:text-2xl text-charcoal mb-8 leading-relaxed">
              Café de especialidad, vibras acogedoras y Wi-Fi rápido en Santa
              Catarina
            </p>
            <p className="text-lg text-charcoal/80 mb-10 max-w-2xl mx-auto">
              Una joya escondida en la zona industrial donde el café de calidad
              se encuentra con la comodidad. Perfecto para trabajar, estudiar o
              simplemente disfrutar el momento.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/menu"
                className="bg-green text-white px-8 py-4 rounded-xl hover:bg-coffee transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto text-center"
              >
                Ver Menú
              </Link>
              <Link
                href="/visit"
                className="bg-white text-coffee px-8 py-4 rounded-xl hover:bg-latte transition-all duration-300 font-semibold text-lg shadow-md hover:shadow-lg border-2 border-coffee/10 w-full sm:w-auto text-center"
              >
                Planea tu Visita
              </Link>
            </div>

            {/* Rating Badge */}
            <div className="mt-12 inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-2xl">⭐</span>
              <span className="font-bold text-coffee text-lg">
                {averageRating}
              </span>
              <span className="text-charcoal/60">·</span>
              <span className="text-charcoal/80">
                {totalReviews}+ clientes felices
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Why People Love Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Por Qué Nos Aman"
            subtitle="Descubre qué hace de Cafe Bloom un favorito local en Santa Catarina"
            centered
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Signature Drinks Spotlight */}
      <section className="py-20 bg-gradient-to-br from-latte/30 to-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Bebidas Especiales"
            subtitle="Nuestras creaciones más amadas, elaboradas con cuidado e ingredientes premium"
            centered
            className="mb-16"
          />

          {/* Horizontal Scrollable Carousel */}
          <div className="overflow-x-auto pb-8 -mx-4 px-4">
            <div className="flex space-x-6 min-w-max">
              {featuredDrinks.map((drink) => (
                <DrinkCard key={drink.id} drink={drink} />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block bg-coffee text-white px-8 py-3 rounded-xl hover:bg-green transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Ver Menú Completo
            </Link>
          </div>
        </div>
      </section>

      {/* Work & Study Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <SectionHeading
                title="Tu Espacio de Trabajo Perfecto"
                subtitle="Wi-Fi rápido, ambiente acogedor y todo lo que necesitas para ser productivo"
                className="mb-8"
              />

              <div className="space-y-4 mb-8">
                {workspaceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg
                      className="w-6 h-6 text-green flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-charcoal text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-4 border-green pl-6 py-2 italic text-charcoal/80 bg-latte/30 rounded-r-lg">
                "Vine y trabajé una hora, relajada por la música, espacio
                luminoso, plantas... El internet es muy rápido, perfecto para
                trabajar o estudiar."
              </blockquote>
            </div>

            {/* Visual Placeholder */}
            <div className="bg-gradient-to-br from-green/20 to-latte rounded-2xl h-96 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-8xl mb-4">💻</div>
                <p className="text-2xl font-serif font-semibold text-coffee">
                  Espacio de Trabajo Acogedor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-20 bg-gradient-to-br from-cream/30 to-latte/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Lo Que Dicen Nuestros Clientes"
            subtitle="Calificado 4.8★ por más de 70 clientes felices en Google Reviews"
            centered
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {topReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/reviews"
              className="inline-block bg-green text-white px-8 py-3 rounded-xl hover:bg-coffee transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Leer Todas las Reseñas
            </Link>
          </div>
        </div>
      </section>

      {/* Location & Visit CTA */}
      <section className="py-20 bg-coffee text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
                Visítanos en Santa Catarina
              </h2>
              <p className="text-xl text-cream/90 mb-8 leading-relaxed">
                Joya escondida en la zona industrial. No había cafetería con
                estas vibras en Santa Catarina - hasta ahora.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-green flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold">Dirección</p>
                    <p className="text-cream/80">
                      {contactInfo.address}, {contactInfo.neighborhood}
                      <br />
                      {contactInfo.city}, {contactInfo.state}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-green flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold">Horario</p>
                    <p className="text-cream/80">
                      Lun-Jue: 8AM-8PM · Vie: 8AM-9PM
                      <br />
                      Sáb: 9AM-9PM · Dom: 9AM-7PM
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/visit"
                className="inline-block bg-green text-white px-8 py-4 rounded-xl hover:bg-white hover:text-coffee transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Cómo Llegar
              </Link>
            </div>

            {/* Map Placeholder */}
            <div className="bg-latte rounded-2xl h-96 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-8xl mb-4">📍</div>
                <p className="text-2xl font-serif font-semibold text-coffee">
                  Santa Catarina, N.L.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

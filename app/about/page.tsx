import SectionHeading from "@/components/SectionHeading";
import { aboutContent } from "@/data/info";
import { averageRating, totalReviews } from "@/data/reviews";

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-latte via-cream to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-coffee mb-6">
            Acerca de Cafe <span className="text-green">Bloom</span>
          </h1>
          <p className="text-xl text-charcoal/80 leading-relaxed">
            Una joya escondida que trae la cultura del café de especialidad a la
            zona industrial de Santa Catarina
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Nuestra Historia" centered className="mb-12" />
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 leading-relaxed whitespace-pre-line">
              {aboutContent.story}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-green mb-2">
                {averageRating}★
              </div>
              <div className="text-charcoal/70">Calificación Promedio</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green mb-2">
                {totalReviews}+
              </div>
              <div className="text-charcoal/70">Clientes Felices</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green mb-2">100%</div>
              <div className="text-charcoal/70">Hecho con Amor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-latte/20 to-cream/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nuestros Valores"
            subtitle="Lo que nos impulsa cada día"
            centered
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutContent.values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-2xl font-serif font-bold text-coffee mb-4">
                  {value.title}
                </h3>
                <p className="text-charcoal/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Bar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Detrás de la Barra"
            subtitle="Conoce al equipo que hace especial a Cafe Bloom"
            centered
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutContent.team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-latte/30 to-cream/30 rounded-xl p-8 text-center"
              >
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 bg-green/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-coffee mb-1">
                  {member.name}
                </h3>
                <p className="text-green font-semibold mb-3">{member.role}</p>
                <p className="text-charcoal/70 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-coffee text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Ven a Saludar
          </h2>
          <p className="text-xl text-cream/90 mb-8">
            Nos encantaría conocerte y compartir nuestra pasión por el gran
            café.
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
              Visítanos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

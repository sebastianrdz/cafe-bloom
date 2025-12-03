"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { contactInfo, hours, workspaceFeatures } from "@/data/info";

export default function VisitPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("¡Gracias por tu mensaje! Te responderemos pronto.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green to-coffee text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-6">
            Visítanos
          </h1>
          <p className="text-xl text-white/90">
            Encuéntranos en el corazón de la zona industrial de Santa Catarina
          </p>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-coffee mb-6">
                Ubicación
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-green shrink-0 mt-1"
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
                    <p className="font-semibold text-lg text-coffee">
                      Dirección
                    </p>
                    <p className="text-charcoal/80">
                      {contactInfo.address}
                      <br />
                      {contactInfo.neighborhood}
                      <br />
                      {contactInfo.city}, {contactInfo.state}
                    </p>
                  </div>
                </div>

                {contactInfo.phone && (
                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-6 h-6 text-green shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-lg text-coffee">
                        Teléfono
                      </p>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-charcoal/80 hover:text-green transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                )}

                {contactInfo.email && (
                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-6 h-6 text-green shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-lg text-coffee">
                        Correo
                      </p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-charcoal/80 hover:text-green transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a
                href={contactInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green text-white px-8 py-3 rounded-xl hover:bg-coffee transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                Cómo Llegar
              </a>
            </div>

            {/* Hours */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-coffee mb-6">
                Horario
              </h2>
              <div className="bg-gradient-to-br from-latte/30 to-cream/30 rounded-xl p-8">
                <div className="space-y-3">
                  {hours.map((day, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-charcoal/10 last:border-0"
                    >
                      <span className="font-semibold text-coffee">
                        {day.day}
                      </span>
                      <span className="text-charcoal/80">
                        {day.closed ? "Cerrado" : `${day.open} - ${day.close}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-0">
        <div className="w-full h-96 bg-gradient-to-br from-latte to-cream flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl mb-4">🗺️</div>
            <p className="text-2xl font-serif font-semibold text-coffee">
              Mapa Interactivo
            </p>
            <p className="text-charcoal/60 mt-2">
              Haz clic en "Cómo Llegar" arriba para abrir en Google Maps
            </p>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Información Práctica"
            subtitle="Todo lo que necesitas saber antes de tu visita"
            centered
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Workspace Features */}
            <div className="bg-gradient-to-br from-green/10 to-latte/30 rounded-xl p-8">
              <h3 className="text-2xl font-serif font-bold text-coffee mb-6">
                Perfecto para Trabajar
              </h3>
              <ul className="space-y-3">
                {workspaceFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-green shrink-0 mt-0.5"
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
                    <span className="text-charcoal">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Parking & Access */}
            <div className="bg-gradient-to-br from-pink/10 to-cream/30 rounded-xl p-8">
              <h3 className="text-2xl font-serif font-bold text-coffee mb-6">
                Estacionamiento y Acceso
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-green shrink-0 mt-0.5"
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
                  <span className="text-charcoal">
                    Estacionamiento en la calle disponible cerca
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-green shrink-0 mt-0.5"
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
                  <span className="text-charcoal">
                    Entrada accesible para sillas de ruedas
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-green shrink-0 mt-0.5"
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
                  <span className="text-charcoal">
                    Fácil de encontrar en la zona industrial
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-green shrink-0 mt-0.5"
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
                  <span className="text-charcoal">
                    Asientos interiores con aire acondicionado
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-latte/20 to-cream/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Contáctanos"
            subtitle="¿Tienes alguna pregunta? Envíanos un mensaje"
            centered
            className="mb-12"
          />

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-coffee mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-green focus:ring-2 focus:ring-green/20 outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-coffee mb-2"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-green focus:ring-2 focus:ring-green/20 outline-none transition-all"
                  placeholder="tu@correo.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-coffee mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-green focus:ring-2 focus:ring-green/20 outline-none transition-all resize-none"
                  placeholder="Tu mensaje..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green text-white px-8 py-4 rounded-xl hover:bg-coffee transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

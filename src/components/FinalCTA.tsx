import { inputs } from '@/content/inputs';

export default function FinalCTA() {
  return (
    <section className="py-12 md:py-20 px-4 bg-primary-gradient text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-5xl font-bold mb-6 leading-tight">
          ¿Estás listo para liderar tu vida con propósito?
        </h2>

        <p className="text-lg md:text-2xl mb-10 md:mb-12 leading-relaxed" style={{ color: 'var(--secondary)', opacity: 0.9 }}>
          El momento de cambiar no es mañana. El momento de cambiar es ahora.
          Cada día que esperas es un día más de estancamiento.
        </p>

        {/* Primary CTA */}
        <div className="mb-12">
          <a
            href={inputs.plans[0].ctaHref}
            className="inline-block font-bold py-5 px-10 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, var(--tertiary) 0%, var(--tertiary-dark) 100%)',
              color: 'var(--secondary)'
            }}
          >
            {inputs.plans[0].ctaLabel}
          </a>
        </div>

        {/* Closing Message */}
        <div className="border-t pt-8" style={{ borderColor: 'var(--primary)', opacity: 0.3 }}>
          <p className="text-sm" style={{ color: 'var(--secondary)', opacity: 0.6 }}>
            Con el apoyo de <span className="font-semibold" style={{ color: 'var(--tertiary)' }}>Alejandro Valencia</span>
          </p>
          <p className="text-xs mt-2" style={{ color: 'var(--secondary)', opacity: 0.5 }}>
            Coaching & Liderazgo Personalizado • Transformando vidas desde 2018
          </p>
        </div>
      </div>
    </section>
  );
}

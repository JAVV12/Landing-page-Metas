import { inputs } from '@/content/inputs';

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-primary-gradient text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          ¿Estás Listo para Liderar tu Vida con Propósito?
        </h2>

        <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: 'var(--secondary)', opacity: 0.9 }}>
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

        {/* Contact Channels */}
        <div className="mb-12">
          <p className="text-lg mb-8" style={{ color: 'var(--secondary)', opacity: 0.8 }}>
            ¿Prefieres contactarme directamente?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            {inputs.contactChannels.map((channel, index) => (
              <a
                key={index}
                href={channel.ctaHref}
                className="inline-block py-3 px-6 rounded-lg font-medium transition-all duration-300"
                style={{
                  backgroundColor: channel.variant === 'secondary' ? 'var(--tertiary)' : 'var(--secondary)',
                  color: channel.variant === 'secondary' ? 'var(--secondary)' : 'var(--primary)',
                  border: channel.variant !== 'secondary' ? `1px solid var(--tertiary)` : 'none'
                }}
              >
                <div className="font-semibold">{channel.ctaLabel}</div>
                <div className="text-sm" style={{ color: channel.variant === 'secondary' ? 'var(--secondary)' : 'var(--primary)', opacity: 0.7 }}>
                  {channel.value}
                </div>
              </a>
            ))}
          </div>
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

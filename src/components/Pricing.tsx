import { inputs } from '@/content/inputs';

export default function Pricing() {
  const plan = inputs.plans[0]; // Solo hay un plan según planCount: 1

  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
            Una Inversión en tu Futuro Líder
          </h2>
          <p className="text-xl leading-relaxed" style={{ color: 'var(--primary)', opacity: 0.8 }}>
            El precio de no cambiar es mucho más alto que el costo de este programa.
            Esta es tu oportunidad de romper el ciclo.
          </p>
        </div>

        {/* Single Column Pricing */}
        <div className="rounded-2xl shadow-2xl overflow-hidden border-2" style={{ backgroundColor: 'var(--secondary)', borderColor: 'var(--tertiary)' }}>
          {/* Header */}
          <div className="bg-tertiary-gradient text-white p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
            <div className="text-4xl font-bold mb-2">{plan.price}</div>
            <p className="text-sm" style={{ color: 'var(--secondary)', opacity: 0.9 }}>{plan.note}</p>
          </div>

          {/* Benefits */}
          <div className="p-8">
            <ul className="space-y-4 mb-8">
              {plan.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" style={{ color: 'var(--tertiary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="leading-relaxed" style={{ color: 'var(--primary)' }}>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href={plan.ctaHref}
                className="inline-block font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full"
                style={{
                  background: 'linear-gradient(135deg, var(--tertiary) 0%, var(--tertiary-dark) 100%)',
                  color: 'var(--secondary)'
                }}
              >
                {plan.ctaLabel}
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-sm" style={{ color: 'var(--primary)', opacity: 0.7 }}>
            *La Sesión de Claridad Gratuita es obligatoria antes de comenzar.
            Sin compromiso, solo para validar que somos la opción correcta para ti.
          </p>
        </div>
      </div>
    </section>
  );
}

import { inputs } from '@/content/inputs';

export default function Bonuses() {
  if (!inputs.hasBonuses) return null;

  return (
    <section className="py-20 px-4 text-white" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--secondary)' }}>
            Bonos Exclusivos por Tiempo Limitado
          </h2>
          <p className="text-xl leading-relaxed" style={{ color: 'var(--secondary)', opacity: 0.9 }}>
            Para acelerar tu transformación y maximizar los resultados del programa,
            incluye estos recursos adicionales de alto valor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {inputs.bonuses.map((bonus, index) => (
            <div key={index} className="p-8 rounded-lg shadow-lg border-2" style={{ backgroundColor: 'var(--secondary)', borderColor: 'var(--tertiary)', opacity: 0.95 }}>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--primary)' }}>{bonus.title}</h3>
                <div className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>{bonus.value}</div>
              </div>

              <ul className="space-y-3">
                {bonus.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: 'var(--primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-relaxed" style={{ color: 'var(--primary)', opacity: 0.8 }}>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg italic" style={{ color: 'var(--secondary)', opacity: 0.8 }}>
            "Estos bonos equivalen a más de $400 USD en valor. Los incluyo porque
            creo en el poder de los recursos correctos en el momento correcto."
          </p>
        </div>
      </div>
    </section>
  );
}

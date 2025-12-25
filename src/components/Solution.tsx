import { inputs } from '@/content/inputs';

export default function Solution() {
  return (
    <section className="py-20 px-4 bg-solution-gradient">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
            Imagina una Vida Diferente
          </h2>
          <p className="text-xl leading-relaxed" style={{ color: 'var(--primary)', opacity: 0.8 }}>
            Una donde lideras con propósito, tomas decisiones con confianza,
            y finalmente encuentras ese equilibrio que tanto anhelas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {inputs.desires.map((desire, index) => (
            <div key={index} className="p-8 rounded-lg shadow-lg border-l-4 transform hover:scale-105 transition-all duration-300" style={{ backgroundColor: 'var(--secondary)', borderLeftColor: 'var(--tertiary)' }}>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-6" style={{ background: 'linear-gradient(135deg, var(--tertiary) 0%, var(--tertiary-dark) 100%)' }}>
                  <svg className="w-6 h-6" style={{ color: 'var(--secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-lg leading-relaxed" style={{ color: 'var(--primary)' }}>{desire}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg italic" style={{ color: 'var(--primary)', opacity: 0.7 }}>
            "El liderazgo verdadero comienza desde adentro. Cuando transformas tu relación contigo mismo,
            transformas todo lo que tocas."
          </p>
        </div>
      </div>
    </section>
  );
}

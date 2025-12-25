import { inputs } from '@/content/inputs';

export default function Problem() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
            ¿Te Sientes Estancado?
          </h2>
          <p className="text-xl leading-relaxed" style={{ color: 'var(--primary)', opacity: 0.8 }}>
            Conozco esa sensación de frustración profunda. Esa voz interna que te dice que puedes hacer más,
            pero algo te detiene. No estás solo en esto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {inputs.pains.map((pain, index) => (
            <div key={index} className="p-8 rounded-lg shadow-lg border-l-4" style={{ backgroundColor: 'var(--secondary)', borderLeftColor: 'var(--tertiary)' }}>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: 'var(--tertiary)', opacity: 0.1 }}>
                  <svg className="w-4 h-4" style={{ color: 'var(--tertiary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium leading-relaxed" style={{ color: 'var(--primary)' }}>{pain}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg italic" style={{ color: 'var(--primary)', opacity: 0.7 }}>
            "Cada día que pasa sin dirección clara, es energía perdida, oportunidades desaprovechadas,
            y una versión de ti mismo que nunca llega a brillar."
          </p>
        </div>
      </div>
    </section>
  );
}

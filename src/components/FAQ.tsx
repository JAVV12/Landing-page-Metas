import { inputs } from '@/content/inputs';

export default function FAQ() {
  const allQuestions = [...inputs.objections, ...inputs.faq];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
            Preguntas que me Hacen Frecuentemente
          </h2>
          <p className="text-xl leading-relaxed" style={{ color: 'var(--primary)', opacity: 0.8 }}>
            Antes de que me las hagas, aquí tienes las respuestas.
            La transparencia es fundamental para construir confianza.
          </p>
        </div>

        <div className="space-y-6">
          {allQuestions.map((item, index) => (
            <div key={index} className="p-8 rounded-lg shadow-md border-l-4" style={{ backgroundColor: 'var(--secondary)', borderLeftColor: 'var(--tertiary)' }}>
              <h3 className="text-xl font-bold mb-4 flex items-start" style={{ color: 'var(--primary)' }}>
                <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: 'var(--tertiary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {item.q}
              </h3>
              <p className="leading-relaxed pl-9" style={{ color: 'var(--primary)', opacity: 0.8 }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg italic" style={{ color: 'var(--primary)', opacity: 0.7 }}>
            "¿Tienes alguna otra pregunta? La Sesión de Claridad Gratuita es perfecta
            para resolver cualquier duda específica sobre tu situación."
          </p>
        </div>
      </div>
    </section>
  );
}

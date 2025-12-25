import { inputs } from '@/content/inputs';

export default function Modules() {
  if (!inputs.hasModules) return null;

  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
            Tu Camino de Transformación en {inputs.timeframe}
          </h2>
          <p className="text-xl leading-relaxed" style={{ color: 'var(--primary)', opacity: 0.8 }}>
            Un programa diseñado para liberarte paso a paso, construyendo la base sólida
            que necesitas para liderar con autenticidad y propósito.
          </p>
        </div>

        <div className="space-y-6">
          {inputs.modules.map((module, index) => (
            <div key={index} className="p-8 rounded-lg shadow-md border-l-4" style={{ background: 'linear-gradient(90deg, rgba(248, 249, 250, 0.5) 0%, rgba(233, 236, 239, 0.5) 100%)', borderLeftColor: 'var(--tertiary)' }}>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center mr-6 font-bold text-xl" style={{ background: 'linear-gradient(135deg, var(--tertiary) 0%, var(--tertiary-dark) 100%)', color: 'var(--secondary)' }}>
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--primary)' }}>{module}</h3>
                  <div className="w-24 h-1 rounded" style={{ background: 'linear-gradient(90deg, var(--tertiary) 0%, var(--tertiary-dark) 100%)' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p style={{ color: 'var(--primary)', opacity: 0.7 }}>
            Cada módulo se adapta completamente a tus necesidades específicas.
            No hay fórmulas genéricas, solo transformación personalizada.
          </p>
        </div>
      </div>
    </section>
  );
}

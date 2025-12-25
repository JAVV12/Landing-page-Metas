import { inputs } from '@/content/inputs';

export default function Guarantee() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <svg className="w-20 h-20 mx-auto mb-6" style={{ color: 'var(--tertiary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--primary)' }}>
          {inputs.guarantee.title}
        </h2>

        <div className="p-8 rounded-lg shadow-lg border-2" style={{ background: 'linear-gradient(135deg, rgba(248, 249, 250, 0.8) 0%, rgba(233, 236, 239, 0.6) 100%)', borderColor: 'var(--tertiary)' }}>
          <p className="text-xl leading-relaxed mb-6" style={{ color: 'var(--primary)' }}>
            {inputs.guarantee.text}
          </p>

          <div className="text-center">
            <p className="text-lg font-semibold" style={{ color: 'var(--tertiary)' }}>
              Tu transformación está 100% garantizada.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <p style={{ color: 'var(--primary)', opacity: 0.7 }}>
            Esta no es solo una garantía. Es mi compromiso personal contigo y tu crecimiento.
            Si no obtienes resultados, yo tampoco.
          </p>
        </div>
      </div>
    </section>
  );
}

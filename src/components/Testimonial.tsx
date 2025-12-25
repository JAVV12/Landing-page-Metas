import { inputs } from '@/content/inputs';

export default function Testimonial() {
  return (
    <section className="py-20 px-4 bg-primary-gradient text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <svg className="w-16 h-16 mx-auto mb-6" style={{ color: 'var(--tertiary)' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </svg>
        </div>

        <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 italic" style={{ color: 'var(--secondary)' }}>
          "{inputs.testimonialQuote}"
        </blockquote>

        <div className="text-center">
          <p className="text-xl font-semibold" style={{ color: 'var(--tertiary)' }}>{inputs.testimonialAuthor}</p>
        </div>

        <div className="mt-12">
          <p style={{ color: 'var(--secondary)', opacity: 0.8 }}>
            Historias como esta se repiten cada día. Personas que pasan de la confusión
            a la claridad, del estancamiento al movimiento, del miedo a la acción.
          </p>
        </div>
      </div>
    </section>
  );
}

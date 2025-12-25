import { inputs } from '@/content/inputs';

export default function Hero() {
  return (
    <section className="relative bg-primary-gradient text-white py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: 'var(--tertiary)' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: 'var(--tertiary-light)' }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Brand */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2" style={{ color: 'var(--tertiary)' }}>{inputs.brandName}</h2>
          <p className="text-xl font-medium" style={{ color: 'var(--secondary)' }}>{inputs.tagline}</p>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {inputs.h1Promise}
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: 'var(--secondary)', opacity: 0.9 }}>
          {inputs.subPromise}
        </p>

        {/* CTA Button */}
        <div className="mb-12">
          <a
            href={inputs.plans[0].ctaHref}
            className="inline-block font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, var(--tertiary) 0%, var(--tertiary-dark) 100%)',
              color: 'var(--secondary)'
            }}
          >
            {inputs.plans[0].ctaLabel}
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {inputs.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--tertiary)' }}>{stat.value}</div>
              <div style={{ color: 'var(--secondary)', opacity: 0.8 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

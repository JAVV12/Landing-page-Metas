'use client';

import { inputs } from '@/content/inputs';
import { useState, useRef, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLocked, setIsLocked] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  // Lock scroll on mount
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLocked]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      if (progress >= 90 && isLocked) {
        setIsLocked(false);
        setShowControls(true); // Enable native controls after 90%
      }
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="relative bg-primary-gradient text-white py-12 md:py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: 'var(--tertiary)' }}></div>
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: 'var(--tertiary-light)' }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Brand */}
        <div className="mb-6">
          <h2 className="text-base md:text-lg font-semibold mb-2" style={{ color: 'var(--tertiary)' }}>{inputs.brandName}</h2>
          <p className="text-lg md:text-xl font-medium" style={{ color: 'var(--secondary)' }}>{inputs.tagline}</p>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
          {inputs.h1Promise}
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl mb-8 leading-relaxed" style={{ color: 'var(--secondary)', opacity: 0.9 }}>
          {inputs.subPromise}
        </p>

        {/* VSL Video */}
        <div className="mb-12 max-w-3xl mx-auto">
          <div
            className="relative pt-[56.25%] rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 cursor-pointer group"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-cover"
              controls={showControls}
              playsInline
              src="/videos/vsl-compressed.mp4"
              onTimeUpdate={handleTimeUpdate}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              Tu navegador no soporta la reproducción de video.
            </video>

            {/* Custom Play Button Overlay */}
            {!isPlaying && !showControls && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 shadow-lg transform group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
          {isLocked && (
            <p className="text-sm mt-4 text-center text-white/60 animate-pulse">
              Debes ver el video completo para desbloquear el contenido...
            </p>
          )}
        </div>

        {/* CTA Button */}
        <div className={`mb-12 transition-opacity duration-1000 ${isLocked ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
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
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto transition-opacity duration-1000 ${isLocked ? 'opacity-0' : 'opacity-100'}`}>
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

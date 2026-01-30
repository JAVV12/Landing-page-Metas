'use client';

import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  // 16 minutos = 16 * 60 segundos = 960 segundos
  const [timeLeft, setTimeLeft] = useState(16 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  if (timeLeft <= 0) {
    return (
      <div className="bg-red-600 text-white text-center py-2 px-4 font-bold animate-pulse">
        ¡Tiempo agotado!
      </div>
    );
  }

  return (
    <div className="text-white py-4 px-6 shadow-lg" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* Lado izquierdo: Contador */}
        <div className="flex items-center gap-4">
          <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="12,6 12,12 16,14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium" style={{ color: 'var(--secondary)' }}>Tiempo restante:</span>
            <div className="flex items-center gap-1">
              {/* Minutos */}
              <div className="bg-white bg-opacity-20 rounded px-2 py-1 min-w-[40px] text-center">
                <span className="font-bold text-xl" style={{ color: 'var(--primary)' }}>{formatTime(minutes)}</span>
              </div>
              <span className="text-xl font-bold" style={{ color: 'var(--secondary)' }}>:</span>
              {/* Segundos */}
              <div className="bg-white bg-opacity-20 rounded px-2 py-1 min-w-[40px] text-center">
                <span className="font-bold text-xl" style={{ color: 'var(--primary)' }}>{formatTime(seconds)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lado derecho: Logo y texto */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <h2 className="text font-bold mb-1">Adquiere "Logra tus metas"</h2>
            <p className="text-sm opacity-90">¡No pierdas esta oportunidad!</p>
          </div>

          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
            <img
              src="/images/LOGO1.png"
              alt="Logo Autoliderazgo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

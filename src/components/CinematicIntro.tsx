import React, { useEffect, useState } from 'react';

interface CinematicIntroProps {
  onComplete: () => void;
}

const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timings = [
      { delay: 2000, phase: 1 },
      { delay: 4000, phase: 2 },
      { delay: 6000, phase: 3 },
      { delay: 8000, phase: 4 },
      { delay: 10000, phase: 5 },
    ];

    const timeouts = timings.map(({ delay, phase: p }) =>
      setTimeout(() => setPhase(p), delay)
    );

    const finalTimeout = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 12000);

    return () => {
      timeouts.forEach(t => clearTimeout(t));
      clearTimeout(finalTimeout);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black-950 z-50 flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-b from-black-950 via-black-900 to-black-950"></div>
      </div>

      {/* Animated Elements */}
      <div className="relative z-10 text-center">
        {/* Phase 0-1: Glowing Eye */}
        {phase >= 0 && (
          <div
            className={`transition-all duration-1000 ${
              phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 bg-gold-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="/images/cinematic_intro_bg.png"
                alt="Horus Eye"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        )}

        {/* Phase 2: Text Reveal */}
        {phase >= 2 && (
          <div
            className={`transition-all duration-1000 ${
              phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gold-500 mb-4 font-arabic">
              MD1USD
            </h1>
            <p className="text-xl text-gray-400 mb-4">العملة المستقرة المتوافقة مع الشريعة</p>
          </div>
        )}

        {/* Phase 3: Subtitle */}
        {phase >= 3 && (
          <div
            className={`transition-all duration-1000 ${
              phase >= 3 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-arabic">
              الجسر بين الحضارة القديمة والتكنولوجيا الحديثة
            </p>
          </div>
        )}

        {/* Phase 4: Loading Animation */}
        {phase >= 4 && (
          <div
            className={`transition-all duration-1000 mt-8 ${
              phase >= 4 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex justify-center gap-2">
              <div className="w-3 h-3 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-3 h-3 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <p className="text-gray-400 mt-4 text-sm">جاري التحميل...</p>
          </div>
        )}

        {/* Phase 5: Fade Out */}
        {phase >= 5 && (
          <div
            className={`transition-all duration-1000 ${
              phase >= 5 ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <p className="text-gold-500 text-lg">اختر جانبك...</p>
          </div>
        )}
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold-500 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CinematicIntro;

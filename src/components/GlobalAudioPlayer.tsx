import React, { useEffect, useRef, useState } from 'react';

const CONSENT_KEY = 'md1usd_audio_consent'; // 'yes' | 'no'

const GlobalAudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  const track = { name: 'موسيقى الخلفية', src: '/audio/bg_music.mp3' };

  useEffect(() => {
    try {
      const consent = sessionStorage.getItem(CONSENT_KEY);
      if (consent === null) {
        // أول زيارة في هذه الجلسة: اسأل المستخدم مرة واحدة، تماماً كما في mdm1.org
        setShowPrompt(true);
      } else if (consent === 'yes') {
        // كان قد وافق سابقاً في هذه الجلسة؛ الاستمرار في التشغيل هنا مبني على
        // موافقة صريحة سابقة، وليس تشغيلاً تلقائياً بلا إذن.
        audioRef.current?.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    } catch {
      // sessionStorage غير متاح؛ لا نعرض شيئاً ولا نشغل صوتاً تلقائياً
    }
  }, []);

  const accept = () => {
    setShowPrompt(false);
    try { sessionStorage.setItem(CONSENT_KEY, 'yes'); } catch {}
    audioRef.current?.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  };

  const decline = () => {
    setShowPrompt(false);
    try { sessionStorage.setItem(CONSENT_KEY, 'no'); } catch {}
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src={track.src} loop crossOrigin="anonymous" />

      {showPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black-950/90 backdrop-blur-sm px-4">
          <div className="bg-black-800 border border-gold-500/40 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl">
            <div className="text-4xl mb-4">🎵</div>
            <p className="text-white text-lg mb-6">هل تريد تشغيل الموسيقى أثناء تصفح الموقع؟</p>
            <div className="flex gap-3 justify-center">
              <button onClick={accept} className="btn-primary">▶ نعم، شغّل الموسيقى</button>
              <button onClick={decline} className="px-5 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-black-900 transition-colors">تخطّ</button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={toggleMute}
        className={`fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
          isPlaying ? 'bg-gradient-gold text-black-900' : 'bg-black-800 text-gray-400 border border-gray-600'
        }`}
        title={isPlaying ? 'كتم الموسيقى' : 'تشغيل الموسيقى'}
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>
    </>
  );
};

export default GlobalAudioPlayer;

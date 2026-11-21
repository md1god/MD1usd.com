import React, { useEffect, useRef, useState } from 'react';

const CONSENT_KEY = 'md1usd_audio_consent'; // 'yes' | 'no'
const POS_KEY = 'md1usd_audio_pos';         // موضع الأغنية (ثواني) ليكمل بعد الريفريش

const GlobalAudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  const track = { name: 'موسيقى الخلفية', src: '/audio/bg_music.mp3' };

  const wantsMusic = () => {
    try { return sessionStorage.getItem(CONSENT_KEY) === 'yes'; } catch { return false; }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // الحالة الظاهرة على الزر تُشتق من حالة العنصر الفعلية (لا من متغيّر منفصل قد يتأخر)
    const sync = () => setIsPlaying(!audio.paused && !audio.muted);
    ['play', 'playing', 'pause', 'ended', 'volumechange'].forEach(ev => audio.addEventListener(ev, sync));

    // استعادة موضع الأغنية بعد الريفريش
    let startAt = 0;
    try { startAt = parseFloat(sessionStorage.getItem(POS_KEY) || '0') || 0; } catch {}
    let restored = startAt <= 1;
    const restore = () => {
      if (restored) return;
      restored = true;
      const d = audio.duration;
      if (isFinite(d) && d > 0 && startAt < d - 3) { try { audio.currentTime = startAt; } catch {} }
    };
    audio.addEventListener('loadedmetadata', restore);
    if (audio.readyState >= 1) restore();

    const save = () => {
      if (audio.currentTime > 0.5) { try { sessionStorage.setItem(POS_KEY, String(audio.currentTime)); } catch {} }
    };
    let last = 0;
    const onTime = () => { const n = Date.now(); if (n - last > 1000) { last = n; save(); } };
    audio.addEventListener('timeupdate', onTime);
    window.addEventListener('pagehide', save);

    // المتصفح يمنع التشغيل بدون لمسة بعد الريفريش: نحاول فوراً، وإن فشل نكمل عند أول لمسة
    const resume = () => {
      if (!wantsMusic() || (!audio.paused && !audio.muted)) return;
      audio.muted = false;
      audio.play().catch(() => {});
    };
    try {
      const consent = sessionStorage.getItem(CONSENT_KEY);
      if (consent === null) setShowPrompt(true);
      else if (consent === 'yes') resume();
    } catch {}

    const onGesture = (e: Event) => {
      const t = e.target as Element | null;
      if (t && t.closest && t.closest('[data-drag="music"]')) return; // الضغط على زر الصوت نفسه له معالجه
      resume();
    };
    const evs = ['pointerdown', 'keydown', 'touchend'];
    evs.forEach(ev => document.addEventListener(ev, onGesture, { passive: true }));

    return () => {
      ['play', 'playing', 'pause', 'ended', 'volumechange'].forEach(ev => audio.removeEventListener(ev, sync));
      audio.removeEventListener('loadedmetadata', restore);
      audio.removeEventListener('timeupdate', onTime);
      window.removeEventListener('pagehide', save);
      evs.forEach(ev => document.removeEventListener(ev, onGesture));
    };
  }, []);

  const accept = () => {
    setShowPrompt(false);
    try { sessionStorage.setItem(CONSENT_KEY, 'yes'); } catch {}
    const audio = audioRef.current;
    if (audio) { audio.muted = false; audio.play().catch(() => {}); }
  };

  const decline = () => {
    setShowPrompt(false);
    try { sessionStorage.setItem(CONSENT_KEY, 'no'); } catch {}
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused && !audio.muted) {
      try { sessionStorage.setItem(CONSENT_KEY, 'no'); } catch {}
      audio.pause();
    } else {
      try { sessionStorage.setItem(CONSENT_KEY, 'yes'); } catch {}
      audio.muted = false;
      audio.play().catch(() => {});
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
        data-orb
        data-drag="music"
        onClick={toggleMute}
        className={`fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full font-bold flex items-center justify-center ${
          isPlaying ? 'playing text-gold-500' : 'text-gray-400'
        }`}
        title={isPlaying ? 'كتم الموسيقى' : 'تشغيل الموسيقى'}
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>
    </>
  );
};

export default GlobalAudioPlayer;

import React, { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'md1usd_audio_playing';
const TRACK_KEY = 'md1usd_audio_track';

const GlobalAudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const tracks = [
    { name: 'موسيقى غامضة', src: '/audio/mysterious_intro.mp3' },
    { name: 'الموسيقى الأصلية', src: '/audio/bg_music.mp3' },
  ];

  // يسمح لأي صفحة (مثل الرئيسية) بتشغيل/إيقاف الموسيقى عبر حدث مخصص،
  // دون الحاجة لعنصر <audio> منفصل يسبب تضارباً في التشغيل.
  useEffect(() => {
    const handler = () => toggleAudio();
    window.addEventListener('md1usd:toggleAudio', handler);
    return () => window.removeEventListener('md1usd:toggleAudio', handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    const savedTrack = localStorage.getItem(TRACK_KEY);
    if (savedTrack !== null) {
      const idx = parseInt(savedTrack, 10);
      if (!Number.isNaN(idx) && idx >= 0 && idx < tracks.length) {
        setCurrentTrack(idx);
      }
    }

    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState === 'true') {
      // لا يمكن تشغيل الصوت تلقائياً في أغلب المتصفحات بدون تفاعل المستخدم.
      // بدلاً من محاولة .play() الفاشلة بصمت، نعرض تلميحاً لطيفاً يطلب نقرة واحدة لاستئناف التشغيل.
      setShowHint(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const playCurrent = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        setShowHint(false);
        localStorage.setItem(STORAGE_KEY, 'true');
      })
      .catch(() => {
        setIsPlaying(false);
      });
  };

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      localStorage.setItem(STORAGE_KEY, 'false');
    } else {
      playCurrent();
    }
  };

  const switchTrack = () => {
    const nextTrack = (currentTrack + 1) % tracks.length;
    setCurrentTrack(nextTrack);
    localStorage.setItem(TRACK_KEY, String(nextTrack));

    const audio = audioRef.current;
    if (!audio) return;

    const wasPlaying = isPlaying;
    audio.src = tracks[nextTrack].src;
    audio.load();
    if (wasPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    }
  };

  return (
    <>
      <audio ref={audioRef} src={tracks[currentTrack].src} loop crossOrigin="anonymous" />

      {showHint && (
        <button
          onClick={playCurrent}
          className="fixed bottom-28 right-8 z-40 bg-gold-500 text-black-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg animate-pulse"
        >
          🎵 اضغط لاستئناف الموسيقى
        </button>
      )}

      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-2">
        <button
          onClick={switchTrack}
          className="w-12 h-12 rounded-full bg-gradient-gold text-black-900 font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          title={`تبديل الموسيقى: ${tracks[currentTrack].name}`}
        >
          🎶
        </button>

        <button
          onClick={toggleAudio}
          className={`w-12 h-12 rounded-full font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
            isPlaying ? 'bg-gradient-blue text-white' : 'bg-gradient-red text-white'
          }`}
          title={isPlaying ? 'إيقاف الموسيقى' : 'تشغيل الموسيقى'}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>

        <div className="bg-black-800 text-gold-500 px-3 py-2 rounded-lg text-xs text-center whitespace-nowrap border border-gold-500/30">
          {tracks[currentTrack].name}
        </div>
      </div>
    </>
  );
};

export default GlobalAudioPlayer;

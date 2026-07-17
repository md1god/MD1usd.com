import React, { useState } from 'react';

interface MediaVideoProps {
  /** المسار المتوقع للفيديو، مثال: /videos/pages/security/audit_walkthrough.webm */
  src: string;
  /** وصف الفيديو (يظهر في الـ placeholder وكعنوان) */
  title: string;
  className?: string;
  aspect?: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  controls?: boolean;
}

/**
 * مكون فيديو (webm) يعرض عنصر <video> إن كان الملف موجوداً،
 * وإن لم يُرفع بعد يعرض إطاراً يوضح اسم ملف الفيديو المطلوب.
 */
const MediaVideo: React.FC<MediaVideoProps> = ({
  src,
  title,
  className = '',
  aspect = 'aspect-video',
  poster,
  autoPlay = false,
  loop = true,
  controls = true,
}) => {
  const [failed, setFailed] = useState(false);
  const filename = src.split('/').pop();

  if (failed) {
    return (
      <div
        className={`${aspect} ${className} w-full flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-blue-400/40 bg-black-900/60 text-center p-4`}
        title={`الفيديو المطلوب: ${filename}`}
      >
        <span className="text-3xl opacity-60">🎬</span>
        <span className="text-blue-300/80 text-sm font-semibold">{title}</span>
        <span className="text-gray-500 text-xs font-mono break-all">{filename}</span>
      </div>
    );
  }

  return (
    <video
      className={`${aspect} ${className} w-full rounded-xl border border-gold-500/30 bg-black-950`}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      muted={autoPlay}
      playsInline
      poster={poster}
      onError={() => setFailed(true)}
      preload="metadata"
    >
      <source src={src} type="video/webm" />
      متصفحك لا يدعم عرض الفيديو.
    </video>
  );
};

export default MediaVideo;

import React, { useState } from 'react';

interface MediaImageProps {
  /** المسار المتوقع للصورة، مثال: /images/pages/tokenomics/distribution_chart.png */
  src: string;
  /** نص بديل + عنوان placeholder */
  alt: string;
  /** كلاسات إضافية */
  className?: string;
  /** نسبة العرض للطول لصندوق الـ placeholder، مثال 'aspect-video' أو 'aspect-square' */
  aspect?: string;
}

/**
 * مكون صورة يعرض الصورة الحقيقية إن وُجدت في المسار،
 * وإن كانت الصورة غير مرفوعة بعد (404) يعرض إطاراً ذهبياً أنيقاً
 * يوضح اسم الملف المطلوب رفعه بدل أن يظهر أيقونة "صورة مكسورة".
 */
const MediaImage: React.FC<MediaImageProps> = ({ src, alt, className = '', aspect = 'aspect-video' }) => {
  const [failed, setFailed] = useState(false);
  const filename = src.split('/').pop();

  if (failed) {
    return (
      <div
        className={`${aspect} ${className} w-full flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gold-500/40 bg-black-900/60 text-center p-4`}
        title={`الصورة المطلوبة: ${filename}`}
      >
        <span className="text-3xl opacity-60">🖼️</span>
        <span className="text-gold-500/80 text-sm font-semibold">{alt}</span>
        <span className="text-gray-500 text-xs font-mono break-all">{filename}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${aspect} ${className} w-full object-cover rounded-xl border border-gold-500/30`}
    />
  );
};

export default MediaImage;

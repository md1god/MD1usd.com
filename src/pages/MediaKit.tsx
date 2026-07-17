import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const MediaKit: React.FC = () => {
  const assets = [
    { name: 'الشعار الرسمي (MD1USD)', file: '/images/md1usd_logo.png' },
    { name: 'رمز عين حورس الذهبي', file: '/images/horus_eye_gold.png' },
    { name: 'عملة MD1USD الذهبية (تصور ثلاثي الأبعاد)', file: '/images/gold_coin_md1usd.png' },
    { name: 'خلفية سينمائية بهوية المشروع', file: '/images/hero_background.png' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="🎨" title="مجموعة الوسائط الإعلامية" subtitle="شعارات وأصول بصرية رسمية للاستخدام في التغطية الإعلامية أو الشراكات" />

      <section className="py-20 bg-black-900">
        <div className="container-custom grid md:grid-cols-2 gap-6">
          {assets.map((a, i) => (
            <div key={i} className="p-6 bg-black-800 rounded-xl border border-gold-500/20">
              <MediaImage src={a.file} alt={a.name} aspect="aspect-square" className="mb-4" />
              <div className="flex items-center justify-between">
                <span className="text-white font-bold">{a.name}</span>
                <a href={a.file} download className="text-gold-500 text-sm hover:underline">تحميل</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-black-950 text-center">
        <div className="container-custom">
          <p className="text-gray-400 max-w-xl mx-auto">
            لأي استفسار إعلامي أو طلب أصول إضافية، يرجى التواصل عبر صفحة الاتصال.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MediaKit;

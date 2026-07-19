import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const MediaKit: React.FC = () => {
  const assets = [
    { name: 'الشعار الرسمي (MD1USD × عين حورس)', file: '/images/md1usd_logo.png' },
    { name: 'شعار M1D — نسخة كلاسيكية', file: '/images/logo_v1_block.png' },
    { name: 'شعار M1D — خط مذهّب', file: '/images/logo_v2_script.png' },
    { name: 'شعار M1D — خط مذهّب موسّع', file: '/images/logo_v3_script_wide.png' },
    { name: 'شعار M1D — نسخة الألماس', file: '/images/logo_v4_diamond.png' },
    { name: 'شعار M1D — نسخة نظيفة', file: '/images/logo_v5_clean.png' },
    { name: 'شعار M1D — نسخة مسطّحة', file: '/images/logo_v6_flat.png' },
    { name: 'رمز عين حورس الذهبي', file: '/images/horus_eye_gold.png' },
    { name: 'عملة MD1USD الذهبية (تصور ثلاثي الأبعاد)', file: '/images/gold_coin_md1usd.jpg' },
    { name: 'شرعية المشروع', file: '/images/hero_background.jpeg' },
    { name: 'عملة MDm1 الذهبية الكاملة', file: '/images/md1_coin_pharaonic.jpg' },
    { name: 'شعار الجعران المجنح', file: '/images/md1_scarab_emblem.jpg' },
    { name: 'خاتم عين حورس', file: '/images/md1_eye_of_horus.jpg' },
    { name: 'عملة القيم العالمية (متعددة اللغات)', file: '/images/md1_coin_global.jpg' },
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

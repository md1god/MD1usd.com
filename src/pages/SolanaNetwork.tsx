import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const SolanaNetwork: React.FC = () => {
  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="🟢" title="MD1USD على Solana" subtitle="سرعة فائقة ورسوم شبه معدومة على واحدة من أسرع شبكات البلوكتشين" />

      <section className="py-20 bg-black-900">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-black-800 rounded-xl border border-gold-500/30">
            <h2 className="text-2xl font-bold text-gold-500 mb-4">لماذا Solana؟</h2>
            <p className="text-gray-300 leading-relaxed">
              تتيح Solana آلاف المعاملات في الثانية برسوم تقارب الصفر، ما يجعلها مثالية لحالات استخدام مثل المدفوعات المصغرة والتطبيقات عالية التردد.
            </p>
          </div>
          <div className="p-8 bg-black-800 rounded-xl border border-blue-500/30">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">حالة النشر الحالية</h2>
            <p className="text-gray-300 leading-relaxed">
              تم نشر برنامج MD1USD على الشبكة الرئيسية (Mainnet-Beta) لـ Solana بنجاح، وهو حالياً في مرحلة ما قبل التفعيل: لم يتم بعد استدعاء تعليمة "Initialize" التي تُفعّل العملة رسمياً للتداول على هذه الشبكة.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-950">
        <div className="container-custom">
          <div className="p-8 bg-black-800 rounded-xl border border-gold-500/20 max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-3">معرّف البرنامج (Program ID)</h3>
            <code className="text-gold-500 text-sm break-all">3fN2LAt47q3oSgNq4dJZt4DuAh5yJw6mb6B3dRYJGHa8</code>
            <p className="text-gray-500 text-xs mt-4">منشور على Mainnet-Beta — قيد التحضير للتفعيل الكامل</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">هوية شبكة Solana</h2>
          <MediaImage
            src="/images/pages/solana/solana_network_branding.png"
            alt="هوية بصرية لشبكة Solana ضمن مشروع MD1USD"
            className="max-w-xl mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default SolanaNetwork;

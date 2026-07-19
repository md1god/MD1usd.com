import React from 'react';
import PageHero from '../components/media/PageHero';

const Partnerships: React.FC = () => {
  const types = [
    { icon: '🏦', title: 'شراكات DeFi', desc: 'تكامل مع منصات إقراض وتبادل لامركزية لتوسيع استخدامات MD1USD.' },
    { icon: '🏪', title: 'شراكات تجارية', desc: 'قبول MD1USD كوسيلة دفع في المتاجر والخدمات الرقمية والفعلية.' },
    { icon: '🎓', title: 'شراكات تعليمية', desc: 'التعاون مع منصات ومحتوى تعليمي لنشر الوعي حول DeFi والتمويل الإسلامي الرقمي.' },
    { icon: '🔐', title: 'شراكات أمنية', desc: 'التعاون مع شركات تدقيق أمني لمراجعات مستقلة إضافية.' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="🤝" title="الشراكات" subtitle="نبني شبكة شراكات تخدم رؤية MD1USD طويلة المدى" />

      <section className="py-20 bg-black-900">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          {types.map((t, i) => (
            <div key={i} className="p-8 bg-black-800 rounded-xl border border-gold-500/30">
              <div className="text-4xl mb-4">{t.icon}</div>
              <h3 className="text-xl font-bold text-gold-500 mb-3">{t.title}</h3>
              <p className="text-gray-300">{t.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 mt-10">
          مهتم بشراكة؟ تواصل معنا عبر صفحة الاتصال مع تفاصيل مقترحك.
        </p>
      </section>
    </div>
  );
};

export default Partnerships;

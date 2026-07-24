import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const BlockchainBasics: React.FC = () => {
  const topics = [
    { title: 'ما هو البلوكتشين؟', body: 'سجل رقمي موزع يحتفظ بنسخ متطابقة منه آلاف الأجهزة حول العالم، بحيث يستحيل عملياً التلاعب بالبيانات المسجلة فيه بعد تأكيدها.' },
    { title: 'العقود الذكية', body: 'برامج تُنفَّذ تلقائياً على البلوكتشين متى تحققت شروط معينة، دون الحاجة لوسيط بشري، وهي الأساس التقني لعملة MD1USD.' },
    { title: 'المحافظ والمفاتيح', body: 'المحفظة الرقمية تحتوي على مفتاح خاص يمنحك ملكية كاملة لأصولك؛ من يملك المفتاح يملك الأموال، لذا حمايته أمر بالغ الأهمية.' },
    { title: 'الغاز ورسوم المعاملات', body: 'كل معاملة على البلوكتشين تتطلب رسوماً صغيرة (Gas) لتعويض من يقوم بمعالجة وتأكيد المعاملة على الشبكة.' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="⛓️" title="أساسيات البلوكتشين" subtitle="فهم التقنية التي يقوم عليها MD1USD من الصفر" />


      <section className="py-20 bg-black-950">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((t, i) => (
              <div key={i} className="p-6 bg-black-800 rounded-xl border border-gold-500/20">
                <h3 className="text-xl font-bold text-gold-500 mb-3">{t.title}</h3>
                <p className="text-gray-300 leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">مخطط: كيف تتم المعاملة</h2>
          <MediaImage
            src="/images/blockchain_spirit_new.jpg"
            alt="تصور رمزي لشبكة البلوكتشين اللامركزية"
            aspect="aspect-[21/9]"
          />
        </div>
      </section>
    </div>
  );
};

export default BlockchainBasics;

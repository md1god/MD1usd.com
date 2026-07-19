import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const CaseStudies: React.FC = () => {
  const cases = [
    { title: 'استخدام MD1USD في التحويلات عبر الحدود', body: 'كيف يمكن لمستخدم في بلد ما تحويل قيمة مستقرة لمستلم في بلد آخر بتكلفة أقل بكثير من التحويل البنكي التقليدي وبسرعة أعلى بكثير.' },
    { title: 'MDMEscrow: ضمان آمن للتعاملات بين طرفين', body: 'دراسة حالة توضح كيف تتيح منصة MDMEscrow اللامركزية إتمام صفقات P2P بثقة، دون الحاجة لوسيط مركزي يحتفظ بالأموال.' },
    { title: 'الاحتفاظ بالقيمة في بيئة اقتصادية متقلبة', body: 'كيف يستخدم بعض المستخدمين MD1USD كوسيلة للحفاظ على القوة الشرائية لمدخراتهم بدلاً من عملات محلية شديدة التقلب.' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="📊" title="دراسات حالة" subtitle="أمثلة عملية على كيفية استخدام MD1USD في الحياة الواقعية" />

      <section className="py-20 bg-black-900">
        <div className="container-custom space-y-10">
          {cases.map((c, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-8 items-center bg-black-800 rounded-xl border border-gold-500/20 p-8">
              <div>
                <h3 className="text-2xl font-bold text-gold-500 mb-4">{c.title}</h3>
                <p className="text-gray-300 leading-relaxed">{c.body}</p>
              </div>
              <MediaImage
                src={`/images/pages/case-studies/case_study_${i + 1}.jpg`}
                alt={`رسم توضيحي لدراسة الحالة: ${c.title}`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const SmartContracts: React.FC = () => {
  const features = [
    { title: 'التنفيذ التلقائي', body: 'العقد الذكي ينفذ الشروط المبرمجة فيه تلقائياً بمجرد استيفائها، دون تدخل بشري أو صلاحية اعتراض.' },
    { title: 'عدم قابلية التعديل', body: 'بمجرد نشر عقد MD1USD على البلوكتشين، لا يمكن تعديل قواعده الأساسية، وهو ما يمنح المستخدمين ثقة بأن القواعد لن تتغير لاحقاً.' },
    { title: 'قابلية التحقق العلني', body: 'أي شخص يملك المعرفة التقنية يمكنه قراءة كود العقد بالكامل والتحقق من أنه يفعل بالضبط ما يُعلن عنه دون أي مفاجآت خفية.' },
    { title: 'التدقيق الأمني', body: 'تمت مراجعة عقد MD1USD عبر عدة أدوات ذكاء اصطناعي متخصصة في تحليل الثغرات الأمنية (منهجية تدقيق متقاطع) قبل اعتماده للنشر.' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="📄" title="العقود الذكية" subtitle="العمود الفقري التقني لعملة MD1USD المستقرة" />

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-6 bg-black-800 rounded-xl border border-gold-500/20">
                <h3 className="text-xl font-bold text-gold-500 mb-3">{f.title}</h3>
                <p className="text-gray-300 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">مخطط منطق عقد MD1USD</h2>
          <MediaImage
            src="/images/pages/smart-contracts/contract_logic_flowchart.png"
            alt="مخطط منطق عمل عقد MD1USD الذكي"
            aspect="aspect-[21/9]"
          />
        </div>
      </section>
    </div>
  );
};

export default SmartContracts;

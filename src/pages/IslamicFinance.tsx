import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const IslamicFinance: React.FC = () => {
  const principles = [
    { icon: '🚫', title: 'تحريم الربا', body: 'MD1USD لا يقدم عائداً ثابتاً مضموناً مقابل الإيداع، وبالتالي يتجنب شبهة الربا التي تقع فيها كثير من منتجات التمويل التقليدي والعملات المستقرة الخوارزمية القائمة على الفائدة.' },
    { icon: '🔍', title: 'تجنّب الغرر', body: 'الغموض في المعاملة المالية (الغرر) محرّم شرعاً. لهذا فإن آلية عمل MD1USD -الضمان الكامل 1:1، الشفافية الكاملة، العقد مفتوح المصدر- مصممة لإزالة أي غموض حول كيفية عمل العملة وما يدعمها.' },
    { icon: '📊', title: 'الشفافية الكاملة', body: 'كل عملية سك وحرق للعملة مسجلة على البلوكتشين للتحقق العلني، بما يتوافق مع مبدأ الإفصاح الكامل في المعاملات المالية الإسلامية.' },
    { icon: '⚖️', title: 'التوازن والعدل', body: 'عدم وجود صلاحيات إدارية مركزية يعني أن لا جهة، بما فيها فريق المشروع، يمكنها التلاعب بالعرض أو تجميد أموال المستخدمين، بما يحقق العدل بين جميع الأطراف.' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="☪️" title="التمويل الإسلامي و MD1USD" subtitle="كيف صُمم MD1USD ليكون متوافقاً مع أحكام الشريعة الإسلامية في المعاملات المالية" />

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((p, i) => (
              <div key={i} className="p-8 bg-black-800 rounded-xl border border-gold-500/30">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-2xl font-bold text-gold-500 mb-3">{p.title}</h3>
                <p className="text-gray-300 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">مبادئ التمويل الإسلامي في تصميم MD1USD</h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            هذه مبادئ عامة نستند إليها في التصميم، وليست شهادة اعتماد رسمية صادرة عن هيئة شرعية معتمدة.
          </p>
          <MediaImage
            src="/images/pages/islamic-finance/islamic_finance_principles.png"
            alt="مبادئ التمويل الإسلامي المعتمدة في تصميم MD1USD"
            aspect="aspect-[16/9]"
            className="max-w-3xl mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default IslamicFinance;

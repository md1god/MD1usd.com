import React from 'react';
import PageHero from '../components/media/PageHero';

const DeveloperResources: React.FC = () => {
  const resources = [
    { icon: '📄', title: 'الورقة البيضاء الكاملة', desc: 'الوثيقة التقنية الشاملة لفهم بنية النظام بالكامل.', link: '/whitepaper' },
    { icon: '🔐', title: 'صفحة الأمان', desc: 'تفاصيل التدقيق الأمني وعناوين العقود الرسمية.', link: '/security' },
    { icon: '⚙️', title: 'توثيق API', desc: 'مرجع تقني للتفاعل المباشر مع العقود الذكية.', link: '/developers/api' },
    { icon: '📖', title: 'القاموس المصطلحي', desc: 'شرح المصطلحات التقنية المستخدمة في المشروع.', link: '/learn/glossary' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="🛠️" title="موارد المطورين" subtitle="كل ما يحتاجه المطور للبدء في العمل مع MD1USD" />

      <section className="py-20 bg-black-900">
        <div className="container-custom grid md:grid-cols-2 gap-6">
          {resources.map((r, i) => (
            <a key={i} href={r.link} className="p-6 bg-black-800 rounded-xl border border-gold-500/30 hover:border-gold-500 transition-all block">
              <div className="text-3xl mb-3">{r.icon}</div>
              <h3 className="text-xl font-bold text-gold-500 mb-2">{r.title}</h3>
              <p className="text-gray-300 text-sm">{r.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DeveloperResources;

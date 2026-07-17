import React from 'react';
import PageHero from '../components/media/PageHero';

const Careers: React.FC = () => {
  const roles = [
    { title: 'مطور Solidity / عقود ذكية', type: 'عن بعد', desc: 'خبرة في تطوير ومراجعة عقود ذكية على شبكات EVM.' },
    { title: 'مصمم واجهات UI/UX', type: 'عن بعد', desc: 'تصميم تجارب مستخدم واضحة للمنتجات المالية اللامركزية.' },
    { title: 'مدير مجتمع', type: 'عن بعد', desc: 'إدارة قنوات التواصل المجتمعي والتفاعل اليومي مع المستخدمين.' },
    { title: 'كاتب محتوى تقني (عربي/إنجليزي)', type: 'عن بعد', desc: 'كتابة محتوى تعليمي وتسويقي دقيق حول DeFi والعملات المستقرة.' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="💼" title="الوظائف" subtitle="انضم إلى فريق يبني مستقبل العملات المستقرة المتوافقة شرعياً" />

      <section className="py-20 bg-black-900">
        <div className="container-custom max-w-3xl mx-auto space-y-4">
          {roles.map((r, i) => (
            <div key={i} className="p-6 bg-black-800 rounded-xl border border-gold-500/20 flex justify-between items-start gap-4 flex-wrap">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{r.title}</h3>
                <p className="text-gray-400 text-sm">{r.desc}</p>
              </div>
              <span className="text-gold-500 text-sm font-bold shrink-0 bg-gold-500/10 px-3 py-1 rounded-full">{r.type}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 mt-10">
          مهتم بالانضمام؟ أرسل سيرتك الذاتية عبر صفحة الاتصال مع ذكر الوظيفة المطلوبة.
        </p>
      </section>
    </div>
  );
};

export default Careers;

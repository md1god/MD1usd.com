import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const Ambassadors: React.FC = () => {
  const perks = [
    { icon: '🎓', title: 'محتوى تعليمي حصري', body: 'وصول مبكر إلى المواد التعليمية والتحديثات التقنية قبل نشرها للعامة.' },
    { icon: '🏅', title: 'شارة رسمية', body: 'شارة سفير معتمدة تُظهر مساهمتك في المجتمع عبر جميع القنوات الرسمية.' },
    { icon: '🗳️', title: 'صوت في القرارات', body: 'مشاركة مباشرة في نقاشات مبكرة حول اتجاه المشروع قبل طرحها للتصويت العام.' },
    { icon: '🎁', title: 'مكافآت مستقبلية', body: 'أولوية في أي برامج مكافآت أو توزيعات تخص المساهمين الفاعلين في المجتمع.' },
  ];

  const responsibilities = [
    'نشر محتوى توعوي دقيق وصادق عن MD1USD في مجتمعك المحلي أو اللغوي.',
    'الرد على الأسئلة الشائعة ومساعدة القادمين الجدد على فهم المشروع.',
    'الإبلاغ عن أي محاولات احتيال أو انتحال صفة تستخدم اسم MD1USD.',
    'تقديم ملاحظات بنّاءة لتحسين تجربة المستخدم والمحتوى.',
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="🌟" title="برنامج السفراء" subtitle="انضم إلى فريق يمثل MD1USD في مجتمعه ولغته حول العالم" />

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">مزايا السفراء</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {perks.map((p, i) => (
              <div key={i} className="p-6 bg-black-800 rounded-xl border border-gold-500/30">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="text-xl font-bold text-gold-500 mb-2">{p.title}</h3>
                <p className="text-gray-300">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-950">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">مسؤوليات السفير</h2>
          <ul className="space-y-3">
            {responsibilities.map((r, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <span className="text-gold-500">✓</span> {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">سفراء من مختلف الدول</h2>
          <MediaImage
            src="/images/pages/ambassadors/ambassadors_group_photo.png"
            alt="صورة تجمع سفراء MD1USD من دول مختلفة"
            aspect="aspect-[21/9]"
          />
        </div>
      </section>
    </div>
  );
};

export default Ambassadors;

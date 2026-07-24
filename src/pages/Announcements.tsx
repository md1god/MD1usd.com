import React from 'react';
import PageHero from '../components/media/PageHero';

const Announcements: React.FC = () => {
  const items = [
    { title: 'إعلان رسمي: الشفافية الكاملة أساس المشروع', body: 'نلتزم بالإفصاح عن كل ما يخص العقود والاحتياطي والقرارات المهمة عبر قنواتنا الرسمية، تماشياً مع فلسفة MD1USD القائمة على الوضوح في كل شيء.' },
    { title: 'حوكمة MDM1 على خارطة الطريق', body: 'نعمل على تجهيز آلية التصويت اللامركزي عبر توكن MDM1 لتمكين المجتمع من المشاركة الفعلية في القرارات — تابع التفاصيل في صفحة خارطة الطريق.' },
    { title: 'دعوة للمساهمة في المحتوى التعليمي', body: 'ندعو أعضاء المجتمع للمساهمة بمقترحات لتحسين وتوسيع المحتوى التعليمي على الموقع.' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="📢" title="الإعلانات الرسمية" subtitle="كل إعلان مهم يخص مشروع MD1USD يُنشر هنا أولاً" />

      <section className="py-20 bg-black-900">
        <div className="container-custom max-w-3xl mx-auto space-y-6">
          {items.map((a, i) => (
            <div key={i} className="p-8 bg-black-800 rounded-xl border-r-4 border-gold-500">
              <h3 className="text-xl font-bold text-gold-500 mb-3">{a.title}</h3>
              <p className="text-gray-300 leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Announcements;

import React from 'react';
import PageHero from '../components/media/PageHero';

const BugBounty: React.FC = () => {
  const tiers = [
    { severity: 'حرجة', color: 'text-red-400 border-red-500', desc: 'ثغرات تهدد سلامة الأموال أو تسمح بتعطيل العقد بالكامل.' },
    { severity: 'عالية', color: 'text-gold-500 border-gold-500', desc: 'ثغرات تؤثر على وظيفة أساسية دون التأثير المباشر على الأموال.' },
    { severity: 'متوسطة', color: 'text-blue-400 border-blue-500', desc: 'مشاكل منطقية أو أمنية أقل خطورة لكنها تستحق الإصلاح.' },
    { severity: 'منخفضة', color: 'text-gray-400 border-gray-500', desc: 'ملاحظات تحسينية أو مشاكل بسيطة في تجربة الاستخدام.' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="🐛" title="برنامج مكافآت الثغرات" subtitle="ساعدنا في الحفاظ على أمان MD1USD وكن جزءاً من فريق الحماية" />

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tiers.map((t, i) => (
              <div key={i} className={`p-6 bg-black-800 rounded-xl border-2 ${t.color}`}>
                <h3 className={`text-xl font-bold mb-3 ${t.color.split(' ')[0]}`}>{t.severity}</h3>
                <p className="text-gray-300 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto p-8 bg-black-800 rounded-xl border border-gold-500/30">
            <h3 className="text-2xl font-bold text-gold-500 mb-4">كيفية الإبلاغ</h3>
            <ol className="space-y-3 text-gray-300 list-decimal list-inside">
              <li>وثّق الثغرة بوضوح مع خطوات إعادة إنتاجها.</li>
              <li>لا تنشر تفاصيل الثغرة علناً قبل إصلاحها.</li>
              <li>أرسل تقريرك عبر صفحة الاتصال أو GitHub Issues الخاص بالمشروع.</li>
              <li>سيتم التواصل معك للتحقق من البلاغ وتحديد المكافأة المناسبة.</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BugBounty;

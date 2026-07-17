import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const SecurityBestPractices: React.FC = () => {
  const practices = [
    { icon: '🔑', title: 'احمِ عبارة الاسترداد', body: 'لا تكتبها رقمياً أبداً (لا صور، لا ملاحظات، لا بريد إلكتروني). اكتبها على ورق واحفظها في مكان آمن فعلياً.' },
    { icon: '🕵️', title: 'احذر التصيد الاحتيالي', body: 'لن يطلب منك أي فريق دعم رسمي عبارة الاسترداد أو المفتاح الخاص أبداً تحت أي ظرف.' },
    { icon: '🔗', title: 'تحقق من الروابط', body: 'اكتب عنوان الموقع يدوياً أو استخدم الإشارات المرجعية بدل الضغط على روابط من رسائل غير موثوقة.' },
    { icon: '💻', title: 'حدّث برامجك', body: 'حافظ على تحديث متصفحك ومحفظتك ونظام تشغيلك للحصول على آخر تصحيحات الأمان.' },
    { icon: '🧊', title: 'فكّر في المحفظة الباردة', body: 'للمبالغ الكبيرة، استخدم محفظة أجهزة (Hardware Wallet) مثل Ledger أو Trezor غير متصلة بالإنترنت بشكل دائم.' },
    { icon: '🔍', title: 'تحقق من العقود قبل الموافقة', body: 'قبل الموافقة على أي عقد ذكي (Approve)، تحقق من صلاحياته؛ بعض العقود الخبيثة تطلب صلاحية غير محدودة على أموالك.' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="🔒" title="أفضل ممارسات الأمان" subtitle="عادات بسيطة تحمي أموالك الرقمية من أشيع طرق الاحتيال" />

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {practices.map((p, i) => (
              <div key={i} className="p-6 bg-black-800 rounded-xl border border-gold-500/30">
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3 className="text-xl font-bold text-gold-500 mb-3">{p.title}</h3>
                <p className="text-gray-300 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">قائمة تحقق سريعة قبل كل معاملة</h2>
          <MediaImage
            src="/images/pages/security-best-practices/pre_transaction_checklist.png"
            alt="قائمة تحقق مصورة قبل إجراء أي معاملة رقمية"
            aspect="aspect-[4/3]"
            className="max-w-xl mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default SecurityBestPractices;

import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const WalletGuide: React.FC = () => {
  const steps = [
    { step: '1', title: 'تثبيت المحفظة', body: 'قم بتثبيت MetaMask من المتجر الرسمي فقط (metamask.io) على متصفحك أو هاتفك.' },
    { step: '2', title: 'إنشاء محفظة جديدة', body: 'اتبع خطوات الإنشاء واحفظ عبارة الاسترداد (12-24 كلمة) في مكان آمن غير متصل بالإنترنت.' },
    { step: '3', title: 'إضافة شبكة Polygon أو BNB', body: 'أضف تفاصيل الشبكة التي تريد استخدام MD1USD عليها من إعدادات الشبكات في المحفظة.' },
    { step: '4', title: 'إضافة عملة MD1USD', body: 'استخدم عنوان العقد الرسمي (انظر صفحة الأمان) لإضافة رمز MD1USD إلى قائمة العملات في محفظتك.' },
    { step: '5', title: 'التحقق قبل كل معاملة', body: 'راجع دائماً العنوان والمبلغ قبل تأكيد أي معاملة، فمعاملات البلوكتشين لا يمكن التراجع عنها.' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="👛" title="دليل المحافظ" subtitle="خطوات عملية لإعداد محفظتك واستخدام MD1USD بأمان" />

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-6">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-6 p-6 bg-black-800 rounded-xl border border-gold-500/20">
                <span className="text-3xl font-bold text-gold-500 shrink-0">{s.step}</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-gray-300">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-black-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">بيانات إضافة العملة يدوياً</h2>
          <div className="max-w-3xl mx-auto grid gap-4">
            <div className="p-6 bg-black-800 rounded-xl border border-gold-500/20">
              <h3 className="text-gold-500 font-bold mb-3">الرمز (Symbol)</h3>
              <code className="text-gray-300 bg-black-950 px-3 py-2 rounded-lg text-sm">MD1USD</code>
            </div>
            <p className="text-gray-500 text-sm text-center">
              استخدم عنوان العقد الصحيح لشبكتك من <a href="/security" className="text-blue-400 hover:underline">صفحة الأمان</a> عند إضافة الرمز — معظم المحافظ مثل MetaMask تكتشف باقي التفاصيل (مثل عدد الخانات العشرية) تلقائياً بمجرد لصق عنوان العقد.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WalletGuide;

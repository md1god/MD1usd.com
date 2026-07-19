import React from 'react';
import PageHero from '../components/media/PageHero';

const Troubleshooting: React.FC = () => {
  const issues = [
    { problem: 'لا أرى رمز MD1USD في محفظتي', solution: 'تأكد من إضافة الرمز يدوياً باستخدام عنوان العقد الرسمي الموجود في صفحة الأمان، وتأكد من اختيار الشبكة الصحيحة (Ethereum/Polygon/BNB).' },
    { problem: 'المعاملة عالقة أو بطيئة', solution: 'قد يكون السبب ازدحام الشبكة أو رسوم غاز منخفضة جداً. حاول زيادة رسوم الغاز قليلاً من إعدادات المحفظة أو انتظر حتى ينخفض الازدحام.' },
    { problem: 'فشل تحويل رفض من الشبكة', solution: 'تحقق من أن لديك رصيداً كافياً من عملة الغاز الأساسية للشبكة (مثل MATIC على Polygon أو BNB على BNB Chain) لتغطية رسوم المعاملة.' },
    { problem: 'الموقع لا يفتح أو يظهر شاشة بيضاء', solution: 'جرب تحديث الصفحة (Hard Refresh) أو مسح ذاكرة التخزين المؤقت للمتصفح. إذا استمرت المشكلة تواصل مع الدعم الفني.' },
    { problem: 'لا أستطيع تشغيل الموسيقى في الموقع', solution: 'بعض المتصفحات تمنع التشغيل التلقائي للصوت؛ اضغط على زر التشغيل العائم في أسفل الشاشة لبدء الموسيقى يدوياً.' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="🔧" title="استكشاف الأخطاء وإصلاحها" subtitle="حلول سريعة لأكثر المشاكل التقنية شيوعاً" />

      <section className="py-20 bg-black-900">
        <div className="container-custom max-w-3xl mx-auto space-y-6">
          {issues.map((it, i) => (
            <div key={i} className="p-6 bg-black-800 rounded-xl border border-gold-500/20">
              <h3 className="text-lg font-bold text-red-400 mb-2">⚠ {it.problem}</h3>
              <p className="text-gray-300"><span className="text-blue-400 font-bold">الحل: </span>{it.solution}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Troubleshooting;

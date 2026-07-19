import React, { useState } from 'react';
import PageHero from '../components/media/PageHero';

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    { q: 'ما هو MD1USD؟', a: 'عملة مستقرة (Stablecoin) مضمونة بالكامل بأصول حقيقية بنسبة 1:1، مفتوحة المصدر وشفافة بالكامل، ومنشورة على عدة شبكات بلوكتشين.' },
    { q: 'كيف أعرف أن العملة مضمونة فعلاً؟', a: 'كل عملية سك للعملة مرتبطة بإيداع احتياطي مطابق يمكن التحقق منه مباشرة على مستكشفات البلوكتشين العامة، فلا حاجة للثقة العمياء.' },
    { q: 'هل يمكن لفريق المشروع تجميد أموالي؟', a: 'لا. العقد الذكي لا يحتوي على أي صلاحيات إدارية وتم التنازل عن ملكيته بشكل نهائي، بحيث لا يمكن لأي جهة التحكم في أموال المستخدمين.' },
    { q: 'ما الشبكات التي تدعم MD1USD؟', a: 'العملة نشطة بالكامل على أربع شبكات: Ethereum وPolygon وBNB Chain وSolana.' },
    { q: 'كيف أضيف MD1USD لمحفظتي؟', a: 'استخدم عنوان العقد الرسمي الموجود في صفحة الأمان لإضافة الرمز يدوياً في محفظتك، راجع دليل المحافظ للتفاصيل خطوة بخطوة.' },
    { q: 'هل هناك رسوم على تحويل MD1USD؟', a: 'الرسوم تعتمد على الشبكة المستخدمة (رسوم الغاز)، والعقد نفسه لا يفرض رسوماً إضافية على التحويل.' },
    { q: 'ماذا لو اكتشفت ثغرة أمنية؟', a: 'يرجى الإبلاغ فوراً عبر صفحة Bug Bounty المخصصة، وسيتم التعامل مع البلاغ بجدية وسرية تامة.' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="❓" title="الأسئلة الشائعة" subtitle="إجابات واضحة عن أكثر الأسئلة تكراراً حول MD1USD" />

      <section className="py-20 bg-black-900">
        <div className="container-custom max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-black-800 rounded-xl border border-gold-500/20 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-right p-5 flex justify-between items-center gap-4"
              >
                <span className="text-white font-bold">{f.q}</span>
                <span className="text-gold-500 text-xl shrink-0">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-gray-300 leading-relaxed">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;

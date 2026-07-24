import React, { useState } from 'react';
import PageHero from '../components/media/PageHero';

const GlossaryTerms: React.FC = () => {
  const [search, setSearch] = useState('');

  const terms = [
    { term: 'Stablecoin (عملة مستقرة)', def: 'عملة رقمية مصممة للحفاظ على قيمة ثابتة، عادة مربوطة بعملة تقليدية مثل الدولار.' },
    { term: 'Blockchain (بلوكتشين)', def: 'سجل رقمي موزع وغير قابل للتعديل يُسجل فيه كل المعاملات بشكل دائم وشفاف.' },
    { term: 'Smart Contract (عقد ذكي)', def: 'برنامج مبرمج ينفذ تلقائياً على البلوكتشين عند تحقق شروط معينة.' },
    { term: 'Wallet (محفظة)', def: 'أداة رقمية (تطبيق أو جهاز) تتيح لك تخزين وإدارة مفاتيحك الخاصة والتفاعل مع البلوكتشين.' },
    { term: 'Gas Fee (رسوم الغاز)', def: 'رسوم صغيرة تُدفع لمعالجة وتأكيد المعاملات على شبكة البلوكتشين.' },
    { term: 'DEX (منصة تبادل لامركزية)', def: 'منصة تتيح تبادل العملات الرقمية مباشرة بين المستخدمين دون وسيط مركزي.' },
    { term: 'Liquidity Pool (تجمع سيولة)', def: 'مجموعة من الأموال المودعة في عقد ذكي تُستخدم لتمكين التبادل الفوري بين عملتين.' },
    { term: 'Mint (سك)', def: 'عملية إصدار وحدات جديدة من عملة رقمية، تتم في MD1USD فقط مقابل إيداع ضمان مطابق.' },
    { term: 'Burn (حرق)', def: 'عملية إتلاف وحدات من عملة رقمية بشكل دائم، تحدث في MD1USD عند استرداد الضمان.' },
    { term: 'Ownership Renounced (تنازل عن الملكية)', def: 'التخلي النهائي عن أي صلاحية إدارية على العقد الذكي، بحيث لا يمكن لأحد تعديله لاحقاً.' },
    { term: 'Audit (تدقيق)', def: 'عملية مراجعة فنية للعقد الذكي للتحقق من خلوه من الثغرات الأمنية.' },
    { term: 'Governance Token (توكن حوكمة)', def: 'رمز رقمي (مثل MDM1) يمنح حامله حق المشاركة في قرارات المشروع.' },
  ];

  const filtered = terms.filter(
    (t) => t.term.toLowerCase().includes(search.toLowerCase()) || t.def.includes(search)
  );

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="📖" title="القاموس المصطلحي" subtitle="مصطلحات البلوكتشين والعملات المستقرة مبسّطة" />

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto mb-10">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث عن مصطلح..."
              className="w-full px-4 py-3 rounded-lg bg-black-800 border border-gold-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {filtered.map((t, i) => (
              <div key={i} className="p-5 bg-black-800 rounded-lg border border-gold-500/20">
                <h3 className="text-lg font-bold text-gold-500 mb-2">{t.term}</h3>
                <p className="text-gray-300 text-sm">{t.def}</p>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="text-gray-500 col-span-2 text-center">لا توجد نتائج مطابقة</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlossaryTerms;

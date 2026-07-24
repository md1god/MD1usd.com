import React from 'react';
import PageHero from '../components/media/PageHero';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'إجمالي العرض', value: 'بلا حد أقصى (Mint عند الإيداع)' },
    { label: 'نسبة الضمان', value: '100%' },
    { label: 'الشبكات النشطة', value: '4 شبكات نشطة' },
    { label: 'حالة العقد', value: 'ملكية متنازل عنها' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="📊" title="لوحة التحكم" subtitle="نظرة عامة على أهم مؤشرات MD1USD (بيانات ثابتة توضيحية حالياً)" />

      <section className="py-20 bg-black-900">
        <div className="container-custom grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="p-6 bg-black-800 rounded-xl border border-gold-500/30 text-center">
              <p className="text-gray-400 text-sm mb-2">{s.label}</p>
              <p className="text-2xl font-bold text-gold-500">{s.value}</p>
            </div>
          ))}
        </div>
        <div className="max-w-2xl mx-auto p-6 bg-black-800 rounded-xl border border-blue-500/20 text-center">
          <p className="text-gray-300 text-sm">
            ملاحظة تقنية: هذه اللوحة تعرض حالياً بيانات ثابتة توضيحية. لعرض بيانات حية (سعر، سيولة، حجم تداول)
            يلزم ربطها مستقبلاً بواجهة برمجية خارجية مثل DexScreener API.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

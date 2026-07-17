import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const Tokenomics: React.FC = () => {
  const distribution = [
    { label: 'للمجتمع', pct: '40%', color: 'bg-gold-500' },
    { label: 'للفريق', pct: '30%', color: 'bg-blue-500' },
    { label: 'للشراكات', pct: '20%', color: 'bg-red-500' },
    { label: 'للاحتياطي', pct: '10%', color: 'bg-gray-500' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="📈" title="التوكنوميكس" subtitle="نظرة كاملة على عرض العملة، توزيعها، ونموذج الضمان الداعم" />

      <section className="py-20 bg-black-900">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-black-900 rounded-xl border border-gold-500/30">
            <h2 className="text-2xl font-bold text-gold-500 mb-4">إجمالي العرض</h2>
            <p className="text-4xl font-bold mb-4 text-white">1,000,000,000</p>
            <p className="text-gray-400">مليار وحدة MD1USD كحد أقصى للعرض المخطط له</p>
          </div>
          <div className="p-8 bg-black-900 rounded-xl border border-blue-500/30">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">التوزيع</h2>
            <div className="space-y-3">
              {distribution.map((d, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>{d.label}</span>
                    <span>{d.pct}</span>
                  </div>
                  <div className="w-full bg-black-950 rounded-full h-2">
                    <div className={`${d.color} h-2 rounded-full`} style={{ width: d.pct }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">آلية السك والحرق</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="p-6 bg-black-800 rounded-xl border border-gold-500/20">
              <h3 className="text-xl font-bold text-gold-500 mb-3">السك (Mint)</h3>
              <p className="text-gray-300">تُصدر وحدات جديدة من MD1USD فقط عند إيداع ضمان مطابق (USDC أو LUSD) بنسبة 1:1، لا يمكن سك عملة بدون ضمان حقيقي مقابلها.</p>
            </div>
            <div className="p-6 bg-black-800 rounded-xl border border-gold-500/20">
              <h3 className="text-xl font-bold text-blue-400 mb-3">الحرق (Burn)</h3>
              <p className="text-gray-300">عند استرداد المستخدم لضمانه، تُحرق الوحدة المقابلة من MD1USD بشكل دائم، بما يحافظ على توازن العرض مقابل الاحتياطي.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">مخطط توزيع التوكن</h2>
          <MediaImage
            src="/images/mysterious_token.png"
            alt="تصور رمزي لعملة MD1USD"
            className="max-w-xl mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default Tokenomics;

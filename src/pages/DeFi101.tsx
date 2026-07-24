import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const DeFi101: React.FC = () => {
  const concepts = [
    { title: 'ما هو DeFi؟', body: 'التمويل اللامركزي (Decentralized Finance) هو منظومة من التطبيقات المالية المبنية على البلوكتشين، تتيح الإقراض، الاقتراض، التبادل، والادخار دون الحاجة لبنك أو وسيط تقليدي.' },
    { title: 'العملات المستقرة (Stablecoins)', body: 'عملات رقمية مصممة لتحافظ على قيمة ثابتة، غالباً مربوطة بالدولار الأمريكي، عبر ضمانات حقيقية (مثل MD1USD) أو آليات خوارزمية.' },
    { title: 'منصات التبادل اللامركزية (DEX)', body: 'مثل Uniswap و QuickSwap، تتيح تبادل العملات مباشرة بين المستخدمين عبر عقود ذكية دون وسيط مركزي يحتفظ بأموالك.' },
    { title: 'مزودو السيولة (Liquidity Providers)', body: 'أفراد يودعون أزواجاً من العملات في تجمعات سيولة (Liquidity Pools) لتمكين التبادل، مقابل حصة من رسوم التداول.' },
    { title: 'المحافظ الذاتية (Self-Custody)', body: 'في DeFi أنت تمتلك مفاتيحك الخاصة بالكامل عبر محفظة مثل MetaMask، بخلاف المنصات المركزية التي تحتفظ بأموالك نيابة عنك.' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="📚" title="مقدمة إلى DeFi" subtitle="فهم أساسيات التمويل اللامركزي قبل أن تبدأ رحلتك مع MD1USD" />


      <section className="py-20 bg-black-950">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">المفاهيم الأساسية</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {concepts.map((c, i) => (
              <div key={i} className="p-6 bg-black-800 rounded-xl border border-gold-500/20">
                <h3 className="text-xl font-bold text-gold-500 mb-3">{c.title}</h3>
                <p className="text-gray-300 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">DeFi مقابل التمويل التقليدي</h2>
          <MediaImage
            src="/images/pages/defi101/defi_vs_traditional_finance.png"
            alt="مقارنة بين DeFi والتمويل التقليدي"
            aspect="aspect-[21/9]"
          />
        </div>
      </section>
    </div>
  );
};

export default DeFi101;

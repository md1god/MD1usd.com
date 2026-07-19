import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const Roadmap: React.FC = () => {
  const phases = [
    {
      quarter: 'Q3 2024',
      title: 'الإطلاق',
      status: 'مكتمل',
      items: ['✓ إطلاق العملة على Ethereum و Polygon', '✓ إضافة سيولة على QuickSwap و Uniswap', '✓ إدراج على DexScreener و CoinMarketCap'],
    },
    {
      quarter: 'Q4 2024',
      title: 'التوسع',
      status: 'مكتمل',
      items: ['✓ نشر العقد على BNB Chain', '✓ نشر البرنامج على Solana (Mainnet)', '✓ بناء منصة MDMEscrow للضمان اللامركزي'],
    },
    {
      quarter: 'Q1 2025',
      title: 'التكامل',
      status: 'قيد التنفيذ',
      items: ['تكامل مع تطبيقات DeFi إضافية', 'دعم محافظ جديدة', 'تحسينات أداء مستمرة'],
    },
    {
      quarter: 'Q2 2025',
      title: 'المجتمع والحوكمة',
      status: 'قادم',
      items: ['تفعيل حوكمة MDM1 اللامركزية', 'برنامج السفراء الرسمي', 'توسع المحتوى التعليمي متعدد اللغات'],
    },
    {
      quarter: 'لاحقاً',
      title: 'النمو العالمي',
      status: 'مخطط له',
      items: ['شراكات مع منصات تبادل مركزية', 'توسع الاحتياطيات وأصول الضمان', 'إعلان توزيع (Airdrop) توكن MDM1'],
    },
  ];

  const statusColor: Record<string, string> = {
    'مكتمل': 'text-blue-400 border-blue-500',
    'قيد التنفيذ': 'text-gold-500 border-gold-500',
    'قادم': 'text-gray-400 border-gray-500',
    'مخطط له': 'text-gray-500 border-gray-700',
  };

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="🗺️" title="خارطة الطريق" subtitle="خطتنا للنمو والتطور، مرحلة بعد مرحلة، بشفافية كاملة عن ما تم إنجازه وما لم يُنجز بعد" />

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {phases.map((phase, i) => (
              <div key={i} className="p-6 rounded-xl bg-black-800 border-l-4 border-gold-500 flex flex-col">
                <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-bold border mb-4 ${statusColor[phase.status]}`}>
                  {phase.status}
                </span>
                <h3 className="text-2xl font-bold text-gold-500 mb-1">{phase.quarter}</h3>
                <h4 className="text-xl font-semibold text-white mb-4">{phase.title}</h4>
                <ul className="space-y-2 text-gray-300 text-sm flex-1">
                  {phase.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">الخط الزمني المرئي</h2>
          <MediaImage
            src="/images/pages/roadmap/timeline_infographic.png"
            alt="مخطط زمني لخارطة طريق MD1USD"
            aspect="aspect-[21/9]"
          />
        </div>
      </section>
    </div>
  );
};

export default Roadmap;

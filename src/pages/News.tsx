import React from 'react';
import PageHero from '../components/media/PageHero';

const News: React.FC = () => {
  const news = [
    { title: 'إدراج MD1USD على DexScreener و CoinMarketCap', date: 'مكتمل', tag: 'إنجاز' },
    { title: 'نشر برنامج MD1USD على شبكة Solana (Mainnet-Beta)', date: 'مكتمل', tag: 'إنجاز' },
    { title: 'إطلاق منصة MDMEscrow للضمان اللامركزي', date: 'مكتمل', tag: 'إنجاز' },
    { title: 'مراجعة شاملة للموقع ومحتواه', date: 'يوليو 2026', tag: 'إنجاز' },
  ];

  const tagColor: Record<string, string> = { 'إنجاز': 'bg-blue-500/20 text-blue-400', 'قادم': 'bg-gold-500/20 text-gold-400' };

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="📰" title="الأخبار" subtitle="آخر مستجدات مشروع MD1USD خطوة بخطوة" />

      <section className="py-20 bg-black-900">
        <div className="container-custom max-w-3xl mx-auto space-y-4">
          {news.map((n, i) => (
            <div key={i} className="p-6 bg-black-800 rounded-xl border border-gold-500/20 flex items-center justify-between gap-4 flex-wrap">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${tagColor[n.tag]}`}>{n.tag}</span>
                <h3 className="text-lg font-bold text-white">{n.title}</h3>
              </div>
              <span className="text-gray-500 text-sm shrink-0">{n.date}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;

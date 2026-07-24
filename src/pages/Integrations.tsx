import React from 'react';
import PageHero from '../components/media/PageHero';

const Integrations: React.FC = () => {
  const integrations = [
    { name: 'QuickSwap V3', type: 'منصة تبادل لامركزية (Polygon)', status: 'نشط' },
    { name: 'Uniswap V2', type: 'منصة تبادل لامركزية (Ethereum)', status: 'نشط' },
    { name: 'DexScreener', type: 'منصة تتبع الأسعار والسيولة', status: 'نشط' },
    { name: 'CoinMarketCap', type: 'منصة بيانات السوق', status: 'نشط' },
    { name: 'MDMEscrow', type: 'منصة ضمان P2P لامركزية', status: 'نشط' },
    { name: 'MetaMask / Trust Wallet / Ledger', type: 'محافظ متوافقة', status: 'نشط' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="🔗" title="التكاملات" subtitle="المنصات والأدوات التي يتكامل معها MD1USD حالياً" />

      <section className="py-20 bg-black-900">
        <div className="container-custom max-w-3xl mx-auto space-y-4">
          {integrations.map((it, i) => (
            <div key={i} className="p-6 bg-black-800 rounded-xl border border-gold-500/20 flex justify-between items-center gap-4 flex-wrap">
              <div>
                <h3 className="text-lg font-bold text-white">{it.name}</h3>
                <p className="text-gray-400 text-sm">{it.type}</p>
              </div>
              <span className="text-blue-400 text-sm font-bold bg-blue-500/10 px-3 py-1 rounded-full shrink-0">✓ {it.status}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Integrations;

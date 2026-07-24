import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const EthereumNetwork: React.FC = () => {
  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="Ξ" title="MD1USD على Ethereum" subtitle="النشر الأول والأكثر لامركزية وأماناً لعملة MD1USD" />

      <section className="py-20 bg-black-900">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-black-800 rounded-xl border border-gold-500/30">
            <h2 className="text-2xl font-bold text-gold-500 mb-4">لماذا Ethereum؟</h2>
            <p className="text-gray-300 leading-relaxed">
              Ethereum هي الشبكة الأكثر لامركزية وأماناً واستقراراً في عالم العقود الذكية، وتحظى بأكبر قاعدة مطورين ومنصات DeFi، مما يجعلها الخيار الطبيعي لإطلاق عملة مستقرة موثوقة.
            </p>
          </div>
          <div className="p-8 bg-black-800 rounded-xl border border-blue-500/30">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">الضمان الداعم</h2>
            <p className="text-gray-300 leading-relaxed">
              على شبكة Ethereum، يتم دعم كل وحدة MD1USD بعملة LUSD المستقرة كاحتياطي بنسبة تغطية 100%، ما يوفر ضماناً موثوقاً ومستقلاً عن أي جهة مركزية واحدة.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-950">
        <div className="container-custom">
          <div className="p-8 bg-black-800 rounded-xl border border-gold-500/20 max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-3">عنوان العقد على Ethereum / Polygon</h3>
            <code className="text-gold-500 text-sm break-all">0x6bd6A380903Ae072A764A929C34779824c068BB1</code>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">شعار شبكة Ethereum ضمن هوية MD1USD</h2>
          <MediaImage
            src="/images/pages/ethereum/ethereum_network_branding.png"
            alt="هوية بصرية لشبكة Ethereum ضمن مشروع MD1USD"
            className="max-w-xl mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default EthereumNetwork;

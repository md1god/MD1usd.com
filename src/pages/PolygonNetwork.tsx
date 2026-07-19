import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const PolygonNetwork: React.FC = () => {
  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="🟣" title="MD1USD على Polygon" subtitle="سرعة عالية ورسوم منخفضة جداً لتداول يومي عملي" />

      <section className="py-20 bg-black-900">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-black-800 rounded-xl border border-gold-500/30">
            <h2 className="text-2xl font-bold text-gold-500 mb-4">لماذا Polygon؟</h2>
            <p className="text-gray-300 leading-relaxed">
              توفر Polygon رسوم معاملات أقل بكثير من Ethereum مع سرعة تأكيد أعلى، مما يجعلها مثالية للاستخدام اليومي لعملة MD1USD في المدفوعات والتحويلات الصغيرة والمتكررة.
            </p>
          </div>
          <div className="p-8 bg-black-800 rounded-xl border border-blue-500/30">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">الضمان الداعم</h2>
            <p className="text-gray-300 leading-relaxed">
              على Polygon، MD1USD مدعوم بعملة USDC كاحتياطي بنسبة 100%، وتتوفر سيولة مباشرة على منصة QuickSwap V3 اللامركزية.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-950">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-black-800 rounded-xl border border-gold-500/20 text-center">
              <h3 className="text-lg font-bold text-white mb-2">عقد MD1USD</h3>
              <code className="text-gold-500 text-xs break-all">0x6bd6A380903Ae072A764A929C34779824c068BB1</code>
            </div>
            <div className="p-6 bg-black-800 rounded-xl border border-gold-500/20 text-center">
              <h3 className="text-lg font-bold text-white mb-2">توكن حوكمة MDM1</h3>
              <code className="text-gold-500 text-xs break-all">0x0a4E17e4F9c179a310069711069c346CFCf12c3f</code>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">هوية شبكة Polygon</h2>
          <MediaImage
            src="/images/pages/polygon/polygon_network_branding.png"
            alt="هوية بصرية لشبكة Polygon ضمن مشروع MD1USD"
            className="max-w-xl mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default PolygonNetwork;

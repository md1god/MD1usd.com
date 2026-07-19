import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const BNBNetwork: React.FC = () => {
  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="🟡" title="MD1USD على BNB Chain" subtitle="وصول واسع لأكبر قاعدة مستخدمين في آسيا وحول العالم" />

      <section className="py-20 bg-black-900">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-black-800 rounded-xl border border-gold-500/30">
            <h2 className="text-2xl font-bold text-gold-500 mb-4">لماذا BNB Chain؟</h2>
            <p className="text-gray-300 leading-relaxed">
              تتميز BNB Chain برسوم معاملات منخفضة جداً وسرعة تنفيذ عالية، إلى جانب قاعدة مستخدمين ضخمة عبر منصة Binance، ما يمنح MD1USD انتشاراً واسعاً وسيولة إضافية.
            </p>
          </div>
          <div className="p-8 bg-black-800 rounded-xl border border-blue-500/30">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">التوافق الكامل</h2>
            <p className="text-gray-300 leading-relaxed">
              العقد على BNB Chain متوافق مع معيار BEP-20، ما يجعله سهل الإضافة والاستخدام في أي محفظة أو منصة تدعم شبكات متوافقة مع Ethereum Virtual Machine (EVM).
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-950">
        <div className="container-custom">
          <div className="p-8 bg-black-800 rounded-xl border border-gold-500/20 max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-3">عنوان العقد على BNB Chain</h3>
            <code className="text-gold-500 text-sm break-all">0xDe6b3FEe06A5570e51f171c3afFCfD7f7c6d4787</code>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">هوية شبكة BNB Chain</h2>
          <MediaImage
            src="/images/pages/bnb/bnb_network_branding.png"
            alt="هوية بصرية لشبكة BNB Chain ضمن مشروع MD1USD"
            className="max-w-xl mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default BNBNetwork;

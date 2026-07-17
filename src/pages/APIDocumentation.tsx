import React from 'react';
import PageHero from '../components/media/PageHero';

const APIDocumentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="⚙️" title="توثيق API" subtitle="مرجع تقني للمطورين الراغبين في التكامل مع بيانات MD1USD" />

      <section className="py-20 bg-black-900">
        <div className="container-custom max-w-3xl mx-auto space-y-8">
          <div className="p-6 bg-black-800 rounded-xl border border-gold-500/20">
            <h3 className="text-xl font-bold text-gold-500 mb-3">عناوين العقود (للاستخدام المباشر)</h3>
            <p className="text-gray-300 mb-4">
              يمكن للمطورين التفاعل مباشرة مع عقود MD1USD الذكية على البلوكتشين باستخدام أي مكتبة قياسية مثل ethers.js أو web3.js، عبر عنوان العقد ومعيار ERC-20 / BEP-20 القياسي.
            </p>
            <div className="space-y-2">
              <code className="block text-gold-500 text-xs bg-black-950 p-3 rounded-lg border border-gold-500/10 break-all">
                Ethereum/Polygon: 0x6bd6A380903Ae072A764A929C34779824c068BB1
              </code>
              <code className="block text-gold-500 text-xs bg-black-950 p-3 rounded-lg border border-gold-500/10 break-all">
                BNB Chain: 0xDe6b3FEe06A5570e51f171c3afFCfD7f7c6d4787
              </code>
            </div>
          </div>

          <div className="p-6 bg-black-800 rounded-xl border border-gold-500/20">
            <h3 className="text-xl font-bold text-gold-500 mb-3">بيانات السوق الحية</h3>
            <p className="text-gray-300">
              للحصول على بيانات السعر والسيولة الحية لـ MD1USD، يمكن استخدام واجهات برمجة التطبيقات العامة لمنصات مثل DexScreener، والتي تعرض بيانات مباشرة من تجمعات السيولة على السلسلة.
            </p>
          </div>

          <div className="p-6 bg-black-800 rounded-xl border border-gold-500/20">
            <h3 className="text-xl font-bold text-gold-500 mb-3">وظائف العقد القياسية (ERC-20 / BEP-20)</h3>
            <pre className="text-gray-300 text-xs bg-black-950 p-4 rounded-lg overflow-x-auto border border-gold-500/10">
{`balanceOf(address account) → uint256
transfer(address to, uint256 amount) → bool
approve(address spender, uint256 amount) → bool
totalSupply() → uint256`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APIDocumentation;

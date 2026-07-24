import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const Tokenomics: React.FC = () => {
  const reserves = [
    { label: 'Polygon / Ethereum', asset: 'USDC · LUSD', color: 'bg-gold-500' },
    { label: 'BNB Chain', asset: 'DAI', color: 'bg-blue-500' },
    { label: 'Solana', asset: 'USDT', color: 'bg-red-500' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="📈" title="التوكنوميكس" subtitle="نظرة كاملة على عرض العملة، توزيعها، ونموذج الضمان الداعم" />
      <div className="text-center py-8 bg-black-950">
        <img src="/images/logo_v6_flat.png" alt="شعار MD1$" className="h-20 mx-auto opacity-90" />
      </div>

      <section className="py-20 bg-black-900">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-black-900 rounded-xl border border-gold-500/30">
            <h2 className="text-2xl font-bold text-gold-500 mb-4">إجمالي العرض</h2>
            <p className="text-4xl font-bold mb-4 text-white">بلا حد أقصى مسبق</p>
            <p className="text-gray-400">
              MD1USD ليس عملة بمعروض ثابت أو مُعدّن مسبقاً (Pre-mined). العرض الفعلي يتحرك تلقائياً لأعلى ولأسفل حسب كمية الاحتياطي المودَع فعلياً — كل وحدة جديدة تُسك فقط عند إيداع دولار حقيقي مقابلها، ولا يوجد "سقف مخطط" لأن السقف هو حجم الطلب الحقيقي على العملة نفسها.
            </p>
          </div>
          <div className="p-8 bg-black-900 rounded-xl border border-blue-500/30">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">تركيبة الاحتياطي حسب الشبكة</h2>
            <div className="space-y-4">
              {reserves.map((d, i) => (
                <div key={i} className="flex items-center justify-between text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${d.color}`}></span>
                    <span>{d.label}</span>
                  </div>
                  <span className="font-mono text-sm text-gray-400">{d.asset}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-6">
              الاحتياطي موزّع على عدة أصول مستقرة راسخة بدلاً من الاعتماد على أصل واحد، وكل رصيد قابل للتحقق مباشرة على البلوكتشين.
            </p>
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
            src="/images/mysterious_token.jpg"
            alt="تصور رمزي لعملة MD1USD"
            className="max-w-xl mx-auto"
          />
        </div>
      </section>

      {/* MDM1 legacy token note */}
      <section className="py-20 bg-black-950">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">ملاحظة حول رمز MDM1</h2>
          <div className="p-8 bg-black-800 rounded-xl border border-gold-500/20 text-gray-300 leading-relaxed space-y-4">
            <p>
              MDM1 هو رمز منفصل عن العملة المستقرة MD1USD، وكان جزءاً من مرحلة سابقة من المشروع. تقرر التوقف عن استخدامه بصيغته الأصلية بسبب هيكل ضريبة كان مطبقاً عليه، وهو ما لا يتماشى مع فلسفة الشفافية الكاملة التي يقوم عليها MD1USD.
            </p>
            <p>
              توجد حالياً عدة عقود منشورة على البلوكتشين تحمل اسم MDM1، وواحد منها فقط موثّق (Verified) بشكل كامل على مستكشف البلوكتشين. نعمل على تقييم خيارات مستقبلية بخصوص هذه الأرصدة، من ضمنها احتمال توزيع مجاني (Airdrop) على أعضاء مجتمعنا الفعليين في وقت لاحق — سيُعلن عن أي قرار نهائي بشفافية كاملة عبر قنواتنا الرسمية فور اتخاذه.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tokenomics;

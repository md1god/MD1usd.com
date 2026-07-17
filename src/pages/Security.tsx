import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';
import MediaVideo from '../components/media/MediaVideo';

const Security: React.FC = () => {
  const pillars = [
    { icon: '🔐', title: 'عقود ذكية مدققة', desc: 'تم تدقيق عقد MD1USD من قبل عدة أدوات ذكاء اصطناعي متخصصة (مراجعة متقاطعة) وتم فحصه يدوياً بحثاً عن الثغرات الشائعة مثل إعادة الدخول (Reentrancy) وتجاوز الأعداد الصحيحة.' },
    { icon: '🛡️', title: 'بدون صلاحيات إدارية', desc: 'العقد لا يحتوي على مفاتيح تحكم إدارية (Admin Keys) وتم التنازل عن الملكية (Ownership Renounced)، بمعنى لا يمكن لأي جهة، بما فيها الفريق، تجميد الأموال أو تعديل قواعد العقد بعد النشر.' },
    { icon: '💯', title: 'ضمان كامل 1:1', desc: 'كل وحدة MD1USD مصدرة مضمونة بالكامل باحتياطي حقيقي (USDC / LUSD / DAI) بنسبة 100%، ويمكن لأي شخص التحقق من هذا الضمان مباشرة على البلوكتشين في أي وقت.' },
    { icon: '⚡', title: 'حماية من الاحتيال', desc: 'تحقق دائماً من عناوين العقود الرسمية المذكورة في هذه الصفحة قبل أي تعامل، ولا تثق بأي عنوان يصلك عبر رسائل خاصة أو مواقع غير رسمية.' },
    { icon: '📖', title: 'شفافية على البلوكتشين', desc: 'كل معاملة، كل عملية سك أو حرق للعملة، وكل حركة على العقد مسجلة بشكل دائم وقابل للتحقق على مستكشفات البلوكتشين العامة (Etherscan / Polygonscan / BscScan).' },
    { icon: '🧩', title: 'كود مفتوح المصدر', desc: 'الكود المصدري للعقود متاح للفحص العلني، بحيث يمكن لأي مطور أو باحث أمني مراجعته والتأكد من سلامته بنفسه دون الحاجة للثقة العمياء.' },
  ];

  const contracts = [
    { network: 'Ethereum / Polygon', address: '0x6bd6A380903Ae072A764A929C34779824c068BB1' },
    { network: 'BNB Chain', address: '0xDe6b3FEe06A5570e51f171c3afFCfD7f7c6d4787' },
    { network: 'MDM1 Governance (Polygon)', address: '0x0a4E17e4F9c179a310069711069c346CFCf12c3f' },
  ];

  const tips = [
    'استخدم دائماً محافظ موثوقة مثل MetaMask أو Ledger أو Trust Wallet.',
    'لا تشارك عبارة الاسترداد (Seed Phrase) الخاصة بمحفظتك مع أي شخص أو موقع مهما كان السبب.',
    'تحقق من عنوان العقد حرفاً بحرف قبل أي عملية تحويل أو تبديل.',
    'احذر من مواقع التصيّد (Phishing) التي تنسخ تصميم موقعنا؛ الرابط الرسمي الوحيد هو md1usd.com.',
    'فعّل المصادقة الثنائية (2FA) في أي منصة تبادل تستخدمها.',
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero
        emoji="🛡️"
        title={<>أمان <span className="gradient-text">MD1USD</span></>}
        subtitle="نظام أمان متعدد الطبقات مبني على الشفافية الكاملة واللامركزية التامة، لا على الوعود"
      />

      {/* Security Pillars */}
      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">ركائز الأمان</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((item, i) => (
              <div key={i} className="p-8 rounded-xl bg-black-800 border border-gold-500/30 hover:border-gold-500 transition-all duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gold-500 mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit walkthrough video */}
      <section className="py-20 bg-black-950">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">جولة داخل عملية التدقيق</h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            فيديو يشرح كيف تمت مراجعة عقد MD1USD خطوة بخطوة والنتائج التي تم التوصل إليها
          </p>
          <div className="max-w-3xl mx-auto">
            <MediaVideo
              src="/videos/pages/security/audit_walkthrough.webm"
              title="جولة في تدقيق أمان العقد الذكي"
            />
          </div>
        </div>
      </section>

      {/* Contract Addresses */}
      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">عناوين العقود الرسمية</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {contracts.map((c, i) => (
              <div key={i} className="p-6 bg-black-800 rounded-xl border border-gold-500/30 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <span className="text-gold-500 font-bold">{c.network}</span>
                <code className="text-gray-300 text-sm break-all bg-black-950 px-3 py-2 rounded-lg border border-gold-500/10">{c.address}</code>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            تحقق دائماً من هذه العناوين مقارنة بما تراه على مستكشف البلوكتشين قبل أي معاملة.
          </p>
        </div>
      </section>

      {/* Visual diagram */}
      <section className="py-20 bg-black-950">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-white mb-10 text-center">طبقات الحماية</h2>
          <MediaImage
            src="/images/hero_gold_eye.png"
            alt="عين حورس كرمز للحماية والشفافية في نظام MD1USD"
            aspect="aspect-[21/9]"
          />
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-white mb-10 text-center">نصائح لحماية أموالك</h2>
          <div className="max-w-3xl mx-auto grid gap-4">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-black-800 rounded-lg border border-blue-500/20">
                <span className="text-blue-400 text-xl">✓</span>
                <p className="text-gray-300">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-950 text-center">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-white mb-6">هل لديك سؤال أمني أو اكتشفت ثغرة؟</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/support" className="btn-primary">اتصل بفريق الدعم</Link>
            <Link to="/bug-bounty" className="btn-red">برنامج مكافآت الثغرات</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;

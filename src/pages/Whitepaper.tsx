import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const Whitepaper: React.FC = () => {
  const sections = [
    {
      num: '1',
      title: 'المقدمة والرؤية',
      body: 'يهدف MD1USD إلى تقديم عملة مستقرة (Stablecoin) موثوقة، شفافة، ومتوافقة مع الشريعة الإسلامية، تتيح للأفراد والمشاريع تخزين القيمة والتحويل عبر البلوكتشين دون التعرض لتقلبات العملات الرقمية التقليدية. الرؤية طويلة المدى هي بناء نظام اقتصادي لا مركزي تُدار قواعده بالكود لا بالأشخاص.',
    },
    {
      num: '2',
      title: 'التقنية والعقود الذكية',
      body: 'يعتمد MD1USD على عقود ذكية منشورة على عدة شبكات بلوكتشين (Ethereum، Polygon، BNB Chain، Solana) لضمان المرونة وانخفاض الرسوم. العقد الأساسي بسيط ومباشر: سك (Mint) مقابل إيداع ضمان بنسبة 100%، وحرق (Burn) عند الاسترداد، دون أي منطق معقد يفتح المجال لثغرات.',
    },
    {
      num: '3',
      title: 'نموذج الاقتصاد والضمانات',
      body: 'كل وحدة من MD1USD مدعومة بأصول حقيقية محتفظ بها كاحتياطي (مثل USDC على Polygon وLUSD على Ethereum)، بما يضمن نسبة تغطية 1:1 دائمة. لا يوجد طباعة غير مدعومة للعملة، وكل عملية سك مرتبطة مباشرة بإيداع مطابق.',
    },
    {
      num: '4',
      title: 'الامتثال الشرعي',
      body: 'صُمم الهيكل المالي لـ MD1USD وفق مبادئ التمويل الإسلامي: تجنّب الربا (الفائدة الثابتة المضمونة)، الشفافية الكاملة في الأصول الداعمة، وغياب الغرر (الغموض) في آلية العمل. جميع تفاصيل الضمان والعقد متاحة للتحقق العلني بما يمنع الغرر.',
    },
    {
      num: '5',
      title: 'خارطة الطريق',
      body: 'تشمل الخطوات القادمة توسيع السيولة عبر منصات تبادل لامركزية إضافية، تفعيل الإصدار على Solana، وتطوير أدوات مجتمعية للحوكمة اللامركزية عبر توكن MDM1. راجع صفحة خارطة الطريق للتفاصيل الزمنية الكاملة.',
    },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero
        emoji="📜"
        title="الورقة البيضاء"
        subtitle="وثيقة شاملة توضح رؤية وتقنية واقتصاد MD1USD بشفافية كاملة"
      />

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gold-500 mb-8">المحتويات</h2>
            <div className="space-y-8">
              {sections.map((s) => (
                <div key={s.num} className="p-6 bg-black-800 rounded-xl border border-gold-500/20">
                  <div className="flex gap-4 items-start">
                    <span className="text-gold-500 text-3xl font-bold">{s.num}.</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-black-800 rounded-xl border border-gold-500/30 text-center">
              <p className="text-gray-300 mb-6">
                تحميل النسخة الكاملة من الورقة البيضاء بصيغة PDF
              </p>
              <a href="/whitepaper/MD1USD_Whitepaper.pdf" className="btn-primary inline-block" download>
                تحميل الآن (PDF)
              </a>
              <p className="text-gray-600 text-xs mt-3 font-mono">
                ملف مطلوب رفعه: /whitepaper/MD1USD_Whitepaper.pdf
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">مخطط البنية التقنية</h2>
          <MediaImage
            src="/images/pages/whitepaper/architecture_diagram.png"
            alt="مخطط البنية التقنية لنظام MD1USD"
            aspect="aspect-[21/9]"
          />
        </div>
      </section>
    </div>
  );
};

export default Whitepaper;

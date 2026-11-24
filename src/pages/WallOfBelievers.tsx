import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const WallOfBelievers: React.FC = () => {
  // لا نعرض اقتباسات منسوبة لأشخاص إلا بموافقتهم الصريحة؛ لذلك تعرض الصفحة المبادئ التي يقوم عليها المجتمع.
  const principles = [
    { title: 'الشفافية أولًا', text: 'العقود مفتوحة المصدر ومنشورة العناوين، ويمكن لأي شخص مراجعتها والتحقق منها على مستكشفات الشبكات.' },
    { title: 'لا وعود بالأرباح', text: 'نشرح تصميم المشروع ومخاطره بصراحة، ولا نقدّم وعودًا بعوائد أو استشارات استثمارية.' },
    { title: 'مرونة بين الشبكات', text: 'يتوفر MD1USD على عدة شبكات بلوكتشين ليختار كل مستخدم الأنسب له من حيث الرسوم والسرعة.' },
    { title: 'مجتمع يتحقق بنفسه', text: 'نشجع كل عضو على فحص العقود والأرصدة بنفسه بدل الاعتماد على الأقوال، وعلى الإبلاغ عن أي خطأ يجده.' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="🧱" title="جدار المؤمنين" subtitle="المبادئ التي يقوم عليها مجتمع MD1USD" />
      <div className="text-center py-8 bg-black-950">
        <img src="/images/logo_v2_script.png" alt="شعار MD1$" className="h-20 mx-auto opacity-90" />
      </div>

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((b, i) => (
              <div key={i} className="p-6 bg-black-800 rounded-xl border border-gold-500/30">
                <h2 className="text-gold-500 font-bold text-xl mb-2">{b.title}</h2>
                <p className="text-gray-300">{b.text}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-center mt-10 text-sm">
            هل تريد مشاركة رأيك أو تجربتك مع المشروع؟ تواصل معنا عبر صفحة الاتصال؛ لا ننشر أي رأي منسوب لشخص دون موافقته الصريحة.
          </p>
        </div>
      </section>

      <section className="py-20 bg-black-950">
        <div className="container-custom">
          <MediaImage
            src="/images/pages/believers/wall_of_believers_collage.jpg"
            alt="لوحة تجميعية تكرّم داعمي مشروع MD1USD"
            aspect="aspect-[21/9]"
          />
        </div>
      </section>
    </div>
  );
};

export default WallOfBelievers;

import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const WallOfBelievers: React.FC = () => {
  const believers = [
    { name: 'مؤمن #001', quote: 'أعجبني أن العقد بلا صلاحيات إدارية — هذا ما أبحث عنه في أي عملة مستقرة.' },
    { name: 'مؤمن #002', quote: 'الشفافية الكاملة في الضمان هي ما جعلني أثق بالمشروع منذ اليوم الأول.' },
    { name: 'مؤمن #003', quote: 'الشفافية الكاملة وإمكانية التحقق من الاحتياطي بنفسي هي ما أقنعني بـ MD1USD.' },
    { name: 'مؤمن #004', quote: 'دعم عدة شبكات بلوكتشين يمنحني مرونة كبيرة في كيفية استخدام العملة.' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="🧱" title="جدار المؤمنين" subtitle="تكريم لكل من آمن برؤية MD1USD ودعمها منذ البداية" />
      <div className="text-center py-8 bg-black-950">
        <img src="/images/logo_v2_script.png" alt="شعار MD1$" className="h-20 mx-auto opacity-90" />
      </div>

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            {believers.map((b, i) => (
              <div key={i} className="p-6 bg-black-800 rounded-xl border border-gold-500/30">
                <p className="text-gray-300 italic mb-4">"{b.quote}"</p>
                <span className="text-gold-500 font-bold">{b.name}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-center mt-10 text-sm">
            هل تريد أن يظهر اسمك هنا؟ تواصل معنا عبر صفحة الاتصال لإضافتك إلى جدار المؤمنين.
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

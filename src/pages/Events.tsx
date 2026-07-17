import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';
import MediaVideo from '../components/media/MediaVideo';

const Events: React.FC = () => {
  const upcoming = [
    { date: 'قريباً', title: 'جلسة أسئلة وأجوبة مباشرة (AMA)', desc: 'جلسة مفتوحة عبر Telegram للإجابة على أسئلة المجتمع حول خارطة الطريق.' },
    { date: 'قريباً', title: 'ورشة تعليمية: إعداد المحفظة', desc: 'ورشة عملية خطوة بخطوة لتعليم المستخدمين الجدد إعداد محافظهم بأمان.' },
    { date: 'قريباً', title: 'لقاء مجتمعي شهري', desc: 'لقاء دوري لمناقشة التحديثات وجمع ملاحظات المجتمع.' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="📅" title="الأحداث والفعاليات" subtitle="تابع كل اللقاءات والورش القادمة المتعلقة بـ MD1USD" />

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">الفعاليات القادمة</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcoming.map((e, i) => (
              <div key={i} className="p-6 bg-black-800 rounded-xl border border-gold-500/30">
                <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-400 rounded-full text-xs font-bold mb-4">{e.date}</span>
                <h3 className="text-xl font-bold text-white mb-3">{e.title}</h3>
                <p className="text-gray-300 text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">إعادة مشاهدة آخر فعالية</h2>
          <div className="max-w-3xl mx-auto mt-10">
            <MediaVideo src="/videos/pages/events/latest_ama_recording.webm" title="تسجيل آخر جلسة أسئلة وأجوبة" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <MediaImage
            src="/images/pages/events/past_event_photo.png"
            alt="صورة من فعالية مجتمعية سابقة"
            aspect="aspect-[21/9]"
          />
        </div>
      </section>
    </div>
  );
};

export default Events;

import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const Events: React.FC = () => {
  const upcoming = [
    { date: 'دوري', title: 'جلسة أسئلة وأجوبة مباشرة (AMA)', desc: 'جلسة مفتوحة عبر قناة تيليجرام الرسمية للإجابة على أسئلة المجتمع حول خارطة الطريق.' },
    { date: 'دوري', title: 'ورشة تعليمية: إعداد المحفظة', desc: 'ورشة عملية خطوة بخطوة لتعليم المستخدمين الجدد إعداد محافظهم بأمان.' },
    { date: 'شهري', title: 'لقاء مجتمعي', desc: 'لقاء دوري لمناقشة التحديثات وجمع ملاحظات المجتمع عبر قناة تيليجرام.' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="📅" title="الأحداث والفعاليات" subtitle="فعاليات ولقاءات مجتمع MD1USD المستمرة" />

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">فعاليات المجتمع</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcoming.map((e, i) => (
              <div key={i} className="p-6 bg-black-800 rounded-xl border border-gold-500/30">
                <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-400 rounded-full text-xs font-bold mb-4">{e.date}</span>
                <h3 className="text-xl font-bold text-white mb-3">{e.title}</h3>
                <p className="text-gray-300 text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            تابع <a href="https://t.me/md1god" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">قناة تيليجرام</a> لمواعيد الفعاليات القادمة تحديداً.
          </p>
        </div>
      </section>


      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <MediaImage
            src="/images/pages/events/past_event_photo.jpg"
            alt="صورة من فعالية مجتمعية سابقة"
            aspect="aspect-[21/9]"
          />
        </div>
      </section>
    </div>
  );
};

export default Events;

import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';
import MediaVideo from '../components/media/MediaVideo';

const Community: React.FC = () => {
  const channels = [
    { icon: '📱', name: 'Telegram', desc: 'نقاشات يومية وتحديثات فورية عن المشروع', link: '#' },
    { icon: '💬', name: 'Discord', desc: 'قنوات مخصصة للمطورين والدعم الفني', link: '#' },
    { icon: '𝕏', name: 'Twitter / X', desc: 'آخر الأخبار والإعلانات الرسمية', link: '#' },
    { icon: '▶', name: 'YouTube', desc: 'فيديوهات تعليمية وشروحات مصورة', link: '#' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="🤝" title="مجتمع MD1USD" subtitle="مساحة لكل من يؤمن برؤية العملة المستقرة الشفافة واللامركزية" />

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((c, i) => (
              <a key={i} href={c.link} className="p-6 bg-black-800 rounded-xl border border-gold-500/30 hover:border-gold-500 transition-all text-center block">
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="text-lg font-bold text-gold-500 mb-2">{c.name}</h3>
                <p className="text-gray-400 text-sm">{c.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">لقطات من مجتمعنا</h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">فيديو يجمع لحظات ومساهمات أعضاء المجتمع حول العالم</p>
          <div className="max-w-3xl mx-auto">
            <MediaVideo src="/videos/pages/community/community_highlights.webm" title="لقطات من مجتمع MD1USD" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <MediaImage
            src="/images/pages/community/global_community_map.png"
            alt="خريطة توضح انتشار مجتمع MD1USD حول العالم"
            aspect="aspect-[21/9]"
          />
        </div>
      </section>

      <section className="py-20 bg-black-950 text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-6">كن جزءاً من الرحلة</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/community/ambassadors" className="btn-primary">برنامج السفراء</Link>
            <Link to="/community/believers" className="btn-blue">جدار المؤمنين</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;

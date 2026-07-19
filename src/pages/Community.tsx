import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const Community: React.FC = () => {
  const channels = [
    { icon: '📱', name: 'Telegram', desc: 'نقاشات يومية وتحديثات فورية عن المشروع', link: 'https://t.me/md1god' },
    { icon: '𝕏', name: 'X (Twitter)', desc: 'آخر الأخبار والإعلانات الرسمية', link: 'https://twitter.com/MDm111000000' },
    { icon: '▶', name: 'YouTube', desc: 'فيديوهات تعليمية وشروحات مصورة', link: 'https://www.youtube.com/@MD-m1' },
    { icon: '🎵', name: 'TikTok', desc: 'محتوى قصير وسريع عن المشروع', link: 'https://tiktok.com/@md1usd' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="🤝" title="مجتمع MD1USD" subtitle="مساحة لكل من يؤمن برؤية العملة المستقرة الشفافة واللامركزية" />
      <div className="text-center py-8 bg-black-950">
        <img src="/images/logo_v1_block.png" alt="شعار MD1$" className="h-20 mx-auto opacity-90" />
      </div>

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((c, i) => (
              <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" className="p-6 bg-black-800 rounded-xl border border-gold-500/30 hover:border-gold-500 transition-all text-center block">
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="text-lg font-bold text-gold-500 mb-2">{c.name}</h3>
                <p className="text-gray-400 text-sm">{c.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <MediaImage
            src="/images/pages/community/global_community_map.jpg"
            alt="خريطة توضح انتشار مجتمع MD1USD حول العالم"
            aspect="aspect-[21/9]"
          />
        </div>
      </section>

      <section className="py-20 bg-black-950 text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-6">كن جزءاً من الرحلة</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://mdm1.org/pages/community.html" target="_blank" rel="noopener noreferrer" className="btn-primary">
              🤝 انضم إلى مجتمع mdm1.org
            </a>
            <Link to="/community/ambassadors" className="btn-secondary">برنامج السفراء</Link>
            <Link to="/community/believers" className="btn-blue">جدار المؤمنين</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;

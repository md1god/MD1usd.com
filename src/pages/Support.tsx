import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/media/PageHero';

const Support: React.FC = () => {
  const channels = [
    { icon: '❓', title: 'الأسئلة الشائعة', desc: 'ابحث أولاً في الأسئلة الأكثر تكراراً، فقد تجد إجابتك فوراً.', link: '/support/faq' },
    { icon: '🔧', title: 'استكشاف الأخطاء', desc: 'دليل لحل المشاكل التقنية الشائعة مثل مشاكل المحفظة أو الشبكة.', link: '/support/troubleshooting' },
    { icon: '✉️', title: 'اتصل بنا مباشرة', desc: 'لم تجد ما تبحث عنه؟ تواصل مع فريق الدعم مباشرة.', link: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="🛟" title="مركز الدعم الفني" subtitle="نحن هنا لمساعدتك في كل خطوة مع MD1USD" />

      <section className="py-20 bg-black-900">
        <div className="container-custom grid md:grid-cols-3 gap-8">
          {channels.map((c, i) => (
            <Link key={i} to={c.link} className="p-8 bg-black-800 rounded-xl border border-gold-500/30 hover:border-gold-500 transition-all block">
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="text-xl font-bold text-gold-500 mb-3">{c.title}</h3>
              <p className="text-gray-300">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Support;

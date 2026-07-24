import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const Governance: React.FC = () => {
  const points = [
    { title: 'توكن MDM1', body: 'يمثل توكن حوكمة MDM1 حق المشاركة في قرارات المشروع المستقبلية، ويُعد الأداة الأساسية للتصويت على المقترحات.' },
    { title: 'آلية التصويت', body: 'ستُطرح المقترحات المهمة (مثل تغييرات في السيولة أو شراكات كبرى) للتصويت المجتمعي عبر آلية لامركزية قبل تنفيذها.' },
    { title: 'الشفافية في القرار', body: 'كل مقترح ونتيجة تصويت ستكون موثقة وقابلة للتحقق العلني، بما يضمن عدم فرض أي قرار دون علم المجتمع.' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="🏛️" title="الحوكمة اللامركزية" subtitle="كيف يشارك حاملو توكن MDM1 في توجيه مستقبل المشروع" />
      <div className="text-center py-8 bg-black-950">
        <img src="/images/logo_v4_diamond.png" alt="شعار MD1$" className="h-20 mx-auto opacity-90" />
      </div>

      <section className="py-20 bg-black-900">
        <div className="container-custom grid md:grid-cols-3 gap-8">
          {points.map((p, i) => (
            <div key={i} className="p-6 bg-black-800 rounded-xl border border-gold-500/30">
              <h3 className="text-xl font-bold text-gold-500 mb-3">{p.title}</h3>
              <p className="text-gray-300 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-black-950">
        <div className="container-custom">
          <div className="p-8 bg-black-800 rounded-xl border border-gold-500/20 max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-3">عنوان توكن الحوكمة MDM1 (Polygon)</h3>
            <code className="text-gold-500 text-sm break-all">0x0a4E17e4F9c179a310069711069c346CFCf12c3f</code>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-900">
        <div className="container-custom">
          <MediaImage
            src="/images/pages/governance/governance_model_diagram.png"
            alt="مخطط يوضح نموذج الحوكمة اللامركزية في MD1USD"
            aspect="aspect-[21/9]"
          />
        </div>
      </section>

      <section className="py-16 bg-black-950 text-center">
        <Link to="/community/voting" className="btn-primary">اذهب لصفحة التصويت</Link>
      </section>
    </div>
  );
};

export default Governance;

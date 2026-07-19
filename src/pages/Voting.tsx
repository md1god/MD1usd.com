import React, { useState } from 'react';
import PageHero from '../components/media/PageHero';

const Voting: React.FC = () => {
  const [votes, setVotes] = useState<Record<string, 'yes' | 'no' | null>>({});

  const proposals = [
    { id: 'p1', title: 'إضافة سيولة إضافية على منصة تبادل جديدة', desc: 'اقتراح لتوسيع أزواج التداول المتاحة لعملة MD1USD.' },
    { id: 'p2', title: 'تفعيل تعليمة Initialize على Solana', desc: 'اقتراح لتفعيل العملة رسمياً على شبكة Solana بعد اكتمال المراجعة النهائية.' },
    { id: 'p3', title: 'إطلاق برنامج سفراء رسمي', desc: 'اقتراح لتخصيص جزء من الموارد لدعم برنامج السفراء في مناطق جديدة.' },
  ];

  const vote = (id: string, choice: 'yes' | 'no') => {
    setVotes((prev) => ({ ...prev, [id]: choice }));
  };

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="🗳️" title="التصويت المجتمعي" subtitle="شارك رأيك في المقترحات المطروحة حالياً (تجربة توضيحية)" />

      <section className="py-20 bg-black-900">
        <div className="container-custom max-w-3xl mx-auto space-y-6">
          {proposals.map((p) => (
            <div key={p.id} className="p-6 bg-black-800 rounded-xl border border-gold-500/30">
              <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-gray-300 mb-4">{p.desc}</p>
              <div className="flex gap-3">
                <button
                  onClick={() => vote(p.id, 'yes')}
                  className={`px-4 py-2 rounded-lg font-bold transition-all ${votes[p.id] === 'yes' ? 'bg-gradient-gold text-black-900' : 'bg-black-950 text-gray-300 border border-gold-500/30'}`}
                >
                  ✓ موافق
                </button>
                <button
                  onClick={() => vote(p.id, 'no')}
                  className={`px-4 py-2 rounded-lg font-bold transition-all ${votes[p.id] === 'no' ? 'bg-gradient-red text-white' : 'bg-black-950 text-gray-300 border border-gold-500/30'}`}
                >
                  ✗ غير موافق
                </button>
              </div>
              {votes[p.id] && (
                <p className="text-sm text-gold-500 mt-3">
                  شكراً لتصويتك: {votes[p.id] === 'yes' ? 'موافق' : 'غير موافق'} (هذا تصويت توضيحي محلي فقط)
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Voting;

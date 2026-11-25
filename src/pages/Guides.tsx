import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/media/PageHero';
import { GUIDES } from '../data/guides';

const Guides: React.FC = () => (
  <div className="min-h-screen bg-black-950">
    <PageHero emoji="📚" title="الأدلة والمقالات" subtitle="شروحات عربية أصلية عن العملات المستقرة والأمان والمخاطر والشبكات" />
    <section className="py-16 bg-black-900">
      <div className="container-custom max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {GUIDES.map((g) => (
          <Link
            key={g.slug}
            to={`/guides/${g.slug}`}
            className="block p-6 bg-black-800 rounded-xl border border-gold-500/20 hover:border-gold-500/60 transition-colors"
          >
            <span className="text-blue-400 text-sm">{g.category}</span>
            <h2 className="text-xl font-bold text-gold-500 mt-2 mb-3">{g.title}</h2>
            <p className="text-gray-300 text-sm leading-loose">{g.description}</p>
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default Guides;

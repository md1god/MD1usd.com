import React from 'react';
import PageHero from './media/PageHero';

export interface LegalSection {
  heading: string;
  body: React.ReactNode;
}

interface LegalLayoutProps {
  emoji: string;
  title: string;
  subtitle: string;
  updated: string;
  intro: React.ReactNode;
  sections: LegalSection[];
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ emoji, title, subtitle, updated, intro, sections }) => (
  <div className="min-h-screen bg-black-950">
    <PageHero emoji={emoji} title={title} subtitle={subtitle} />
    <section className="py-16 bg-black-900">
      <div className="container-custom max-w-3xl mx-auto">
        <p className="text-gray-500 text-sm mb-6">آخر تحديث: {updated}</p>
        <div className="text-gray-300 leading-loose mb-10">{intro}</div>
        <div className="space-y-8">
          {sections.map((s, i) => (
            <article key={i} className="p-6 bg-black-800 rounded-xl border border-gold-500/20">
              <h2 className="text-2xl font-bold text-gold-500 mb-3">{s.heading}</h2>
              <div className="text-gray-300 leading-loose space-y-3">{s.body}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default LegalLayout;

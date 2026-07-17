import React from 'react';

interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  emoji?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, emoji }) => (
  <section className="relative overflow-hidden py-20 bg-gradient-premium">
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div className="absolute top-10 right-10 w-72 h-72 bg-gold-500 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
    </div>
    <div className="container-custom relative z-10">
      {emoji && <div className="text-6xl mb-4">{emoji}</div>}
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{title}</h1>
      {subtitle && <p className="text-xl text-gray-300 max-w-2xl">{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;

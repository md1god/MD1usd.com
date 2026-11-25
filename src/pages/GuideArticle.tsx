import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/media/PageHero';
import { GUIDES, getGuide } from '../data/guides';

const GuideArticle: React.FC = () => {
  const { slug } = useParams();
  const guide = getGuide(slug);

  if (!guide) {
    return (
      <div className="min-h-screen bg-black-950">
        <PageHero emoji="🔎" title="المقال غير موجود" subtitle="تعذّر العثور على هذا الدليل" />
        <div className="py-16 text-center">
          <Link className="text-blue-400 underline" to="/guides">العودة إلى كل الأدلة</Link>
        </div>
      </div>
    );
  }

  const others = GUIDES.filter((g) => g.slug !== guide.slug);

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="📖" title={guide.title} subtitle={guide.description} />
      <article className="py-16 bg-black-900">
        <div className="container-custom max-w-3xl mx-auto">
          <p className="text-gray-500 text-sm mb-8">{guide.category} · آخر تحديث: 24 نوفمبر 2026 · فريق MD1USD</p>
          {guide.sections.map((s, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-2xl font-bold text-gold-500 mb-4">{s.heading}</h2>
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-gray-300 leading-loose mb-4">{p}</p>
              ))}
              {s.bullets && (
                <ul className="list-disc pr-6 space-y-3 text-gray-300 leading-loose">
                  {s.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <div className="p-5 bg-black-800 rounded-xl border border-gold-500/20 text-sm text-gray-400 leading-loose mb-10">
            تنبيه: هذا المقال تعليمي ولا يمثل استشارة مالية أو استثمارية أو شرعية. الأصول الرقمية عالية المخاطر وقد تخسر فيها كامل
            المبلغ، ولا نعد بأي أرباح. راجع <Link className="text-blue-400 underline" to="/terms">الشروط والأحكام</Link>.
          </div>
          <h2 className="text-xl font-bold text-white mb-4">اقرأ أيضًا</h2>
          <ul className="space-y-2">
            {others.map((g) => (
              <li key={g.slug}>
                <Link className="text-blue-400 hover:underline" to={`/guides/${g.slug}`}>{g.title}</Link>
              </li>
            ))}
            <li><Link className="text-blue-400 hover:underline" to="/security">صفحة الأمان والعناوين الرسمية للعقود</Link></li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default GuideArticle;

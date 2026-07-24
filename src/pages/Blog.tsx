import React from 'react';
import PageHero from '../components/media/PageHero';
import MediaImage from '../components/media/MediaImage';

const Blog: React.FC = () => {
  const posts = [
    { title: 'لماذا اخترنا نموذج الضمان الكامل 1:1؟', excerpt: 'نظرة على الفلسفة الاقتصادية خلف قرار ضمان كل وحدة MD1USD بأصول حقيقية بنسبة 100%، بدلاً من نموذج المعروض الثابت المُعدّن مسبقاً.', date: 'يوليو 2026' },
    { title: 'رحلتنا في مراجعة أمان العقد', excerpt: 'كيف استخدمنا عدة أدوات ذكاء اصطناعي متخصصة ومنصات فحص علنية لمراجعة العقد الذكي قبل الإطلاق وبعده.', date: 'يوليو 2026' },
    { title: 'مبادئ التمويل الإسلامي في MD1USD', excerpt: 'شرح تفصيلي للمبادئ العامة التي استلهمها تصميم MD1USD من التمويل الإسلامي، كمبدأ عام وليس شهادة اعتماد رسمية.', date: 'يوليو 2026' },
    { title: 'لماذا التنازل عن ملكية العقد يهم مستخدميك؟', excerpt: 'مناقشة حول مفهوم Ownership Renounced وأثره على الثقة في العملات المستقرة، ولماذا لا يملك أحد مفتاحاً للتحكم في عقد MD1USD بعد نشره.', date: 'يوليو 2026' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="✍️" title="المدونة" subtitle="مقالات متعمقة حول تقنية وفلسفة واقتصاد MD1USD" />

      <section className="py-20 bg-black-900">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          {posts.map((p, i) => (
            <article key={i} className="bg-black-800 rounded-xl border border-gold-500/20 overflow-hidden">
              <MediaImage
                src={`/images/pages/blog/post_${i + 1}_cover.jpg`}
                alt={`صورة غلاف مقال: ${p.title}`}
                aspect="aspect-video"
                className="rounded-none border-0"
              />
              <div className="p-6">
                <span className="text-gold-500 text-xs font-bold">{p.date}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;

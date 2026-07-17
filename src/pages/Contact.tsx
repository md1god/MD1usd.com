import React, { useState } from 'react';
import PageHero from '../components/media/PageHero';

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ملاحظة: هذا نموذج واجهة أمامية فقط، يحتاج ربط لاحقاً بخدمة إرسال بريد فعلية
    // (مثل Formspree أو EmailJS أو دالة خلفية) قبل استخدامه في الإنتاج الفعلي.
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="✉️" title="اتصل بنا" subtitle="سعداء بتواصلك معنا لأي استفسار أو اقتراح أو ملاحظة" />

      <section className="py-20 bg-black-900">
        <div className="container-custom max-w-2xl mx-auto">
          {sent ? (
            <div className="p-8 bg-black-800 rounded-xl border border-gold-500/30 text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-gold-500 mb-2">تم استلام رسالتك</h3>
              <p className="text-gray-300">سنعاود التواصل معك في أقرب وقت ممكن.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 bg-black-800 p-8 rounded-xl border border-gold-500/20">
              <div>
                <label className="block text-gray-300 mb-2 text-sm">الاسم</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-black-950 border border-gold-500/30 text-white focus:outline-none focus:border-gold-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 text-sm">البريد الإلكتروني</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-black-950 border border-gold-500/30 text-white focus:outline-none focus:border-gold-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 text-sm">الرسالة</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-black-950 border border-gold-500/30 text-white focus:outline-none focus:border-gold-500"
                />
              </div>
              <button type="submit" className="btn-primary w-full">إرسال الرسالة</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;

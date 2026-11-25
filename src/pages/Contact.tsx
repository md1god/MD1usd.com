import React, { useState } from 'react';
import PageHero from '../components/media/PageHero';

const EMAIL = 'info@md1usd.com';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // لا يوجد خادم لاستقبال النموذج؛ الزر يفتح تطبيق البريد برسالة جاهزة إلى بريد المشروع الرسمي.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`رسالة من موقع MD1USD - ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nالاسم: ${form.name}\nالبريد للرد: ${form.email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const channels = [
    { label: 'البريد الإلكتروني للمشروع', value: EMAIL, href: `mailto:${EMAIL}` },
    { label: 'منصة MDM1', value: 'info@mdm1.org', href: 'mailto:info@mdm1.org' },
    { label: 'الإبلاغ عن ثغرة أمنية', value: 'security@md1usd.com', href: 'mailto:security@md1usd.com' },
    { label: 'تيليجرام', value: 't.me/md1god', href: 'https://t.me/md1god' },
    { label: 'X (تويتر)', value: '@MDm111000000', href: 'https://twitter.com/MDm111000000' },
    { label: 'GitHub', value: 'github.com/md1god/MD1usd.com', href: 'https://github.com/md1god/MD1usd.com' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="✉️" title="اتصل بنا" subtitle="سعداء بتواصلك معنا لأي استفسار أو اقتراح أو ملاحظة" />

      <section className="py-16 bg-black-900">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gold-500 mb-4">قنوات التواصل الرسمية</h2>
          <ul className="grid md:grid-cols-2 gap-4 mb-12">
            {channels.map((c) => (
              <li key={c.label} className="p-4 bg-black-800 rounded-xl border border-gold-500/20">
                <p className="text-gray-400 text-sm mb-1">{c.label}</p>
                <a className="text-blue-400 hover:underline break-all" href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {c.value}
                </a>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gold-500 mb-4">أرسل لنا رسالة</h2>
          <p className="text-gray-400 text-sm mb-4">
            عند الضغط على «إرسال» يفتح تطبيق البريد لديك برسالة جاهزة إلى {EMAIL}. نحاول الرد خلال أيام عمل قليلة.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 bg-black-800 p-8 rounded-xl border border-gold-500/20">
            <div>
              <label htmlFor="c-name" className="block text-gray-300 mb-2 text-sm">الاسم</label>
              <input
                id="c-name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black-950 border border-gold-500/30 text-white focus:outline-none focus:border-gold-500"
              />
            </div>
            <div>
              <label htmlFor="c-email" className="block text-gray-300 mb-2 text-sm">البريد الإلكتروني</label>
              <input
                id="c-email"
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black-950 border border-gold-500/30 text-white focus:outline-none focus:border-gold-500"
              />
            </div>
            <div>
              <label htmlFor="c-msg" className="block text-gray-300 mb-2 text-sm">الرسالة</label>
              <textarea
                id="c-msg"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black-950 border border-gold-500/30 text-white focus:outline-none focus:border-gold-500"
              />
            </div>
            <button type="submit" className="btn-primary w-full">إرسال الرسالة</button>
          </form>

          <div className="mt-10 p-6 bg-black-800 rounded-xl border border-red-500/30">
            <h3 className="text-lg font-bold text-red-400 mb-2">تحذير من الاحتيال</h3>
            <p className="text-gray-300 text-sm leading-loose">
              لا نطلب منك أبدًا كلمات المرور أو عبارة الاسترداد أو المفاتيح الخاصة، ولا نعد بأرباح مضمونة. تجاهل أي حساب يطلب منك تحويل
              أموال أو مشاركة معلومات حساسة باسم المشروع. راجع <a className="text-blue-400 underline" href="/privacy/">سياسة الخصوصية</a> و
              <a className="text-blue-400 underline" href="/terms/"> الشروط والأحكام</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

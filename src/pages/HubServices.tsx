import React from 'react';

const services = [
  { icon: '🧭', title: 'StableProof', text: 'طبقة بيانات مفتوحة لعرض العقود والمعروض والاحتياطي والنشاط على الشبكات العامة.' },
  { icon: '💬', title: 'دعم ومجتمعات', text: 'تركيب وتشغيل أدوات دعم ومحادثة مفتوحة المصدر للمشاريع والمجتمعات.' },
  { icon: '📅', title: 'حجوزات وفعاليات', text: 'صفحات حجز وتسجيل للفعاليات مع تقارير ومتابعة.' },
  { icon: '📈', title: 'تحليلات خصوصية', text: 'تقارير أداء وزيارات دون بيع بيانات شخصية.' },
  { icon: '📝', title: 'نماذج وأتمتة', text: 'نماذج طلبات واستبيانات وربط تنبيهات وسير عمل.' },
  { icon: '📚', title: 'دليل المشاريع', text: 'إدراجات مجانية ومميزة للمشاريع والأدوات مع الإفصاح عن الرعاية.' },
];

const HubServices: React.FC = () => (
  <div className="min-h-screen bg-black-950">
    <section className="relative overflow-hidden bg-gradient-premium py-20 md:py-28">
      <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero_background.jpg')" }} />
      <div className="container-custom relative z-10 text-center">
        <span className="inline-block px-4 py-2 bg-gold-500/20 text-gold-400 rounded-full text-sm font-semibold mb-5">MDM1 HUB • OPEN DIGITAL SERVICES</span>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">أدوات مفتوحة، خدمات حقيقية</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">صفحة مستقلة داخل منظومة MD1USD لعرض الأدوات والخدمات الرقمية المفتوحة. الكود الأساسي متاح، والدخل المشروع يأتي من الإعداد والاستضافة والتخصيص والرعاية.</p>
        <div className="flex gap-4 justify-center flex-wrap mt-8">
          <a href="https://mdm1.org/pages/hub-services.html" target="_blank" rel="noreferrer" className="btn-primary">زيارة MDM1 Hub ↗</a>
          <a href="mailto:info@md1usd.com?subject=MDM1%20Hub%20Partnership" className="btn-secondary">طلب شراكة</a>
        </div>
      </div>
    </section>

    <section className="py-20 bg-black-950">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-white text-center mb-4">ما الذي نبنيه؟</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">MD1USD هو مثال أولي؛ الهدف بناء أدوات عامة قابلة لإعادة الاستخدام عبر مشاريع متعددة، دون تداول أو وعود بعائد.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article key={service.title} className="p-7 rounded-xl bg-black-900 border border-gold-500/20 hover:border-gold-500/60 transition-all">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gold-500 mb-3">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-black-900 border-y border-gold-500/20">
      <div className="container-custom max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">مصادر الدخل المعلنة</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-right">
          {['منح Public Goods لبناء الكود المفتوح', 'استضافة وصيانة وتحديثات', 'تخصيص الهوية والتكاملات', 'رعاية وإدراجات مميزة مع وسم واضح', 'تقارير وتحليلات وWidgets', 'إعداد أدوات للشركات والمجتمعات'].map((item) => <div key={item} className="p-5 rounded-lg bg-black-800 border border-blue-500/20 text-gray-200">✓ {item}</div>)}
        </div>
        <p className="text-gray-500 text-sm mt-8">لا تشمل الصفحة حفظ أموال المستخدمين أو تشغيل بورصة أو ضمان عائد أو توجيه تداول محظور.</p>
      </div>
    </section>
  </div>
);

export default HubServices;

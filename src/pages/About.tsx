import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/media/PageHero';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black-950">
      <PageHero
        emoji="⚖️"
        title={<>من <span className="gradient-text">نحن</span></>}
        subtitle="فكرة MD1USD في جملتين، ولمن نبنيها"
      />

      <section className="py-10 bg-black-950 text-center">
        <img src="/images/logo_v5_clean.png" alt="شعار MD1$" className="h-24 mx-auto opacity-90" />
      </section>

      <section className="py-20 bg-black-900">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            نؤمن أن قيمة المال يجب أن تكون واضحة ومتاحة لكل إنسان بالتساوي، بلا وسيط يحتكر الثقة وبلا شرط لا علاقة له بالعدالة المالية.
            MD1USD وُلد من فكرة بسيطة: العدل والمساواة في الوصول إلى أداة مالية شفافة، لكل الناس، في كل مكان.
          </p>
        </div>
      </section>

      <section className="py-20 bg-black-950">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-black-800 rounded-xl border border-gold-500/20">
              <h3 className="text-xl font-bold text-gold-500 mb-3">لمن نبني هذا</h3>
              <p className="text-gray-300 leading-relaxed">
                لكل شخص يبحث عن أداة مالية شفافة، بغض النظر عن لغته أو بلده أو خلفيته. لا نستهدف جمهوراً بعينه، ولا علاقة لتصميم MD1USD بأي دين أو انتماء أو عرق — الهوية البصرية مستوحاة من تراث إنساني مشترك، والمشروع مفتوح للجميع.
              </p>
            </div>
            <div className="p-8 bg-black-800 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-bold text-blue-400 mb-3">كيف نعمل</h3>
              <p className="text-gray-300 leading-relaxed">
                عقود مفتوحة المصدر، احتياطي قابل للتحقق على البلوكتشين لأي شخص في أي وقت، ولا صلاحيات إدارية خفية. لا نأخذ عمولة أو حصة من مشاريع أخرى يتفاعل معها النظام — الشفافية ليست شعاراً، بل الأساس الذي بُني عليه العقد.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black-900 text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-6">جزء من منظومة MDM1</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            MD1USD هو العملة المستقرة ضمن منظومة MDM1 الأوسع، التي تضم منصة المجتمع، لوحة النقاش، والصراف الآلي (ATM) على mdm1.org.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://mdm1.org" target="_blank" rel="noopener noreferrer" className="btn-primary">زيارة MDM1.org ↗</a>
            <Link to="/contact" className="btn-red">تواصل معنا</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from 'react';
import { Link } from 'react-router-dom';
import MediaImage from '../components/media/MediaImage';

const Home: React.FC = () => {
  const features = [
    {
      icon: '🔗',
      title: 'متعدد السلاسل',
      description: 'Ethereum • Polygon • BNB • Solana — اختر السلسلة التي تناسبك',
      color: 'blue',
    },
    {
      icon: '🔒',
      title: 'مضمون بالأصول',
      description: 'كل MD1$ مدعوم بـ 100% احتياطيات حقيقية من USDC و LUSD و DAI',
      color: 'gold',
    },
    {
      icon: '✓',
      title: 'لا مركزية تامة',
      description: 'لا يوجد مسؤول مركزي — العقد الذكية تتحكم في كل شيء',
      color: 'red',
    },
    {
      icon: '📊',
      title: 'شفاف وموثوق',
      description: 'كل المعاملات على البلوكتشين — كل شيء قابل للتحقق',
      color: 'gold',
    },
  ];

  const stats = [
    { label: 'السلاسل المدعومة', value: '4+', icon: '🌐' },
    { label: 'التغطية', value: '100%', icon: '✓' },
    { label: 'ضريبة البيع/الشراء', value: '0.00%', icon: '💰' },
    { label: 'الأمان', value: 'عقد مفحوص', icon: '🔐' },
  ];

  const benefits = [
    {
      title: 'مبادئ مالية أخلاقية',
      description: 'مصمم على مبادئ عامة كالشفافية وعدم الربا — دون ادعاء شهادة اعتماد دينية رسمية',
      icon: '✨',
    },
    {
      title: 'سيولة عالية',
      description: 'تداول بسهولة على أكبر منصات التبادل اللامركزية',
      icon: '⚡',
    },
    {
      title: 'رسوم منخفضة',
      description: 'رسوم تحويل أقل من 0.1% مع سرعة فائقة',
      icon: '🚀',
    },
    {
      title: 'دعم فني 24/7',
      description: 'فريق دعم متخصص جاهز لمساعدتك في أي وقت',
      icon: '👥',
    },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-premium py-20 md:py-32">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero_background.jpg')" }}
        ></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gold-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fadeInUp">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-gold-500/20 text-gold-400 rounded-full text-sm font-semibold">
                  🚀 الجيل الجديد من العملات المستقرة
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                MD1<span className="gradient-text">USD</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4 font-semibold">
                العملة المستقرة المضمونة 100% بالأصول
              </p>
              <p className="text-lg text-gray-400 mb-8">
                نظام عملة مستقرة لا مركزي وموثوق يعتمد على العقود الذكية والاحتياطيات المعلنة، مفتوح المصدر وشفاف بالكامل، ومتاح للجميع بلا تمييز.
              </p>

              <div className="flex gap-4 flex-wrap mb-8">
                <Link to="/tokenomics" className="btn-primary">
                  اقرأ التفاصيل
                </Link>
                <Link to="/security" className="btn-secondary">
                  فحص الأمان
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 flex gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-gold-500 text-2xl">✓</span>
                  <span className="text-gray-300">مدقق أمان</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 text-2xl">✓</span>
                  <span className="text-gray-300">مفتوح المصدر</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-400 text-2xl">✓</span>
                  <span className="text-gray-300">شفاف 100%</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden md:flex justify-center items-center animate-slideInRight">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-gold rounded-full blur-2xl opacity-30 animate-glow"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl animate-bounce">💎</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black-900 border-y border-gold-500/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gold-500 mb-2">{stat.value}</div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black-950">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            لماذا <span className="gradient-text">MD1USD</span>؟
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl border-2 border-${feature.color}-500/30 bg-black-900/50 hover:border-${feature.color}-500 transition-all duration-300 hover:shadow-lg`}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-black-900 to-black-950">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            المميزات الرئيسية
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="p-8 rounded-xl bg-gradient-to-br from-black-800 to-black-900 border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gold-500 mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-black-950">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            هوية <span className="gradient-text">MD1USD</span> البصرية
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <MediaImage
              src="/images/md1usd_logo.png"
              alt="الهوية البصرية لعملة MD1USD"
            />
            <MediaImage
              src="/images/horus_eye_gold.png"
              alt="رمز عين حورس ضمن هوية MD1USD"
            />
            <MediaImage
              src="/images/gold_coin_md1usd.jpg"
              alt="عملة MD1USD الذهبية"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black-900">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ابدأ رحلتك مع <span className="gradient-text-blue">MD1USD</span> اليوم
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            انضم إلى آلاف المستخدمين الذين يثقون بـ MD1USD كعملة مستقرة آمنة وموثوقة
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link to="/learn/blockchain-basics" className="btn-primary">
              تعلم المزيد
            </Link>
            <Link to="/community" className="btn-blue">
              انضم للمجتمع
            </Link>
            <Link to="/contact" className="btn-red">
              اتصل بنا
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-dark border-t border-gold-500/30">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              تابع آخر الأخبار
            </h3>
            <p className="text-gray-400 mb-6">
              اشترك في نشرتنا البريدية للحصول على آخر التحديثات والأخبار
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 rounded-lg bg-black-800 border border-gold-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500"
              />
              <button className="btn-primary">
                اشترك
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const footerLinks = {
    product: [
      { label: 'التوكنوميكس', path: '/tokenomics' },
      { label: 'الأمان', path: '/security' },
      { label: 'الخارطة الطريقية', path: '/roadmap' },
      { label: 'الورقة البيضاء', path: '/whitepaper' },
    ],
    learn: [
      { label: 'مقدمة DeFi', path: '/learn/defi-101' },
      { label: 'أساسيات البلوكتشين', path: '/learn/blockchain-basics' },
      { label: 'دليل المحافظ', path: '/learn/wallet-guide' },
      { label: 'القاموس', path: '/learn/glossary' },
    ],
    community: [
      { label: 'المجتمع', path: '/community' },
      { label: 'السفراء', path: '/community/ambassadors' },
      { label: 'الأحداث', path: '/community/events' },
      { label: 'جدار المؤمنين', path: '/community/believers' },
    ],
    support: [
      { label: 'الأسئلة الشائعة', path: '/support/faq' },
      { label: 'الدعم الفني', path: '/support' },
      { label: 'اتصل بنا', path: '/contact' },
      { label: 'الوظائف', path: '/careers' },
    ],
  };

  const socialLinks = [
    { icon: '𝕏', label: 'Twitter', url: 'https://twitter.com' },
    { icon: 'f', label: 'Facebook', url: 'https://facebook.com' },
    { icon: 'in', label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: '▶', label: 'YouTube', url: 'https://youtube.com' },
    { icon: '📱', label: 'Telegram', url: 'https://telegram.org' },
    { icon: '💬', label: 'Discord', url: 'https://discord.com' },
  ];

  return (
    <footer className="bg-black-950 text-white border-t-2 border-gold-500">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
              <img src="/images/md1usd_logo.png" alt="MD1USD" className="w-10 h-10 object-contain" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gold-500">MD1</span>
                <span className="text-xs text-blue-400">STABLECOIN</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              العملة المستقرة المضمونة 100% بالأصول والموافقة شرعياً
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-gold-500 font-bold mb-4">المنتج</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-gold-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn Links */}
          <div>
            <h4 className="text-blue-400 font-bold mb-4">التعليم</h4>
            <ul className="space-y-2">
              {footerLinks.learn.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-red-400 font-bold mb-4">المجتمع</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-gold-500 font-bold mb-4">الدعم</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-gold-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gold-500/30 pt-8 mb-8">
          <h4 className="text-white font-bold mb-4">تابعنا على وسائل التواصل</h4>
          <div className="flex gap-4 flex-wrap">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center hover:bg-gold-500 hover:text-black-900 transition-all duration-300"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gold-500/30 pt-8">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 MD1USD. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <Link 
                to="/security" 
                className="text-gray-400 hover:text-gold-500 transition-colors text-sm"
              >
                سياسة الخصوصية
              </Link>
              <Link 
                to="/support" 
                className="text-gray-400 hover:text-gold-500 transition-colors text-sm"
              >
                شروط الاستخدام
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-400 hover:text-gold-500 transition-colors text-sm"
              >
                اتصل بنا
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black-900 border-t border-gold-500/30 py-4">
        <div className="container-custom text-center text-gray-500 text-sm">
          <p>
            تم بناء MD1USD بواسطة مجتمع من المطورين والمتحمسين لتكنولوجيا البلوكتشين
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

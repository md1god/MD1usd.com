import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'الرئيسية', path: '/' },
    {
      label: 'التعليم',
      submenu: [
        { label: 'مقدمة DeFi', path: '/learn/defi-101' },
        { label: 'التمويل الإسلامي', path: '/learn/islamic-finance' },
        { label: 'أساسيات البلوكتشين', path: '/learn/blockchain-basics' },
        { label: 'العقود الذكية', path: '/learn/smart-contracts' },
        { label: 'دليل المحافظ', path: '/learn/wallet-guide' },
        { label: 'الأمان', path: '/learn/security-best-practices' },
        { label: 'القاموس', path: '/learn/glossary' },
      ],
    },
    {
      label: 'الشبكات',
      submenu: [
        { label: 'Ethereum', path: '/networks/ethereum' },
        { label: 'Polygon', path: '/networks/polygon' },
        { label: 'BNB Chain', path: '/networks/bnb' },
        { label: 'Solana', path: '/networks/solana' },
        { label: 'المقارنة', path: '/networks/comparison' },
      ],
    },
    {
      label: 'المجتمع',
      submenu: [
        { label: 'المجتمع', path: '/community' },
        { label: 'السفراء', path: '/community/ambassadors' },
        { label: 'الأحداث', path: '/community/events' },
        { label: 'الحوكمة', path: '/community/governance' },
        { label: 'التصويت', path: '/community/voting' },
        { label: 'جدار المؤمنين', path: '/community/believers' },
      ],
    },
    {
      label: 'الأخبار',
      submenu: [
        { label: 'المدونة', path: '/blog' },
        { label: 'الأخبار', path: '/news' },
        { label: 'الإعلانات', path: '/announcements' },
        { label: 'دراسات الحالة', path: '/case-studies' },
        { label: 'مجموعة الوسائط', path: '/media-kit' },
      ],
    },
    {
      label: 'الدعم',
      submenu: [
        { label: 'الأسئلة الشائعة', path: '/support/faq' },
        { label: 'الدعم الفني', path: '/support' },
        { label: 'استكشاف الأخطاء', path: '/support/troubleshooting' },
        { label: 'اتصل بنا', path: '/contact' },
        { label: 'الوظائف', path: '/careers' },
        { label: 'Bug Bounty', path: '/bug-bounty' },
      ],
    },
    {
      label: 'للمطورين',
      submenu: [
        { label: 'الشراكات', path: '/partnerships' },
        { label: 'التكاملات', path: '/integrations' },
        { label: 'توثيق API', path: '/developers/api' },
        { label: 'الموارد', path: '/developers/resources' },
      ],
    },
    { label: 'من نحن', path: '/about' },
    { label: 'لوحة التحكم', path: '/dashboard' },
  ];

  const externalLinks = [
    { label: 'MDM1', url: 'https://mdm1.org/pages/ATM.html', icon: '⛩️' },
    { label: 'ATM', url: 'https://mdm1.org/pages/ATM.html', icon: '🏧' },
    { label: 'دخول', url: 'https://mdm1.org/pages/join.html', icon: '🔑' },
  ];

  return (
    <nav className="bg-gradient-to-r from-black-900 via-black-800 to-black-900 text-white shadow-lg sticky top-0 z-50 border-b-2 border-gold-500">
      <div className="container-custom flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/images/md1usd_logo.png" alt="MD1USD" className="w-32 h-32 object-contain" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gold-500">MD1</span>
            <span className="text-xs text-blue-400">STABLECOIN</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.submenu ? (
                <>
                  <button className="hover:text-gold-500 transition-colors py-2 font-medium">
                    {item.label}
                  </button>
                  <div className="absolute left-0 mt-0 w-48 bg-black-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-gold-500/30">
                    {item.submenu.map((subitem, subindex) => (
                      <Link
                        key={subindex}
                        to={subitem.path}
                        className="block px-4 py-2 hover:bg-gold-500 hover:text-black-900 first:rounded-t-lg last:rounded-b-lg transition-colors"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link to={item.path} className="hover:text-gold-500 transition-colors font-medium">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* External quick links (desktop) */}
        <div className="hidden lg:flex gap-2">
          {externalLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1.5 rounded-full border border-gold-500/50 hover:bg-gold-500 hover:text-black-900 transition-all"
            >
              {link.icon} {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl hover:text-gold-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black-800 p-4 border-t border-gold-500/30">
          <div className="flex gap-2 mb-4 flex-wrap">
            {externalLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-3 py-1.5 rounded-full border border-gold-500/50 hover:bg-gold-500 hover:text-black-900 transition-all"
              >
                {link.icon} {link.label}
              </a>
            ))}
          </div>
          {menuItems.map((item, index) => (
            <div key={index} className="mb-4">
              {item.submenu ? (
                <>
                  <p className="font-bold text-gold-500 mb-2">{item.label}</p>
                  <div className="mr-4 space-y-2">
                    {item.submenu.map((subitem, subindex) => (
                      <Link
                        key={subindex}
                        to={subitem.path}
                        className="block hover:text-gold-500 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link 
                  to={item.path} 
                  className="block hover:text-gold-500 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

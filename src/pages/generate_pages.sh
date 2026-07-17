#!/bin/bash

# قالب الصفحات
create_page() {
  local name=$1
  local title=$2
  local description=$3
  
  cat > "${name}.tsx" << EOF
import React from 'react';

const ${name}: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-dark text-white py-16">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-4">${title}</h1>
          <p className="text-xl text-gray-300">${description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <p className="text-gray-700 leading-relaxed">
              محتوى الصفحة قيد التطوير...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ${name};
EOF
  echo "✓ تم إنشاء $name"
}

# إنشاء الصفحات
create_page "IslamicFinance" "التمويل الإسلامي" "فهم التمويل الإسلامي والعملات المستقرة الشرعية"
create_page "BlockchainBasics" "أساسيات البلوكتشين" "دليل شامل لفهم تكنولوجيا البلوكتشين"
create_page "SmartContracts" "العقود الذكية" "كيف تعمل العقود الذكية وأمثلة عملية"
create_page "WalletGuide" "دليل المحافظ الرقمية" "اختر محفظتك الآمنة وأدر أموالك بثقة"
create_page "SecurityBestPractices" "أفضل ممارسات الأمان" "حماية نفسك من الاحتيال والقرصنة"
create_page "GlossaryTerms" "قاموس المصطلحات" "شرح المصطلحات التقنية والمالية"
create_page "EthereumNetwork" "شبكة Ethereum" "كل ما تحتاج لمعرفته عن Ethereum"
create_page "PolygonNetwork" "شبكة Polygon" "الشبكة السريعة والرخيصة"
create_page "BNBNetwork" "شبكة BNB Chain" "البديل السريع والموثوق"
create_page "SolanaNetwork" "شبكة Solana" "سرعة فائقة وتكاليف منخفضة"
create_page "NetworkComparison" "مقارنة الشبكات" "قارن بين جميع الشبكات المدعومة"
create_page "Community" "المجتمع" "انضم لمجتمع MD1USD العالمي"
create_page "Ambassadors" "السفراء" "كن سفيراً لـ MD1USD واكسب مكافآت"
create_page "Events" "الأحداث والفعاليات" "الأحداث القادمة والمؤتمرات"
create_page "Governance" "الحوكمة" "نظام الحوكمة اللامركزي"
create_page "Voting" "نظام التصويت" "شارك في قرارات المشروع"
create_page "WallOfBelievers" "جدار المؤمنين" "قصص المستخدمين والمؤمنين"
create_page "Blog" "المدونة" "آخر الأخبار والمقالات التقنية"
create_page "News" "الأخبار" "أحدث أخبار المشروع"
create_page "Announcements" "الإعلانات" "الإعلانات الرسمية والتحديثات"
create_page "CaseStudies" "دراسات الحالة" "حالات نجاح وتطبيقات عملية"
create_page "MediaKit" "مجموعة الوسائط" "الصور والفيديوهات الرسمية"
create_page "FAQ" "الأسئلة الشائعة" "إجابات على الأسئلة الشائعة"
create_page "Support" "الدعم الفني" "احصل على الدعم والمساعدة"
create_page "Troubleshooting" "استكشاف الأخطاء" "حل المشاكل الشائعة"
create_page "Contact" "اتصل بنا" "طرق التواصل معنا"
create_page "Careers" "الوظائف" "انضم لفريقنا"
create_page "BugBounty" "برنامج Bug Bounty" "أبلغ عن الثغرات واكسب مكافآت"
create_page "Partnerships" "الشراكات" "شركاؤنا الاستراتيجيون"
create_page "Integrations" "التكاملات" "التطبيقات والخدمات المتكاملة"
create_page "APIDocumentation" "توثيق API" "دليل المطورين الكامل"
create_page "DeveloperResources" "موارد المطورين" "أدوات وموارد للمطورين"
create_page "Dashboard" "لوحة التحكم الحية" "بيانات حية عن المشروع"

echo ""
echo "✓ تم إنشاء جميع الصفحات بنجاح!"

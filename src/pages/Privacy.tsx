import React from 'react';
import { Link } from 'react-router-dom';
import LegalLayout from '../components/LegalLayout';

const Privacy: React.FC = () => (
  <LegalLayout
    emoji="🔐"
    title="سياسة الخصوصية"
    subtitle="ما نجمعه، وكيف نستخدم الإعلانات وملفات تعريف الارتباط، وكيف تتحكم في بياناتك"
    updated="24 نوفمبر 2026"
    intro={
      <p>
        تنطبق هذه السياسة على موقع MD1USD على العنوان https://md1usd.com. نحترم خصوصيتك: لا يتطلب تصفح الموقع إنشاء حساب،
        ولا نبيع بياناتك الشخصية لأي جهة. تشرح الأقسام التالية المعلومات التي قد تصلنا، والخدمات الخارجية المستخدمة، وخياراتك.
      </p>
    }
    sections={[
      {
        heading: '1. المعلومات التي قد نجمعها',
        body: (
          <>
            <p>
              <strong>بيانات تقنية عامة:</strong> عند زيارة الموقع تصل إلى خدمة الاستضافة (GitHub Pages) بيانات مثل عنوان IP ونوع المتصفح
              والصفحات المطلوبة وتاريخ الطلب. تُستخدم لتشغيل الموقع وحمايته وفهم الأداء العام.
            </p>
            <p>
              <strong>ما تراسلنا به:</strong> إن راسلتنا عبر البريد الإلكتروني فسنستخدم بريدك ومحتوى رسالتك للرد عليك فقط.
            </p>
            <p>
              <strong>بيانات على جهازك:</strong> قد يحفظ الموقع في متصفحك تفضيلات بسيطة (مثل حالة مشغّل الصوت) باستخدام التخزين المحلي
              (localStorage)، ولا تُرسل إلى خوادمنا.
            </p>
            <p>
              <strong>ما لا نطلبه أبدًا:</strong> كلمات المرور، أو عبارة استرداد المحفظة (Seed Phrase)، أو المفاتيح الخاصة، أو بيانات
              البطاقات. لا تشاركها مع أي جهة تدّعي تمثيل MD1USD.
            </p>
          </>
        ),
      },
      {
        heading: '2. ملفات تعريف الارتباط والإعلانات (Google AdSense)',
        body: (
          <>
            <p>
              قد تُعرض على الموقع إعلانات عبر <strong>Google AdSense</strong>. تستخدم Google، بصفتها جهة خارجية (Third-party vendor)،
              ملفات تعريف الارتباط لعرض الإعلانات، ومنها <strong>ملف DART</strong>، لعرض إعلانات لك بناءً على زياراتك لموقعنا ولمواقع
              أخرى على الإنترنت. وتستخدم Google وشركاؤها هذه الملفات لتقديم إعلانات مبنية على زيارتك السابقة لهذا الموقع أو لمواقع أخرى.
            </p>
            <ul className="list-disc pr-6 space-y-2">
              <li>لا نصل إلى ملفات تعريف الارتباط التي تضعها Google أو شركاؤها ولا نتحكم فيها.</li>
              <li>
                يمكنك إلغاء استخدام ملف DART وتخصيص الإعلانات عبر{' '}
                <a className="text-blue-400 underline" href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
                  إعدادات الإعلانات في Google
                </a>
                .
              </li>
              <li>
                يمكنك إلغاء استخدام ملفات تعريف الارتباط لدى بعض الشركاء الإعلانيين عبر{' '}
                <a className="text-blue-400 underline" href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer">
                  optout.aboutads.info
                </a>
                .
              </li>
              <li>
                لمعرفة كيف تستخدم Google البيانات عند استخدام مواقع شركائها:{' '}
                <a
                  className="text-blue-400 underline"
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  policies.google.com/technologies/partner-sites
                </a>
                .
              </li>
            </ul>
            <p>
              للمستخدمين في المنطقة الاقتصادية الأوروبية والمملكة المتحدة وسويسرا: تُعرض الإعلانات المخصّصة وفق موافقتك عبر رسالة
              الموافقة المعتمدة من Google عند توفرها، ويمكنك سحب موافقتك في أي وقت. كما يمكنك حذف ملفات تعريف الارتباط أو حظرها من
              إعدادات متصفحك.
            </p>
          </>
        ),
      },
      {
        heading: '3. الخدمات الخارجية والروابط',
        body: (
          <p>
            يعتمد الموقع على GitHub Pages للاستضافة، وعلى Google AdSense للإعلانات، وقد يعرض روابط لمستكشفات البلوكتشين
            (Etherscan وPolygonscan وBscScan وSolscan) ومنصات التبادل ووسائل التواصل. لهذه الجهات سياسات خصوصية مستقلة، ولا نتحكم في
            محتواها ولا نتحمل مسؤوليتها.
          </p>
        ),
      },
      {
        heading: '4. بيانات البلوكتشين العامة',
        body: (
          <p>
            المعاملات على شبكات البلوكتشين علنية ودائمة بطبيعتها ولا يمكن حذفها. عناوين المحافظ التي تتفاعل بها مع العقود الذكية مرئية
            لأي شخص على المستكشفات، وهذا خارج نطاق سيطرتنا.
          </p>
        ),
      },
      {
        heading: '5. حقوقك والتواصل',
        body: (
          <p>
            يحق لك طلب الاطلاع على أي بيانات لدينا عنك أو تصحيحها أو حذفها. راسلنا على{' '}
            <a className="text-blue-400 underline" href="mailto:info@md1usd.com">info@md1usd.com</a> أو عبر{' '}
            <Link className="text-blue-400 underline" to="/contact">صفحة التواصل</Link>. الموقع غير موجَّه للأطفال دون 13 عامًا. قد نحدّث
            هذه السياسة، ويظهر تاريخ آخر تحديث أعلاها. راجع أيضًا <Link className="text-blue-400 underline" to="/terms">الشروط والأحكام</Link>.
          </p>
        ),
      },
    ]}
  />
);

export default Privacy;

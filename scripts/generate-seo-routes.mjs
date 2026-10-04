import fs from 'node:fs';
import path from 'node:path';

const routes = {
  '/': ['MD1USD | عملة مستقرة شفافة مفتوحة المصدر', 'MD1USD: عملة مستقرة شفافة ومفتوحة المصدر مع معلومات عن الأمان والاحتياطي والشبكات والحوكمة.'],
  '/about': ['عن MD1USD | العملة المستقرة المفتوحة المصدر', 'تعرف على مشروع MD1USD، أهدافه، مبادئ الشفافية، والمعلومات الرسمية للمجتمع.'],
  '/tokenomics': ['Tokenomics MD1USD | اقتصاد العملة', 'تعرف على اقتصاد MD1USD وتوزيع العملة والمعلومات الرسمية المتاحة للمجتمع.'],
  '/security': ['أمان MD1USD | الشفافية والتحقق', 'معلومات أمان MD1USD وممارسات التحقق وحماية المستخدمين في مشروع العملة المستقرة.'],
  '/whitepaper': ['MD1USD Whitepaper | الورقة البيضاء', 'اقرأ الورقة البيضاء الرسمية لمشروع MD1USD ومبادئ العمل والشفافية.'],
  '/roadmap': ['خارطة طريق MD1USD | مراحل المشروع', 'تابع خارطة طريق MD1USD والمراحل المعلنة لتطوير المشروع والمجتمع.'],
  '/learn/defi-101': ['DeFi 101 | التمويل اللامركزي وMD1USD', 'دليل مبسط لفهم التمويل اللامركزي وعلاقته بالعملات المستقرة.'],
  '/learn/islamic-finance': ['التمويل الإسلامي وMD1USD', 'مقدمة تعليمية حول مبادئ التمويل الإسلامي وتطبيقاتها في الأصول الرقمية.'],
  '/learn/blockchain-basics': ['أساسيات البلوكتشين | MD1USD', 'تعلم أساسيات البلوكتشين والشبكات والعقود الذكية بلغة مبسطة.'],
  '/learn/smart-contracts': ['العقود الذكية | MD1USD', 'شرح مبسط للعقود الذكية وكيفية استخدامها في تطبيقات البلوكتشين.'],
  '/learn/wallet-guide': ['دليل المحافظ الرقمية | MD1USD', 'دليل تعليمي لاختيار واستخدام المحافظ الرقمية بأمان.'],
  '/learn/security-best-practices': ['أفضل ممارسات أمان العملات الرقمية', 'نصائح عملية لحماية المحافظ والحسابات والأصول الرقمية.'],
  '/learn/glossary': ['قاموس البلوكتشين والعملات الرقمية | MD1USD', 'مصطلحات مهمة في البلوكتشين والعملات الرقمية والتمويل اللامركزي.'],
  '/networks/ethereum': ['MD1USD على Ethereum', 'معلومات MD1USD المتعلقة بشبكة Ethereum.'],
  '/networks/polygon': ['MD1USD على Polygon', 'معلومات MD1USD المتعلقة بشبكة Polygon.'],
  '/networks/bnb': ['MD1USD على BNB Chain', 'معلومات MD1USD المتعلقة بشبكة BNB Chain.'],
  '/networks/solana': ['MD1USD على Solana', 'معلومات MD1USD المتعلقة بشبكة Solana.'],
  '/networks/comparison': ['مقارنة الشبكات | MD1USD', 'مقارنة تعليمية بين الشبكات المتاحة وتكاليفها واستخداماتها.'],
  '/community': ['مجتمع MD1USD', 'انضم إلى مجتمع MD1USD وتابع الأخبار والفعاليات والمساهمات.'],
  '/blog': ['مدونة MD1USD', 'مقالات وتحديثات تعليمية حول العملات المستقرة والبلوكتشين.'],
  '/news': ['أخبار MD1USD', 'آخر أخبار وتحديثات مشروع MD1USD.'],
  '/support/faq': ['الأسئلة الشائعة | MD1USD', 'إجابات عن الأسئلة الشائعة حول MD1USD والمشروع والمجتمع.'],
  '/contact': ['تواصل مع فريق MD1USD', 'طرق التواصل الرسمية مع مشروع MD1USD.'],
  '/developers/api': ['وثائق API للمطورين | MD1USD', 'وثائق وموارد API للمطورين الراغبين في التكامل مع MD1USD.'],
};
const dist = 'dist';
const source = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
for (const [route, [title, description]] of Object.entries(routes)) {
  const target = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route, 'index.html');
  fs.mkdirSync(path.dirname(target), { recursive: true });
  let html = source.replace(/<title>.*?<\/title>/is, `<title>${title}</title>`)
    .replace(/<meta name="description" content=".*?"\s*\/>?/i, `<meta name="description" content="${description}">`)
    .replace(/<meta property="og:title" content=".*?"\s*\/>?/i, `<meta property="og:title" content="${title}">`)
    .replace(/<meta property="og:description" content=".*?"\s*\/>?/i, `<meta property="og:description" content="${description}">`)
    .replace(/<link rel="canonical" href=".*?"\s*\/>?/i, `<link rel="canonical" href="https://md1usd.com${route === '/' ? '/' : route + '/'}">`);
  fs.writeFileSync(target, html);
}

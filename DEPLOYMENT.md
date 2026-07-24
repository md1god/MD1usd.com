# MD1USD.com — تعليمات النشر (GitHub Pages)

## هذا مشروع React (Vite) — يحتاج بناء (Build) قبل النشر

لا يمكن نشره مباشرة كملفات ثابتة؛ يجب أن يمر عبر `npm run build` أولاً،
وهذا بالضبط ما يفعله `.github/workflows/Deploy.yml` تلقائياً.

## الخطوات (تتم تلقائياً بواسطة GitHub Actions)

1. عند كل `push` إلى فرع `main`، يعمل `Deploy.yml` تلقائياً:
   - `npm ci` → تثبيت الحزم
   - `npm run build` → بناء الموقع في `dist/`
   - نسخ `dist/index.html` إلى `dist/404.html` (ضروري لعمل React Router
     بشكل صحيح على GitHub Pages، لأن GitHub Pages لا يعرف مفهوم الـ SPA
     routing، فيُعيد توجيه أي مسار غير معروف إلى `404.html` والذي هو في
     الواقع نسخة من الصفحة الرئيسية، فيتولى React Router عرض الصفحة الصحيحة)
   - رفع `dist/` كـ Pages Artifact ونشره

## إعداد الريبو (مرة واحدة فقط)

من إعدادات الريبو على GitHub:
- Settings → Pages → Build and deployment → Source: اختر **GitHub Actions**
  (وليس "Deploy from a branch")

## إعداد الدومين المخصص (CNAME)

- ملف `public/CNAME` يحتوي على `md1usd.com` وهذا كافٍ — GitHub Pages
  يقرأه تلقائياً من `dist/CNAME` بعد النشر.
- من جهة مزوّد الدومين، يجب أن يشير سجل DNS إلى GitHub Pages:
  - إما CNAME يشير إلى `md1god.github.io`
  - أو A records تشير إلى عناوين IP الخاصة بـ GitHub Pages:
    `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

## التحقق بعد النشر

بعد كل نشر، تأكد من:
- فتح الموقع مباشرة على `https://md1usd.com/` يعمل
- فتح رابط داخلي مباشرة (مثل `https://md1usd.com/security`) يعمل بدون 404
  (هذا يتحقق من أن `404.html` نُسخ بنجاح)
- الشعار والموسيقى يظهران في الصفحة (يتحقق من أن `public/images` و
  `public/audio` نُسخا بنجاح إلى `dist/`)

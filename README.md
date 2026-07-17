# MD1USD.com

موقع React (Vite + TypeScript + Tailwind CSS) لعملة MD1USD المستقرة، المضمونة 100%
والمتوافقة مع الشريعة الإسلامية.

## البنية الفعلية للمشروع

هذا **مشروع React** (وليس ملفات HTML منفصلة). كل الصفحات هي مكوّنات React
داخل `src/pages/`، ويتم بناؤها معاً في حزمة واحدة قابلة للنشر عبر `npm run build`.

```
MD1usd_com/
├── src/
│   ├── App.tsx                 ← تعريف كل المسارات (Routes) هنا
│   ├── main.tsx                ← نقطة الدخول
│   ├── components/              ← Navbar, Footer, CinematicIntro, GlobalAudioPlayer
│   │   └── media/                ← MediaImage, MediaVideo, PageHero (مكوّنات مشتركة)
│   ├── pages/                   ← كل صفحة = ملف .tsx واحد (39 صفحة)
│   └── styles/globals.css
├── public/                      ← كل ما هنا يُنسخ كما هو إلى الموقع المنشور
│   ├── images/                    ← الصور (بما فيها images/pages/<page>/... للصور المخصصة)
│   ├── videos/pages/<page>/...    ← الفيديوهات (webm)
│   ├── audio/                     ← الموسيقى (موجودة وتعمل بالفعل)
│   ├── whitepaper/                ← ملف PDF الورقة البيضاء
│   ├── CNAME, robots.txt, sitemap.xml
├── .github/workflows/            ← أتمتة GitHub Actions (بناء، فحص، مراقبة)
└── MEDIA_NEEDED.md               ← قائمة كاملة بكل صورة/فيديو ناقص واسمه بالضبط
```

## تشغيل المشروع محلياً

```bash
npm install
npm run dev       # خادم تطوير مع إعادة تحميل فورية
npm run build     # بناء نسخة الإنتاج في مجلد dist/
npm run preview   # معاينة نسخة الإنتاج محلياً
```

## قاعدة أساسية: أضف الوسائط في public/ فقط

أي صورة أو فيديو أو صوت يجب أن يكون داخل `public/` (وليس في جذر المشروع) وإلا
فلن يظهر إطلاقاً في الموقع المنشور، لأن أداة البناء (Vite) لا تنسخ تلقائياً إلا
محتويات `public/`.

## المسارات (Routes) بالكامل

جميع المسارات معرّفة في `src/App.tsx`. لإضافة صفحة جديدة:
1. أنشئ مكوّن جديد في `src/pages/YourPage.tsx`
2. أضف `<Route path="/your-path" element={<YourPage />} />` في `App.tsx`
3. أضف رابطاً له في `src/components/Navbar.tsx` و/أو `Footer.tsx`

## الوسائط الناقصة

راجع `MEDIA_NEEDED.md` للحصول على القائمة الكاملة بأسماء كل صورة وفيديو
ناقص، والمسار الدقيق الذي يجب رفعه إليه، والصفحة التي تستخدمه.

## النشر

يتم النشر تلقائياً على GitHub Pages عبر `.github/workflows/Deploy.yml` عند
كل push إلى فرع `main`. راجع `DEPLOYMENT.md` للتفاصيل الكاملة.

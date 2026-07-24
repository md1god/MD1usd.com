# MD1USD.com

موقع React (Vite + TypeScript + Tailwind CSS) لعملة MD1USD المستقرة، المضمونة 1:1
باحتياطي حقيقي، مفتوحة المصدر وشفافة بالكامل.

## البنية

```
MD1usd_com/
├── src/
│   ├── App.tsx              ← كل المسارات (Routes) هنا
│   ├── main.tsx              ← نقطة الدخول
│   ├── components/            ← Navbar, Footer, CinematicIntro, GlobalAudioPlayer
│   │   └── media/               ← MediaImage, PageHero (مكوّنات مشتركة)
│   ├── pages/                  ← كل صفحة = ملف .tsx واحد (40 صفحة)
│   └── styles/globals.css
├── public/                    ← يُنسخ كما هو إلى الموقع المنشور
│   ├── images/                  ← كل الصور، بما فيها images/pages/<page>/...
│   ├── audio/                   ← الموسيقى
│   ├── whitepaper/               ← ملف PDF الورقة البيضاء (جاهز)
│   ├── CNAME, robots.txt, sitemap.xml
└── .github/workflows/          ← أتمتة GitHub Actions (بناء ونشر)
```

## تشغيل المشروع محلياً

```bash
npm install
npm run dev       # خادم تطوير مع إعادة تحميل فورية
npm run build     # بناء نسخة الإنتاج في مجلد dist/
npm run preview   # معاينة نسخة الإنتاج محلياً
```

## قاعدة أساسية: أضف الوسائط في public/ فقط

أي صورة أو صوت يجب أن يكون داخل `public/` (وليس في جذر المشروع) وإلا فلن
يظهر في الموقع المنشور، لأن Vite لا ينسخ تلقائياً إلا محتويات `public/`.

## إضافة صفحة جديدة

1. أنشئ مكوّن جديد في `src/pages/YourPage.tsx`
2. أضف `<Route path="/your-path" element={<YourPage />} />` في `App.tsx`
3. أضف رابطاً له في `Navbar.tsx` و/أو `Footer.tsx`

## النشر

يتم النشر تلقائياً على GitHub Pages عبر `.github/workflows/Deploy.yml` عند كل
push إلى فرع `main`. راجع `DEPLOYMENT.md` للتفاصيل الكاملة.

## روابط مهمة

- الموقع: https://md1usd.com
- المنصة الأم: https://mdm1.org
- التواصل: info@md1usd.com / info@mdm1.org

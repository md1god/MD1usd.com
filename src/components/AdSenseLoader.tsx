import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// معرّف الناشر في Google AdSense. وسم <meta name="google-adsense-account"> موجود في index.html للتحقق من ملكية الموقع.
const CLIENT = 'ca-pub-8270783733461099';
const SCRIPT_ID = 'adsense-loader';

// الصفحات الغنية بالمحتوى فقط (المقالات). صفحات السياسات والأدوات والصفحات القصيرة لا تحمّل كود الإعلانات إطلاقًا.
const isContentRoute = (pathname: string) => /^\/guides\/[^/]+\/?$/.test(pathname);

const AdSenseLoader: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!isContentRoute(pathname) || document.getElementById(SCRIPT_ID)) return;
    const s = document.createElement('script');
    s.id = SCRIPT_ID;
    s.async = true;
    s.crossOrigin = 'anonymous';
    s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CLIENT}`;
    document.head.appendChild(s);
  }, [pathname]);
  return null;
};

export default AdSenseLoader;

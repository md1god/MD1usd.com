import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const nodes = [
  { label: 'الاحتياطيات', value: '100%', href: '/tokenomics', tone: 'gold' },
  { label: 'الأمان', value: 'مفتوح', href: '/security', tone: 'blue' },
  { label: 'الشبكات', value: '4+', href: '/networks/comparison', tone: 'cyan' },
  { label: 'المجتمع', value: 'انضم', href: '/community', tone: 'red' },
];

const SpatialNetwork: React.FC = () => {
  const [lite, setLite] = useState(false);
  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    setLite(window.matchMedia('(prefers-reduced-motion: reduce)').matches || Boolean(connection?.saveData) || (navigator.hardwareConcurrency || 8) <= 4);
  }, []);
  return (
    <section className={`spatial-network ${lite ? 'spatial-network--lite' : ''}`} aria-labelledby="spatial-network-title">
      <div className="spatial-network__backdrop" aria-hidden="true" />
      <div className="spatial-network__copy">
        <span className="spatial-network__eyebrow">MD1USD / SPATIAL LEDGER</span>
        <h2 id="spatial-network-title">شبكة واحدة.<br /><em>ثقة قابلة للرؤية.</em></h2>
        <p>استكشف العملة من خلال شبكة بلورية تفاعلية: كل نقطة تقودك إلى دليل أو بيانات أو مجتمع، من دون تحميل محرك ألعاب ثقيل.</p>
        <button className="spatial-network__toggle" type="button" onClick={() => setLite((value) => !value)}>{lite ? 'تشغيل الحركة' : 'الوضع الخفيف'}</button>
      </div>
      <div className="spatial-network__map" aria-label="روابط شبكة MD1USD">
        <div className="spatial-network__core"><span>MD1<span>USD</span></span><small>TRANSPARENT CORE</small></div>
        {nodes.map((node, index) => <Link key={node.label} to={node.href} className={`spatial-node spatial-node--${node.tone} spatial-node--${index + 1}`}><strong>{node.value}</strong><small>{node.label}</small></Link>)}
      </div>
    </section>
  );
};
export default SpatialNetwork;

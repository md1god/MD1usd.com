import React from 'react';
import PageHero from '../components/media/PageHero';

const NetworkComparison: React.FC = () => {
  const rows = [
    { feature: 'الحالة', eth: '✓ نشط', poly: '✓ نشط', bnb: '✓ نشط', sol: '✓ نشط' },
    { feature: 'الضمان الداعم', eth: 'LUSD', poly: 'USDC', bnb: 'احتياطي مضمون', sol: 'قيد الإعداد' },
    { feature: 'متوسط رسوم المعاملة', eth: 'مرتفعة نسبياً', poly: 'منخفضة جداً', bnb: 'منخفضة جداً', sol: 'شبه معدومة' },
    { feature: 'سرعة التأكيد', eth: '~12 ثانية', poly: '~2 ثانية', bnb: '~3 ثواني', sol: '< 1 ثانية' },
    { feature: 'أفضل استخدام', eth: 'قيمة تخزين طويلة الأمد', poly: 'استخدام يومي DeFi', bnb: 'انتشار وسيولة واسعة', sol: 'معاملات عالية التردد' },
  ];

  return (
    <div className="min-h-screen bg-black-950">
      <PageHero emoji="🌐" title="مقارنة الشبكات" subtitle="اختر الشبكة المناسبة لاحتياجاتك من بين الشبكات الأربع المدعومة" />

      <section className="py-20 bg-black-900">
        <div className="container-custom overflow-x-auto">
          <table className="w-full text-right border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b-2 border-gold-500">
                <th className="p-4 text-gold-500">الميزة</th>
                <th className="p-4 text-white">Ethereum</th>
                <th className="p-4 text-white">Polygon</th>
                <th className="p-4 text-white">BNB Chain</th>
                <th className="p-4 text-white">Solana</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-gold-500/10 hover:bg-black-800/50">
                  <td className="p-4 font-bold text-gold-500">{r.feature}</td>
                  <td className="p-4 text-gray-300">{r.eth}</td>
                  <td className="p-4 text-gray-300">{r.poly}</td>
                  <td className="p-4 text-gray-300">{r.bnb}</td>
                  <td className="p-4 text-gray-300">{r.sol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default NetworkComparison;

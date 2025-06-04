'use client';

import { useLanguage } from '../contexts/language-context';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, BarChart3, Package } from 'lucide-react';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: ShoppingCart,
      title: t.features.cashier.title,
      description: t.features.cashier.description,
    },
    {
      icon: BarChart3,
      title: t.features.reports.title,
      description: t.features.reports.description,
    },
    {
      icon: Package,
      title: t.features.products.title,
      description: t.features.products.description,
    },
  ];

  return (
    <section id='features' className='py-20 px-4 bg-white'>
      <div className='container mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
            {t.features.title}
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            {t.features.subtitle}
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <Card
              key={index}
              className='border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-teal-50'
            >
              <CardContent className='p-8 text-center'>
                <div className='w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                  <feature.icon className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useLanguage } from '../contexts/language-context';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, BarChart3, Package, ArrowRight } from 'lucide-react';
import Image from 'next/image';

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
    <section
      id='features'
      className='py-24 px-4 bg-gradient-to-b from-white to-blue-50'
    >
      <div className='container mx-auto'>
        <div className='text-center mb-16'>
          <span className='bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full mb-4 inline-block'>
            Fitur Unggulan
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
            {t.features.title}
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            {t.features.subtitle}
          </p>
        </div>

        {/* App screenshot with features - Moved phone to left */}
        <div className='grid lg:grid-cols-2 gap-12 items-center mb-20'>
          {/* App Screenshot - Now on the left with hover/touch animation */}
          <div className='order-1 flex justify-center lg:justify-center'>
            <div className='relative'>
              {/* Removed background blur effect */}
              <div className='relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:rotate-1'>
                <Image
                  src='/gambar4.png'
                  alt='Flexy App Product List'
                  width={320}
                  height={600}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Features list - Now on the right */}
          <div className='order-2'>
            <div className='space-y-8'>
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className='border border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group'
                >
                  <CardContent className='p-6 flex items-start gap-4'>
                    <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
                      <feature.icon className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-gray-800 mb-2 flex items-center gap-2'>
                        {feature.title}
                        <ArrowRight className='w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300' />
                      </h3>
                      <p className='text-gray-600 leading-relaxed'>
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Additional features showcase */}
        <div className='mt-24'>
          <div className='text-center mb-12'>
            <h3 className='text-3xl font-bold text-gray-800'>
              Alasan Mengapa Pilih Aplikasi Kami
            </h3>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                title: 'Mudah Digunakan',
                description:
                  'Antarmuka yang intuitif dan user-friendly untuk semua pengguna',
              },
              {
                title: 'Lengkap',
                description:
                  'Fitur lengkap untuk pengelolaan bisnis Anda dalam satu aplikasi',
              },
              {
                title: 'Support Cepat',
                description:
                  'Dukungan teknis yang responsif untuk membantu Anda',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className='bg-white p-8 rounded-2xl shadow-lg border border-blue-50 hover:border-blue-200 transition-all hover:-translate-y-1 duration-300'
              >
                <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4'>
                  <span className='text-blue-700 font-bold text-xl'>
                    {idx + 1}
                  </span>
                </div>
                <h4 className='text-xl font-bold text-gray-800 mb-3'>
                  {item.title}
                </h4>
                <p className='text-gray-600'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

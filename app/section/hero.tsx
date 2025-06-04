'use client';

import { Button } from '@/components/ui/button';
import { Download, Star } from 'lucide-react';
import { useLanguage } from '../contexts/language-context';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className='py-20 px-4'>
      <div className='container mx-auto text-center'>
        <div className='w-24 h-24 bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl'>
          <span className='text-white font-bold text-4xl'>F</span>
        </div>

        <h1 className='text-5xl md:text-7xl font-bold text-gray-800 mb-6'>
          Flexy
        </h1>

        <p className='text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed'>
          {t.hero.description}
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16'>
          <Button
            size='lg'
            className='bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
            asChild
          >
            <a href='/flexy-latest.apk' download>
              <Download className='w-5 h-5 mr-2' />
              {t.hero.downloadButton}
            </a>
          </Button>

          <div className='flex items-center text-gray-600'>
            <div className='flex -space-x-2 mr-3'>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className='w-5 h-5 text-yellow-400 fill-current'
                />
              ))}
            </div>
            <span className='text-sm'>{t.hero.rating}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

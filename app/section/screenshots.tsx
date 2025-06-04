'use client';

import Image from 'next/image';
import { useLanguage } from '../contexts/language-context';

export default function Screenshots() {
  const { t } = useLanguage();

  return (
    <section
      id='screenshots'
      className='py-20 px-4 bg-gradient-to-br from-teal-50 to-blue-50'
    >
      <div className='container mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
            {t.screenshots.title}
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            {t.screenshots.subtitle}
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300'
            >
              <Image
                src={`/placeholder.svg?height=600&width=300`}
                alt={`Screenshot ${i}`}
                width={300}
                height={600}
                className='w-full h-auto'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

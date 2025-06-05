'use client';

import Image from 'next/image';
import { useLanguage } from '../contexts/language-context';

export default function Screenshots() {
  const { t } = useLanguage();

  // Array of screenshot images from apppreview folder
  const screenshotImages = [
    '/apppreview/preview1.png',
    '/apppreview/preview2.png',
    '/apppreview/preview3.png',
  ];

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
          {screenshotImages.map((image, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1'
            >
              <Image
                src={image}
                alt={`App Screenshot ${index + 1}`}
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

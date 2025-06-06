'use client';

import Image from 'next/image';
import { useLanguage } from '../contexts/language-context';
import { useState } from 'react';

export default function Screenshots() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(1);

  // Array of screenshot images from apppreview folder
  const screenshotImages = [
    '/apppreview/preview1.png',
    '/apppreview/preview2.png',
    '/apppreview/preview3.png',
  ];

  return (
    <section
      id='screenshots'
      className='py-24 px-4 bg-gradient-to-br from-teal-100 via-blue-50 to-indigo-100 relative overflow-hidden'
    >
      {/* Pattern overlay for visual interest */}
      <div className="absolute inset-0 opacity-10 bg-[url('/patterns/dots.svg')]"></div>

      <div className='container mx-auto relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
            <span className='relative'>
              {t.screenshots.title}
              <span className='absolute bottom-1 left-0 w-full h-3 bg-teal-200 opacity-50 -z-10'></span>
            </span>
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            {t.screenshots.subtitle}
          </p>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
          {screenshotImages.map((image, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 ease-in-out
                ${
                  index === activeIndex
                    ? 'scale-100 opacity-100 z-20'
                    : index < activeIndex
                    ? 'scale-90 opacity-70 -translate-x-8 z-10'
                    : 'scale-90 opacity-70 translate-x-8 z-10'
                }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className='bg-black rounded-[32px] p-3 shadow-2xl border-4 border-gray-800'>
                <div className='relative rounded-[22px] overflow-hidden'>
                  <Image
                    src={image}
                    alt={`App Screenshot ${index + 1}`}
                    width={280}
                    height={560}
                    className='w-full h-auto'
                  />
                </div>
                <div className='w-16 h-1 bg-gray-700 rounded-full mx-auto mt-5'></div>
              </div>
            </div>
          ))}
        </div>

        <div className='flex justify-center mt-8 gap-2'>
          {screenshotImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                activeIndex === index ? 'bg-teal-500 w-8' : 'bg-gray-300'
              }`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

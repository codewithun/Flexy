'use client';

import { Button } from '@/components/ui/button';
import { Download, Star, Play } from 'lucide-react';
import { useLanguage } from '../contexts/language-context';
import Image from 'next/image';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 h-screen flex items-center justify-center'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 20 0 L 0 0 0 20" fill="none" stroke="white" stroke-width="0.5" opacity="0.1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)"/%3E%3C/svg%3E")] opacity-20'></div>

      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Left Content */}
          <div className='text-left space-y-8'>
            <div className='space-y-2'>
              {' '}
              <span className='inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20'>
                APLIKASI BISNIS TERPOPULER
              </span>
              <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight'>
                Kelola bisnis
                <br />
                <span className='bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
                  lebih mudah
                </span>
              </h1>
            </div>
            <p className='text-xl text-white/80 max-w-lg leading-relaxed'>
              {t.hero.description}
            </p>
            {/* Download Buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                className='bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2'
                asChild
              >
                <a href='/flexy-latest.apk' download>
                  <svg
                    className='w-6 h-6'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z' />
                  </svg>
                  Download on the App Store
                </a>
              </Button>

              <Button
                size='lg'
                className='bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2'
                asChild
              >
                <a href='/flexy-latest.apk' download>
                  <svg
                    className='w-6 h-6'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path d='M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z' />
                  </svg>
                  GET IT ON Google Play
                </a>
              </Button>
            </div>
            {/* Rating */}
            <div className='flex items-center gap-3'>
              <div className='flex'>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className='w-5 h-5 text-yellow-400 fill-current'
                  />
                ))}
              </div>
              <span className='text-white/80'>{t.hero.rating}</span>
            </div>{' '}
          </div>
          {/* Right Content - App Screenshots */}
          <div className='relative flex items-center justify-center mt-8 lg:mt-0'>
            <div className='flex items-center justify-center gap-0 md:gap-2'>
              {/* First Screenshot */}
              <div className='relative transform hover:scale-105 transition-transform duration-500 -rotate-6 -mr-10 lg:-mr-16'>
                <Image
                  src='/gambar1.png'
                  alt='Flexy App Screenshot 1'
                  width={280}
                  height={550}
                  priority
                  className='max-h-[500px] w-auto drop-shadow-xl'
                />
              </div>{' '}
              {/* Second Screenshot */}
              <div className='relative transform hover:scale-105 transition-transform duration-500 z-10'>
                <Image
                  src='/gambar2.png'
                  alt='Flexy App Screenshot 2'
                  width={300}
                  height={600}
                  priority
                  className='max-h-[550px] w-auto drop-shadow-2xl'
                />
              </div>
              {/* Third Screenshot */}
              <div className='relative transform hover:scale-105 transition-transform duration-500 -rotate-6 -ml-10 lg:-ml-16'>
                <Image
                  src='/gambar3.png'
                  alt='Flexy App Screenshot 3'
                  width={280}
                  height={550}
                  priority
                  className='max-h-[500px] w-auto drop-shadow-xl'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

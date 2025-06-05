'use client';

import { Button } from '@/components/ui/button';
import { Download, Star, Play } from 'lucide-react';
import { useLanguage } from '../contexts/language-context';
import Image from 'next/image';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 min-h-screen flex items-center py-16'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 20 0 L 0 0 0 20" fill="none" stroke="white" stroke-width="0.5" opacity="0.1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)"/%3E%3C/svg%3E")] opacity-20'></div>

      {/* Additional blue background elements */}
      <div className='absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full opacity-10 blur-3xl'></div>
      <div className='absolute bottom-10 left-10 w-80 h-80 bg-cyan-500 rounded-full opacity-10 blur-3xl'></div>

      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Left Content */}
          <div className='text-left space-y-8 order-2 lg:order-1'>
            <div className='space-y-2'>
              {' '}
              <span className='inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20'>
                APLIKASI POINT OF SALES
              </span>
              <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight'>
                Bisnis Fleksibel,
                <br />
                <span className='bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
                  Kelola Cepat
                </span>
              </h1>
            </div>
            <p className='text-xl text-white/80 max-w-lg leading-relaxed'>
              {t.hero.description}
            </p>
            {/* Single Download Button with Animated Icon */}
            <div className='flex justify-start'>
              <Button
                size='lg'
                className='group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 
                text-white px-8 py-6 rounded-xl font-medium transition-all duration-300 
                shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 
                flex items-center justify-center gap-3 text-lg
                hover:scale-105 transform'
                asChild
              >
                <a href='/flexy-latest.apk' download>
                  <Download className='w-6 h-6 transition-all duration-700 group-hover:translate-y-1 animate-bounce' />
                  Download Aplikasi
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - App Screenshots */}
          <div className='flex items-center justify-center order-1 lg:order-2'>
            <div className='relative max-w-3xl w-full'>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-400/40 rounded-full blur-3xl'></div>

              <div className='flex items-center justify-center gap-0 md:gap-2 relative z-10'>
                {/* First Screenshot */}
                <div className='relative transform hover:-translate-y-3 transition-transform duration-500 -rotate-12 -mr-8 md:-mr-16'>
                  <Image
                    src='/gambar1.png'
                    alt='Flexy App Screenshot 1'
                    width={240}
                    height={480}
                    priority
                  />
                </div>

                {/* Second Screenshot */}
                <div className='relative transform hover:-translate-y-6 transition-transform duration-500 z-20'>
                  <Image
                    src='/gambar2.png'
                    alt='Flexy App Screenshot 2'
                    width={260}
                    height={520}
                    priority
                  />
                </div>

                {/* Third Screenshot */}
                <div className='relative transform hover:-translate-y-3 transition-transform duration-500 rotate-12 -ml-8 md:-ml-16'>
                  <Image
                    src='/gambar3.png'
                    alt='Flexy App Screenshot 3'
                    width={240}
                    height={480}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

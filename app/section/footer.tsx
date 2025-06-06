'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Download,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '../contexts/language-context';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className='bg-gradient-to-b from-blue-900 via-blue-950 to-slate-900 text-white py-16 px-4 relative overflow-hidden'>
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('/patterns/circuit-board.svg')]"></div>

      {/* Blue gradient light effect */}
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] opacity-10'></div>
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400 rounded-full filter blur-[128px] opacity-10'></div>

      <div className='container mx-auto relative z-10'>
        <div className='grid md:grid-cols-4 gap-10'>
          <div className='md:col-span-2'>
            <div className='flex items-center space-x-3 mb-5 group'>
              <div className='w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all'>
                <Image
                  src='/logo.png'
                  alt='Flexy Logo'
                  width={36}
                  height={36}
                  className='object-contain'
                />
              </div>
              <span className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500'>
                Flexy
              </span>
            </div>
            <p className='text-blue-100 mb-6 max-w-md leading-relaxed'>
              {t.footer.description}
            </p>

            <div className='flex space-x-4 mb-6'>
              {/* Social media icons with blue gradient */}
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1'
              >
                <Facebook size={18} />
              </a>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1'
              >
                <Twitter size={18} />
              </a>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1'
              >
                <Instagram size={18} />
              </a>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1'
              >
                <Linkedin size={18} />
              </a>
            </div>

            <div className='text-sm text-blue-200 font-light'>
              © 2024 Flexy. {t.footer.rights}
            </div>
          </div>

          <div>
            <h3 className='text-xl font-bold mb-5 relative pl-3 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent after:content-[""] after:absolute after:left-0 after:top-0 after:bottom-0 after:w-1 after:bg-gradient-to-b after:from-blue-400 after:to-blue-600 after:rounded-full'>
              {t.footer.links}
            </h3>
            <div className='space-y-3'>
              <Link
                href='/about'
                className='flex items-center group text-blue-200 hover:text-blue-400 transition-colors'
              >
                <ChevronRight className='w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 text-blue-400' />
                {t.footer.about}
              </Link>
              <Link
                href='/contact'
                className='flex items-center group text-blue-200 hover:text-blue-400 transition-colors'
              >
                <ChevronRight className='w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 text-blue-400' />
                {t.footer.contact}
              </Link>
              <Link
                href='/privacy'
                className='flex items-center group text-blue-200 hover:text-blue-400 transition-colors'
              >
                <ChevronRight className='w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 text-blue-400' />
                {t.footer.privacy || 'Privacy Policy'}
              </Link>
              <Link
                href='/terms'
                className='flex items-center group text-blue-200 hover:text-blue-400 transition-colors'
              >
                <ChevronRight className='w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 text-blue-400' />
                {t.footer.terms || 'Terms of Service'}
              </Link>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-bold mb-5 relative pl-3 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent after:content-[""] after:absolute after:left-0 after:top-0 after:bottom-0 after:w-1 after:bg-gradient-to-b after:from-blue-400 after:to-blue-600 after:rounded-full'>
              {t.footer.download}
            </h3>
            <div className='space-y-4'>
              <Button
                variant='outline'
                className='w-full border-blue-500 text-blue-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 group'
                asChild
              >
                <a href='/flexy-latest.apk' download>
                  <Download className='w-4 h-4 mr-2 group-hover:animate-bounce transition-all' />
                  Download Aplikasi
                </a>
              </Button>

              <div className='pt-6 bg-blue-900/20 p-5 rounded-lg backdrop-blur-sm mt-6 border border-blue-800/50'>
                <h4 className='text-lg font-semibold mb-4 relative inline-block'>
                  <span className='bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent'>
                    {t.footer.contact || 'Contact Us'}
                  </span>
                  <span className='absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-transparent'></span>
                </h4>
                <div className='space-y-4 text-blue-100'>
                  <div className='flex items-center group hover:text-blue-300 transition-colors'>
                    <div className='w-8 h-8 rounded-full bg-blue-800/50 flex items-center justify-center mr-3 group-hover:bg-blue-700/80 transition-colors'>
                      <Phone className='w-4 h-4 text-blue-300' />
                    </div>
                    <span>+123 456 7890</span>
                  </div>
                  <div className='flex items-center group hover:text-blue-300 transition-colors'>
                    <div className='w-8 h-8 rounded-full bg-blue-800/50 flex items-center justify-center mr-3 group-hover:bg-blue-700/80 transition-colors'>
                      <Mail className='w-4 h-4 text-blue-300' />
                    </div>
                    <span>contact@flexy.com</span>
                  </div>
                  <div className='flex items-start group hover:text-blue-300 transition-colors'>
                    <div className='w-8 h-8 rounded-full bg-blue-800/50 flex items-center justify-center mr-3 mt-1 group-hover:bg-blue-700/80 transition-colors'>
                      <MapPin className='w-4 h-4 text-blue-300' />
                    </div>
                    <span>123 Flexy Street, Tech City</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

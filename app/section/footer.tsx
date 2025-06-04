'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useLanguage } from '../contexts/language-context';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className='bg-gray-800 text-white py-12 px-4'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-4 gap-8'>
          <div className='md:col-span-2'>
            <div className='flex items-center space-x-3 mb-4'>
              <div className='w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>F</span>
              </div>
              <span className='text-2xl font-bold'>Flexy</span>
            </div>
            <p className='text-gray-400 mb-4 max-w-md'>
              {t.footer.description}
            </p>
            <div className='text-sm text-gray-500'>
              © 2024 Flexy. {t.footer.rights}
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>{t.footer.links}</h3>
            <div className='space-y-2'>
              <Link
                href='/about'
                className='block text-gray-400 hover:text-white transition-colors'
              >
                {t.footer.about}
              </Link>
              <Link
                href='/contact'
                className='block text-gray-400 hover:text-white transition-colors'
              >
                {t.footer.contact}
              </Link>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>{t.footer.download}</h3>
            <Button
              variant='outline'
              className='border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white'
              asChild
            >
              <a href='/flexy-latest.apk' download>
                <Download className='w-4 h-4 mr-2' />
                APK
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

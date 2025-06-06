'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/language-context';
import LanguageSwitcher from '../../components/language-switcher';

export default function Header() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='w-10 h-10 flex items-center justify-center'>
              <Image
                src='/logo.png'
                alt='Flexy Logo'
                width={40}
                height={40}
                className='object-contain'
              />
            </div>
            <span className='text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
              Flexy
            </span>
          </div>{' '}
          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              href='#features'
              className='text-gray-700 hover:text-indigo-600 transition-colors font-medium'
            >
              {t.nav.features}
            </Link>
            <Link
              href='#screenshots'
              className='text-gray-700 hover:text-indigo-600 transition-colors font-medium'
            >
              {t.nav.screenshots}
            </Link>
            <Link
              href='#feedback'
              className='text-gray-700 hover:text-indigo-600 transition-colors font-medium'
            >
              {t.nav.feedback}
            </Link>
            <LanguageSwitcher />
          </nav>
          <button
            className='md:hidden p-2'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>{' '}
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden mt-4 pb-4 border-t border-gray-200'>
            <nav className='flex flex-col space-y-4 mt-4'>
              <Link
                href='#features'
                className='text-gray-700 hover:text-indigo-600 transition-colors font-medium'
              >
                {t.nav.features}
              </Link>
              <Link
                href='#screenshots'
                className='text-gray-700 hover:text-indigo-600 transition-colors font-medium'
              >
                {t.nav.screenshots}
              </Link>
              <Link
                href='#feedback'
                className='text-gray-700 hover:text-indigo-600 transition-colors font-medium'
              >
                {t.nav.feedback}
              </Link>
              <LanguageSwitcher />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

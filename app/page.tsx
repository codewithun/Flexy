'use client';

import { useLanguage } from './contexts/language-context';
import Header from './section/header';
import Hero from './section/hero';
import Features from './section/features';
import Screenshots from './section/screenshots';
import Feedback from './section/feedback';
import Footer from './section/footer';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-teal-50'>
      <Header />
      <Hero />
      <Features />
      <Screenshots />
      <Feedback />
      <Footer />
    </div>
  );
}

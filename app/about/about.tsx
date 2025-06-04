'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Users, Target, Award } from 'lucide-react';
import { useLanguage } from '../contexts/language-context';
import LanguageSwitcher from '@/components/language-switcher';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-teal-50'>
      {/* Header */}
      <header className='bg-white/80 backdrop-blur-md border-b border-teal-100'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='flex items-center space-x-3'>
              <div className='w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>F</span>
              </div>
              <span className='text-2xl font-bold text-gray-800'>Flexy</span>
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <div className='container mx-auto px-4 py-12'>
        <Button variant='ghost' className='mb-8' asChild>
          <Link href='/'>
            <ArrowLeft className='w-4 h-4 mr-2' />
            {t.about.backToHome}
          </Link>
        </Button>

        <div className='max-w-4xl mx-auto'>
          <h1 className='text-5xl font-bold text-gray-800 mb-8 text-center'>
            {t.about.title}
          </h1>

          <div className='prose prose-lg max-w-none mb-12'>
            <p className='text-xl text-gray-600 text-center mb-12'>
              {t.about.description}
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            <Card className='border-0 shadow-lg bg-gradient-to-br from-white to-teal-50'>
              <CardContent className='p-8 text-center'>
                <div className='w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                  <Target className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                  {t.about.mission.title}
                </h3>
                <p className='text-gray-600'>{t.about.mission.description}</p>
              </CardContent>
            </Card>

            <Card className='border-0 shadow-lg bg-gradient-to-br from-white to-blue-50'>
              <CardContent className='p-8 text-center'>
                <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                  <Users className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                  {t.about.team.title}
                </h3>
                <p className='text-gray-600'>{t.about.team.description}</p>
              </CardContent>
            </Card>

            <Card className='border-0 shadow-lg bg-gradient-to-br from-white to-green-50'>
              <CardContent className='p-8 text-center'>
                <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                  <Award className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                  {t.about.values.title}
                </h3>
                <p className='text-gray-600'>{t.about.values.description}</p>
              </CardContent>
            </Card>
          </div>

          <div className='bg-white rounded-2xl shadow-xl p-8'>
            <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
              {t.about.story.title}
            </h2>
            <div className='prose prose-lg max-w-none text-gray-600'>
              <p className='mb-4'>{t.about.story.paragraph1}</p>
              <p className='mb-4'>{t.about.story.paragraph2}</p>
              <p>{t.about.story.paragraph3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

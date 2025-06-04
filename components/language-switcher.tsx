'use client';

import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/app/contexts/language-context';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant='ghost'
      size='sm'
      onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
      className='flex items-center space-x-2'
    >
      <Globe className='w-4 h-4' />
      <span className='text-sm font-medium'>
        {language === 'id' ? 'EN' : 'ID'}
      </span>
    </Button>
  );
}

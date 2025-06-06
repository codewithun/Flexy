'use client';

import type React from 'react';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../contexts/language-context';
import LanguageSwitcher from '@/components/language-switcher';

export default function ContactPage() {
  const { t } = useLanguage();
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulating API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert(t.contact.form.success);
      setContact({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      alert(t.contact.form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            {t.contact.backToHome}
          </Link>
        </Button>

        <div className='max-w-6xl mx-auto'>
          <h1 className='text-5xl font-bold text-gray-800 mb-8 text-center'>
            {t.contact.title}
          </h1>

          <p className='text-xl text-gray-600 text-center mb-12'>
            {t.contact.subtitle}
          </p>

          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <div className='space-y-8'>
              <Card className='border-0 shadow-lg bg-gradient-to-br from-white to-teal-50'>
                <CardContent className='p-8'>
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center'>
                      <Mail className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-800'>
                        Email
                      </h3>
                      <p className='text-gray-600'>support@flexy.my.id</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className='border-0 shadow-lg bg-gradient-to-br from-white to-blue-50'>
                <CardContent className='p-8'>
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-600 rounded-xl flex items-center justify-center'>
                      <Phone className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-800'>
                        {t.contact.info.phone}
                      </h3>
                      <p className='text-gray-600'>+62 123 4567 890</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className='border-0 shadow-lg bg-gradient-to-br from-white to-purple-50'>
                <CardContent className='p-8'>
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center'>
                      <MapPin className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-800'>
                        {t.contact.info.address}
                      </h3>
                      <p className='text-gray-600'>
                        Jl. Teknologi No.123, Jakarta, Indonesia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className='border-0 shadow-lg bg-white'>
                <CardContent className='p-8'>
                  <h2 className='text-2xl font-bold text-gray-800 mb-6'>
                    {t.contact.form.title}
                  </h2>

                  <form onSubmit={handleSubmit} className='space-y-6'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-sm font-medium text-gray-700 mb-1'
                      >
                        {t.contact.form.name}
                      </label>
                      <Input
                        id='name'
                        value={contact.name}
                        onChange={(e) =>
                          setContact({ ...contact, name: e.target.value })
                        }
                        required
                        placeholder={`${t.contact.form.name}...`}
                        className='w-full'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700 mb-1'
                      >
                        {t.contact.form.email}
                      </label>
                      <Input
                        id='email'
                        type='email'
                        value={contact.email}
                        onChange={(e) =>
                          setContact({ ...contact, email: e.target.value })
                        }
                        required
                        placeholder={`${t.contact.form.email}...`}
                        className='w-full'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='subject'
                        className='block text-sm font-medium text-gray-700 mb-1'
                      >
                        {t.contact.form.subject}
                      </label>
                      <Input
                        id='subject'
                        value={contact.subject}
                        onChange={(e) =>
                          setContact({ ...contact, subject: e.target.value })
                        }
                        required
                        placeholder={`${t.contact.form.subject}...`}
                        className='w-full'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='message'
                        className='block text-sm font-medium text-gray-700 mb-1'
                      >
                        {t.contact.form.message}
                      </label>
                      <Textarea
                        id='message'
                        value={contact.message}
                        onChange={(e) =>
                          setContact({ ...contact, message: e.target.value })
                        }
                        required
                        placeholder={`${t.contact.form.message}...`}
                        className='w-full h-32'
                      />
                    </div>

                    <Button
                      type='submit'
                      className='w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700'
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        t.contact.form.sending
                      ) : (
                        <>
                          {' '}
                          <Send className='w-4 h-4 mr-2' />
                          {t.contact.form.submit}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

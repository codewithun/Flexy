'use client';

import { useState } from 'react';
import { useLanguage } from '../contexts/language-context';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Feedback() {
  const { t } = useLanguage();
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual emailJS or Google Sheets integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setFeedback({ name: '', email: '', message: '' });
    } catch (error) {
      alert(t.feedbackError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id='feedback'
      className='py-24 px-4 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden'
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xMjgwIDE0MFYwUzk5My40NiAxNDAgNjQwIDEzOSAwIDAgMCAwdjE0MHoiLz48L2c+PC9zdmc+')] bg-top bg-no-repeat"></div>

      <div className='absolute -bottom-10 right-0 w-72 h-72 bg-blue-400 opacity-10 rounded-full blur-3xl'></div>
      <div className='absolute top-40 -left-20 w-72 h-72 bg-indigo-500 opacity-10 rounded-full blur-3xl'></div>

      <div className='container mx-auto max-w-5xl relative z-10'>
        <div className='text-center mb-12'>
          <span className='bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full mb-4 inline-block'>
            Feedback
          </span>
          <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-900 bg-clip-text text-transparent mb-6'>
            {t.feedback.title}
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            {t.feedback.subtitle}
          </p>
        </div>

        <div className='grid md:grid-cols-5 gap-8 items-center'>
          {/* Left side - Message icon and text */}
          <div className='md:col-span-2 text-center md:text-left'>
            <div className='inline-block p-4 bg-blue-100 rounded-full mb-6'>
              <MessageSquare size={32} className='text-blue-600' />
            </div>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>
              Kami Mendengarkan Anda
            </h3>
            <p className='text-gray-600 mb-6'>
              Kami sangat menghargai setiap masukan dan saran dari pengguna
              untuk meningkatkan layanan kami.
            </p>

            <div className='hidden md:block'>
              <div className='flex items-center space-x-3 mb-3'>
                <div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center'>
                  <CheckCircle2 className='w-5 h-5 text-blue-600' />
                </div>
                <span className='text-gray-700'>Respon cepat dalam 24 jam</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center'>
                  <CheckCircle2 className='w-5 h-5 text-blue-600' />
                </div>
                <span className='text-gray-700'>Dukungan prioritas</span>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className='md:col-span-3'>
            <Card className='border-0 shadow-xl overflow-hidden'>
              <CardContent className='p-0'>
                {!isSubmitted ? (
                  <form
                    onSubmit={handleFeedbackSubmit}
                    className='p-8 space-y-6 bg-white'
                  >
                    <div className='grid md:grid-cols-2 gap-6'>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                          {t.feedback.form.name}
                        </label>
                        <Input
                          type='text'
                          value={feedback.name}
                          onChange={(e) =>
                            setFeedback({ ...feedback, name: e.target.value })
                          }
                          className='w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500'
                          required
                        />
                      </div>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                          {t.feedback.form.email}
                        </label>
                        <Input
                          type='email'
                          value={feedback.email}
                          onChange={(e) =>
                            setFeedback({ ...feedback, email: e.target.value })
                          }
                          className='w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500'
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>
                        {t.feedback.form.message}
                      </label>
                      <Textarea
                        value={feedback.message}
                        onChange={(e) =>
                          setFeedback({ ...feedback, message: e.target.value })
                        }
                        rows={5}
                        className='w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500'
                        required
                      />
                    </div>
                    <Button
                      type='submit'
                      disabled={isSubmitting}
                      className='w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2'
                    >
                      {isSubmitting ? (
                        <div className='flex items-center gap-2'>
                          <span className='animate-spin h-5 w-5 border-t-2 border-white rounded-full'></span>
                          {t.feedback.form.sending}
                        </div>
                      ) : (
                        <>
                          <Send className='w-5 h-5' />
                          {t.feedback.form.submit}
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className='p-8 text-center bg-white'>
                    <div className='w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                      <CheckCircle2 size={42} className='text-blue-600' />
                    </div>
                    <h3 className='text-2xl font-bold text-gray-800 mb-3'>
                      Thank You!
                    </h3>
                    <p className='text-gray-600 mb-6'>
                      Your feedback has been submitted successfully. We
                      appreciate your input!
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className='px-6 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors'
                    >
                      Send Another Message
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { useLanguage } from '../contexts/language-context';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Feedback() {
  const { t } = useLanguage();
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual emailJS or Google Sheets integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert(t.feedbackSuccess);
      setFeedback({ name: '', email: '', message: '' });
    } catch (error) {
      alert(t.feedbackError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='feedback' className='py-20 px-4 bg-white'>
      <div className='container mx-auto max-w-4xl'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
            {t.feedback.title}
          </h2>
          <p className='text-xl text-gray-600'>{t.feedback.subtitle}</p>
        </div>

        <Card className='border-0 shadow-xl bg-gradient-to-br from-white to-teal-50'>
          <CardContent className='p-8'>
            <form onSubmit={handleFeedbackSubmit} className='space-y-6'>
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
                    className='w-full rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500'
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
                    className='w-full rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500'
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
                  className='w-full rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500'
                  required
                />
              </div>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300'
              >
                {isSubmitting
                  ? t.feedback.form.sending
                  : t.feedback.form.submit}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

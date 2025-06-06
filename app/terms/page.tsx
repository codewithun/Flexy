'use client';

import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { useLanguage } from '../contexts/language-context';

export default function TermsOfService() {
  const { t } = useLanguage();

  return (
    <div className='container mx-auto py-16 px-4'>
      <Link
        href='/'
        className='inline-flex items-center text-teal-500 hover:text-teal-600 mb-6'
      >
        <ChevronLeft className='w-4 h-4 mr-1' />
        {t.about.backToHome}
      </Link>

      <div className='prose max-w-none'>
        <h1 className='text-4xl font-bold mb-8 text-gray-900'>
          {t.footer.terms}
        </h1>

        <div className='bg-white rounded-xl shadow-md p-8'>
          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>Agreement to Terms</h2>
            <p className='text-gray-700'>
              By accessing or using our services, you agree to be bound by these
              Terms of Service. If you disagree with any part of the terms, you
              may not access our service.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>Use of Service</h2>
            <p className='text-gray-700'>
              Our service is provided "as is" and is intended only for lawful
              use. You agree to use our service only for its intended purposes
              and in accordance with these Terms and any applicable laws and
              regulations.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>User Accounts</h2>
            <p className='text-gray-700'>
              When you create an account with us, you must provide accurate,
              complete, and up-to-date information. You are responsible for
              maintaining the confidentiality of your account credentials and
              for all activities that occur under your account.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
              Intellectual Property
            </h2>
            <p className='text-gray-700'>
              Our service and its original content, features, and functionality
              are owned by us and are protected by international copyright,
              trademark, patent, trade secret, and other intellectual property
              laws.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>Termination</h2>
            <p className='text-gray-700'>
              We may terminate or suspend your account and access to our service
              immediately, without prior notice, for conduct that we believe
              violates these Terms or is harmful to other users, us, or third
              parties, or for any other reason at our sole discretion.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
              Limitation of Liability
            </h2>
            <p className='text-gray-700'>
              In no event shall we be liable for any indirect, incidental,
              special, consequential or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from your access to or use of or
              inability to access or use the service.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>Changes to Terms</h2>
            <p className='text-gray-700'>
              We reserve the right to modify or replace these Terms at any time.
              If a revision is material, we will try to provide at least 30
              days' notice prior to any new terms taking effect.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-4'>Contact Us</h2>
            <p className='text-gray-700'>
              If you have any questions about these Terms, please contact us at
              contact@flexy.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

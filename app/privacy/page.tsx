'use client';

import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { useLanguage } from '../contexts/language-context';

export default function PrivacyPolicy() {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto py-16 px-4">
      <Link 
        href="/" 
        className="inline-flex items-center text-teal-500 hover:text-teal-600 mb-6"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        {t.about.backToHome}
      </Link>
      
      <div className="prose max-w-none">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          {t.footer.privacy}
        </h1>
        
        <div className="bg-white rounded-xl shadow-md p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-700">
              Protecting your private information is our priority. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information Collection</h2>
            <p className="text-gray-700">
              We collect information you provide directly to us, such as when you create an account, use our services, or contact customer support. This may include your name, email address, phone number, payment information, and device information.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-gray-700">
              We use information about you for various purposes, including to provide, maintain, and improve our services, send you technical notices and updates, respond to your comments and questions, and monitor usage patterns.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
            <p className="text-gray-700">
              We may share information about you as follows:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li className="mb-2">With vendors, consultants, and other service providers who need access to such information to perform work on our behalf</li>
              <li className="mb-2">In response to a request for information if we believe disclosure is in accordance with applicable law</li>
              <li className="mb-2">If we believe your actions are inconsistent with our user agreements or policies</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-700">
              We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration, and destruction.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at contact@flexy.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'id';

interface Translations {
  nav: {
    home: string;
    about: string;
    contact: string;
    features: string;
    screenshots: string;
    feedback: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    downloadButton: string;
  };
  features: {
    title: string;
    subtitle: string;
    cashier: {
      title: string;
      description: string;
    };
    reports: {
      title: string;
      description: string;
    };
    products: {
      title: string;
      description: string;
    };
  };
  screenshots: {
    title: string;
    subtitle: string;
  };
  feedback: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      sending: string;
    };
  };
  feedbackSuccess: string;
  feedbackError: string;
  footer: {
    description: string;
    rights: string;
    links: string;
    about: string;
    contact: string;
    download: string;
  };
  about: {
    title: string;
    description: string;
    backToHome: string;
    mission: {
      title: string;
      description: string;
    };
    team: {
      title: string;
      description: string;
    };
    values: {
      title: string;
      description: string;
    };
    story: {
      title: string;
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    backToHome: string;
    info: {
      phone: string;
      address: string;
    };
    hours: {
      title: string;
      weekdays: string;
      weekend: string;
    };
    form: {
      title: string;
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      features: 'Features',
      screenshots: 'Screenshots',
      feedback: 'Feedback',
    },
    hero: {
      title: 'Transform your business through technology',
      subtitle: 'Your flexible solution for modern business needs',
      description:
        'Discover powerful POS features designed to simplify your daily operations. With every update, FLEXY evolves to help you work smarter and grow faster.',
      cta: 'Get Started',
      downloadButton: 'Download Now',

    },
    features: {
      title: 'Key Features',
      subtitle: 'Everything you need to run your business efficiently',
      cashier: {
        title: 'Digital Cashier',
        description:
          'Fast and efficient point of sale system for quick transactions',
      },
      reports: {
        title: 'Sales Reports',
        description:
          'Detailed analytics and reports to track your business performance',
      },
      products: {
        title: 'Product Management',
        description: 'Easy inventory management with multi-product support',
      },
    },
    screenshots: {
      title: 'App Screenshots',
      subtitle: 'See Flexy in action with these app previews',
    },
    feedback: {
      title: 'Send Feedback',
      subtitle: 'We value your input to make Flexy better',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        message: 'Your Message',
        submit: 'Send Feedback',
        sending: 'Sending...',
      },
    },
    feedbackSuccess: 'Thank you for your feedback! We appreciate your input.',
    feedbackError: 'Failed to send feedback. Please try again later.',
    footer: {
      description:
        'Flexy - Modern POS solution for small and medium businesses',
      rights: 'All rights reserved.',
      links: 'Quick Links',
      about: 'About Us',
      contact: 'Contact',
      download: 'Download App',
    },
    about: {
      title: 'About Us',
      description: 'Learn more about our mission and values',
      backToHome: 'Back to Home',
      mission: {
        title: 'Our Mission',
        description:
          'To provide flexible and innovative solutions for businesses worldwide.',
      },
      team: {
        title: 'Our Team',
        description:
          'A dedicated group of professionals committed to excellence.',
      },
      values: {
        title: 'Our Values',
        description:
          'Innovation, integrity, and customer satisfaction drive everything we do.',
      },
      story: {
        title: 'Our Story',
        paragraph1:
          'Founded with a vision to revolutionize business solutions, Flexy has been at the forefront of innovation.',
        paragraph2:
          'We believe in creating flexible, scalable solutions that adapt to your unique business needs.',
        paragraph3:
          'Today, we continue to evolve and grow, helping businesses succeed in an ever-changing world.',
      },
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch with our team',
      backToHome: 'Back to Home',
      info: {
        phone: 'Phone',
        address: 'Address',
      },
      hours: {
        title: 'Business Hours',
        weekdays: 'Monday - Friday',
        weekend: 'Saturday - Sunday',
      },
      form: {
        title: 'Send us a Message',
        name: 'Full Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.',
      },
    },
  },
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      contact: 'Kontak',
      features: 'Fitur',
      screenshots: 'Screenshot',
      feedback: 'Umpan Balik',
    },
    hero: {
      title: 'Transformasi bisnis Anda melalui teknologi',
      subtitle: 'Solusi fleksibel untuk kebutuhan bisnis modern Anda',
      description:
        'Temukan fitur POS yang dirancang untuk mempermudah operasional harian Anda. Dengan setiap pembaruan, FLEXY terus berkembang untuk membantu Anda bekerja lebih cerdas dan tumbuh lebih cepat.',
      cta: 'Mulai Sekarang',
      downloadButton: 'Download Sekarang',
    },
    features: {
      title: 'Fitur Utama',
      subtitle:
        'Semua yang Anda butuhkan untuk menjalankan bisnis dengan efisien',
      cashier: {
        title: 'Kasir Digital',
        description:
          'Sistem point of sale yang cepat dan efisien untuk transaksi kilat',
      },
      reports: {
        title: 'Laporan Penjualan',
        description:
          'Analitik dan laporan detail untuk melacak performa bisnis Anda',
      },
      products: {
        title: 'Manajemen Produk',
        description:
          'Manajemen inventori yang mudah dengan dukungan multi-produk',
      },
    },
    screenshots: {
      title: 'Screenshot Aplikasi',
      subtitle: 'Lihat Flexy beraksi dengan preview aplikasi ini',
    },
    feedback: {
      title: 'Kirim Umpan Balik',
      subtitle: 'Kami menghargai masukan Anda untuk membuat Flexy lebih baik',
      form: {
        name: 'Nama Lengkap',
        email: 'Alamat Email',
        message: 'Pesan Anda',
        submit: 'Kirim Umpan Balik',
        sending: 'Mengirim...',
      },
    },
    feedbackSuccess:
      'Terima kasih atas umpan balik Anda! Kami menghargai masukan Anda.',
    feedbackError: 'Gagal mengirim umpan balik. Silakan coba lagi nanti.',
    footer: {
      description: 'Flexy - Solusi POS modern untuk usaha kecil dan menengah',
      rights: 'Semua hak dilindungi.',
      links: 'Tautan Cepat',
      about: 'Tentang Kami',
      contact: 'Kontak',
      download: 'Download Aplikasi',
    },
    about: {
      title: 'Tentang Kami',
      description: 'Pelajari lebih lanjut tentang misi dan nilai-nilai kami',
      backToHome: 'Kembali ke Beranda',
      mission: {
        title: 'Misi Kami',
        description:
          'Menyediakan solusi yang fleksibel dan inovatif untuk bisnis di seluruh dunia.',
      },
      team: {
        title: 'Tim Kami',
        description: 'Kelompok profesional yang berdedikasi untuk keunggulan.',
      },
      values: {
        title: 'Nilai-Nilai Kami',
        description:
          'Inovasi, integritas, dan kepuasan pelanggan mendorong semua yang kami lakukan.',
      },
      story: {
        title: 'Cerita Kami',
        paragraph1:
          'Didirikan dengan visi untuk merevolusi solusi bisnis, Flexy telah menjadi pelopor dalam inovasi.',
        paragraph2:
          'Kami percaya dalam menciptakan solusi yang fleksibel dan scalable yang beradaptasi dengan kebutuhan bisnis unik Anda.',
        paragraph3:
          'Hari ini, kami terus berkembang dan tumbuh, membantu bisnis sukses di dunia yang terus berubah.',
      },
    },
    contact: {
      title: 'Hubungi Kami',
      subtitle: 'Hubungi tim kami',
      backToHome: 'Kembali ke Beranda',
      info: {
        phone: 'Telepon',
        address: 'Alamat',
      },
      hours: {
        title: 'Jam Operasional',
        weekdays: 'Senin - Jumat',
        weekend: 'Sabtu - Minggu',
      },
      form: {
        title: 'Kirim Pesan',
        name: 'Nama Lengkap',
        email: 'Alamat Email',
        subject: 'Subjek',
        message: 'Pesan',
        submit: 'Kirim Pesan',
        sending: 'Mengirim...',
        success: 'Pesan berhasil dikirim!',
        error: 'Gagal mengirim pesan. Silakan coba lagi.',
      },
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

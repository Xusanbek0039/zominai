import React, { useState } from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY; // Vite uchun to'g'ri o'qish usuli

const Forms: React.FC = () => {
  const { t } = useLanguage();

  // Form state
  const [courseForm, setCourseForm] = useState({
    firstName: '',
    lastName: '',
    phone: '+998',
    course: ''
  });
  const [courseSuccess, setCourseSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const courses = [
    { value: 'web', label: t('webDevelopment') },
    { value: 'mobile', label: t('mobileDevelopment') },
    { value: 'data', label: t('dataScience') },
    { value: 'ai', label: t('artificialIntelligence') }
  ];

  // Telefon raqam +998 bilan boshlanishini avtomatik ta'minlash
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    // Agar +998 bilan boshlanmasa, +998 ni avtomatik qo'shish
    if (!val.startsWith('+998')) {
      val = '+998';
    }

    // +998 dan keyingi qismni faqat raqam bilan cheklash
    const afterCode = val.slice(4).replace(/\D/g, '');

    // Maksimal uzunlikni 9 raqam (masalan +998XXYYYYYYY)
    const limited = afterCode.slice(0, 9);

    val = '+998' + limited;

    setCourseForm(prev => ({ ...prev, phone: val }));
  };

  const handleCourseEnrollment = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Telefon raqam uzunligini tekshirish (masalan: +998 + 9 raqam = 13 belgidan iborat)
    if (courseForm.phone.length !== 13) {
      setError(t('invalidPhone') || 'Iltimos, to‘liq telefon raqamini kiriting.');
      return;
    }

    try {
      // Resend API ga POST so'rov yuborish
      const response = await fetch('https://api.resend.com/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: 'no-reply@yourdomain.com',
          to: ['support@yourdomain.com'],  // O'zgartiring kerakli emailga
          subject: `Yangi kursga yozilish: ${courseForm.course}`,
          text: `
Ism: ${courseForm.firstName}
Familiya: ${courseForm.lastName}
Telefon: ${courseForm.phone}
Kurs: ${courseForm.course}
          `
        })
      });

      if (!response.ok) {
        throw new Error('Tarmoq xatosi');
      }

      setCourseSuccess(true);
      setCourseForm({ firstName: '', lastName: '', phone: '+998', course: '' });

      setTimeout(() => setCourseSuccess(false), 3000);
    } catch (err) {
      setError(t('submissionError') || 'Xatolik yuz berdi, qayta urinib ko‘ring.');
      console.error(err);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t('enrollCourse')}</h3>
              </div>

              {courseSuccess && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-2 animate-fade-in">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-green-800 dark:text-green-200">{t('enrollmentSuccess')}</span>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400">
                  {error}
                </div>
              )}

              <form onSubmit={handleCourseEnrollment} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('firstName')}</label>
                  <input
                    type="text"
                    required
                    value={courseForm.firstName}
                    onChange={(e) => setCourseForm({ ...courseForm, firstName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder={t('firstName')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('lastName')}</label>
                  <input
                    type="text"
                    required
                    value={courseForm.lastName}
                    onChange={(e) => setCourseForm({ ...courseForm, lastName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder={t('lastName')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('phone')}</label>
                  <input
                    type="tel"
                    required
                    value={courseForm.phone}
                    onChange={handlePhoneChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder="+998 (XX) XXX-XX-XX"
                    maxLength={13}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('course')}</label>
                  <select
                    required
                    value={courseForm.course}
                    onChange={(e) => setCourseForm({ ...courseForm, course: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                  >
                    <option value="">{t('selectCourse')}</option>
                    {courses.map((course) => (
                      <option key={course.value} value={course.value}>
                        {course.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t('submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forms;

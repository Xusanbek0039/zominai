import React, { useState } from 'react';
import { BookOpen, CheckCircle, X } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useLanguage } from '../contexts/LanguageContext';

interface FormsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormsModal: React.FC<FormsModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  const [courseForm, setCourseForm] = useState({
    firstName: '',
    lastName: '',
    phone: '+998 ',
    course: '',
  });

  const [courseSuccess, setCourseSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const courses = [
    { value: 'web', label: t('webDevelopment') },
    { value: 'mobile', label: t('mobileDevelopment') },
    { value: 'data', label: t('dataScience') },
    { value: 'ai', label: t('artificialIntelligence') },
  ];

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith('+998 ')) {
      val = '+998 ';
    }
    const afterCode = val.slice(5).replace(/\D/g, '');
    const limited = afterCode.slice(0, 9);
    val = '+998 ' + limited;
    setCourseForm((prev) => ({ ...prev, phone: val }));
  };

  const handleCourseEnrollment = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (courseForm.phone.length !== 13) {
      setError(t('invalidPhone') || 'Iltimos, to‘liq telefon raqamini kiriting.');
      return;
    }

    try {
      const templateParams = {
        from_first_name: courseForm.firstName,
        from_last_name: courseForm.lastName,
        phone: courseForm.phone,
        course: courseForm.course,
      };

      await emailjs.send(
        'service_q8hblyn',
        'template_jdgxnou',
        templateParams,
        'AsVygMXA9oU4QQ3lc'
      );

      setCourseSuccess(true);
      setCourseForm({ firstName: '', lastName: '', phone: '+998 ', course: '' });

      setTimeout(() => {
        setCourseSuccess(false);
        onClose();
      }, 2000);
    } catch (err) {
      console.error(err);
      setError(t('submissionError') || 'Xatolik yuz berdi, qayta urinib ko‘ring.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-2xl animate-fade-in-up">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-red-500"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t('enrollCourse')}</h3>
        </div>

        {/* Success/Error Messages */}
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

        {/* Form */}
        <form onSubmit={handleCourseEnrollment} className="space-y-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('firstName')}</label>
            <input
              type="text"
              required
              value={courseForm.firstName}
              onChange={(e) => setCourseForm({ ...courseForm, firstName: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none shadow-sm focus:shadow-md transition-all duration-200"
              placeholder="Ism"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('lastName')}</label>
            <input
              type="text"
              required
              value={courseForm.lastName}
              onChange={(e) => setCourseForm({ ...courseForm, lastName: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none shadow-sm focus:shadow-md transition-all duration-200"
              placeholder="Familiya"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('phone')}</label>
            <input
              type="tel"
              required
              value={courseForm.phone}
              onChange={handlePhoneChange}
              maxLength={13}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none shadow-sm focus:shadow-md transition-all duration-200"
              placeholder="Telefon"
            />
          </div>

          {/* Course Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('course')}</label>
            <select
              required
              value={courseForm.course}
              onChange={(e) => setCourseForm({ ...courseForm, course: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none shadow-sm focus:shadow-md transition-all duration-200"
            >
              <option value="">{t('selectCourse')}</option>
              {courses.map((course) => (
                <option key={course.value} value={course.value}>
                  {course.label}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg"
          >
            {t('submit')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormsModal;

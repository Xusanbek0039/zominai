import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, X } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useLanguage } from '../contexts/LanguageContext';

interface FormsModalProps {
  onClose: () => void;
}

const FormsModal: React.FC<FormsModalProps> = ({ onClose }) => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '+998 ',
    course: '',
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const courses = [
    { value: 'web', label: t('webDevelopment') || 'Web Dasturlash' },
    { value: 'mobile', label: t('mobileDevelopment') || 'Mobil Dasturlash' },
    { value: 'data', label: t('dataScience') || 'Maʼlumotlar Ilmi' },
    { value: 'ai', label: t('artificialIntelligence') || 'AI' },
  ];

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith('+998 ')) val = '+998 ';
    const num = val.slice(5).replace(/\D/g, '').slice(0, 9);
    setFormData({ ...formData, phone: '+998 ' + num });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (formData.phone.length !== 13) {
      setError(t('invalidPhone') || 'Iltimos, telefon raqamingizni to‘liq kiriting.');
      return;
    }

    try {
      await emailjs.send(
        'service_q8hblyn',
        'template_jdgxnou',
        {
          from_first_name: formData.firstName,
          from_last_name: formData.lastName,
          phone: formData.phone,
          course: formData.course,
        },
        'AsVygMXA9oU4QQ3lc'
      );

      setSuccess(true);
      setFormData({ firstName: '', lastName: '', phone: '+998 ', course: '' });

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2500);
    } catch (err) {
      setError(t('submissionError') || 'Xatolik yuz berdi, iltimos qayta urinib ko‘ring.');
    }
  };

  useEffect(() => {
    const closeEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', closeEsc);
    return () => window.removeEventListener('keydown', closeEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal box */}
      <div className="relative z-10 bg-white dark:bg-gray-900 w-full max-w-xl rounded-2xl p-6 shadow-xl animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-red-500"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center mb-5 gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t('enrollCourse') || 'Kursga yozilish'}
          </h2>
        </div>

        {/* Alert */}
        {success && (
          <div className="flex items-center gap-2 bg-green-100 dark:bg-green-800/30 p-3 rounded-md mb-4 text-sm text-green-800 dark:text-green-200">
            <CheckCircle className="w-5 h-5" />
            {t('enrollmentSuccess') || 'Arizangiz muvaffaqiyatli yuborildi.'}
          </div>
        )}
        {error && (
          <div className="bg-red-100 dark:bg-red-800/30 p-3 rounded-md mb-4 text-sm text-red-800 dark:text-red-300">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">{t('firstName')}</label>
            <input
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="mt-1 w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Ism"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">{t('lastName')}</label>
            <input
              type="text"
              required
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="mt-1 w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Familiya"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">{t('phone')}</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={handlePhoneChange}
              maxLength={13}
              className="mt-1 w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="+998 9X XXX XX XX"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">{t('course')}</label>
            <select
              required
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              className="mt-1 w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
            >
              <option value="">{t('selectCourse') || 'Kursni tanlang'}</option>
              {courses.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:scale-105 transition"
          >
            {t('submit') || 'Yuborish'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormsModal;

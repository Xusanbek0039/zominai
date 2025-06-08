import React, { useState } from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Forms: React.FC = () => {
  const { t } = useLanguage();
  
  // Course enrollment form state
  const [courseForm, setCourseForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    course: ''
  });
  const [courseSuccess, setCourseSuccess] = useState(false);

  const courses = [
    { value: 'web', label: t('webDevelopment') },
    { value: 'mobile', label: t('mobileDevelopment') },
    { value: 'data', label: t('dataScience') },
    { value: 'ai', label: t('artificialIntelligence') }
  ];

  const handleCourseEnrollment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setCourseSuccess(true);
      setCourseForm({ firstName: '', lastName: '', phone: '', course: '' });
      setTimeout(() => setCourseSuccess(false), 3000);
    }, 500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          
          {/* Course Enrollment Form */}
          <div className="animate-fade-in-up">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('enrollCourse')}
                </h3>
              </div>

              {courseSuccess && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-2 animate-fade-in">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-green-800 dark:text-green-200">{t('enrollmentSuccess')}</span>
                </div>
              )}

              <form onSubmit={handleCourseEnrollment} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('firstName')}
                  </label>
                  <input
                    type="text"
                    required
                    value={courseForm.firstName}
                    onChange={(e) => setCourseForm({...courseForm, firstName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder={t('firstName')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('lastName')}
                  </label>
                  <input
                    type="text"
                    required
                    value={courseForm.lastName}
                    onChange={(e) => setCourseForm({...courseForm, lastName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder={t('lastName')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('phone')}
                  </label>
                  <input
                    type="tel"
                    required
                    value={courseForm.phone}
                    onChange={(e) => setCourseForm({...courseForm, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder="+998 (XX) XXX-XX-XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('course')}
                  </label>
                  <select
                    required
                    value={courseForm.course}
                    onChange={(e) => setCourseForm({...courseForm, course: e.target.value})}
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
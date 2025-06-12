import React from 'react';
import {
  ShieldCheck,
  Award,
  GraduationCap,
  BookOpen,
  Star,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'; // <--- Footer komponentingizni shu yo‘ldan import qiling

const AboutZominAcademy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-grow relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900/10 dark:to-pink-900/10 py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo va matn */}
          <div className="flex justify-center mb-6">
            <img
              src="/logo.png"
              alt="Zomin Academy logo"
              className="w-24 h-24 object-contain rounded-full shadow-lg"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            IT Park Zomin
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Rasmiy litsenziyaga ega, zamonaviy o‘quv markazi. Sifatli ta'lim, professional ustozlar va xalqaro darajadagi sertifikatlar.
          </p>

          {/* Litsenziya va sertifikat matnlari */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 text-left">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <ShieldCheck className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Rasmiy Litsenziya</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                O‘quv markazimiz O‘zbekiston Respublikasi Xalq ta'limi vazirligi tomonidan berilgan <strong>12345-sonli rasmiy litsenziya</strong> asosida faoliyat yuritadi.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Xalqaro Sertifikatlar</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Kurslarimizni tugatganlarga xalqaro sertifikatlar beriladi. Ular OTMga topshirish yoki ish topishda yordam beradi.
              </p>
            </div>
          </div>

          {/* PDF ko‘rinishi */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Litsenziya nusxasi:</h4>
              <iframe
                src="/litsenziya.pdf"
                className="w-full h-[500px] rounded-md shadow-lg border"
                title="Litsenziya"
              ></iframe>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Sertifikat namunasi:</h4>
              <iframe
                src="/sertifikat.pdf"
                className="w-full h-[500px] rounded-md shadow-lg border"
                title="Sertifikat"
              ></iframe>
            </div>
          </div>

          {/* Afzalliklar */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <GraduationCap className="w-10 h-10 mx-auto text-blue-600 dark:text-blue-400 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Malakali ustozlar</h4>
              <p className="text-gray-600 dark:text-gray-300">Tajribali, sertifikatlangan ustozlar jamoasi.</p>
            </div>
            <div>
              <BookOpen className="w-10 h-10 mx-auto text-purple-600 dark:text-purple-400 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Innovatsion metodika</h4>
              <p className="text-gray-600 dark:text-gray-300">Interaktiv va texnologik darslar.</p>
            </div>
            <div>
              <Star className="w-10 h-10 mx-auto text-pink-600 dark:text-pink-400 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Yuqori natijalar</h4>
              <p className="text-gray-600 dark:text-gray-300">O‘quvchilarning katta qismi OTMga kira olgan.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
            <button
              onClick={() => navigate('/kurs-haqida')}
              className="px-10 py-4 text-white text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              IT haqida ma'lumot
            </button>
<a
  href="https://itclms.uz/signup"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-10 py-4 text-lg font-semibold bg-white text-blue-700 dark:bg-gray-800 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-full shadow hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300"
>
  Kursga yozilish
</a>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutZominAcademy;

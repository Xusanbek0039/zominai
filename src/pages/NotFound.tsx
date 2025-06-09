// src/pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-center px-4">
      <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Sahifa topilmadi</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Kechirasiz, siz qidirgan sahifa mavjud emas yoki ko‘chirilgan.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-full transition"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
};

export default NotFound;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-100 via-pink-100 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-10 max-w-xl w-full text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6"
        >
          <svg
            className="w-32 h-32 mx-auto"
            viewBox="0 0 1024 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M512 0C229.25 0 0 229.25 0 512s229.25 512 512 512 512-229.25 512-512S794.75 0 512 0z"
              fill="#E5E7EB"
            />
            <path
              d="M707 646c-7 0-13-2-19-6L512 515 336 640c-6 4-12 6-19 6-10 0-19-4-26-11-13-13-13-33 0-46l176-125V322c0-18 14-32 32-32s32 14 32 32v136l176 125c13 13 13 33 0 46-7 7-16 11-26 11z"
              fill="#A78BFA"
            />
          </svg>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <h1 className="text-6xl font-extrabold text-purple-600 dark:text-purple-400">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-2">Sahifa topilmadi</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            Kechirasiz, qidirgan sahifangiz mavjud emas yoki boshqa joyga ko‘chirilgan.
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <Link
            to="/"
            className="mt-6 inline-block px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Bosh sahifaga qaytish
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;

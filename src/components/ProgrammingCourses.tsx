import React, { useState, useEffect } from 'react';
import { 
  Code2, Database, Smartphone, Globe, Brain, Shield, 
  Server, Palette, BarChart3, Zap, Bot, Layers3,
  Monitor, Coffee, Cpu, Binary, Flame, Gem,
  Triangle, Hash, FileCode2, Settings, Star, 
  TrendingUp, Clock, Users, Building, Award, 
  BookOpen, ExternalLink, CheckCircle, AlertCircle,
  X, ChevronRight, Briefcase, ChevronLeft
} from 'lucide-react';

// Programming Languages Data
const programmingLanguages = [
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: <Code2 className="w-full h-full text-yellow-500" />,
    difficulty: 'O\'rta' as const,
    popularity: 9,
    salary: '$2500-7000/oy',
    learningTime: '3-6 oy',
    description: 'Web dasturlashda eng keng qo\'llaniluvchi til. Frontend va backend uchun ishlatiladi.',
    useCases: [
      'Web saytlar yaratish',
      'Mobile ilovalar (React Native)',
      'Desktop ilovalar (Electron)',
      'Server dasturlash (Node.js)',
      'Game development',
      'IoT dasturlash'
    ],
    companies: ['Google', 'Facebook', 'Netflix', 'Airbnb', 'Uber', 'Microsoft', 'Amazon'],
    pros: [
      'O\'rganish oson',
      'Katta community',
      'Ko\'p framework mavjud',
      'Full-stack development',
      'Yaxshi ish imkoniyatlari'
    ],
    cons: [
      'Ba\'zi xatolar runtime da chiqishi',
      'Performance muammolari',
      'Too many frameworks',
      'Browser compatibility issues'
    ],
    resources: [
      { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', type: 'Documentation' },
      { name: 'JavaScript.info', url: 'https://javascript.info', type: 'Tutorial' },
      { name: 'freeCodeCamp', url: 'https://freecodecamp.org', type: 'Course' },
      { name: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net', type: 'Book' }
    ]
  },
  {
    id: 'python',
    name: 'Python',
    icon: <Database className="w-full h-full text-blue-500" />,
    difficulty: 'Oson' as const,
    popularity: 10,
    salary: '$3000-8000/oy',
    learningTime: '2-4 oy',
    description: 'AI, Data Science va web development uchun eng mashhur til.',
    useCases: [
      'Machine Learning va AI',
      'Data Science va Analytics',
      'Web development (Django, Flask)',
      'Automation va scripting',
      'Scientific computing',
      'Desktop applications'
    ],
    companies: ['Google', 'Instagram', 'Spotify', 'Netflix', 'Dropbox', 'Reddit', 'NASA'],
    pros: [
      'O\'rganish juda oson',
      'Kuchli library ecosystem',
      'AI/ML uchun eng yaxshi',
      'Clean va readable syntax',
      'Cross-platform'
    ],
    cons: [
      'Sekinroq ishlaydi',
      'GIL (Global Interpreter Lock)',
      'Mobile development uchun kam',
      'Packaging muammolari'
    ],
    resources: [
      { name: 'Python.org', url: 'https://python.org', type: 'Official' },
      { name: 'Automate the Boring Stuff', url: 'https://automatetheboringstuff.com', type: 'Book' },
      { name: 'Real Python', url: 'https://realpython.com', type: 'Tutorial' },
      { name: 'Coursera Python', url: 'https://coursera.org', type: 'Course' }
    ]
  },
  {
    id: 'react',
    name: 'React',
    icon: <Zap className="w-full h-full text-cyan-500" />,
    difficulty: 'O\'rta' as const,
    popularity: 9,
    salary: '$2800-6500/oy',
    learningTime: '2-4 oy',
    description: 'Facebook tomonidan yaratilgan mashhur frontend library.',
    useCases: [
      'Single Page Applications',
      'Web saytlar yaratish',
      'Mobile apps (React Native)',
      'Component-based UI',
      'E-commerce platforms',
      'Social media applications'
    ],
    companies: ['Facebook', 'Netflix', 'Instagram', 'Whatsapp', 'Airbnb', 'Uber', 'BBC'],
    pros: [
      'Component-based architecture',
      'Virtual DOM',
      'Katta ecosystem',
      'Reusable components',
      'Strong community support'
    ],
    cons: [
      'Steep learning curve',
      'Frequently changing',
      'JSX syntax confusion',
      'Tooling complexity'
    ],
    resources: [
      { name: 'React Documentation', url: 'https://reactjs.org', type: 'Official' },
      { name: 'React Tutorial', url: 'https://reactjs.org/tutorial', type: 'Tutorial' },
      { name: 'Scrimba React Course', url: 'https://scrimba.com', type: 'Course' },
      { name: 'React Patterns', url: 'https://reactpatterns.com', type: 'Guide' }
    ]
  },
  {
    id: 'java',
    name: 'Java',
    icon: <Coffee className="w-full h-full text-orange-600" />,
    difficulty: 'O\'rta' as const,
    popularity: 8,
    salary: '$3200-7500/oy',
    learningTime: '4-6 oy',
    description: 'Enterprise dasturlash uchun eng mashhur til.',
    useCases: [
      'Enterprise applications',
      'Android mobile apps',
      'Web backend (Spring)',
      'Desktop applications',
      'Big data processing',
      'Microservices'
    ],
    companies: ['Oracle', 'Google', 'Amazon', 'IBM', 'LinkedIn', 'eBay', 'Twitter'],
    pros: [
      'Platform independent',
      'Strong memory management',
      'Large ecosystem',
      'Enterprise support',
      'High performance'
    ],
    cons: [
      'Verbose syntax',
      'Slow development',
      'Memory consumption',
      'Complex configuration'
    ],
    resources: [
      { name: 'Oracle Java Docs', url: 'https://docs.oracle.com/javase/', type: 'Official' },
      { name: 'Java Code Geeks', url: 'https://javacodegeeks.com', type: 'Tutorial' },
      { name: 'Spring Boot Guide', url: 'https://spring.io', type: 'Framework' },
      { name: 'Effective Java', url: 'https://amazon.com', type: 'Book' }
    ]
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: <FileCode2 className="w-full h-full text-blue-600" />,
    difficulty: 'O\'rta' as const,
    popularity: 8,
    salary: '$3000-7200/oy',
    learningTime: '2-3 oy',
    description: 'JavaScript\'ning typed versiyasi, katta loyihalar uchun ideal.',
    useCases: [
      'Large-scale web applications',
      'Enterprise frontend',
      'Node.js backend',
      'React/Angular projects',
      'API development',
      'Desktop applications'
    ],
    companies: ['Microsoft', 'Google', 'Airbnb', 'Slack', 'Asana', 'Shopify', 'Atlassian'],
    pros: [
      'Type safety',
      'Better IDE support',
      'Early error detection',
      'JavaScript compatibility',
      'Great for teams'
    ],
    cons: [
      'Additional complexity',
      'Compilation step',
      'Learning curve',
      'Configuration overhead'
    ],
    resources: [
      { name: 'TypeScript Handbook', url: 'https://typescriptlang.org', type: 'Official' },
      { name: 'TypeScript Deep Dive', url: 'https://basarat.gitbook.io/typescript/', type: 'Book' },
      { name: 'TypeScript Exercises', url: 'https://typescript-exercises.github.io', type: 'Practice' },
      { name: 'Total TypeScript', url: 'https://totaltypescript.com', type: 'Course' }
    ]
  },
  {
    id: 'flutter',
    name: 'Flutter',
    icon: <Smartphone className="w-full h-full text-blue-400" />,
    difficulty: 'O\'rta' as const,
    popularity: 7,
    salary: '$2800-6000/oy',
    learningTime: '3-5 oy',
    description: 'Google\'ning cross-platform mobile development framework\'i.',
    useCases: [
      'Cross-platform mobile apps',
      'iOS va Android apps',
      'Web applications',
      'Desktop applications',
      'Embedded systems',
      'Fuchsia OS apps'
    ],
    companies: ['Google', 'Alibaba', 'BMW', 'Square', 'eBay', 'Groupon', 'Philips'],
    pros: [
      'Single codebase',
      'Fast development',
      'Great performance',
      'Rich UI widgets',
      'Hot reload'
    ],
    cons: [
      'Large app size',
      'Dart language learning',
      'Limited native features',
      'Young ecosystem'
    ],
    resources: [
      { name: 'Flutter Documentation', url: 'https://flutter.dev', type: 'Official' },
      { name: 'Flutter Cookbook', url: 'https://flutter.dev/cookbook', type: 'Guide' },
      { name: 'Dart Language Tour', url: 'https://dart.dev/guides/language/language-tour', type: 'Tutorial' },
      { name: 'Flutter University', url: 'https://flutter.dev/learn', type: 'Course' }
    ]
  }
];

// Career Paths Data
const careerPaths = [
  {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    icon: <Monitor className="w-full h-full text-blue-500" />,
    category: 'Frontend',
    salary: '$2500-6000/oy',
    experience: '0-3 yil',
    growth: '+15% yillik',
    description: 'Foydalanuvchi interfeysi va user experience yaratish.',
    remote: true,
    education: 'Kollej/Universitet yoki bootcamp',
    skills: [
      'HTML/CSS',
      'JavaScript',
      'React/Vue/Angular',
      'Responsive Design',
      'Git',
      'Testing',
      'TypeScript',
      'Webpack/Build Tools'
    ],
    responsibilities: [
      'User interface yaratish va dizayn qilish',
      'Responsive web design amalga oshirish',
      'JavaScript frameworklar bilan ishlash',
      'API bilan integratsiya qilish',
      'Cross-browser compatibility ta\'minlash',
      'Performance optimization',
      'User experience yaxshilash',
      'Testing va debugging'
    ],
    companies: [
      'Google', 'Facebook', 'Netflix', 'Airbnb', 'Uber', 'Spotify', 'GitHub', 'Shopify'
    ],
    certifications: [
      'Google Mobile Web Specialist',
      'AWS Certified Cloud Practitioner',
      'Microsoft Certified: Azure Fundamentals',
      'Adobe Certified Expert (ACE)'
    ]
  },
  {
    id: 'backend-developer',
    title: 'Backend Developer',
    icon: <Server className="w-full h-full text-green-500" />,
    category: 'Backend',
    salary: '$3000-7500/oy',
    experience: '1-4 yil',
    growth: '+18% yillik',
    description: 'Server-side logic, API va database bilan ishlash.',
    remote: true,
    education: 'Komputer fanlari bo\'yicha talim',
    skills: [
      'Python/Java/Node.js',
      'SQL/NoSQL databases',
      'RESTful APIs',
      'Cloud platforms',
      'Docker',
      'Testing frameworks',
      'Authentication',
      'Microservices'
    ],
    responsibilities: [
      'Server-side aplikatsiya logikasini yaratish',
      'Database dizayn va boshqarish',
      'RESTful va GraphQL API yaratish',
      'Security measures amalga oshirish',
      'Performance monitoring va optimization',
      'Cloud infrastructure bilan ishlash',
      'CI/CD pipeline sozlash',
      'Third-party services bilan integratsiya'
    ],
    companies: [
      'Amazon', 'Microsoft', 'Google', 'Netflix', 'Uber', 'LinkedIn', 'Twitter', 'PayPal'
    ],
    certifications: [
      'AWS Certified Developer',
      'Google Cloud Professional Developer',
      'Microsoft Azure Developer Associate',
      'Oracle Certified Professional'
    ]
  },
  {
    id: 'fullstack-developer',
    title: 'Full Stack Developer',
    icon: <Layers3 className="w-full h-full text-purple-500" />,
    category: 'Full Stack',
    salary: '$3500-8000/oy',
    experience: '2-5 yil',
    growth: '+20% yillik',
    description: 'Frontend va backend texnologiyalarni biluvchi universal dasturchi.',
    remote: true,
    education: 'Komputer fanlari yoki self-taught',
    skills: [
      'Frontend (React/Vue/Angular)',
      'Backend (Node.js/Python/Java)',
      'Database management',
      'DevOps basics',
      'System design',
      'Testing',
      'Cloud platforms',
      'Mobile development'
    ],
    responsibilities: [
      'End-to-end feature development',
      'Frontend va backend integratsiyasi',
      'Database architecture dizayni',
      'Application deployment va maintenance',
      'Performance optimization',
      'Code review va mentoring',
      'Technical decision making',
      'Project planning va estimation'
    ],
    companies: [
      'Startup companies', 'Medium-sized businesses', 'Consulting firms', 'Freelance clients'
    ],
    certifications: [
      'AWS Solutions Architect',
      'Full Stack Web Developer (Coursera)',
      'Google Cloud Professional Cloud Architect',
      'Certified Kubernetes Administrator'
    ]
  },
  {
    id: 'mobile-developer',
    title: 'Mobile Developer',
    icon: <Smartphone className="w-full h-full text-orange-500" />,
    category: 'Mobile',
    salary: '$2800-6500/oy',
    experience: '1-4 yil',
    growth: '+22% yillik',
    description: 'iOS va Android ilovalar yaratish.',
    remote: true,
    education: 'Komputer fanlari yoki mobile bootcamp',
    skills: [
      'Swift/Kotlin',
      'React Native/Flutter',
      'Mobile UI/UX',
      'API integration',
      'App Store optimization',
      'Testing frameworks',
      'Push notifications',
      'Mobile security'
    ],
    responsibilities: [
      'Native yoki cross-platform mobile apps yaratish',
      'Mobile user interface dizayn va implement qilish',
      'App Store va Google Play\'ga publish qilish',
      'Mobile performance optimization',
      'Device-specific features bilan ishlash',
      'Backend APIs bilan integratsiya',
      'Mobile testing va debugging',
      'App analytics va crash reporting'
    ],
    companies: [
      'Uber', 'Instagram', 'TikTok', 'Spotify', 'Airbnb', 'WhatsApp', 'Telegram', 'Banking apps'
    ],
    certifications: [
      'Google Associate Android Developer',
      'Apple Certified iOS Developer',
      'React Native Certification',
      'Flutter Certified Developer'
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    icon: <BarChart3 className="w-full h-full text-blue-600" />,
    category: 'Data Science',
    salary: '$4000-10000/oy',
    experience: '2-6 yil',
    growth: '+25% yillik',
    description: 'Ma\'lumotlarni tahlil qilish va machine learning modellari yaratish.',
    remote: true,
    education: 'Matematika, Statistika yoki komputer fanlari',
    skills: [
      'Python/R',
      'Machine Learning',
      'Statistics',
      'SQL',
      'Data visualization',
      'Pandas/NumPy',
      'TensorFlow/PyTorch',
      'Business intelligence'
    ],
    responsibilities: [
      'Data collection va cleaning',
      'Statistical analysis va modeling',
      'Machine learning algoritmlari yaratish',
      'Data visualization va reporting',
      'Business insights taqdim etish',
      'A/B testing o\'tkazish',
      'Predictive modeling',
      'Big data technologies bilan ishlash'
    ],
    companies: [
      'Google', 'Amazon', 'Microsoft', 'Netflix', 'Facebook', 'Tesla', 'IBM', 'Consulting firms'
    ],
    certifications: [
      'Google Data Analytics Professional',
      'IBM Data Science Professional',
      'Microsoft Azure Data Scientist Associate',
      'Coursera Machine Learning Specialization'
    ]
  },
  {
    id: 'ai-ml-engineer',
    title: 'AI/ML Engineer',
    icon: <Brain className="w-full h-full text-purple-600" />,
    category: 'AI/ML',
    salary: '$5000-12000/oy',
    experience: '3-7 yil',
    growth: '+30% yillik',
    description: 'Sun\'iy intellekt va machine learning tizimlari yaratish.',
    remote: true,
    education: 'Komputer fanlari, Matematika yoki PhD',
    skills: [
      'Deep Learning',
      'Neural Networks',
      'TensorFlow/PyTorch',
      'Computer Vision',
      'NLP',
      'MLOps',
      'Cloud ML platforms',
      'Mathematics/Statistics'
    ],
    responsibilities: [
      'ML model yaratish va train qilish',
      'AI algorithms design va implement qilish',
      'Model deployment va monitoring',
      'Data pipeline yaratish',
      'Research va development',
      'Model performance optimization',
      'MLOps va automation',
      'Technical leadership'
    ],
    companies: [
      'OpenAI', 'Google DeepMind', 'Meta AI', 'Tesla', 'NVIDIA', 'Microsoft Research', 'Amazon AI'
    ],
    certifications: [
      'Google Machine Learning Engineer',
      'AWS Machine Learning Specialty',
      'Microsoft Azure AI Engineer Associate',
      'NVIDIA Deep Learning Institute'
    ]
  }
];

// Language Card Component
interface LanguageCardProps {
  language: any;
  index: number;
  onClick: () => void;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ language, index, onClick }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Oson': return 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400';
      case 'O\'rta': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Qiyin': return 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div
      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300/50 dark:hover:border-blue-500/50"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'slideUp 0.6s ease-out forwards'
      }}
      onClick={onClick}
    >
      {/* Floating decoration */}
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60 group-hover:scale-150 transition-all duration-300"></div>
      
      {/* Icon and Popularity */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
          {language.icon}
        </div>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {language.popularity}/10
          </span>
        </div>
      </div>

      {/* Title and Description */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {language.name}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
        {language.description}
      </p>

      {/* Stats */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">O'rganish vaqti</span>
          </div>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {language.learningTime}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Maosh</span>
          </div>
          <span className="text-sm font-medium text-green-600 dark:text-green-400">
            {language.salary}
          </span>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex items-center justify-between">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(language.difficulty)}`}>
          {language.difficulty}
        </span>
        
        <div className="flex items-center space-x-1 text-xs text-gray-500">
          <Building className="w-3 h-3" />
          <span>{language.companies.length} kompaniya</span>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-sm font-medium text-gray-900 dark:text-white flex items-center">
            Batafsil ma'lumot
            <ChevronRight className="w-4 h-4 ml-1" />
          </span>
        </div>
      </div>
    </div>
  );
};

// Career Card Component
interface CareerCardProps {
  career: any;
  index: number;
  onClick: () => void;
}

const CareerCard: React.FC<CareerCardProps> = ({ career, index, onClick }) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      'Frontend': 'from-blue-500 to-cyan-500',
      'Backend': 'from-green-500 to-emerald-500',
      'Full Stack': 'from-purple-500 to-pink-500',
      'Mobile': 'from-orange-500 to-red-500',
      'Data Science': 'from-yellow-500 to-orange-500',
      'AI/ML': 'from-indigo-500 to-purple-500',
      'DevOps': 'from-gray-500 to-slate-500',
      'Cybersecurity': 'from-red-500 to-pink-500',
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <div
      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 cursor-pointer transform transition-all duration-700 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-300/50 dark:hover:border-purple-500/50"
      style={{
        animationDelay: `${index * 150}ms`,
        animation: 'slideUp 0.8s ease-out forwards'
      }}
      onClick={onClick}
    >
      {/* Category Badge */}
      <div className={`absolute -top-3 -right-3 px-4 py-2 rounded-2xl bg-gradient-to-r ${getCategoryColor(career.category)} text-white text-sm font-semibold shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
        {career.category}
      </div>

      {/* Icon and Title */}
      <div className="mb-6">
        <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
          {career.icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {career.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
          {career.description}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 mb-6">
        <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-gray-700/50 rounded-xl">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Maosh</span>
          </div>
          <span className="text-sm font-bold text-green-600 dark:text-green-400">
            {career.salary}
          </span>
        </div>

        <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-gray-700/50 rounded-xl">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Tajriba</span>
          </div>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {career.experience}
          </span>
        </div>

        <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-gray-700/50 rounded-xl">
          <div className="flex items-center space-x-2">
            <Building className="w-4 h-4 text-purple-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">O'sish</span>
          </div>
          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
            {career.growth}
          </span>
        </div>
      </div>

      {/* Skills Preview */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
          <Award className="w-4 h-4 mr-2 text-yellow-500" />
          Kerakli Ko'nikmalar
        </h4>
        <div className="flex flex-wrap gap-2">
          {career.skills.slice(0, 3).map((skill: string, idx: number) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-xs font-medium text-gray-700 dark:text-gray-300 rounded-full"
            >
              {skill}
            </span>
          ))}
          {career.skills.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-xs font-medium text-gray-500 dark:text-gray-400 rounded-full">
              +{career.skills.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Remote Work & Companies */}
      <div className="flex items-center justify-between mb-6">
        {career.remote && (
          <div className="flex items-center space-x-1 text-xs font-medium text-green-600 dark:text-green-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Remote Work</span>
          </div>
        )}
        <div className="flex items-center space-x-1 text-xs font-medium text-gray-600 dark:text-gray-400">
          <Users className="w-3 h-3" />
          <span>{career.companies.length}+ kompaniya</span>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex items-center justify-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-blue-900/30 dark:group-hover:to-purple-900/30 transition-all duration-300">
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2">
          Batafsil Ma'lumot
        </span>
        <ChevronRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform duration-300" />
      </div>

      {/* Hover Overlay Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(career.category)} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
    </div>
  );
};

// Detail Modal Component
interface DetailModalProps {
  item: any;
  type: 'languages' | 'careers';
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ item, type, onClose }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      setScrolled(target.scrollTop > 20);
    };

    const modalContent = document.querySelector('.modal-content');
    modalContent?.addEventListener('scroll', handleScroll);
    
    return () => modalContent?.removeEventListener('scroll', handleScroll);
  }, []);

  const renderLanguageDetails = (language: any) => (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <div className="text-6xl sm:text-7xl">{language.icon}</div>
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            {language.name}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {language.description}
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-2xl">
          <Star className="w-8 h-8 text-yellow-500 mb-3" />
          <div className="text-3xl font-bold text-gray-900 dark:text-white">
            {language.popularity}/10
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Mashhurlik</div>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-2xl">
          <TrendingUp className="w-8 h-8 text-green-500 mb-3" />
          <div className="text-3xl font-bold text-gray-900 dark:text-white">
            {language.salary.split('-')[0]}+
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Maosh</div>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-2xl">
          <Clock className="w-8 h-8 text-purple-500 mb-3" />
          <div className="text-3xl font-bold text-gray-900 dark:text-white">
            {language.learningTime}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">O'rganish</div>
        </div>
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-2xl">
          <Building className="w-8 h-8 text-orange-500 mb-3" />
          <div className="text-3xl font-bold text-gray-900 dark:text-white">
            {language.companies.length}+
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Kompaniya</div>
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <Award className="w-6 h-6 mr-3 text-blue-500" />
          Qo'llanish Sohalari
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {language.useCases.map((useCase: string, index: number) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">{useCase}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pros and Cons */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
            Afzalliklari
          </h3>
          <ul className="space-y-3">
            {language.pros.map((pro: string, index: number) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-400">{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <AlertCircle className="w-6 h-6 mr-3 text-orange-500" />
            Kamchiliklari
          </h3>
          <ul className="space-y-3">
            {language.cons.map((con: string, index: number) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-400">{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Companies */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <Building className="w-6 h-6 mr-3 text-purple-500" />
          Ishlatadigan Kompaniyalar
        </h3>
        <div className="flex flex-wrap gap-4">
          {language.companies.map((company: string, index: number) => (
            <span
              key={index}
              className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-300 rounded-full font-medium"
            >
              {company}
            </span>
          ))}
        </div>
      </div>

      {/* Learning Resources */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <BookOpen className="w-6 h-6 mr-3 text-indigo-500" />
          O'quv Materiallari
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {language.resources.map((resource: any, index: number) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {resource.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {resource.type}
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCareerDetails = (career: any) => (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <div className="text-6xl sm:text-7xl">{career.icon}</div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              {career.title}
            </h2>
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full w-fit">
              {career.category}
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {career.description}
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-2xl">
          <TrendingUp className="w-8 h-8 text-green-500 mb-3" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {career.salary.split('-')[0]}+
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Maosh</div>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-2xl">
          <Clock className="w-8 h-8 text-blue-500 mb-3" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {career.experience}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Tajriba</div>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-2xl">
          <TrendingUp className="w-8 h-8 text-purple-500 mb-3" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {career.growth}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">O'sish</div>
        </div>
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-2xl">
          <Building className="w-8 h-8 text-orange-500 mb-3" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {career.companies.length}+
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Kompaniya</div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <Award className="w-6 h-6 mr-3 text-blue-500" />
          Kerakli Ko'nikmalar
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {career.skills.map((skill: string, index: number) => (
            <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl">
              <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Responsibilities */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <Users className="w-6 h-6 mr-3 text-green-500" />
          Vazifalar
        </h3>
        <div className="space-y-4">
          {career.responsibilities.map((responsibility: string, index: number) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                {index + 1}
              </div>
              <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{responsibility}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Companies and Certifications */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Building className="w-6 h-6 mr-3 text-purple-500" />
            Ish Beruvchi Kompaniyalar
          </h3>
          <div className="flex flex-wrap gap-3">
            {career.companies.map((company: string, index: number) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-300 rounded-full font-medium"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Award className="w-6 h-6 mr-3 text-yellow-500" />
            Sertifikatlar
          </h3>
          <div className="space-y-3">
            {career.certifications.map((cert: string, index: number) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl">
                <Award className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Ta'lim Talabi</h4>
          <p className="text-gray-600 dark:text-gray-400">{career.education}</p>
        </div>
        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Remote Work</h4>
          <p className="text-gray-600 dark:text-gray-400">
            {career.remote ? 'Ha, remote ishlash imkoni mavjud' : 'Asosan ofisda ishlash talab etiladi'}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white dark:bg-gray-900 rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-6xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
        {/* Header with close button */}
        <div className={`sticky top-0 z-20 flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
          <div className="flex items-center space-x-3">
            <ChevronLeft className="w-6 h-6 text-gray-400" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              {type === 'languages' ? 'Dasturlash Tili' : 'Kasb Yo\'nalishi'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="modal-content overflow-y-auto max-h-[calc(95vh-80px)] sm:max-h-[calc(90vh-80px)]">
          <div className="p-6 sm:p-8">
            {type === 'languages' ? renderLanguageDetails(item) : renderCareerDetails(item)}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const ProgrammingCourses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'languages' | 'careers'>('languages');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: <Code2 className="w-6 h-6" />, label: 'Dasturlash Tillari', value: '15+' },
    { icon: <Briefcase className="w-6 h-6" />, label: 'Kasblar', value: '25+' },
    { icon: <TrendingUp className="w-6 h-6" />, label: 'O\'rtacha Maosh', value: '$3000+' },
    { icon: <Users className="w-6 h-6" />, label: 'IT Mutaxassislari', value: '1M+' },
  ];

  return (
    <>
      <style>{`
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .line-clamp-3 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
`}</style>

      
      <div className="min-h-screen py-12 px-6 lg:px-8">
        {/* Hero Section */}
        <div className={`max-w-7xl mx-auto text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 -z-10"></div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              IT Karriera Yo'nalishlari
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Zamonaviy dasturlash tillari va IT sohasidagi eng ommabop kasblar haqida to'liq ma'lumot. 
              Sizning kelajagingizni bugun boshlang!
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="relative inline-flex bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <button
                onClick={() => setActiveTab('languages')}
                className={`relative z-10 px-8 py-4 text-base font-semibold rounded-xl transition-all duration-300 focus:outline-none ${
                  activeTab === 'languages'
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Code2 className="w-5 h-5" />
                  <span>Dasturlash Tillari</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('careers')}
                className={`relative z-10 px-8 py-4 text-base font-semibold rounded-xl transition-all duration-300 focus:outline-none ${
                  activeTab === 'careers'
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-purple-500'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5" />
                  <span>Kasblar</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto">
          {activeTab === 'languages' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {programmingLanguages.map((language, index) => (
                <LanguageCard
                  key={language.id}
                  language={language}
                  index={index}
                  onClick={() => setSelectedItem(language)}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {careerPaths.map((career, index) => (
                <CareerCard
                  key={career.id}
                  career={career}
                  index={index}
                  onClick={() => setSelectedItem(career)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Learning Resources */}
        <div className="max-w-7xl mx-auto mt-20">
          <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
            <div className="text-center mb-8">
              <BookOpen className="w-12 h-12 mx-auto text-indigo-600 dark:text-indigo-400 mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                O'qish Resurslari
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Har bir dasturlash tili va kasb uchun eng yaxshi o'quv materiallari va kurslar
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <Award className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Boshlang'ich Daraja
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Dasturlashga endi kirayotganlar uchun
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• HTML, CSS, JavaScript</li>
                  <li>• Python asoslari</li>
                  <li>• Git va GitHub</li>
                  <li>• Algoritmlar va ma'lumotlar tuzilmalari</li>
                </ul>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <Award className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  O'rta Daraja
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Biror bir tilni biladiganlar uchun
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• Framework'lar (React, Vue, Angular)</li>
                  <li>• Backend development</li>
                  <li>• Ma'lumotlar bazasi</li>
                  <li>• RESTful API yaratish</li>
                </ul>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <Award className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Ilg'or Daraja
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Professional darajaga chiqish
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• Mikroservislar arxitekturasi</li>
                  <li>• DevOps va CI/CD</li>
                  <li>• Machine Learning</li>
                  <li>• Cloud platformalar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Detail Modal */}
        {selectedItem && (
          <DetailModal
            item={selectedItem}
            type={activeTab}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </div>
    </>
  );
};

export default ProgrammingCourses;
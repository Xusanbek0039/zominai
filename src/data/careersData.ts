import React from 'react';
import { 
  Code2, Database, Smartphone, Globe, Brain, Shield, 
  Server, Palette, BarChart3, Zap, Bot, Layers3,
  Monitor, Coffee, Cpu, Binary, Flame, Gem,
  Triangle, Hash, FileCode2, Settings,
  PlaneIcon
} from 'lucide-react';

export const programmingLanguages = [
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: React.createElement(Code2, { className: "w-full h-full text-yellow-500" }),
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
    icon: React.createElement(Database, { className: "w-full h-full text-blue-500" }),
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
    icon: React.createElement(Zap, { className: "w-full h-full text-cyan-500" }),
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
    icon: React.createElement(Coffee, { className: "w-full h-full text-orange-600" }),
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
    icon: React.createElement(FileCode2, { className: "w-full h-full text-blue-600" }),
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
    icon: React.createElement(Smartphone, { className: "w-full h-full text-blue-400" }),
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
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    icon: React.createElement(Server, { className: "w-full h-full text-green-600" }),
    difficulty: 'O\'rta' as const,
    popularity: 8,
    salary: '$2700-6800/oy',
    learningTime: '2-4 oy',
    description: 'JavaScript runtime backend development uchun.',
    useCases: [
      'RESTful APIs',
      'Real-time applications',
      'Microservices',
      'Command-line tools',
      'Build tools',
      'IoT applications'
    ],
    companies: ['Netflix', 'Uber', 'PayPal', 'NASA', 'Twitter', 'LinkedIn', 'Trello'],
    pros: [
      'JavaScript everywhere',
      'Fast development',
      'Large package ecosystem',
      'Great for APIs',
      'Active community'
    ],
    cons: [
      'Single-threaded',
      'Callback complexity',
      'Rapid changes',
      'CPU-intensive limitations'
    ],
    resources: [
      { name: 'Node.js Documentation', url: 'https://nodejs.org', type: 'Official' },
      { name: 'Node.js Tutorial', url: 'https://nodejs.dev', type: 'Tutorial' },
      { name: 'Express.js Guide', url: 'https://expressjs.com', type: 'Framework' },
      { name: 'Node.js Best Practices', url: 'https://github.com/goldbergyoni/nodebestpractices', type: 'Guide' }
    ]
  },
  {
    id: 'go',
    name: 'Go',
    icon: React.createElement(Zap, { className: "w-full h-full text-cyan-400" }),
    difficulty: 'O\'rta' as const,
    popularity: 7,
    salary: '$3500-8500/oy',
    learningTime: '2-4 oy',
    description: 'Google tomonidan yaratilgan tez va sodda til.',
    useCases: [
      'Cloud services',
      'Microservices',
      'Network programming',
      'DevOps tools',
      'Container platforms',
      'Blockchain applications'
    ],
    companies: ['Google', 'Uber', 'Dropbox', 'Docker', 'Kubernetes', 'Spotify', 'Medium'],
    pros: [
      'Fast compilation',
      'Great concurrency',
      'Simple syntax',
      'Strong performance',
      'Built-in testing'
    ],
    cons: [
      'Limited generics',
      'Verbose error handling',
      'Young ecosystem',
      'Less library support'
    ],
    resources: [
      { name: 'Go Documentation', url: 'https://golang.org', type: 'Official' },
      { name: 'A Tour of Go', url: 'https://tour.golang.org', type: 'Tutorial' },
      { name: 'Go by Example', url: 'https://gobyexample.com', type: 'Examples' },
      { name: 'Effective Go', url: 'https://golang.org/doc/effective_go.html', type: 'Guide' }
    ]
  },
  {
    id: 'rust',
    name: 'Rust',
    icon: React.createElement(Settings, { className: "w-full h-full text-orange-500" }),
    difficulty: 'Qiyin' as const,
    popularity: 6,
    salary: '$4000-9000/oy',
    learningTime: '6-8 oy',
    description: 'Mozilla tomonidan yaratilgan system programming tili.',
    useCases: [
      'System programming',
      'Web assembly',
      'Blockchain development',
      'Game engines',
      'Operating systems',
      'Network services'
    ],
    companies: ['Mozilla', 'Dropbox', 'Coursera', 'Figma', 'Discord', 'Cloudflare', '1Password'],
    pros: [
      'Memory safety',
      'Zero-cost abstractions',
      'Great performance',
      'Growing ecosystem',
      'Modern tooling'
    ],
    cons: [
      'Steep learning curve',
      'Complex syntax',
      'Small community',
      'Limited job market'
    ],
    resources: [
      { name: 'The Rust Book', url: 'https://doc.rust-lang.org/book/', type: 'Book' },
      { name: 'Rust by Example', url: 'https://doc.rust-lang.org/rust-by-example/', type: 'Examples' },
      { name: 'Rustlings', url: 'https://github.com/rust-lang/rustlings', type: 'Exercises' },
      { name: 'Rust Documentation', url: 'https://doc.rust-lang.org', type: 'Official' }
    ]
  },
  {
    id: 'php',
    name: 'PHP',
    icon: React.createElement(Globe, { className: "w-full h-full text-purple-600" }),
    difficulty: 'Oson' as const,
    popularity: 7,
    salary: '$2200-5500/oy',
    learningTime: '2-3 oy',
    description: 'Web development uchun eng keng ishlatiluvchi server-side til.',
    useCases: [
      'Web saytlar yaratish',
      'E-commerce platforms',
      'Content Management Systems',
      'Web APIs',
      'Server-side scripting',
      'Database operations'
    ],
    companies: ['Facebook', 'WordPress', 'Wikipedia', 'Slack', 'Etsy', 'Mailchimp', 'Spotify'],
    pros: [
      'O\'rganish oson',
      'Keng tarqalgan',
      'Arzon hosting',
      'Katta community',
      'WordPress ecosystem'
    ],
    cons: [
      'Inconsistent syntax',
      'Security issues',
      'Performance limitations',
      'Bad reputation'
    ],
    resources: [
      { name: 'PHP Documentation', url: 'https://php.net', type: 'Official' },
      { name: 'PHP The Right Way', url: 'https://phptherightway.com', type: 'Guide' },
      { name: 'Laravel Documentation', url: 'https://laravel.com', type: 'Framework' },
      { name: 'PHP Tutorial', url: 'https://w3schools.com/php/', type: 'Tutorial' }
    ]
  },
  {
    id: 'swift',
    name: 'Swift',
    icon: React.createElement(Smartphone, { className: "w-full h-full text-orange-500" }),
    difficulty: 'O\'rta' as const,
    popularity: 6,
    salary: '$3500-8000/oy',
    learningTime: '3-5 oy',
    description: 'Apple tomonidan iOS development uchun yaratilgan til.',
    useCases: [
      'iOS mobile apps',
      'macOS applications',
      'watchOS apps',
      'tvOS applications',
      'Server-side Swift',
      'Machine Learning'
    ],
    companies: ['Apple', 'Lyft', 'LinkedIn', 'Kickstarter', 'Airbnb', 'Walmart', 'IBM'],
    pros: [
      'Modern syntax',
      'Type safety',
      'Great performance',
      'Interoperability with Objective-C',
      'Active development'
    ],
    cons: [
      'Apple ecosystem only',
      'Frequent changes',
      'Limited server-side adoption',
      'Smaller community'
    ],
    resources: [
      { name: 'Swift Documentation', url: 'https://swift.org', type: 'Official' },
      { name: 'Swift Playgrounds', url: 'https://developer.apple.com/swift-playgrounds/', type: 'App' },
      { name: 'Hacking with Swift', url: 'https://hackingwithswift.com', type: 'Tutorial' },
      { name: 'Ray Wenderlich', url: 'https://raywenderlich.com', type: 'Course' }
    ]
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    icon: React.createElement(Smartphone, { className: "w-full h-full text-purple-500" }),
    difficulty: 'O\'rta' as const,
    popularity: 7,
    salary: '$3200-7000/oy',
    learningTime: '3-4 oy',
    description: 'JetBrains tomonidan Android development uchun yaratilgan til.',
    useCases: [
      'Android mobile apps',
      'Cross-platform development',
      'Server-side development',
      'Web frontend',
      'Desktop applications',
      'Data science'
    ],
    companies: ['Google', 'JetBrains', 'Pinterest', 'Uber', 'Netflix', 'Trello', 'Evernote'],
    pros: [
      '100% Java interoperability',
      'Concise syntax',
      'Null safety',
      'Coroutines for async',
      'Google support'
    ],
    cons: [
      'Slower compilation',
      'Learning curve from Java',
      'Smaller community',
      'Runtime overhead'
    ],
    resources: [
      { name: 'Kotlin Documentation', url: 'https://kotlinlang.org', type: 'Official' },
      { name: 'Kotlin Koans', url: 'https://kotlinlang.org/docs/koans.html', type: 'Exercises' },
      { name: 'Android Kotlin Course', url: 'https://developer.android.com/kotlin', type: 'Course' },
      { name: 'Kotlin in Action', url: 'https://manning.com', type: 'Book' }
    ]
  },
  {
    id: 'csharp',
    name: 'C#',
    icon: React.createElement(Hash, { className: "w-full h-full text-purple-600" }),
    difficulty: 'O\'rta' as const,
    popularity: 7,
    salary: '$3000-7500/oy',
    learningTime: '4-6 oy',
    description: 'Microsoft tomonidan yaratilgan .NET platform uchun til.',
    useCases: [
      'Windows applications',
      'Web development (ASP.NET)',
      'Game development (Unity)',
      'Mobile apps (Xamarin)',
      'Desktop applications',
      'Cloud services'
    ],
    companies: ['Microsoft', 'Stack Overflow', 'Dell', 'Accenture', 'GE Digital', 'Siemens', 'Intuit'],
    pros: [
      'Strong typing',
      'Rich .NET ecosystem',
      'Great tooling (Visual Studio)',
      'Cross-platform (.NET Core)',
      'Enterprise support'
    ],
    cons: [
      'Microsoft ecosystem',
      'Licensing costs',
      'Verbose syntax',
      'Windows-centric history'
    ],
    resources: [
      { name: 'C# Documentation', url: 'https://docs.microsoft.com/dotnet/csharp/', type: 'Official' },
      { name: 'C# Yellow Book', url: 'https://csharpcourse.com', type: 'Book' },
      { name: '.NET Tutorial', url: 'https://dotnet.microsoft.com/learn', type: 'Tutorial' },
      { name: 'Pluralsight C#', url: 'https://pluralsight.com', type: 'Course' }
    ]
  },
  {
    id: 'ruby',
    name: 'Ruby',
    icon: React.createElement(Gem, { className: "w-full h-full text-red-500" }),
    difficulty: 'Oson' as const,
    popularity: 6,
    salary: '$2800-6500/oy',
    learningTime: '2-4 oy',
    description: 'Web development uchun elegant va oson til.',
    useCases: [
      'Web applications (Rails)',
      'Automation scripts',
      'DevOps tools',
      'Prototyping',
      'Data processing',
      'API development'
    ],
    companies: ['GitHub', 'Shopify', 'Basecamp', 'Airbnb', 'Twitter', 'SoundCloud', 'Zendesk'],
    pros: [
      'Developer happiness',
      'Ruby on Rails framework',
      'Clean syntax',
      'Great community',
      'Rapid development'
    ],
    cons: [
      'Performance issues',
      'Declining popularity',
      'Runtime errors',
      'Hosting costs'
    ],
    resources: [
      { name: 'Ruby Documentation', url: 'https://ruby-lang.org', type: 'Official' },
      { name: 'Ruby on Rails Guides', url: 'https://guides.rubyonrails.org', type: 'Framework' },
      { name: 'Try Ruby', url: 'https://tryruby.org', type: 'Interactive' },
      { name: 'The Odin Project', url: 'https://theodinproject.com', type: 'Course' }
    ]
  },
  {
    id: 'cpp',
    name: 'C++',
    icon: React.createElement(Cpu, { className: "w-full h-full text-blue-700" }),
    difficulty: 'Qiyin' as const,
    popularity: 6,
    salary: '$3500-8000/oy',
    learningTime: '6-8 oy',
    description: 'System programming va game development uchun kuchli til.',
    useCases: [
      'System programming',
      'Game development',
      'Embedded systems',
      'High-performance applications',
      'Operating systems',
      'Database systems'
    ],
    companies: ['Google', 'Microsoft', 'Adobe', 'Amazon', 'Facebook', 'Tesla', 'NVIDIA'],
    pros: [
      'High performance',
      'Low-level control',
      'Large standard library',
      'Industry standard',
      'Portable'
    ],
    cons: [
      'Complex syntax',
      'Manual memory management',
      'Long compilation',
      'Steep learning curve'
    ],
    resources: [
      { name: 'cppreference.com', url: 'https://cppreference.com', type: 'Reference' },
      { name: 'learncpp.com', url: 'https://learncpp.com', type: 'Tutorial' },
      { name: 'C++ Core Guidelines', url: 'https://isocpp.github.io/CppCoreGuidelines/', type: 'Guide' },
      { name: 'Effective C++', url: 'https://amazon.com', type: 'Book' }
    ]
  }
];

export const careerPaths = [
  {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    icon: React.createElement(Monitor, { className: "w-full h-full text-blue-500" }),
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
    icon: React.createElement(Server, { className: "w-full h-full text-green-500" }),
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
    icon: React.createElement(Layers3, { className: "w-full h-full text-purple-500" }),
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
    icon: React.createElement(Smartphone, { className: "w-full h-full text-orange-500" }),
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
    icon: React.createElement(BarChart3, { className: "w-full h-full text-blue-600" }),
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
    icon: React.createElement(Brain, { className: "w-full h-full text-purple-600" }),
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
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    icon: React.createElement(Settings, { className: "w-full h-full text-gray-600" }),
    category: 'DevOps',
    salary: '$3500-8500/oy',
    experience: '2-5 yil',
    growth: '+21% yillik',
    description: 'Development va operations jarayonlarini avtomatlashtirish.',
    remote: true,
    education: 'Komputer fanlari yoki system administration',
    skills: [
      'Docker/Kubernetes',
      'CI/CD pipelines',
      'Cloud platforms (AWS/Azure/GCP)',
      'Infrastructure as Code',
      'Monitoring tools',
      'Linux/Unix',
      'Scripting (Bash/Python)',
      'Security practices'
    ],
    responsibilities: [
      'CI/CD pipeline yaratish va maintain qilish',
      'Infrastructure automation',
      'Cloud resource management',
      'Monitoring va logging setup',
      'Security implementation',
      'Performance optimization',
      'Disaster recovery planning',
      'Team collaboration va support'
    ],
    companies: [
      'Amazon', 'Google', 'Microsoft', 'Netflix', 'Uber', 'Spotify', 'GitHub', 'Atlassian'
    ],
    certifications: [
      'AWS Certified DevOps Engineer',
      'Google Cloud Professional DevOps Engineer',
      'Microsoft Azure DevOps Engineer Expert',
      'Certified Kubernetes Administrator (CKA)'
    ]
  },
  {
    id: 'cybersecurity-specialist',
    title: 'Cybersecurity Specialist',
    icon: React.createElement(Shield, { className: "w-full h-full text-red-500" }),
    category: 'Cybersecurity',
    salary: '$4000-9500/oy',
    experience: '2-6 yil',
    growth: '+18% yillik',
    description: 'Tizimlarni cyber hujumlardan himoya qilish.',
    remote: true,
    education: 'Komputer fanlari yoki cybersecurity bootcamp',
    skills: [
      'Network security',
      'Ethical hacking',
      'Risk assessment',
      'Incident response',
      'Compliance frameworks',
      'Security tools (SIEM)',
      'Cryptography',
      'Forensics'
    ],
    responsibilities: [
      'Security assessment va penetration testing',
      'Incident response va investigation',
      'Security policy yaratish',
      'Vulnerability management',
      'Security awareness training',
      'Compliance monitoring',
      'Threat intelligence analysis',
      'Security architecture design'
    ],
    companies: [
      'Government agencies', 'Banks', 'Healthcare', 'Consulting firms', 'Tech companies'
    ],
    certifications: [
      'CISSP (Certified Information Systems Security Professional)',
      'CEH (Certified Ethical Hacker)',
      'CompTIA Security+',
      'CISM (Certified Information Security Manager)'
    ]
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    icon: React.createElement(Palette, { className: "w-full h-full text-pink-500" }),
    category: 'Design',
    salary: '$2200-5500/oy',
    experience: '1-4 yil',
    growth: '+13% yillik',
    description: 'Foydalanuvchi interfeysi va tajribasi dizayni.',
    remote: true,
    education: 'Dizayn yoki self-taught portfolio',
    skills: [
      'Figma/Sketch/Adobe XD',
      'User research',
      'Prototyping',
      'Wireframing',
      'Usability testing',
      'Design systems',
      'HTML/CSS basics',
      'Interaction design'
    ],
    responsibilities: [
      'User research va persona yaratish',
      'Wireframe va mockup yaratish',
      'Interactive prototype yaratish',
      'Usability testing o\'tkazish',
      'Design system yaratish va maintain qilish',
      'Developer bilan hamkorlik',
      'User feedback analysis',
      'Design trend monitoring'
    ],
    companies: [
      'Design agencies', 'Tech startups', 'E-commerce companies', 'SaaS companies'
    ],
    certifications: [
      'Google UX Design Professional Certificate',
      'Adobe Certified Expert',
      'UX Certification from NN/g',
      'Certified Usability Analyst (CUA)'
    ]
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    icon: React.createElement(PlaneIcon, { className: "w-full h-full text-indigo-500" }),
    category: 'Management',
    salary: '$3500-8000/oy',
    experience: '3-7 yil',
    growth: '+19% yillik',
    description: 'Mahsulot strategiyasi va roadmap boshqaruvi.',
    remote: true,
    education: 'Business, Engineering yoki MBA',
    skills: [
      'Product strategy',
      'Market research',
      'Data analysis',
      'Project management',
      'Stakeholder management',
      'Agile/Scrum',
      'User story writing',
      'A/B testing'
    ],
    responsibilities: [
      'Product roadmap yaratish va maintain qilish',
      'Market research va competitive analysis',
      'User requirements gathering',
      'Feature prioritization',
      'Cross-functional team leadership',
      'Product metrics tracking',
      'Stakeholder communication',
      'Go-to-market strategy'
    ],
    companies: [
      'Tech companies', 'Startups', 'E-commerce', 'SaaS companies', 'Consulting firms'
    ],
    certifications: [
      'Certified Scrum Product Owner (CSPO)',
      'Product Management Certificate (UC Berkeley)',
      'Google Project Management Professional Certificate',
      'Pragmatic Marketing Certification'
    ]
  }
];
import type { Locale } from '@/types/locale'

export const ruLocale: Locale = {
  meta: {
    name: 'Русский',
    code: 'ru',
  },
  navigation: {
    home: 'Главная',
    about: 'Обо мне',
    technologies: 'Технологии',
    projects: 'Проекты',
    contact: 'Контакты',
  },
  hero: {
    greeting: 'Привет, я',
    name: 'Данил',
    description:
      'Инженер-программист с {experienceYears}+ годами опыта, создаю веб и десктоп‑приложения. Люблю структурировать хаос и автоматизировать процессы.',
    contactButton: 'Связаться',
  },
  about: {
    title: 'Обо мне',
    subtitle: 'Привет, давай знакомиться 👋',
    description: [
      'Меня зовут Данил, и мне {age} лет. С 12 лет я интересуюсь программированием и разными науками. С детства меня привлекала техника, и я всегда находил удовольствие в изучении разных приборов и создании чего-то нового.',
      'Верю, что хороший код - это не только про работу, но и про заботу. Каждая строчка должна быть осмысленной, каждая архитектура, продуманной.',
    ],

    statistics: {
      title: 'Статистика',
      years: 'лет',
      yearsExp: 'лет опыта',
      technologies: 'технологий',
      projects: 'проектов'
    },

    interests: {
      title: 'Интересы',
      items: [
        {
          text: 'Робототехника',
          icon: 'lucide:cpu'
        },
        {
          text: 'DevOps',
          icon: 'lucide:wrench'
        },
        {
          text: 'Проектирование ПО',
          icon: 'lucide:code'
        },
        {
          text: 'Научная фантастика',
          icon: 'lucide:book-open'
        }
      ],
    }
  },
  technologies: {
    title: 'Технологии',
    subtitle: 'Инструменты и технологии, с которыми я работаю для создания надёжных решений',
    categories: {
      backend: 'Backend',
      frontend: 'Frontend',
      databases: 'Базы данных',
      devops: 'DevOps',
      mobile: 'Mobile & Desktop',
      api: 'API & Networking',
    },
  },
  projects: {
    title: 'Проекты',
    subtitle: 'Некоторые из проектов, над которыми я работал',
    viewMore: 'Подробнее',
    githubLink: 'Больше проектов на GitHub',
  },
  contact: {
    title: 'Контакты',
    subtitle: 'Свяжитесь со мной для сотрудничества',
    email: 'kalinindanilq7734@gmail.com',
  },
  footer: {
    copyright: 'Kalinin Danil',
    madeWith: 'Made with love ❤',
  },
  socialLinks: [
    {
      name: 'Telegram',
      url: 'https://kalinindanil17y.t.me/',
      icon: 'lucide:send',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/kalininDanil17Y',
      icon: 'lucide:github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kalinind/',
      icon: 'lucide:linkedin',
    },
  ],
  technologiesData: [
    {
      name: 'PHP (Laravel)',
      icon: 'lucide:server',
      category: 'backend',
    },
    {
      name: 'Python',
      icon: 'lucide:server',
      category: 'backend',
    },
    {
      name: 'C#',
      icon: 'lucide:server',
      category: 'backend',
    },
    {
      name: 'Node.js',
      icon: 'lucide:server',
      category: 'backend',
    },
    {
      name: 'JavaScript',
      icon: 'lucide:monitor',
      category: 'frontend',
    },
    {
      name: 'TypeScript',
      icon: 'lucide:monitor',
      category: 'frontend',
    },
    {
      name: 'Vue',
      icon: 'lucide:monitor',
      category: 'frontend',
    },
    {
      name: 'React',
      icon: 'lucide:monitor',
      category: 'frontend',
    },
    {
      name: 'TailwindCSS',
      icon: 'lucide:monitor',
      category: 'frontend',
    },
    {
      name: 'PostgreSQL',
      icon: 'lucide:database',
      category: 'databases',
    },
    {
      name: 'MySQL',
      icon: 'lucide:database',
      category: 'databases',
    },
    {
      name: 'Redis',
      icon: 'lucide:database',
      category: 'databases',
    },
    {
      name: 'MongoDB',
      icon: 'lucide:database',
      category: 'databases',
    },
    {
      name: 'Docker',
      icon: 'lucide:settings',
      category: 'devops',
    },
    {
      name: 'Kubernetes',
      icon: 'lucide:settings',
      category: 'devops',
    },
    {
      name: 'CI/CD',
      icon: 'lucide:settings',
      category: 'devops',
    },
    {
      name: 'WireGuard',
      icon: 'lucide:settings',
      category: 'devops',
    },
    {
      name: 'Android (Kotlin)',
      icon: 'lucide:smartphone',
      category: 'mobile',
    },
    {
      name: 'Windows (WPF)',
      icon: 'lucide:smartphone',
      category: 'mobile',
    },
    {
      name: 'Electron',
      icon: 'lucide:smartphone',
      category: 'mobile',
    },
    {
      name: 'WebSockets',
      icon: 'lucide:network',
      category: 'api',
    },
    {
      name: 'gRPC',
      icon: 'lucide:network',
      category: 'api',
    },
    {
      name: 'REST API',
      icon: 'lucide:network',
      category: 'api',
    },
    {
      name: 'GraphQL',
      icon: 'lucide:network',
      category: 'api',
    },
  ],
  projectsData: [
    {
      name: 'Voteza',
      description:
        'Платформа для голосований, масштабируемая, защищённая, с фронтендом на Vue. Обеспечивает безопасное проведение онлайн-голосований.',
      technologies: ['Vue', 'C#', 'PostgreSQL', 'Redis'],
      icon: 'lucide:vote',
      image: 'https://i.ibb.co/RTMfF1vJ/image.png',
      gradient: 'from-primary-400 to-primary-600',
      url: 'https://voteza.pro',
    },
    {
      name: 'Oauth2Box',
      description:
        'Лёгкий, настраиваемый mock OAuth2/OpenID провайдер для разработки и тестирования. ' +
        'Он эмулирует поведение настоящей OAuth2-системы, позволяя легко тестировать клиентские приложения без настоящих авторизаций.',
      technologies: ['OAuth2', 'NodeJs'],
      icon: 'lucide:key',
      image: 'https://github.com/kalininDanil17Y/Voteza-Oauth2Box/raw/master/assets/voteza-oauth.png',
      gradient: 'from-orange-400 to-orange-600',
      url: 'https://github.com/kalininDanil17Y/Voteza-Oauth2Box',
    },
    {
      name: 'SocketVPN',
      description:
        'VPN-инфраструктура с мастер-сервером и нодами. Обеспечивает безопасное и быстрое подключение через распределённую сеть серверов.',
      technologies: ['WireGuard', 'Docker', 'Kubernetes', 'Kotlin', 'Java', 'Vue', 'C#'],
      icon: 'lucide:shield',
      image: 'https://i.ibb.co/Hf5Mvs4n/image.png',
      gradient: 'from-emerald-400 to-emerald-600',
    },
  ],
}

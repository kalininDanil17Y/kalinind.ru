import type { Locale } from '@/types/locale'
import { markRaw } from "vue";

import icons from './icons'

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
          icon: icons.IconCpu
        },
        {
          text: 'DevOps',
          icon: icons.IconWrench
        },
        {
          text: 'Проектирование ПО',
          icon: icons.IconCode
        },
        {
          text: 'Научная фантастика',
          icon: icons.IconBookOpen
        }
      ],
    }
  },
  technologies: {
    title: 'Технологии',
    subtitle: 'Инструменты и технологии, с которыми я работаю',
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
    personalTitle: 'Мои проекты',
    personalSubtitle: 'Личные проекты',
    collaborativeTitle: 'Коммерческие проекты',
    collaborativeSubtitle: 'Проекты, в которых я принимал участие',
    viewMore: 'Подробнее',
    viewOnGithub: 'Смотреть на GitHub',
    visitSite: 'Посетить сайт',
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
      icon: markRaw(icons.IconTelegram),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/kalininDanil17Y',
      icon: markRaw(icons.IconGithub),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kalinind/',
      icon: markRaw(icons.IconLinkedin),
    },
  ],
  technologiesData: [
    {
      name: 'PHP - Основной стек',
      category: 'backend',
    },
    {
      name: 'Python',
      category: 'backend',
    },
    {
      name: 'C#',
      category: 'backend',
    },
    {
      name: 'Node.js',
      category: 'backend',
    },
    {
      name: 'JavaScript',
      category: 'frontend',
    },
    {
      name: 'TypeScript',
      category: 'frontend',
    },
    {
      name: 'Vue',
      category: 'frontend',
    },
    {
      name: 'React',
      category: 'frontend',
    },
    {
      name: 'TailwindCSS',
      category: 'frontend',
    },
    {
      name: 'PostgreSQL',
      category: 'databases',
    },
    {
      name: 'MySQL',
      category: 'databases',
    },
    {
      name: 'Redis',
      category: 'databases',
    },
    {
      name: 'MongoDB',
      category: 'databases',
    },
    {
      name: 'Docker',
      category: 'devops',
    },
    {
      name: 'Kubernetes',
      category: 'devops',
    },
    {
      name: 'CI/CD',
      category: 'devops',
    },
    {
      name: 'Android (Kotlin)',
      category: 'mobile',
    },
    {
      name: 'Windows (WPF)',
      category: 'mobile',
    },
    {
      name: 'Electron',
      category: 'mobile',
    },
    {
      name: 'WebSockets',
      category: 'api',
    },
    {
      name: 'gRPC',
      category: 'api',
    },
    {
      name: 'REST API',
      category: 'api',
    },
    {
      name: 'GraphQL',
      category: 'api',
    },
  ],
  projectsData: [
    {
      name: 'Voteza',
      description:
        'Платформа для голосований, масштабируемая, защищённая, с фронтендом на Vue. Обеспечивает безопасное проведение онлайн-голосований.',
      technologies: ['Vue', 'C#', 'PostgreSQL', 'Redis'],
      image: 'https://i.ibb.co/RTMfF1vJ/image.png',
      gradient: 'from-primary-400 to-primary-600'
    },
    {
      name: 'Oauth2Box',
      description:
        'Лёгкий, настраиваемый mock OAuth2/OpenID провайдер для разработки и тестирования. ' +
        'Он эмулирует поведение настоящей OAuth2-системы, позволяя легко тестировать клиентские приложения без настоящих авторизаций.',
      technologies: ['OAuth2', 'NodeJs'],
      image: 'https://github.com/kalininDanil17Y/Voteza-Oauth2Box/raw/master/assets/voteza-oauth.png',
      gradient: 'from-orange-400 to-orange-600',
      url: 'https://github.com/kalininDanil17Y/Voteza-Oauth2Box',
    },
    {
      name: 'SocketVPN',
      description:
        'VPN-инфраструктура с мастер-сервером и нодами. Обеспечивает безопасное и быстрое подключение через распределённую сеть серверов.',
      technologies: ['Docker', 'Kubernetes', 'Kotlin', 'Java', 'Vue', 'C#'],
      image: 'https://i.ibb.co/Hf5Mvs4n/image.png',
      gradient: 'from-emerald-400 to-emerald-600',
    },
  ],
  collaborativeProjectsData: [
    {
      name: 'Botva',
      description:
        'Ботва Онлайн - это браузерная многопользовательская ролевая игра с пошаговыми боями и сильным уклоном в юмор. Игровой мир наполнен абсурдными и смешными элементами: населён он двумя враждующими расами - свинтусами и барантусами, персонажами, борющимися с помощью вилок, половников, скалок и прочей «тяжёлой кухонной артиллерии»',
      technologies: ['PHP', 'HTML', 'CSS', 'Jquery'],
      gradient: 'from-green-400 to-green-600',
      url: 'https://botva.ru',
      image: 'https://i2015.otzovik.com/2015/04/12/1995810/img/60633353.jpg'
    },
    {
      name: 'VC.ru',
      description:
        'Ведущее российское издание о технологиях, стартапах и бизнесе. Платформа для обмена знаниями и новостями IT-сообщества.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Redis'],
      gradient: 'from-blue-400 to-blue-600',
      url: 'https://vc.ru',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi99axOkiQdPsAlcA6PM1dFMszhyLXmxLxIg&s'
    },
    {
      name: 'Crypto-Pirates',
      description:
        'Игровая NFT-платформа с элементами DeFi. Пиратская тематика, коллекционные карты и геймифицированный стейкинг.',
      technologies: ['PHP', 'Web3.js', 'React', 'Next.js'],
      gradient: 'from-purple-400 to-purple-600',
      image: 'https://playtoearn.com/img/dapp/crypto-pirates/crypto-pirates-tUCnokYWBQ3v.jpg'
    },
  ],
}

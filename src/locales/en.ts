import type { Locale } from '@/types/locale'
import { markRaw } from "vue";

import icons from './icons'

export const enLocale: Locale = {
  meta: {
    name: 'English',
    code: 'en',
  },
  navigation: {
    home: 'Home',
    about: 'About Me',
    technologies: 'Technologies',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Hi, I\'m',
    name: 'Danil',
    description:
      'Software engineer with {experienceYears}+ years of experience, building web and desktop applications. I love structuring chaos and automating processes.',
    contactButton: 'Get in Touch',
  },
  about: {
    title: 'About Me',
    subtitle: 'Hi, nice to meet you 👋',
    description: [
      "My name is Danil, and I'm {age} years old. I've been passionate about programming and science since I was 12. I've always been drawn to technology and found joy in exploring devices and creating something new.",
    ],
    statistics: {
      title: 'Stats',
      years: 'years',
      yearsExp: 'years of experience',
      technologies: 'technologies',
      projects: 'projects'
    },
    interests: {
      title: 'Interests',
      items: [
        {
          text: 'Robotics',
          icon: icons.IconCpu
        },
        {
          text: 'DevOps',
          icon: icons.IconWrench
        },
        {
          text: 'Software Architecture',
          icon: icons.IconCode
        },
        {
          text: 'Science Fiction',
          icon: icons.IconBookOpen
        }
      ],
    }
  },
  technologies: {
    title: 'Technologies',
    subtitle: 'Tools and technologies',
    categories: {
      backend: 'Backend',
      frontend: 'Frontend',
      databases: 'Databases',
      devops: 'DevOps',
      mobile: 'Mobile & Desktop',
      api: 'API & Networking',
    },
  },
  projects: {
    title: 'Projects',
    subtitle: 'Some of the projects I\'ve worked on',
    personalTitle: 'My Projects',
    personalSubtitle: 'Personal projects with open source code',
    collaborativeTitle: 'Commercial Projects',
    collaborativeSubtitle: 'Projects I\'ve contributed to',
    viewMore: 'View more',
    viewOnGithub: 'View on GitHub',
    visitSite: 'Visit Site',
    githubLink: 'More projects on GitHub',
  },
  contact: {
    title: 'Contact',
    subtitle: 'Let\'s get in touch and work together',
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
      icon: markRaw(icons.IconTelegram)
    },
    {
      name: 'GitHub',
      url: 'https://github.com/kalininDanil17Y',
      icon: markRaw(icons.IconGithub)
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kalinind/',
      icon: markRaw(icons.IconLinkedin)
    },
  ],
  technologiesData: [
    {
      name: 'PHP - Primary stack',
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
        'A scalable and secure voting platform with a Vue-based frontend. Designed for safe online voting.',
      technologies: ['Vue', 'C#', 'PostgreSQL', 'Redis'],
      image: 'https://i.ibb.co/RTMfF1vJ/image.png',
      gradient: 'from-primary-400 to-primary-600'
    },
    {
      name: 'Oauth2Box',
      description:
        'Lightweight, configurable mock OAuth2/OpenID provider for development and testing. ' +
        'It emulates the behavior of a real OAuth2 system, allowing easy testing of client applications without real authorizations.',
      technologies: ['OAuth2', 'NodeJs'],
      image: 'https://github.com/kalininDanil17Y/Voteza-Oauth2Box/raw/master/assets/voteza-oauth.png',
      gradient: 'from-orange-400 to-orange-600',
      url: 'https://github.com/kalininDanil17Y/Voteza-Oauth2Box',
    },
    {
      name: 'SocketVPN',
      description:
        'A VPN infrastructure with a master server and distributed nodes. Provides secure and fast connections through a distributed server network.',
      technologies: ['Docker', 'Kubernetes', 'Kotlin', 'Java', 'Vue', 'C#'],
      image: 'https://i.ibb.co/Hf5Mvs4n/image.png',
      gradient: 'from-emerald-400 to-emerald-600',
    },
  ],
  collaborativeProjectsData: [
    {
      name: 'Botva',
      description:
        'Botva Online is a browser-based multiplayer role-playing game featuring turn-based combat and a strong emphasis on humor. The game world is populated by two warring races - the Svintuses (pig-people) and the Barantuses (sheep-people) - who fight using spoons, forks, ladles, and kitchen utensils, delivering a playful and absurd twist to the fantasy genre',
      technologies: ['PHP', 'HTML', 'CSS', 'Jquery'],
      gradient: 'from-green-400 to-green-600',
      url: 'https://botva.ru',
      image: 'https://i2015.otzovik.com/2015/04/12/1995810/img/60633353.jpg'
    },
    {
      name: 'VC.ru',
      description:
        'Leading Russian publication about technology, startups and business. Platform for knowledge sharing and IT community news.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Redis'],
      gradient: 'from-blue-400 to-blue-600',
      url: 'https://vc.ru',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi99axOkiQdPsAlcA6PM1dFMszhyLXmxLxIg&s'
    },
    {
      name: 'Crypto-Pirates',
      description:
        'Gaming NFT platform with DeFi elements. Pirate-themed collectible cards and gamified staking system.',
      technologies: ['PHP', 'Web3.js', 'React', 'Next.js'],
      gradient: 'from-purple-400 to-purple-600',
      image: 'https://playtoearn.com/img/dapp/crypto-pirates/crypto-pirates-tUCnokYWBQ3v.jpg'
    },
  ],
}

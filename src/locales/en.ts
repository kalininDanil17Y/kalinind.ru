import type { Locale } from '@/types/locale'

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
    greeting: 'Hi, I’m',
    name: 'Danil',
    description:
      'Software engineer with {experienceYears}+ years of experience, building web and desktop applications. I love structuring chaos and automating processes.',
    contactButton: 'Get in Touch',
  },
  about: {
    title: 'About Me',
    subtitle: 'Hi, nice to meet you 👋',
    description: [
      "My name is Danil, and I’m {age} years old. I’ve been passionate about programming and science since I was 12. I’ve always been drawn to technology and found joy in exploring devices and creating something new.",
      "I believe good code is not just about work—it's about care. Every line should be intentional, and every architecture thoughtfully designed.",
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
          icon: 'lucide:cpu'
        },
        {
          text: 'DevOps',
          icon: 'lucide:wrench'
        },
        {
          text: 'Software Architecture',
          icon: 'lucide:code'
        },
        {
          text: 'Science Fiction',
          icon: 'lucide:book-open'
        }
      ],
    }
  },
  technologies: {
    title: 'Technologies',
    subtitle: 'Tools and technologies I use to build reliable solutions',
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
    subtitle: 'Some of the projects I’ve worked on',
    viewMore: 'View more',
    githubLink: 'More projects on GitHub',
  },
  contact: {
    title: 'Contact',
    subtitle: 'Let’s get in touch and work together',
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
        'A scalable and secure voting platform with a Vue-based frontend. Designed for safe online voting.',
      technologies: ['Vue', 'C#', 'PostgreSQL', 'Redis'],
      icon: 'lucide:vote',
      image: 'https://i.ibb.co/RTMfF1vJ/image.png',
      gradient: 'from-primary-400 to-primary-600',
      url: 'https://voteza.pro',
    },
    {
      name: 'Oauth2Box',
      description:
        'Lightweight, configurable mock OAuth2/OpenID provider for development and testing. ' +
        'It emulates the behavior of a real OAuth2 system, allowing easy testing of client applications without real authorizations.',
      technologies: ['OAuth2', 'NodeJs'],
      icon: 'lucide:key',
      image: 'https://github.com/kalininDanil17Y/Voteza-Oauth2Box/raw/master/assets/voteza-oauth.png',
      gradient: 'from-orange-400 to-orange-600',
      url: 'https://github.com/kalininDanil17Y/Voteza-Oauth2Box',
    },
    {
      name: 'SocketVPN',
      description:
        'A VPN infrastructure with a master server and distributed nodes. Provides secure and fast connections through a distributed server network.',
      technologies: ['WireGuard', 'Docker', 'Kubernetes', 'Kotlin', 'Java', 'Vue', 'C#'],
      icon: 'lucide:shield',
      image: 'https://i.ibb.co/Hf5Mvs4n/image.png',
      gradient: 'from-emerald-400 to-emerald-600',
    },
  ],
}

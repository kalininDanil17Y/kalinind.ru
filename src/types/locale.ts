export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface Technology {
  name: string
  icon: string
  category: string
}

export interface Project {
  name: string
  description: string
  technologies: string[]
  gradient: string
  image?: string
  url?: string
}

export interface Locale {
  meta: {
    name: string
    code: string
  }
  navigation: {
    home: string
    about: string
    technologies: string
    projects: string
    contact: string
  }
  hero: {
    greeting: string
    name: string
    description: string
    contactButton: string
  }
  about: {
    title: string
    subtitle: string
    description: string[]
    statistics: {
      title: string
      years: string
      yearsExp: string
      technologies: string
      projects: string
    }
    interests: {
      title: string
      items: Array<{
        text: string
        icon: string
      }>
    }
  }
  technologies: {
    title: string
    subtitle: string
    categories: {
      backend: string
      frontend: string
      databases: string
      devops: string
      mobile: string
      api: string
    }
  }
  projects: {
    title: string
    subtitle: string
    personalTitle: string
    personalSubtitle: string
    collaborativeTitle: string
    collaborativeSubtitle: string
    viewMore: string
    viewOnGithub: string
    visitSite: string
    githubLink: string
  }
  contact: {
    title: string
    subtitle: string
    email: string
  }
  footer: {
    copyright: string
    madeWith: string
  }
  socialLinks: SocialLink[]
  technologiesData: Technology[]
  projectsData: Project[]
  collaborativeProjectsData: Project[]
}

export type LocaleKey =
  | 'meta.name'
  | 'meta.code'
  | 'navigation.home'
  | 'navigation.about'
  | 'navigation.technologies'
  | 'navigation.projects'
  | 'navigation.contact'
  | 'hero.greeting'
  | 'hero.name'
  | 'hero.description'
  | 'hero.contactButton'
  | 'about.title'
  | 'about.subtitle'
  | 'about.description.0'
  | 'about.description.1'
  | 'about.statistics.title'
  | 'about.statistics.years'
  | 'about.statistics.yearsExp'
  | 'about.statistics.technologies'
  | 'about.statistics.projects'
  | 'technologies.title'
  | 'technologies.subtitle'
  | 'technologies.categories.backend'
  | 'technologies.categories.frontend'
  | 'technologies.categories.databases'
  | 'technologies.categories.devops'
  | 'technologies.categories.mobile'
  | 'technologies.categories.api'
  | 'projects.title'
  | 'projects.subtitle'
  | 'projects.viewMore'
  | 'projects.githubLink'
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.email'
  | 'contact.phone'
  | 'contact.location'
  | 'contact.form.name'
  | 'contact.form.email'
  | 'contact.form.message'
  | 'contact.form.send'
  | 'contact.form.sending'
  | 'contact.form.success'
  | 'contact.form.error'
  | 'footer.copyright'
  | 'footer.madeWith'

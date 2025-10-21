<template>
  <div
    class="min-h-screen bg-gradient-to-br from-warm-50 via-cream-50 to-primary-50 dark:from-dark-50 dark:via-dark-100 dark:to-primary-950 relative"
  >
    <!-- Global animated background decoration -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 dark:bg-primary-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob"
      ></div>
      <div
        class="absolute -bottom-40 -left-40 w-80 h-80 bg-cream-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute top-40 left-40 w-80 h-80 bg-warm-100 dark:bg-primary-800/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-4000"
      ></div>
    </div>
    <!-- Navigation -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-50/80 backdrop-blur-md border-b border-warm-100 dark:border-dark-300"
    >
      <div class="container mx-auto px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="text-xl font-normal text-warm-800 dark:text-dark-800 pl-3">
            Danil Kalinin
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a
              href="#hero"
              @click="scrollToSection('hero')"
              class="text-warm-700 dark:text-dark-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
              >{{ t('navigation.home') }}</a
            >
            <a
              href="#about"
              @click="scrollToSection('about')"
              class="text-warm-700 dark:text-dark-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
              >{{ t('navigation.about') }}</a
            >
            <a
              href="#technologies"
              @click="scrollToSection('technologies')"
              class="text-warm-700 dark:text-dark-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
              >{{ t('navigation.technologies') }}</a
            >
            <a
              href="#projects"
              @click="scrollToSection('projects')"
              class="text-warm-700 dark:text-dark-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
              >{{ t('navigation.projects') }}</a
            >
            <ThemeToggle />
            <LanguageToggle />
            <a
              href="#contact"
              @click="scrollToSection('contact')"
              class="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 text-white px-4 py-2 rounded-lg hover:from-primary-600 hover:to-primary-700 dark:hover:from-primary-700 dark:hover:to-primary-800 transition-all cursor-pointer"
              >{{ t('navigation.contact') }}</a
            >
          </div>

          <!-- Mobile controls -->
          <div class="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <LanguageToggle />
            <button
              @click="toggleMobileMenu"
              class="p-2 rounded-lg hover:bg-warm-100 dark:hover:bg-dark-200 transition-colors"
            >
              <i-lucide-menu class="w-6 h-6 text-warm-700 dark:text-dark-700" />
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden py-4 border-t border-warm-100 dark:border-dark-300"
        >
          <div class="flex flex-col space-y-3">
            <a
              href="#hero"
              @click="scrollToSection('hero')"
              class="text-warm-700 dark:text-dark-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2"
              >{{ t('navigation.home') }}</a
            >
            <a
              href="#about"
              @click="scrollToSection('about')"
              class="text-warm-700 dark:text-dark-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2"
              >{{ t('navigation.about') }}</a
            >
            <a
              href="#technologies"
              @click="scrollToSection('technologies')"
              class="text-warm-700 dark:text-dark-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2"
              >{{ t('navigation.technologies') }}</a
            >
            <a
              href="#projects"
              @click="scrollToSection('projects')"
              class="text-warm-700 dark:text-dark-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2"
              >{{ t('navigation.projects') }}</a
            >
            <a
              href="#contact"
              @click="scrollToSection('contact')"
              class="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 text-white px-4 py-2 rounded-lg hover:from-primary-600 hover:to-primary-700 dark:hover:from-primary-700 dark:hover:to-primary-800 transition-all inline-block w-fit"
              >{{ t('navigation.contact') }}</a
            >
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <section id="hero">
        <HeroSection />
      </section>

      <!-- About Section -->
      <section id="about">
        <AboutSection />
      </section>

      <!-- Technologies Section -->
      <section id="technologies">
        <TechnologiesSection />
      </section>

      <!-- Projects Section -->
      <section id="projects">
        <ProjectsSection />
      </section>

      <!-- Contact Section -->
      <section id="contact">
        <ContactSection />
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-warm-800 dark:bg-dark-100 text-white dark:text-dark-800 py-12">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Social links -->
          <div class="flex justify-center space-x-6 mb-8">
            <a
              v-for="social in locale.socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-warm-700 dark:bg-dark-200 hover:bg-primary-600 dark:hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
              :title="social.name"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>

          <div class="border-t border-warm-700 dark:border-dark-300 pt-6">
            <p class="text-warm-400 dark:text-dark-500 text-sm">
              © {{ currentYear }} {{ t('footer.copyright') }}. {{ t('footer.madeWith') }}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import HeroSection from './components/HeroSection.vue'
import TechnologiesSection from './components/TechnologiesSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import LanguageToggle from './components/LanguageToggle.vue'
import { useScrollAnimations } from './composables/useScrollAnimations'
import { useTheme } from './composables/useTheme'
import { useLocale } from './composables/useLocale'

const isMobileMenuOpen = ref(false)

const currentYear = computed(() => new Date().getFullYear())

// Initialize scroll animations
useScrollAnimations()

// Initialize theme system
useTheme()

// Initialize localization
const { t, locale, initializeLocale } = useLocale()
initializeLocale()

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const scrollToSection = (sectionId: string) => {
  closeMobileMenu()
  const element = document.getElementById(sectionId)
  if (element) {
    const navHeight = 64 // Height of the fixed navigation
    const elementPosition = element.offsetTop - navHeight
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    })
  }
}

// Close mobile menu when clicking outside
const handleClickOutside = (event: Event) => {
  const nav = document.querySelector('nav')
  if (nav && !nav.contains(event.target as Node)) {
    closeMobileMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

/* Navigation backdrop blur support */
@supports (backdrop-filter: blur(12px)) {
  nav {
    backdrop-filter: blur(12px);
  }
}
</style>

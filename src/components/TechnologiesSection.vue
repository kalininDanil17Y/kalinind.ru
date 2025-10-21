<template>
  <section class="py-20">
    <div class="container mx-auto px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <!-- Section title -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-warm-800 dark:text-dark-800 mb-4">
            {{ t('technologies.title') }}
          </h2>
          <p class="text-xl text-warm-600 dark:text-dark-600 max-w-2xl mx-auto">
            {{ t('technologies.subtitle') }}
          </p>
        </div>

        <!-- Technologies grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Backend -->
          <div class="group">
            <div
              class="bg-gradient-to-br from-warm-50 to-cream-50 dark:from-dark-100 dark:to-dark-200 rounded-2xl p-6 h-full shadow-sm hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 border border-warm-100 dark:border-dark-300 card-hover"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-3"
                >
                  <i-lucide-server class="w-6 h-6 text-white" />
                </div>
                <h3 class="text-xl font-semibold text-warm-800 dark:text-dark-800">
                  {{ t('technologies.categories.backend') }}
                </h3>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in technologiesByCategory.backend"
                  :key="tech.name"
                  class="inline-block bg-white dark:bg-dark-50 px-3 py-1 rounded-full text-sm font-medium text-warm-700 dark:text-dark-700 shadow-sm"
                  >{{ tech.name }}</span
                >
              </div>
            </div>
          </div>

          <!-- Frontend -->
          <div class="group">
            <div
              class="bg-gradient-to-br from-warm-50 to-cream-50 dark:from-dark-100 dark:to-dark-200 rounded-2xl p-6 h-full shadow-sm hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 border border-warm-100 dark:border-dark-300 card-hover"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-xl flex items-center justify-center mr-3"
                >
                  <i-lucide-monitor class="w-6 h-6 text-white" />
                </div>
                <h3 class="text-xl font-semibold text-warm-800 dark:text-dark-800">
                  {{ t('technologies.categories.frontend') }}
                </h3>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in technologiesByCategory.frontend"
                  :key="tech.name"
                  class="inline-block bg-white dark:bg-dark-50 px-3 py-1 rounded-full text-sm font-medium text-warm-700 dark:text-dark-700 shadow-sm"
                  >{{ tech.name }}</span
                >
              </div>
            </div>
          </div>

          <!-- Databases -->
          <div class="group">
            <div
              class="bg-gradient-to-br from-warm-50 to-cream-50 dark:from-dark-100 dark:to-dark-200 rounded-2xl p-6 h-full shadow-sm hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 border border-warm-100 dark:border-dark-300 card-hover"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-xl flex items-center justify-center mr-3"
                >
                  <i-lucide-database class="w-6 h-6 text-white" />
                </div>
                <h3 class="text-xl font-semibold text-warm-800 dark:text-dark-800">
                  {{ t('technologies.categories.databases') }}
                </h3>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in technologiesByCategory.databases"
                  :key="tech.name"
                  class="inline-block bg-white dark:bg-dark-50 px-3 py-1 rounded-full text-sm font-medium text-warm-700 dark:text-dark-700 shadow-sm"
                  >{{ tech.name }}</span
                >
              </div>
            </div>
          </div>

          <!-- DevOps -->
          <div class="group">
            <div
              class="bg-gradient-to-br from-warm-50 to-cream-50 dark:from-dark-100 dark:to-dark-200 rounded-2xl p-6 h-full shadow-sm hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 border border-warm-100 dark:border-dark-300 card-hover"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-xl flex items-center justify-center mr-3"
                >
                  <i-lucide-settings class="w-6 h-6 text-white" />
                </div>
                <h3 class="text-xl font-semibold text-warm-800 dark:text-dark-800">
                  {{ t('technologies.categories.devops') }}
                </h3>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in technologiesByCategory.devops"
                  :key="tech.name"
                  class="inline-block bg-white dark:bg-dark-50 px-3 py-1 rounded-full text-sm font-medium text-warm-700 dark:text-dark-700 shadow-sm"
                  >{{ tech.name }}</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Additional row for mobile and other technologies -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          <!-- Mobile & Desktop -->
          <div class="group">
            <div
              class="bg-gradient-to-br from-warm-50 to-cream-50 dark:from-dark-100 dark:to-dark-200 rounded-2xl p-6 h-full shadow-sm hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 border border-warm-100 dark:border-dark-300 card-hover"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-xl flex items-center justify-center mr-3"
                >
                  <i-lucide-smartphone class="w-6 h-6 text-white" />
                </div>
                <h3 class="text-xl font-semibold text-warm-800 dark:text-dark-800">
                  {{ t('technologies.categories.mobile') }}
                </h3>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in technologiesByCategory.mobile"
                  :key="tech.name"
                  class="inline-block bg-white dark:bg-dark-50 px-3 py-1 rounded-full text-sm font-medium text-warm-700 dark:text-dark-700 shadow-sm"
                  >{{ tech.name }}</span
                >
              </div>
            </div>
          </div>

          <!-- API & Networking -->
          <div class="group">
            <div
              class="bg-gradient-to-br from-warm-50 to-cream-50 dark:from-dark-100 dark:to-dark-200 rounded-2xl p-6 h-full shadow-sm hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 border border-warm-100 dark:border-dark-300 card-hover"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-xl flex items-center justify-center mr-3"
                >
                  <i-lucide-network class="w-6 h-6 text-white" />
                </div>
                <h3 class="text-xl font-semibold text-warm-800 dark:text-dark-800">
                  {{ t('technologies.categories.api') }}
                </h3>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in technologiesByCategory.api"
                  :key="tech.name"
                  class="inline-block bg-white dark:bg-dark-50 px-3 py-1 rounded-full text-sm font-medium text-warm-700 dark:text-dark-700 shadow-sm"
                  >{{ tech.name }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useLocale } from '@/composables/useLocale'

const { t, locale } = useLocale()

const technologiesByCategory = computed(() => {
  const technologies = locale.value.technologiesData
  const categories = {
    backend: technologies.filter((tech) => tech.category === 'backend'),
    frontend: technologies.filter((tech) => tech.category === 'frontend'),
    databases: technologies.filter((tech) => tech.category === 'databases'),
    devops: technologies.filter((tech) => tech.category === 'devops'),
    mobile: technologies.filter((tech) => tech.category === 'mobile'),
    api: technologies.filter((tech) => tech.category === 'api'),
  }
  return categories
})
</script>

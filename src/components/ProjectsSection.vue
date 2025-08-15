<template>
  <section class="py-20">
    <div class="container mx-auto px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <!-- Section title -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-warm-800 dark:text-dark-800 mb-4">
            {{ t('projects.title') }}
          </h2>
          <p class="text-xl text-warm-600 dark:text-dark-600 max-w-2xl mx-auto">
            {{ t('projects.subtitle') }}
          </p>
        </div>

        <!-- Projects grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Dynamic Projects -->
          <div
            v-for="project in locale.projectsData"
            :key="project.name"
            class="group bg-white dark:bg-dark-50 rounded-2xl shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 overflow-hidden border border-warm-100 dark:border-dark-300 card-hover"
          >
            <div class="h-48 bg-gradient-to-br relative overflow-hidden" :class="project.gradient">
              <!-- Background overlay -->
              <div class="absolute inset-0 bg-black bg-opacity-20"></div>

              <!-- Project image or icon -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div
                  v-if="project.image"
                  class="w-full h-full bg-cover bg-center"
                  :style="{ backgroundImage: `url(${project.image})` }"
                ></div>
                <div
                  v-else
                  class="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                >
                  <Icon :icon="project.icon" class="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-warm-800 dark:text-dark-800 mb-3">
                {{ project.name }}
              </h3>
              <p class="text-warm-600 dark:text-dark-600 mb-4 leading-relaxed">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                  >{{ tech }}</span
                >
              </div>
              <button
                v-if="project.url"
                @click="openProject(project.url)"
                class="w-full bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 text-white py-3 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 dark:hover:from-primary-700 dark:hover:to-primary-800 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {{ t('projects.viewMore') }}
              </button>
              <button
                v-else
                disabled
                class="w-full bg-gray-400 dark:bg-gray-600 text-white py-3 rounded-xl font-semibold cursor-not-allowed transition-all duration-300"
              >
                {{ t('projects.viewMore') }}
              </button>
            </div>
          </div>
        </div>

        <!-- GitHub link -->
        <div class="text-center mt-12">
          <a
            href="https://github.com/kalininDanil17Y"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-6 py-3 border-2 border-warm-300 dark:border-dark-400 text-warm-700 dark:text-dark-700 font-semibold rounded-xl hover:bg-warm-100 dark:hover:bg-dark-200 transition-all duration-300"
          >
            <Icon icon="lucide:github" class="w-5 h-5 mr-2" />
            {{ t('projects.githubLink') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useLocale } from '@/composables/useLocale'

const { t, locale } = useLocale()

const openProject = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <section class="py-20">
    <div class="container mx-auto px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- Section title -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-warm-800 dark:text-dark-800 mb-4">
            {{ t('about.title') }}
          </h2>
          <p class="text-xl text-warm-600 dark:text-dark-600 max-w-2xl mx-auto">
            {{ t('about.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Text content -->
          <div class="space-y-6">
            <div
              class="bg-white dark:bg-dark-50 rounded-2xl p-8 shadow-sm border border-warm-100 dark:border-dark-300 card-hover"
            >
              <p
                v-for="(description, index) in locale.about.description"
                :key="index"
                class="text-lg text-warm-700 dark:text-dark-700 leading-relaxed mb-6"
              >
                {{ t(`about.description.${index}`, { age: currentAge }) }}
              </p>
            </div>
          </div>

          <!-- Stats and info -->
          <div class="space-y-6">
            <!-- Personal stats -->
            <div
              class="bg-white dark:bg-dark-50 rounded-2xl p-8 shadow-sm border border-warm-100 dark:border-dark-300 card-hover"
            >
              <h3 class="text-2xl font-bold text-warm-800 dark:text-dark-800 mb-6">{{ t('about.statistics.title') }}</h3>
              <div class="grid grid-cols-2 gap-6">
                <div class="text-center">
                  <div class="text-3xl font-bold gradient-text dark:gradient-text-dark mb-2">
                    {{ currentAge }}
                  </div>
                  <div class="text-warm-600 dark:text-dark-600 text-sm">{{ t('about.statistics.years') }}</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold gradient-text dark:gradient-text-dark mb-2">
                    {{ experienceYears }}+
                  </div>
                  <div class="text-warm-600 dark:text-dark-600 text-sm">{{ t('about.statistics.yearsExp') }}</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold gradient-text dark:gradient-text-dark mb-2">
                    20+
                  </div>
                  <div class="text-warm-600 dark:text-dark-600 text-sm">{{ t('about.statistics.technologies') }}</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold gradient-text dark:gradient-text-dark mb-2">
                    15+
                  </div>
                  <div class="text-warm-600 dark:text-dark-600 text-sm">{{ t('about.statistics.projects') }}</div>
                </div>
              </div>
            </div>

            <!-- Interests -->
            <div
              class="bg-white dark:bg-dark-50 rounded-2xl p-8 shadow-sm border border-warm-100 dark:border-dark-300 card-hover"
            >
              <h3 class="text-2xl font-bold text-warm-800 dark:text-dark-800 mb-6">{{ locale.about.interests.title }}</h3>
              <div class="space-y-4">
                <div
                  class="flex items-center"
                  v-for="interest in locale.about.interests.items"
                  :key="interest.text"
                >
                  <Icon
                    :icon="interest.icon"
                    class="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3"
                  />
                  <span class="text-warm-700 dark:text-dark-700">{{ interest.text }}</span>
                </div>
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

// Calculate current age (born January 6, 2005)
const currentAge = computed(() => {
  const birthDate = new Date(2005, 0, 6) // January 6, 2005 (month is 0-indexed)
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()

  // If birthday hasn't occurred this year yet, subtract 1
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }

  return age
})

// Calculate years of experience (started programming in 2017)
const experienceYears = computed(() => {
  const startYear = 2017
  const currentYear = new Date().getFullYear()
  return currentYear - startYear
})
</script>

<template>
  <section class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div class="container mx-auto px-6 lg:px-8 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Avatar/Image placeholder with floating programming icons -->
        <div class="mb-8 animate-fade-in relative">
          <!-- Central avatar -->
          <div
            class="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-200 to-primary-300 dark:from-primary-700 dark:to-primary-600 flex items-center justify-center shadow-lg ring-4 ring-white/20 dark:ring-primary-400/20 bg-cover bg-center relative z-10"
            style="
              background-image: url('https://cdn4.telesco.pe/file/dDT1NPEssWyA2TIVMWyklvLiILNBV-_omItZE024QTg3zJzkpIKUi4Zrm7aUWR4X0XmGB5Q2-PZgCsmmrgNyqw0zDCARnQbKIalIdomQTA7qzjnclsFWK88MVuKjmcBJi_MMbnZvYHr9iRJX1ZHMVZLMvJFht7k-XrE3dpH9R0mu_DXmBoymVGP9XRHyWW8QTM6pzCulW3RuIHGlXzLGhRwybSUQyOTYr5N-W5Huoc__ezJ1w4p7yefZb6F_YG2czQ6u1JhD_913-fBrz3999I1aisnNDNlPjwr4_62UBQ7R7tljqlW2Ehwm5bGGFEBNf-9aPp8fZBSrQWyHv2hXgQ.jpg');
            "
          ></div>

          <!-- Floating programming language icons -->
          <div class="absolute inset-0 pointer-events-none">
            <!-- Vue.js -->
            <div
              class="absolute w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-700 rounded-xl shadow-lg flex items-center justify-center animate-float"
              :style="getIconPosition(0, 6)"
            >
              <i-logos-vue class="w-7 h-7" />
            </div>

            <!-- C# -->
            <div
              class="absolute w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-700 rounded-xl shadow-lg flex items-center justify-center animate-float"
              :style="getIconPosition(1, 6)"
              style="animation-delay: 0.3s"
            >
              <i-skill-icons-cs class="w-7 h-7"/>
            </div>

            <!-- JavaScript -->
            <div
              class="absolute w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-800 dark:to-yellow-700 rounded-xl shadow-lg flex items-center justify-center animate-float"
              :style="getIconPosition(2, 6)"
              style="animation-delay: 0.6s"
            >
              <i-logos-javascript class="w-7 h-7" />
            </div>

            <!-- React -->
            <div
              class="absolute w-12 h-12 bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-800 dark:to-cyan-700 rounded-xl shadow-lg flex items-center justify-center animate-float"
              :style="getIconPosition(3, 6)"
              style="animation-delay: 0.9s"
            >
              <i-logos-react class="w-7 h-7" />
            </div>

            <!-- Node.js -->
            <div
              class="absolute w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-700 rounded-xl shadow-lg flex items-center justify-center animate-float"
              :style="getIconPosition(4, 6)"
              style="animation-delay: 1.2s"
            >
              <i-logos-nodejs-icon class="w-7 h-7" />
            </div>

            <!-- Python -->
            <div
              class="absolute w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700 rounded-xl shadow-lg flex items-center justify-center animate-float"
              :style="getIconPosition(5, 6)"
              style="animation-delay: 1.5s"
            >
              <i-logos-python class="w-7 h-7" />
            </div>
          </div>
        </div>

        <!-- Main heading -->
        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-bold text-warm-800 dark:text-dark-800 mb-6 animate-slide-up"
        >
          {{ t('hero.greeting') }}
          <span class="gradient-text dark:gradient-text-dark">{{ t('hero.name') }}</span>
        </h1>

        <!-- Subtitle -->
        <p
          class="text-xl md:text-2xl text-warm-600 dark:text-dark-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up"
          style="animation-delay: 0.2s"
        >
          {{ t('hero.description', { experienceYears }) }}
        </p>

        <!-- CTA Button -->
        <div class="animate-slide-up" style="animation-delay: 0.4s">
          <button
            @click="scrollToContact"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-primary-600 hover:to-primary-700 dark:hover:from-primary-700 dark:hover:to-primary-800 group"
          >
            {{ t('hero.contactButton') }}
            <i-lucide-arrow-right class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"/>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()

// Calculate years of experience (started programming in 2017)
const experienceYears = computed(() => {
  const startYear = 2017
  const currentYear = new Date().getFullYear()
  return currentYear - startYear
})

// Function to calculate position of icons around the avatar
const getIconPosition = (index: number, total: number) => {
  const radius = 120 // Uniform distance from center

  // Position icons only on top: from -90° to +90° (180° semicircle)
  const startAngle = -180 // Start from top
  const endAngle = 0 // End at top right
  const angleRange = endAngle - startAngle
  const angle = startAngle + (index * angleRange) / (total - 1)

  const radian = (angle * Math.PI) / 180

  const x = Math.cos(radian) * radius
  const y = Math.sin(radian) * radius

  return {
    left: `calc(50% + ${x}px - 24px)`, // 24px is half of icon width (48px)
    top: `calc(50% + ${y}px - 24px)`, // 24px is half of icon height (48px)
  }
}

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-8px) rotate(2deg);
  }
  50% {
    transform: translateY(-4px) rotate(0deg);
  }
  75% {
    transform: translateY(-12px) rotate(-2deg);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>

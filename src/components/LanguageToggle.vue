<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="flex items-center space-x-2 p-2 rounded-lg hover:bg-warm-100 dark:hover:bg-dark-200 transition-colors"
      :class="{ 'bg-warm-100 dark:bg-dark-200': isDropdownOpen }"
    >
      <i-lucide-globe class="w-5 h-5 text-warm-700 dark:text-dark-700" />

      <span class="text-sm font-medium text-warm-700 dark:text-dark-700 hidden sm:inline">
        {{ currentLocale.toUpperCase() }}
      </span>
      <i-lucide-chevron-down
        class="w-4 h-4 text-warm-700 dark:text-dark-700 transition-transform"
        :class="{ 'rotate-180': isDropdownOpen }"
      />



    </button>

    <!-- Dropdown -->
    <div
      v-if="isDropdownOpen"
      class="absolute top-full right-0 mt-1 w-32 bg-white dark:bg-dark-50 rounded-lg shadow-lg border border-warm-100 dark:border-dark-300 py-1 z-50"
    >
      <button
        v-for="localeCode in availableLocales"
        :key="localeCode"
        @click="handleLocaleChange(localeCode)"
        class="w-full px-3 py-2 text-left text-sm hover:bg-warm-50 dark:hover:bg-dark-100 transition-colors flex items-center justify-between"
        :class="{
          'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400':
            currentLocale === localeCode,
          'text-warm-700 dark:text-dark-700': currentLocale !== localeCode,
        }"
      >
        <span>{{ getLocaleName(localeCode) }}</span>
        <i-lucide-check v-if="currentLocale === localeCode" class="w-4 h-4"/>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useLocale } from '@/composables/useLocale'

const { currentLocale, availableLocales, setLocale } = useLocale()
const isDropdownOpen = ref(false)

const localeNames = {
  ru: 'Русский',
  en: 'English',
} as const

const getLocaleName = (localeCode: string) => {
  return localeNames[localeCode as keyof typeof localeNames] || localeCode
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

const handleLocaleChange = (localeCode: string) => {
  setLocale(localeCode as any)
  closeDropdown()
}

// Close dropdown when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.relative')) {
    closeDropdown()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

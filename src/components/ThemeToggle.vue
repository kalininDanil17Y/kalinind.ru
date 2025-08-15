<template>
  <button
    @click="toggleTheme"
    class="relative p-2 rounded-full bg-warm-100 dark:bg-dark-200 hover:bg-warm-200 dark:hover:bg-dark-300 transition-all duration-300 group"
    :aria-label="isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <!-- Sun icon for light mode -->
    <Icon
      v-if="!isDark()"
      icon="lucide:sun"
      class="w-5 h-5 text-primary-600 group-hover:text-primary-700 transition-colors duration-300"
    />

    <!-- Moon icon for dark mode -->
    <Icon
      v-else
      icon="lucide:moon"
      class="w-5 h-5 text-primary-400 group-hover:text-primary-300 transition-colors duration-300"
    />
  </button>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useTheme } from '@/composables/useTheme'

const { toggleTheme, isDark } = useTheme()
</script>

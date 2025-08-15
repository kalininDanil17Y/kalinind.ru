<template>
  <section id="contact" class="py-20">
    <div class="container mx-auto px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- Section title -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-warm-800 dark:text-dark-800 mb-4">
            {{ t('contact.title') }}
          </h2>
          <p class="text-xl text-warm-600 dark:text-dark-600 max-w-2xl mx-auto">
            {{ t('contact.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Social links -->
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-warm-800 dark:text-dark-800 mb-6">Social Links</h3>

            <!-- Dynamic Social Links -->
            <a
              v-for="social in locale.socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center p-4 bg-gradient-to-r from-warm-50 to-cream-50 dark:from-dark-100 dark:to-dark-200 rounded-2xl border border-warm-100 dark:border-dark-300 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 group card-hover"
            >
              <div
                class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
              >
                <Icon :icon="social.icon" class="w-6 h-6 text-white" />
              </div>
              <div>
                <div
                  class="font-semibold text-warm-800 dark:text-dark-800 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                >
                  {{ social.name }}
                </div>
              </div>
            </a>
          </div>

          <!-- Email section -->
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-warm-800 dark:text-dark-800 mb-6">Email</h3>

            <div
              class="bg-gradient-to-br from-primary-50 to-cream-50 dark:from-primary-900/20 dark:to-primary-800/10 rounded-2xl p-8 border border-primary-100 dark:border-primary-800 card-hover"
            >
              <div class="text-center">
                <Icon
                  icon="lucide:mail"
                  class="w-16 h-16 text-primary-500 dark:text-primary-400 mx-auto mb-4"
                />

                <p class="text-warm-700 dark:text-dark-700 mb-6">
                  Click on the blurred text below to reveal email address
                </p>

                <!-- Email with blur effect -->
                <div class="mb-6">
                  <button
                    @click="handleEmailClick"
                    class="text-lg font-mono bg-transparent text-warm-800 dark:text-dark-800 transition-all duration-300 cursor-pointer hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <span v-if="!isEmailRevealed" class="select-none blur-sm hover:blur-sm">
                      mail@example.com
                    </span>
                    <span v-else>
                      {{ email }}
                    </span>
                  </button>
                </div>

                <!-- Copy button (shown after email is revealed) -->
                <div v-if="isEmailRevealed && !emailCopied" class="flex justify-center">
                  <button
                    @click="copyEmail"
                    class="px-6 py-3 bg-primary-500 dark:bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-700 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
                  >
                    <Icon icon="lucide:copy" class="w-5 h-5 mr-2" />
                    Copy
                  </button>
                </div>

                <!-- Success message -->
                <div v-if="emailCopied" class="flex justify-center">
                  <div
                    class="px-6 py-3 bg-green-500 text-white rounded-xl font-semibold flex items-center justify-center"
                  >
                    <Icon icon="lucide:check" class="w-5 h-5 mr-2" />
                    Copied!
                  </div>
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
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useLocale } from '@/composables/useLocale'

const { t, locale } = useLocale()

const email = t('contact.email')
// Removed blurredText since we now use mail@example.com directly
const isEmailRevealed = ref(false)
const emailCopied = ref(false)

const handleEmailClick = () => {
  if (!isEmailRevealed.value) {
    // First click - reveal email
    isEmailRevealed.value = true
  } else {
    // Second click - open mailto
    window.location.href = `mailto:${email}`
  }
}

const copyEmail = async () => {
  try {
    // Check if clipboard API is available and permissions are granted
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(email)
      emailCopied.value = true
      setTimeout(() => {
        emailCopied.value = false
      }, 2000)
      return
    }
  } catch (err) {
    console.warn('Clipboard API failed, using fallback:', err)
  }

  // Fallback method for older browsers or when clipboard API is blocked
  try {
    const textArea = document.createElement('textarea')
    textArea.value = email
    textArea.style.position = 'fixed'
    textArea.style.top = '0'
    textArea.style.left = '0'
    textArea.style.width = '2em'
    textArea.style.height = '2em'
    textArea.style.padding = '0'
    textArea.style.border = 'none'
    textArea.style.outline = 'none'
    textArea.style.boxShadow = 'none'
    textArea.style.background = 'transparent'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    const successful = document.execCommand('copy')
    document.body.removeChild(textArea)

    if (successful) {
      emailCopied.value = true
      setTimeout(() => {
        emailCopied.value = false
      }, 2000)
    } else {
      throw new Error('Copy command failed')
    }
  } catch (fallbackErr) {
    console.error('Fallback copy method also failed:', fallbackErr)
    // Show email in an alert as last resort
    alert(`Email address: ${email}`)
  }
}
</script>

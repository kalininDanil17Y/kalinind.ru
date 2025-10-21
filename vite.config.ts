import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    Components({
      dts: 'src/components.d.ts',
      resolvers: [
        IconsResolver({
          enabledCollections: ['lucide', 'skill-icons', 'logos'],
        }),
      ],
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),

    vueDevTools(),
    ViteMinifyPlugin({
      collapseWhitespace: true,
      removeComments: true,
      minifyJS: true,
      minifyCSS: true
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

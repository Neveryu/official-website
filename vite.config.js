import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inject from '@rollup/plugin-inject'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    inject({
      $: 'jquery', // 这里会自动载入 node_modules 中的 jquery
      jQuery: 'jquery',
      'windows.jQuery': 'jquery',
      BMap: 'BMap'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})


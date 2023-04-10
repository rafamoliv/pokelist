import { resolve as pathResolve } from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/

export default defineConfig(() => {
  return {
    plugins: [react()],
    envPrefix: 'REACT_',
    resolve: {
      alias: {
        '@': pathResolve('./src')
      }
    }
  }
})

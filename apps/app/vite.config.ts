import { cloudflare } from '@cloudflare/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      autoCodeSplitting: true,
      target: 'react',
      routesDirectory: 'app/routes',
      generatedRouteTree: 'app/routeTree.gen.ts'
    }),
    react(),
    tailwindcss(),
    cloudflare()
  ]
})

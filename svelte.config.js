import adapter from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      '@jill64/svelte-sanitize': './dist/index.js'
    }
  }
}

export default config

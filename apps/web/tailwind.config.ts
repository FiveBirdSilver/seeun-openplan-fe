import sharedConfig from '@repo/tailwind-config'
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  theme: {},
  plugins: [],
  presets: [sharedConfig],
}

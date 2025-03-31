import sharedConfig from "@repo/tailwind-config";
export default {
  content: [
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",    // Storybook 스토리 파일
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}", // Button 컴포넌트
  ],
  theme: {},
  plugins: [],
  presets: [sharedConfig],
};
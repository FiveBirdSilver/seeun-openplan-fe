import type { StorybookConfig } from '@storybook/react-vite';
import { join } from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: (config) => {
    config.css = config.css || {};
    config.css.postcss = {
      plugins: [
        tailwindcss({ config: join(__dirname, "../tailwind.config.ts") }),
        autoprefixer,
      ],
    };
    return config;
  },
};

export default config;
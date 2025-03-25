import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  output: "static",
  adapter: vercel(),
  integrations: [tailwind()]
});
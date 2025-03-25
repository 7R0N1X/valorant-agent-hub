import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  prefetch: true,
  image: {
    domains: ["astro.build"],
  },
  adapter: vercel(),
  integrations: [tailwind()],
});

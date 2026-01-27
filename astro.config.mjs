// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Accessibility: How to Design for All",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/vhnam/accessibility-how-to-design-for-all",
        },
      ],
      sidebar: [
        {
          label: "1. Accessibility Basics",
          items: [
            {
              label: "1.1.Accessibility: Why It Matters",
              slug: "accessibility-basics/accessibility-why-it-matters",
            },
          ],
        },
      ],
    }),
  ],
});

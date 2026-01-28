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
              label: "Accessibility: Why It Matters",
              slug: "accessibility-basics/accessibility-why-it-matters",
            },
            {
              label:
                "Ten Principles of Accessibility for Web and Mobile Design",
              slug: "accessibility-basics/ten-principles-of-accessibility-for-web-and-mobile-design",
            },
          ],
        },
      ],
    }),
  ],
});

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
            {
              label: "How Accessibility Impacts Usability and SEO",
              slug: "accessibility-basics/how-accessibility-impacts-usability-and-seo",
            },
            {
              label: "Interview the Impact of Poor Accessibility",
              slug: "accessibility-basics/interview-the-impact-of-poor-accessibility",
            },
            {
              label:
                "Experiencing Accessibility Issues with Each Disability Type",
              slug: "accessibility-basics/experiencing-accessibility-issues-with-each-disability-type",
            },
            {
              label: "What Poor and Good Accessibility Looks Like",
              slug: "accessibility-basics/what-poor-and-good-accessibility-looks-like",
            },
            {
              label: "Lession 1 Recap",
              slug: "accessibility-basics/recap",
            },
          ],
        },
      ],
    }),
  ],
});

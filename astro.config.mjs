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
        {
          label: "2. Steps to Gaining Compliance",
          items: [
            {
              label: "Using Automated Tools: Pros and Cons",
              slug: "steps-to-gaining-compliance/using-automated-tools-pros-and-cons",
            },
            {
              label: "Following the Guidelines: Pros and Cons",
              slug: "steps-to-gaining-compliance/following-the-guidelines-pros-and-cons",
            },
            {
              label: "Getting Compliant: Section 508 Issues and Lessons",
              slug: "steps-to-gaining-compliance/getting-compliant-section-508-issues-and-lessons",
            },
            {
              label: "Identifying Your Compliance Requirements: A, AA, AAA",
              slug: "steps-to-gaining-compliance/identifying-your-compliance-requirements-a-aa-aaa",
            },
            {
              label: "How to Use WCAG 2.0 Guidelines: Theory vs Practice",
              slug: "steps-to-gaining-compliance/how-to-use-wcag-2-0-guidelines-theory-vs-practice",
            },
            {
              label: "Lession 2 Recap",
              slug: "steps-to-gaining-compliance/recap",
            },
          ],
        },
        {
          label: "3. Optimizing Your Code",
          items: [
            {
              label: "Code Optimization Basics and Opportunities",
              slug: "optimizing-your-code/code-optimization-basics-and-opportunities",
            },
            {
              label: "Images: All about Alt + Contrast",
              slug: "optimizing-your-code/images-all-about-alt-and-contrast",
            },
            {
              label: "Keyboard",
              slug: "optimizing-your-code/keyboard",
            },
            {
              label: "Focus Control + Layout Considerations For UX Designers",
              slug: "optimizing-your-code/focus-control-layout-considerations-for-ux-designers",
            },
            {
              label: "Forms, Tables and Search",
              slug: "optimizing-your-code/forms-tables-and-search",
            },
            {
              label: "3rd Party Content",
              slug: "optimizing-your-code/3rd-party-content",
            },
            {
              label: "Pop-ups + Iframes",
              slug: "optimizing-your-code/pop-ups-iframes",
            },
            {
              label: "HTML5, CSS + ARIA",
              slug: "optimizing-your-code/html5-css-aria",
            },
            {
              label: "ARIA Markup",
              slug: "optimizing-your-code/aria-markup",
            },
            {
              label: "JavaScript",
              slug: "optimizing-your-code/javascript",
            },
            {
              label:
                "Dynamic Content: Infographics, Animations, Audio Descriptions, Video, Live Events",
              slug: "optimizing-your-code/dynamic-content-infographics-animations-audio-descriptions-video-live-events",
            },
            {
              label: "Designing Accessible Navigation",
              slug: "optimizing-your-code/designing-accessible-navigation",
            },
            {
              label: "Lession 3 Recap",
              slug: "optimizing-your-code/recap",
            },
          ],
        },
        {
          label: "4. Meeting Accessibility Design Challenges",
          items: [
            {
              label: "Toward Accessible Interaction Design",
              slug: "meeting-accessibility-design-challenges/toward-accessible-interaction-design",
            },
            {
              label: "Interview: Visual Bias e.g. Maps",
              slug: "meeting-accessibility-design-challenges/interview-visual-bias-e-g-maps",
            },
            {
              label: "Web Site and Web Application Issues and Tips",
              slug: "meeting-accessibility-design-challenges/web-site-and-web-application-issues-and-tips",
            },
            {
              label: "Interview: Social Media Accessibility Experiences",
              slug: "meeting-accessibility-design-challenges/interview-social-media-accessibility-experiences",
            },
            {
              label: "Mobile Accessibility Issues and Tips",
              slug: "meeting-accessibility-design-challenges/mobile-accessibility-issues-and-tips",
            },
          ],
        },
      ],
    }),
  ],
});

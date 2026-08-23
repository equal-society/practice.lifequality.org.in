// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://practice.lifequality.org.in',

  integrations: [
    sitemap(),
    starlight({
      title: 'Practice Knowledge System',
      description: 'Turning Evidence into Practice for Better Health',

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/equal-society/practice.lifequality.org.in',
        },
      ],

      sidebar: [
        {
          label: 'Home',
          items: [
            { slug: 'index' },
          ],
        },

        {
          label: 'About PKS',
          items: [
            { slug: 'about' },
            { slug: 'editorial' },
            { slug: 'practice-knowledge-system' },
          ],
        },

        {
          label: 'Knowledge Base',
          items: [
            { slug: 'health-topics' },
            { slug: 'evidence' },
            { slug: 'interventions' },
            { slug: 'guides' },
          ],
        },

        {
          label: 'Research Connections',
          items: [
            { slug: 'research-connections' },
          ],
        },

        {
          label: 'Learning Resources',
          items: [
            { slug: 'learning-resources' },
          ],
        },
      ],
    }),
  ],
});
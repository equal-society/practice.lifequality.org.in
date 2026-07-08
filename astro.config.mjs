// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://practice.lifequality.org.in',

  integrations: [
    starlight({
      title: 'Practice Knowledge System',
      description: 'Evidence into Practice',

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/equal-society/practice.lifequality.org.in',
        },
      ],

      sidebar: [
        {
          label: 'Documentation',
          items: [
            { slug: 'index' },
          ],
        },
      ],
    }),
  ],
});
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
          label: 'Health Topics',
          items: [
            { slug: 'health-topics/index' },
          ],
        },

        {
          label: 'Lifestyle Interventions',
          items: [
            { slug: 'interventions/index' },
          ],
        },

        {
          label: 'Evidence Library',
          items: [
            { slug: 'evidence/index' },
          ],
        },

        {
          label: 'Clinical Guides',
          items: [
            { slug: 'guides/index' },
          ],
        },

        {
          label: 'Resources',
          items: [
            { slug: 'resources/index' },
          ],
        },

        {
          label: 'About',
          items: [
            { slug: 'about/index' },
          ],
        }

      ],

    }),
  ],
});

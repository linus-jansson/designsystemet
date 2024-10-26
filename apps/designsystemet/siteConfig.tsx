export const SiteConfig = {
  menu: [
    {
      name: 'Grundläggande',
      url: 'docs/basics',
      children: [
        {
          name: 'Introduktion',
          url: 'docs/basics/introduction',
          children: [
            {
              name: 'Om designsystemet',
              url: 'docs/basics/introduction/about',
            },
            {
              name: 'Designprinciper',
              url: 'docs/basics/introduction/design-principles',
            },
            {
              name: 'Tillgänglighet',
              url: 'docs/basics/introduction/a11y',
            },
            {
              name: 'Värderingar',
              url: 'docs/basics/introduction/values',
            },
          ],
        },
        {
          name: 'Designelement',
          url: 'docs/basics/design-elements',
          children: [
            {
              name: 'Design tokens',
              url: 'docs/basics/design-elements/design-tokens',
            },
            {
              name: 'Färger',
              url: 'docs/basics/design-elements/colors',
            },
            {
              name: 'Ikoner',
              url: 'docs/basics/design-elements/icons',
            },
            {
              name: 'Skuggor',
              url: 'docs/basics/design-elements/shadows',
            },
            {
              name: 'Typografi',
              url: 'docs/basics/design-elements/typography',
            },
            {
              name: 'Margins och paddings',
              url: 'docs/basics/design-elements/size-and-margins',
            },
          ],
        },
        {
          name: 'For designers',
          url: 'docs/basics/for-designers',
          children: [
            {
              name: 'Kom i gång',
              url: 'docs/basics/for-designers/getting-started',
            },
            {
              name: 'Eget tema',
              url: 'docs/basics/for-designers/creating-a-theme',
            },
            {
              name: 'Färgsystem',
              url: 'docs/basics/for-designers/colorsystem',
            },
            // {
            //   name: 'Hent oppdateringer',
            //   url: 'docs/basics/for-designers/hent-oppdateringer',
            // },
            {
              name: 'Bidra med design',
              url: 'docs/basics/for-designers/contribute',
            },
          ],
        },
        {
          name: 'För utvecklare',
          url: 'docs/basics/for-utviklere',
          children: [
            {
              name: 'Kom i gång',
              url: 'docs/basics/for-developers/getting-started',
            },
            {
              name: 'Komposition',
              url: 'docs/basics/for-developers/composition',
            },
            {
              name: 'Bidra med kod',
              url: 'docs/basics/for-developers/contribute',
            },
          ],
        },
      ],
    },
  ],
};

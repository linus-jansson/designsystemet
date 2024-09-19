

export const SiteConfig = {
    menu: [
        {
            name: 'Introduktion',
            url: '/docs/introduction',
            children: [
                {
                    name: 'Om designsystemet',
                    url: 'docs/introduction/about',
                },
                {
                    name: 'Tillgänglighet',
                    url: 'docs/introduction/accessibility',
                }
            ]

        },
        {
            name: 'För utvecklare',
            url: '/docs/developers',
            children: [
                {
                    name: 'Kom igång',
                    url: 'docs/developers/getting-started',
                },
                {
                    name: 'Komposition',
                    url: 'docs/developers/composition',
                },
                {
                    name: 'Contribution',
                    url: 'docs/developers/contribute',
                }
            ]
        },
        {
            name: 'För designers',
            url: 'docs/designers',
        },
        {
            name: 'Design principer',
            url: '/docs/design-principles',
            children: [
                {
                    name: 'Färger',
                    url: 'docs/design-principles/colors',
                },
                {
                    name: 'Typografi',
                    url: 'docs/design-principles/typography',
                },
                {
                    name: 'Ikoner',
                    url: 'docs/design-principles/icons',
                },
                {
                    name: 'Design tokens',
                    url: 'docs/design-principles/design-tokens',
                }
            ]
        },
    ],
};
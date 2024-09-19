export const SiteConfig = {
    menu: [
        {
            name: 'Grunnleggende',
            url: 'grunnleggende',
            children: [
                {
                    name: 'Introduksjon',
                    url: 'grunnleggende/introduksjon',
                    children: [
                        {
                            name: 'Om designsystemet',
                            url: 'grunnleggende/introduksjon/om-designsystemet',
                        },
                        {
                            name: 'Verdier',
                            url: 'grunnleggende/introduksjon/verdier',
                        },
                        {
                            name: 'Designprinsipper',
                            url: 'grunnleggende/introduksjon/designprinsipper',
                        },
                        {
                            name: 'Tilgjengelighet',
                            url: 'grunnleggende/introduksjon/tilgjengelighet',
                        },
                        {
                            name: 'Slack',
                            url: 'grunnleggende/introduksjon/slack',
                        },
                    ],
                },
                {
                    name: 'Designelementer',
                    url: 'grunnleggende/designelementer',
                    children: [
                        {
                            name: 'Design tokens',
                            url: 'grunnleggende/designelementer/design-tokens',
                        },
                        {
                            name: 'Farger',
                            url: 'grunnleggende/designelementer/farger',
                        },
                        {
                            name: 'Ikoner',
                            url: 'grunnleggende/designelementer/ikoner',
                        },
                        {
                            name: 'Skygger',
                            url: 'grunnleggende/designelementer/skygger',
                        },
                        {
                            name: 'Typografi',
                            url: 'grunnleggende/designelementer/typografi',
                        },
                        {
                            name: 'Størrelser og avstander',
                            url: 'grunnleggende/designelementer/storrelser-og-avstander',
                        },
                    ],
                },
                {
                    name: 'For designere',
                    url: 'grunnleggende/for-designere',
                    children: [
                        {
                            name: 'Kom i gang',
                            url: 'grunnleggende/for-designere/kom-i-gang',
                        },
                        {
                            name: 'Eget tema',
                            url: 'grunnleggende/for-designere/eget-tema',
                        },
                        {
                            name: 'Fargesystem',
                            url: 'grunnleggende/for-designere/fargesystem',
                        },
                        {
                            name: 'Hent oppdateringer',
                            url: 'grunnleggende/for-designere/hent-oppdateringer',
                        },
                        {
                            name: 'Bidra med design',
                            url: 'grunnleggende/for-designere/bidra-i-figma',
                        },
                    ],
                },
                {
                    name: 'For utviklere',
                    url: 'grunnleggende/for-utviklere',
                    children: [
                        {
                            name: 'Kom i gang',
                            url: 'grunnleggende/for-utviklere/kom-i-gang',
                        },
                        {
                            name: 'Komposisjon',
                            url: 'grunnleggende/for-utviklere/komposisjon',
                        },
                    ],
                },
            ],
        },
        {
            name: 'God praksis',
            url: 'god-praksis',
            children: [
                {
                    name: 'Brukerinnsikt',
                    url: 'god-praksis/brukerinnsikt',
                    children: [
                        {
                            name: 'Felles innsiktsbibliotek',
                            url: 'god-praksis/brukerinnsikt/felles-innsiktsbase',
                        },
                    ],
                },
                {
                    name: 'Tilgjengelighet',
                    url: 'god-praksis/tilgjengelighet',
                    children: [
                        {
                            name: 'Forstå synsnedsettelse',
                            url: 'god-praksis/tilgjengelighet/forsta-synsnedsettelse',
                        },
                        {
                            name: 'Kontrast',
                            url: 'god-praksis/tilgjengelighet/kontrast',
                        },
                    ],
                },
                {
                    name: 'Innhold',
                    url: 'god-praksis/innholdsarbeid',
                    children: [
                        {
                            name: 'Skriveråd',
                            url: 'god-praksis/innholdsarbeid/skriverad',
                        },
                        {
                            name: 'Skumlesing',
                            url: 'god-praksis/innholdsarbeid/skumlesing',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Mønstre',
            url: 'monstre',
            children: [
                {
                    name: 'Ferdig',
                    url: 'monstre/brukeroppgaver',
                    children: [
                        {
                            name: 'Obligatoriske felt *',
                            url: 'monstre/obligatoriske-og-valgfrie-felt',
                        },
                        {
                            name: 'Feilmeldinger *',
                            url: 'monstre/feilmeldinger',
                        },
                    ],
                },
                {
                    name: 'Kommende',
                    url: 'monstre/skjema',
                    children: [
                        {
                            name: 'Systemvarsler *',
                            url: 'monstre/systemvarsler',
                        },
                        {
                            name: 'Dato',
                            url: 'monstre/dato',
                        },
                        {
                            name: 'Innlogging',
                            url: 'monstre/innlogging',
                        },
                        {
                            name: 'Navigering',
                            url: 'monstre/navigering',
                        },
                        {
                            name: 'Ofte brukte handlinger',
                            url: 'monstre/handlinger',
                        },
                    ],
                },
            ],
        },
    ],
};



// export const SiteConfig = {
//     menu: [
//         {
//             name: 'Introduktion',
//             url: 'docs/introduction',
//             children: [
//                 {
//                     name: 'Om designsystemet',
//                     url: 'about',
//                 },
//                 {
//                     name: 'Tillgänglighet',
//                     url: 'accessibility',
//                 }
//             ]

//         },
//         {
//             name: 'För utvecklare',
//             url: 'docs/developers',
//             children: [
//                 {
//                     name: 'Kom igång',
//                     url: 'getting-started',
//                 },
//                 {
//                     name: 'Komposition',
//                     url: 'composition',
//                 },
//                 {
//                     name: 'Contribution',
//                     url: 'contribute',
//                 }
//             ]
//         },
//         {
//             name: 'För designers',
//             url: 'docs/designers',
//         },
//         {
//             name: 'Design principer',
//             url: 'docs/design-principles',
//             children: [
//                 {
//                     name: 'Färger',
//                     url: 'colors',
//                 },
//                 {
//                     name: 'Typografi',
//                     url: 'typography',
//                 },
//                 {
//                     name: 'Ikoner',
//                     url: 'icons',
//                 },
//                 {
//                     name: 'Design tokens',
//                     url: 'design-tokens',
//                 }
//             ]
//         },
//     ],
// };
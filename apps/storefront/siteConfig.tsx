export const SiteConfig = {
  menu: [
    {
      name: 'Grundläggande',
      url: 'docs/grunnleggende',
      children: [
        {
          name: 'Introduktion',
          url: 'docs/grunnleggende/introduksjon',
          children: [
            {
              name: 'Om designsystemet',
              url: 'docs/grunnleggende/introduksjon/om-designsystemet',
            },
            {
              name: 'Designprinciper',
              url: 'docs/grunnleggende/introduksjon/designprinsipper',
            },
            {
              name: 'Tillgänglighet',
              url: 'docs/grunnleggende/introduksjon/tilgjengelighet',
            }
          ],
        },
        {
          name: 'Designelementer',
          url: 'docs/grunnleggende/designelementer',
          children: [
            {
              name: 'Design tokens',
              url: 'docs/grunnleggende/designelementer/design-tokens',
            },
            {
              name: 'Färger',
              url: 'docs/grunnleggende/designelementer/farger',
            },
            {
              name: 'Ikoner',
              url: 'docs/grunnleggende/designelementer/ikoner',
            },
            {
              name: 'Skuggor',
              url: 'docs/grunnleggende/designelementer/skygger',
            },
            {
              name: 'Typografi',
              url: 'docs/grunnleggende/designelementer/typografi',
            },
            {
              name: 'Margins och paddings',
              url: 'docs/grunnleggende/designelementer/storrelser-og-avstander',
            },
          ],
        },
        {
          name: 'For designers',
          url: 'docs/grunnleggende/for-designere',
          children: [
            {
              name: 'Kom i gång',
              url: 'docs/grunnleggende/for-designere/kom-i-gang',
            },
            {
              name: 'Eget tema',
              url: 'docs/grunnleggende/for-designere/eget-tema',
            },
            {
              name: 'Färgsystem',
              url: 'docs/grunnleggende/for-designere/fargesystem',
            },
            {
              name: 'Hent oppdateringer',
              url: 'docs/grunnleggende/for-designere/hent-oppdateringer',
            },
            {
              name: 'Bidra med design',
              url: 'docs/grunnleggende/for-designere/bidra-i-figma',
            },
          ],
        },
        {
          name: 'För utvecklare',
          url: 'docs/grunnleggende/for-utviklere',
          children: [
            {
              name: 'Kom i gång',
              url: 'docs/grunnleggende/for-utviklere/kom-i-gang',
            },
            {
              name: 'Komposition',
              url: 'docs/grunnleggende/for-utviklere/komposisjon',
            },
          ],
        },
      ],
    },
    {
      name: 'Bästa praksis',
      url: 'docs/god-praksis',
      children: [
        {
          name: 'Brukerinnsikt',
          url: 'docs/god-praksis/brukerinnsikt',
          children: [
            {
              name: 'Felles innsiktsbibliotek',
              url: 'docs/god-praksis/brukerinnsikt/felles-innsiktsbase',
            },
          ],
        },
        {
          name: 'Tilgjengelighet',
          url: 'docs/god-praksis/tilgjengelighet',
          children: [
            {
              name: 'Forstå synsnedsettelse',
              url: 'docs/god-praksis/tilgjengelighet/forsta-synsnedsettelse',
            },
            {
              name: 'Kontrast',
              url: 'docs/god-praksis/tilgjengelighet/kontrast',
            },
          ],
        },
        {
          name: 'Innhold',
          url: 'docs/god-praksis/innholdsarbeid',
          children: [
            {
              name: 'Skriveråd',
              url: 'docs/god-praksis/innholdsarbeid/skriverad',
            },
            {
              name: 'Skumlesing',
              url: 'docs/god-praksis/innholdsarbeid/skumlesing',
            },
          ],
        },
      ],
    },
    {
      name: 'Mønstre',
      url: 'docs/monstre',
      children: [
        {
          name: 'Ferdig',
          url: 'docs/monstre/brukeroppgaver',
          children: [
            {
              name: 'Obligatoriske felt *',
              url: 'docs/monstre/obligatoriske-og-valgfrie-felt',
            },
            {
              name: 'Feilmeldinger *',
              url: 'docs/monstre/feilmeldinger',
            },
          ],
        },
        {
          name: 'Kommende',
          url: 'docs/monstre/skjema',
          children: [
            {
              name: 'Systemvarsler *',
              url: 'docs/monstre/systemvarsler',
            },
            {
              name: 'Dato',
              url: 'docs/monstre/dato',
            },
            {
              name: 'Innlogging',
              url: 'docs/monstre/innlogging',
            },
            {
              name: 'Navigering',
              url: 'docs/monstre/navigering',
            },
            {
              name: 'Ofte brukte handlinger',
              url: 'docs/monstre/handlinger',
            },
          ],
        },
      ],
    },
  ],
};

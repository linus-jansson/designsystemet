import type { Meta, StoryFn } from '@storybook/react';

import { Heading, Paragraph } from '../src';

const meta: Meta = {
  title: 'Komponenter/Typography',
};

export default meta;

export const ExempelText: StoryFn = () => (
  <>
    <Heading
      level={1}
      size='xl'
      style={{ marginBottom: 'var(--ds-spacing-2)' }}
    >
      Samordnad registeranmälan (H1)
    </Heading>

    <Paragraph style={{ marginBottom: 'var(--ds-spacing-2)' }} variant='long'>
      Här kan du registrera nya företag, som exempelvis enskilda firmor,
      föreningar, aktiebolag, ansvariga företag, samverkansföretag och
      stiftelser. De allra flesta organisationsformer kan använda den här
      tjänsten.
    </Paragraph>

    <Heading
      level={2}
      size='lg'
      style={{ marginBottom: 'var(--ds-spacing-2)' }}
    >
      När ska du använda blanketten? (H2)
    </Heading>

    <Paragraph style={{ marginBottom: 'var(--ds-spacing-2)' }}>
      Den här tjänsten kan du använda för att lämna uppgifter till
      Enhetsregistret, Företagsregistret, Frivilligregistret, NAV Aa-registret,
      Företags- och verksamhetsregistret hos SCB, Stiftelseregistret och
      Skatteverkets register över juridiska personer.
    </Paragraph>

    <Heading
      level={3}
      size='md'
      style={{ marginBottom: 'var(--ds-spacing-2)' }}
    >
      Signering (H3)
    </Heading>

    <Paragraph variant='short' style={{ marginBottom: 'var(--ds-spacing-2)' }}>
      När du ska signera meddelandet kommer du att få en signeringsuppgift i din
      meddelandebox i Altinn. Meddelandet skickas inte för behandling förrän
      alla har signerat.
    </Paragraph>

    <Heading
      level={4}
      size='sm'
      style={{ marginBottom: 'var(--ds-spacing-2)' }}
    >
      Krav på roll för signering (H4)
    </Heading>

    <Paragraph style={{ marginBottom: 'var(--ds-spacing-2)' }}>
      För att signera å ett företags vägnar behöver du Altinn-rollen Signerare
      av Samordnad registeranmälan. Du kan se vilka roller du har för en aktör
      på menypunkten Profil, Formulär och tjänster du har rättigheter till. Om
      du inte har dessa roller, måste någon med rollerna delegera dem till dig.
    </Paragraph>

    <Heading
      level={5}
      size='xs'
      style={{ marginBottom: 'var(--ds-spacing-2)' }}
    >
      Sekretess (H5)
    </Heading>

    <Paragraph variant='short' style={{ marginBottom: 'var(--ds-spacing-2)' }}>
      Sekretesspolicyn ger information om vilka personuppgifter vi behandlar,
      hur dessa behandlas och vilka rättigheter du har.
    </Paragraph>
  </>
);

export const ExempleTextDark: StoryFn = () => (
  <div data-ds-color-mode='dark'>
    <Heading
      level={1}
      size='xl'
      style={{ marginBottom: 'var(--ds-spacing-2)' }}
    >
      Samordnad registeranmälan (H1)
    </Heading>

    <Paragraph style={{ marginBottom: 'var(--ds-spacing-2)' }} variant='long'>
      Här kan du registrera nya företag, som exempelvis enskilda firmor,
      föreningar, aktiebolag, ansvariga företag, samverkansföretag och
      stiftelser. De allra flesta organisationsformer kan använda den här
      tjänsten.
    </Paragraph>

    <Heading
      level={2}
      size='lg'
      style={{ marginBottom: 'var(--ds-spacing-2)' }}
    >
      När ska du använda blanketten? (H2)
    </Heading>

    <Paragraph style={{ marginBottom: 'var(--ds-spacing-2)' }}>
      Den här tjänsten kan du använda för att lämna uppgifter till
      Enhetsregistret, Företagsregistret, Frivilligregistret, NAV Aa-registret,
      Företags- och verksamhetsregistret hos SCB, Stiftelseregistret och
      Skatteverkets register över juridiska personer.
    </Paragraph>

    <Heading
      level={3}
      size='md'
      style={{ marginBottom: 'var(--ds-spacing-2)' }}
    >
      Signering (H3)
    </Heading>

    <Paragraph variant='short' style={{ marginBottom: 'var(--ds-spacing-2)' }}>
      När du ska signera meddelandet kommer du att få en signeringsuppgift i din
      meddelandebox i Altinn. Meddelandet skickas inte för behandling förrän
      alla har signerat.
    </Paragraph>

    <Heading
      level={4}
      size='sm'
      style={{ marginBottom: 'var(--ds-spacing-2)' }}
    >
      Krav på roll för signering (H4)
    </Heading>

    <Paragraph style={{ marginBottom: 'var(--ds-spacing-2)' }}>
      För att signera å ett företags vägnar behöver du Altinn-rollen Signerare
      av Samordnad registeranmälan. Du kan se vilka roller du har för en aktör
      på menypunkten Profil, Formulär och tjänster du har rättigheter till. Om
      du inte har dessa roller, måste någon med rollerna delegera dem till dig.
    </Paragraph>

    <Heading
      level={5}
      size='xs'
      style={{ marginBottom: 'var(--ds-spacing-2)' }}
    >
      Sekretess (H5)
    </Heading>

    <Paragraph variant='short' style={{ marginBottom: 'var(--ds-spacing-2)' }}>
      Sekretesspolicyn ger information om vilka personuppgifter vi behandlar,
      hur dessa behandlas och vilka rättigheter du har.
    </Paragraph>
  </div>
);

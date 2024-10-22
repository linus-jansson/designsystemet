import cat1 from '@assets/img/cats/Cat 1.jpg';
import cat2 from '@assets/img/cats/Cat 2.jpg';
import cat3 from '@assets/img/cats/Cat 3.jpg';
import cat4 from '@assets/img/cats/Cat 4.jpg';
import cat5 from '@assets/img/cats/Cat 5.jpg';
import { PlusIcon, TrashFillIcon } from '@navikt/aksel-icons';
import type { Meta, StoryFn } from '@storybook/react';

import { Card } from '.';
import { Button } from '../Button';
import { Heading } from '../Heading';
import { Label } from '../Label';
import { Paragraph } from '../Paragraph';
import { Select } from '../form/Select';
import { Textfield } from '../form/Textfield';

type Story = StoryFn<typeof Card>;

export default {
  title: 'Komponenter/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen',
    customStyles: {
      width: '100%',
      maxWidth: 800,
      alignItems: 'center',
      display: 'grid',
      gap: 'var(--ds-spacing-4)',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px , 1fr))',
    },
  },
} satisfies Meta;

export const Preview: Story = (args) => (
  <Card {...args} style={{ maxWidth: '320px' }}>
    <Heading size='sm' level={2}>
      Kort Neutral
    </Heading>
    <Paragraph>
      De flesta som tillhandahåller affärer är mycket bättre på den perfekta
      designern. Att skriva förklarar något lättare skrivbord som påstått handlar om detta.
    </Paragraph>
    <Paragraph size='sm'>Fottext</Paragraph>
  </Card>
);

Preview.args = {
  color: 'neutral',
};

export const Variants: StoryFn<typeof Card> = () => (
  <>
    <Card color='neutral'>
      <Card.Block>
        <img src={cat1} alt='katt' />
      </Card.Block>
      <Card.Block>
        <Heading level={2} size='sm'>
          Kort Neutral
        </Heading>
        <Paragraph>
          De flesta som tillhandahåller affärer är mycket bättre på den
          perfekta designern. Att skriva förklarar något lättare skrivbord som påstått handlar om detta.
        </Paragraph>
      </Card.Block>
    </Card>
    <Card color='subtle'>
      <Card.Block>
        <img src={cat2} alt='katt' />
      </Card.Block>
      <Card.Block>
        <Heading level={2} size='sm'>
          Kort Subtil
        </Heading>
        <Paragraph>
          De flesta som tillhandahåller affärer är mycket bättre på den
          perfekta designern. Att skriva förklarar något lättare skrivbord som påstått handlar om detta.
        </Paragraph>
      </Card.Block>
    </Card>
    <Card color='brand1'>
      <Card.Block>
        <img src={cat3} alt='katter' />
      </Card.Block>
      <Card.Block>
        <Heading level={2} size='sm'>
          Kort Första
        </Heading>
        <Paragraph>
          De flesta som tillhandahåller affärer är mycket bättre på den
          perfekta designern. Att skriva förklarar något lättare skrivbord som påstått handlar om detta.
        </Paragraph>
      </Card.Block>
    </Card>
    <Card color='brand2'>
      <Card.Block>
        <img src={cat4} alt='katt' />
      </Card.Block>
      <Card.Block>
        <Heading level={2} size='sm'>
          Kort Andra
        </Heading>
        <Paragraph>
          De flesta som tillhandahåller affärer är mycket bättre på den
          perfekta designern. Att skriva förklarar något lättare skrivbord som påstått handlar om detta.
        </Paragraph>
      </Card.Block>
    </Card>
    <Card color='brand3'>
      <Card.Block>
        <img src={cat5} alt='katt' />
      </Card.Block>
      <Card.Block>
        <Heading level={2} size='sm'>
          Kort Tredje
        </Heading>
        <Paragraph>
          De flesta som tillhandahåller affärer är mycket bättre på den
          perfekta designern. Att skriva förklarar något lättare skrivbord som påstått handlar om detta.
        </Paragraph>
      </Card.Block>
    </Card>
  </>
);

export const Media: Story = () => (
  <>
    <Card>
      <Card.Block>
        <img src={cat1} alt='katt' />
      </Card.Block>
      <Card.Block>
        <Heading level={2} size='sm'>
          Kort Neutral
        </Heading>
        <Paragraph>
          De flesta som tillhandahåller affärer är mycket bättre på den
          perfekta designern. Att skriva förklarar något lättare skrivbord som påstått handlar om detta.
        </Paragraph>
      </Card.Block>
    </Card>
    <Card>
      <Card.Block>
        <Heading level={2} size='sm'>
          Kort Neutral
        </Heading>
        <Paragraph>
          De flesta som tillhandahåller affärer är mycket bättre på den
          perfekta designern. Att skriva förklarar något lättare skrivbord som påstått handlar om detta.
        </Paragraph>
      </Card.Block>
      <Card.Block>
        <img src={cat1} alt='katt' />
      </Card.Block>
    </Card>
  </>
);

/* Vet ej om detta ska användas? */
const Video: Story = () => (
  <Card color='neutral' style={{ maxWidth: '320px' }}>
    <Card.Block>
      <iframe
        data-chromatic='ignore'
        src='https://player.vimeo.com/video/863563441?app_id=122963&amp;title=0&amp;byline=0&amp;portrait=0&amp;dnt=1'
        width='320px'
        height='179px'
        allow='autoplay; fullscreen; picture-in-picture'
        title='30 år med digitalt innsyn'
      ></iframe>
    </Card.Block>
    <Card.Block>
      <Heading level={2} size='sm'>
        <a
          href='https://www.digdir.no/felleslosninger/30-ar-med-digitalt-innsyn/5015'
          target='_blank'
          rel='noreferrer'
        >
          Vi firar 30 år med digitalt insyn
        </a>
      </Heading>
      <Paragraph>
        Det är i år 30 år sedan de första försöken med elektronisk postjournal i
        Norge. Se inspelningen från firandet på Pressens Hus där det både var
        historiska återblickar och debatt om insyn och öppenhet i förvaltningen.
      </Paragraph>
    </Card.Block>
  </Card>
);

const options = [
  { value: 'daglig leder', label: 'Daglig leder' },
  { value: 'forretningsfører', label: 'Försäljningschef' },
];

export const Composed: Story = () => (
  <div
    style={{
      display: 'grid', // Used to test Card.Block border logic
      gap: 'var(--ds-spacing-4)',
      gridColumn: '1 / -1',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px , 1fr))',
      width: '100%',
    }}
  >
    <Card>
      <Card.Block>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Heading level={2} size='xs'>
            Roll 1
          </Heading>
          <Button variant='secondary' color='danger' size='sm'>
            <TrashFillIcon aria-hidden fontSize='1.5rem' />
            Ta bort
          </Button>
        </div>
      </Card.Block>
      <Card.Block>
        <Label htmlFor='my-select'>Välj roll</Label>
        <Select id='my-select'>
          {options.map(({ value, label }, index) => (
            <Select.Option key={index} value={value}>
              {label}
            </Select.Option>
          ))}
        </Select>
        <Textfield label='Personnummer' />
        <Textfield label='Efternamn' />
      </Card.Block>
      <Card.Block>
        <Button variant='secondary' size='sm'>
          Lägg till roll
          <PlusIcon aria-hidden fontSize='1.5rem' />
        </Button>
      </Card.Block>
    </Card>
    <Card>
      <Card.Block>
        <img src={cat1} alt='katt' />
      </Card.Block>
      <Card.Block>
        <Heading level={2} size='sm'>
          Kort Neutral
        </Heading>
        <Paragraph>
          De flesta som tillhandahåller affärer är mycket bättre på den
          perfekta designern. Att skriva förklarar något lättare skrivbord som påstått handlar om detta.
        </Paragraph>
      </Card.Block>
    </Card>
  </div>
);

export const WithLink: Story = (args) => (
  <>
    <Card {...args} color='brand1'>
      <Card.Block>
        <img src={cat5} alt='' />
      </Card.Block>
      <Card.Block>
        <Heading size='sm' level={2}>
          <a
            href='https://designsystemet.no'
            target='_blank'
            rel='noopener noreferrer'
          >
            Länk Kort
          </a>
        </Heading>
        <Paragraph>
          De flesta som tillhandahåller affärer är mycket bättre på den
          perfekta designern. Att skriva förklarar något lättare skrivbord som påstått handlar om detta.
        </Paragraph>
        <Paragraph size='sm'>Fottext</Paragraph>
      </Card.Block>
    </Card>
    <Card {...args} color='neutral'>
      <Card.Block>
        <Heading size='sm' level={2}>
          <a
            href='https://designsystemet.no'
            target='_blank'
            rel='noopener noreferrer'
          >
            Länk Kort
          </a>
        </Heading>
        <Paragraph>
          De flesta som tillhandahåller affärer är mycket bättre på den
          perfekta designern. Att skriva förklarar något lättare skrivbord som påstått handlar om detta.
        </Paragraph>
        <Paragraph size='sm'>Fottext</Paragraph>
      </Card.Block>
      <Card.Block>
        <img src={cat5} alt='' />
      </Card.Block>
    </Card>
  </>
);

export const AsLink: Story = (args) => (
  <>
    <Card {...args} color='brand1' asChild>
      <a
        href='https://designsystemet.no'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Card.Block>
          <Heading size='sm' level={2}>
            Länk Kort med block
          </Heading>
        </Card.Block>
        <Card.Block>
          <Paragraph>
            De flesta som tillhandahåller affärer är mycket bättre på den
            perfekta designern.
          </Paragraph>
        </Card.Block>
      </a>
    </Card>
    <Card {...args} color='neutral' asChild>
      <a
        href='https://designsystemet.no'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Heading size='sm' level={2}>
          Länk Kort
        </Heading>
        <Paragraph>
          De flesta som tillhandahåller affärer är mycket bättre på den
          perfekta designern.
        </Paragraph>
      </a>
    </Card>
  </>
);

export const AsButton: Story = (args) => (
  <>
    <Card {...args} color='brand1' asChild>
      <button type='button'>
        <Card.Block>
          <Heading size='sm' level={2}>
            Knapp Kort med block
          </Heading>
        </Card.Block>
        <Card.Block>
          <Paragraph>
            De flesta som tillhandahåller affärer är mycket bättre på den
            perfekta designern.
          </Paragraph>
        </Card.Block>
      </button>
    </Card>
    <Card {...args} color='neutral' asChild>
      <button type='button'>
        <Heading size='sm' level={2}>
          Länk Kort
        </Heading>
        <Paragraph>
          De flesta som tillhandahåller affärer är mycket bättre på den
          perfekta designern.
        </Paragraph>
      </button>
    </Card>
  </>
);

export const AsGrid: Story = (args) => (
  <Card {...args} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
    <Card.Block>
      <Heading size='sm' level={2}>
        Knapp Kort med block
      </Heading>
    </Card.Block>
    <Card.Block>
      <Paragraph>
        De flesta som tillhandahåller affärer är mycket bättre på den perfekta
        designern.
      </Paragraph>
    </Card.Block>
  </Card>
);

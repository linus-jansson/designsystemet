import type { Meta, StoryFn } from '@storybook/react';

import {
  ChatIcon,
  EnvelopeClosedFillIcon,
  HeartFillIcon,
  InboxIcon,
  PencilIcon,
  VideoFillIcon,
  VideoIcon,
} from '@navikt/aksel-icons';
import { Button } from '../Button';
import { Tabs } from '../Tabs';
import { Badge } from './Badge';

type Story = StoryFn<typeof Badge>;

const meta: Meta<typeof Badge> = {
  title: 'Komponenter/Badge',
  component: Badge,
};

export default meta;

export const Preview: Story = (args) => <Badge {...args}></Badge>;

Preview.args = {
  size: 'md',
  count: 10,
  maxCount: 9,
  color: 'accent',
};

export const Floating: Story = (args) => (
  <div
    style={{
      display: 'flex',
      gap: 'var(--ds-spacing-6)',
    }}
  >
    <Badge color='accent' size='md' placement='top-right'>
      <EnvelopeClosedFillIcon fontSize='2rem' title='Meldinger' />
    </Badge>
    <Badge color='accent' size='md' placement='top-left'>
      <EnvelopeClosedFillIcon fontSize='2rem' title='Meldinger' />
    </Badge>
    <Badge color='accent' size='md' placement='bottom-right'>
      <EnvelopeClosedFillIcon fontSize='2rem' title='Meldinger' />
    </Badge>
    <Badge color='accent' size='md' placement='bottom-left'>
      <EnvelopeClosedFillIcon fontSize='2rem' title='Meldinger' />
    </Badge>
    <Badge color='accent' size='md' placement='top-right' overlap='circle'>
      <div
        style={{
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
          backgroundColor: 'var(--ds-color-brand2-base-default)',
        }}
      />
    </Badge>
    <Badge color='accent' size='md' placement='top-left' overlap='circle'>
      <div
        style={{
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
          backgroundColor: 'var(--ds-color-brand2-base-default)',
        }}
      />
    </Badge>
    <Badge color='accent' size='md' placement='bottom-right' overlap='circle'>
      <div
        style={{
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
          backgroundColor: 'var(--ds-color-brand2-base-default)',
        }}
      />
    </Badge>
    <Badge color='accent' size='md' placement='bottom-left' overlap='circle'>
      <div
        style={{
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
          backgroundColor: 'var(--ds-color-brand2-base-default)',
        }}
      />
    </Badge>
  </div>
);

export const CustomPlacement: Story = (args) => (
  <div
    style={{
      display: 'flex',
      gap: 'var(--ds-spacing-6)',
    }}
  >
    <Badge
      color='accent'
      size='md'
      placement='top-right'
      style={{
        top: '16%',
        right: '10%',
      }}
    >
      <EnvelopeClosedFillIcon fontSize='2rem' title='Meldinger' />
    </Badge>
  </div>
);

export const Status: Story = (args) => (
  <div
    style={{
      display: 'flex',
      gap: 'var(--ds-spacing-4)',
    }}
  >
    <Badge color='danger' size='sm'>
      <VideoFillIcon fontSize='2rem' title='Videokamera' />
    </Badge>
    <Badge color='danger' size='md'>
      <VideoFillIcon fontSize='2rem' title='Videokamera' />
    </Badge>
    <Badge color='danger' size='lg'>
      <VideoFillIcon fontSize='2rem' title='Videokamera' />
    </Badge>
  </div>
);

export const InTabs: Story = (args) => (
  <Tabs defaultValue='value1' size='md'>
    <Tabs.List>
      <Tabs.Tab value='value1'>
        <HeartFillIcon fontSize='1.75rem' aria-hidden />
        Favoritter
        <Badge count={64} maxCount={10} color='neutral' />
      </Tabs.Tab>
      <Tabs.Tab value='value2'>Tab 2</Tabs.Tab>
      <Tabs.Tab value='value3'>
        <PencilIcon fontSize='1.75rem' aria-hidden />
        Nylige
        <Badge count={2} color='neutral' />
      </Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel value='value1'>content 1</Tabs.Panel>
    <Tabs.Panel value='value2'>content 2</Tabs.Panel>
    <Tabs.Panel value='value3'>content 3</Tabs.Panel>
  </Tabs>
);

export const InButton: Story = (args) => (
  <div
    style={{
      display: 'flex',
      gap: 'var(--ds-spacing-4)',
    }}
  >
    <Button icon variant='tertiary'>
      <Badge color='danger' count={1000} maxCount={99} size='sm'>
        <InboxIcon fontSize='1.75rem' title='Innboks' />
      </Badge>
    </Button>
    <Button icon variant='tertiary'>
      <Badge color='danger' count={10} size='sm'>
        <ChatIcon fontSize='1.75rem' title='Meldinger' />
      </Badge>
    </Button>
    <Button icon variant='tertiary'>
      <Badge color='danger' size='sm'>
        <VideoIcon fontSize='1.75rem' title='Skru på video' />
      </Badge>
    </Button>
  </div>
);

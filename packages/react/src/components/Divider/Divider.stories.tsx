import type { Meta, StoryFn } from '@storybook/react';

import { Paragraph } from '../Paragraph';

import { Divider } from './';

type Story = StoryFn<typeof Divider>;

export default {
  title: 'Komponenter/Divider',
  component: Divider,
} as Meta;

export const Preview: Story = (args) => (
  <>
    <Paragraph>
      Divider är använd för att dela upp innehåll i mindre delar.
    </Paragraph>
    <Divider {...args} />
    <Paragraph>
      Den kan också användas för att skilja innehåll som är relaterat till varandra.
    </Paragraph>
  </>
);

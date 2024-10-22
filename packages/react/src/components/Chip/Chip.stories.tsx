import type { Meta, StoryFn } from '@storybook/react';

import { Chip } from '.';

export default {
  title: 'Komponenter/Chip',
  component: Chip.Radio,
  parameters: {
    customStyles: { display: 'flex', gap: 'var(--ds-spacing-2)' },
  },
} satisfies Meta;

export const Preview: StoryFn<typeof Chip.Radio> = (args) => (
  <>
    <Chip.Radio {...args} name='my-radio' value='nynorsk' defaultChecked>
      Chips
    </Chip.Radio>
    <Chip.Radio {...args} name='my-radio' value='bokmål'>
      Godis
    </Chip.Radio>
  </>
);

export const Checkbox: StoryFn<typeof Chip.Checkbox> = (args) => (
  <Chip.Checkbox {...args}>Chips</Chip.Checkbox>
);

export const Removable: StoryFn<typeof Chip.Removable> = (args) => (
  <Chip.Removable {...args}>Godis</Chip.Removable>
);

Removable.args = {
  'aria-label': 'Radera godis',
};

export const Button: StoryFn<typeof Chip.Button> = (args) => (
  <>
    <Chip.Button {...args}>Sök efter chips</Chip.Button>
    <Chip.Button {...args}>Sök efter godis</Chip.Button>
    <Chip.Button {...args}>Sök etter något mer nyttigt</Chip.Button>
  </>
);

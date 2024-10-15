import {
  AirplaneIcon,
  BackpackIcon,
  BellIcon,
  DogIcon,
  NewspaperIcon,
} from '@navikt/aksel-icons';
import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../Button';

import { Tabs } from '.';

export default {
  title: 'Komponenter/Tabs',
  component: Tabs,
} as Meta;

export const Preview: StoryFn<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <Tabs.List>
      <Tabs.Tab value='value1'>Tab 1</Tabs.Tab>
      <Tabs.Tab value='value2'>Tab 2</Tabs.Tab>
      <Tabs.Tab value='value3'>Tab 3</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel value='value1'>content 1</Tabs.Panel>
    <Tabs.Panel value='value2'>content 2</Tabs.Panel>
    <Tabs.Panel value='value3'>content 3</Tabs.Panel>
  </Tabs>
);

Preview.args = {
  defaultValue: 'value1',
  size: 'md',
};

export const IconsOnly: StoryFn<typeof Tabs> = () => (
  <Tabs defaultValue='value1'>
    <Tabs.List>
      <Tabs.Tab value='value1'>
        <AirplaneIcon title='Airplane' fontSize='1.75rem' />
      </Tabs.Tab>
      <Tabs.Tab value='value2'>
        <NewspaperIcon title='Newspaper' fontSize='1.75rem' />
      </Tabs.Tab>
      <Tabs.Tab value='value3'>
        <DogIcon title='Dog' fontSize='1.75rem' />
      </Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel value='value1'>content 1</Tabs.Panel>
    <Tabs.Panel value='value2'>content 2</Tabs.Panel>
    <Tabs.Panel value='value3'>content 3</Tabs.Panel>
  </Tabs>
);

export const Controlled: StoryFn<typeof Tabs> = () => {
  const [value, setValue] = useState('value1');

  return (
    <>
      <Button size='sm' onClick={() => setValue('value3')}>
        Choose Tab 3
      </Button>
      <br />
      <Tabs value={value} onChange={setValue}>
        <Tabs.List>
          <Tabs.Tab value='value1'>
            <BellIcon fontSize='1.75rem' aria-hidden />
            Tab 1
          </Tabs.Tab>
          <Tabs.Tab value='value2'>
            <NewspaperIcon fontSize='1.75rem' aria-hidden />
            Tab 2
          </Tabs.Tab>
          <Tabs.Tab value='value3'>
            <BackpackIcon fontSize='1.75rem' aria-hidden />
            Tab 3
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value='value1'>content 1</Tabs.Panel>
        <Tabs.Panel value='value2'>content 2</Tabs.Panel>
        <Tabs.Panel value='value3'>content 3</Tabs.Panel>
      </Tabs>
    </>
  );
};

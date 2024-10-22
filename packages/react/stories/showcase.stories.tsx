import type { Meta, StoryFn } from '@storybook/react';
import cl from 'clsx/lite';
import { useState } from 'react';

import {
  Accordion,
  Button,
  Card,
  Checkbox,
  Combobox,
  Divider,
  Heading,
  Link,
  Pagination,
  Paragraph,
  Radio,
  Search,
  Select,
  Switch,
  Table,
  Tabs,
  Tag,
  Textfield,
  ToggleGroup,
  Tooltip,
  usePagination,
} from '../src';

import classes from './showcase.module.css';

export default {
  title: 'Showcase',
  parameters: {
    chromatic: {
      modes: {
        mobile: {
          disable: true,
        },
      },
    },
  },
} as Meta;

export const Showcase: StoryFn = () => {
  const [radioValue, setRadioValue] = useState('vanilj');
  const [currentPage, setCurrentPage] = useState(1);
  const pagination = usePagination({
    currentPage,
    setCurrentPage,
    totalPages: 10,
    showPages: 7,
  });

  return (
    <div className={classes.components}>
      <div className={cl(classes.card, classes.checkbox)}>
        <Checkbox.Group error='' legend='Inköpslista' size='sm'>
          <Checkbox value='epost'>Ett kilo potatis</Checkbox>
          <Checkbox value='telefon'>Två liter Farris</Checkbox>
          <Checkbox value='sms' defaultChecked>
            Blomkål
          </Checkbox>
          <Checkbox value='sms' defaultChecked>
            Pizza
          </Checkbox>
          <Checkbox value='sms' defaultChecked>
            Tre liter lättmjölk
          </Checkbox>
          <Divider />
          <Checkbox value='sms'>2 kg smågodis</Checkbox>
          <Checkbox value='sms'>10 påsar med Smash</Checkbox>
        </Checkbox.Group>
      </div>
      <div className={cl(classes.card, classes.user)}>
        <Heading className={cl(classes.cardTitle, classes.userTitle)} size='xs'>
          Skapa ny användare
        </Heading>

        <Textfield
          label='Namn'
          size='sm'
          placeholder='Ola Svensson'
          className={classes.userField}
        />
        <Textfield
          type='email'
          label='E-post'
          size='sm'
          placeholder='ola@svenska.se'
          className={classes.userField}
        />
        <Tooltip content='Tryck för att få hjälp' portal={false}>
          <Link href='#' className={classes.userLink}>
            Glömt lösenord?
          </Link>
        </Tooltip>
        <Button size='sm' className={classes.userBtn}>
          Skapa ny användare
        </Button>
      </div>
      <div className={cl(classes.card, classes.tableContainer)}>
        <Heading className={classes.cardTitle} size='2xs'>
          Alla användare
        </Heading>
        <div className={classes.tableHeader}>
          <div className={classes.tableAction}>
            <Select aria-label='Välj åtgärd' size='sm'>
              <Select.Option value='blank'>Välj åtgärd</Select.Option>
              <Select.Option value='duplikera'>Duplicera</Select.Option>
              <Select.Option value='ta-bort'>Ta bort</Select.Option>
              <Select.Option value='uppdatera'>Uppdatera</Select.Option>
            </Select>
            <Button className={classes.tableBtn} size='sm'>
              Utför
            </Button>
          </div>
          <Search
            label='Sökfält'
            placeholder='Sök efter användare...'
            size='sm'
            variant='simple'
            className={classes.tableSearch}
          />
        </div>
        <Table
          size='sm'
          border
          className={classes.table}
          data-ds-typography='secondary'
        >
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell onClick={function Ya() {}} sort='none'>
                Namn
              </Table.HeaderCell>
              <Table.HeaderCell>E-post</Table.HeaderCell>
              <Table.HeaderCell onClick={function Ya() {}} sort='none'>
                Telefon
              </Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell className={classes.tableCell}>
                <img
                  className={classes.tableImg}
                  src='img/avatars/female1.png'
                  alt=''
                />
                Lisa Svensson
              </Table.Cell>
              <Table.Cell>lisa@svensson.se</Table.Cell>
              <Table.Cell>22345678</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className={classes.tableCell}>
                <img
                  className={classes.tableImg}
                  src='img/avatars/male2.png'
                  alt=''
                />
                Ola Svensson
              </Table.Cell>
              <Table.Cell>ola@svensson.se</Table.Cell>
              <Table.Cell>87654321</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Pagination>
          <Pagination.List>
            <Pagination.Item>
              <Pagination.Button {...pagination.prevButtonProps}>
                Föregående
              </Pagination.Button>
            </Pagination.Item>
            {pagination.pages.map(({ itemKey, buttonProps, page }) => (
              <Pagination.Item key={itemKey}>
                <Pagination.Button {...buttonProps}>{page}</Pagination.Button>
              </Pagination.Item>
            ))}
            <Pagination.Item>
              <Pagination.Button {...pagination.nextButtonProps}>
                Nästa
              </Pagination.Button>
            </Pagination.Item>
          </Pagination.List>
        </Pagination>
      </div>
      <div className={cl(classes.card, classes.help)}>
        <Heading size='xs' className={classes.helpHeading}>
          Hur kan vi hjälpa dig?
        </Heading>
        <div className={classes.helpCards}>
          <Card color='brand1'>
            <Heading size='2xs'>Säkerhet och drift</Heading>
            <Paragraph>
              Most provide as with carried business are much better more the.
            </Paragraph>
          </Card>
          <Card color='brand2'>
            <Heading size='2xs'>Skola och utbildning</Heading>
            <Paragraph>
              Most provide as with carried business are much better more the.
            </Paragraph>
          </Card>
          <Card color='brand3'>
            <Heading size='2xs'>
              <a href='#preview'>Mat och hälsa</a>
            </Heading>
            <Paragraph>
              Länk till artikel om mat och hälsa, där du kan läsa mer om allt.
            </Paragraph>
          </Card>
        </div>
      </div>
      <div className={cl(classes.card, classes.radio)}>
        <Radio.Group
          error=''
          legend='Vilken glassmak är bäst?'
          size='sm'
          value={radioValue}
          onChange={(e: string) => setRadioValue(e)}
        >
          <Radio value='vanilj'>Vanilj</Radio>
          <Radio value='jordgubb'>Jordgubb</Radio>
          <Radio value='choklad'>Choklad</Radio>
          <Radio value='äter-inte-glass'>Jag äter inte glass</Radio>
        </Radio.Group>
      </div>
      <div className={cl(classes.card, classes.tag)}>
        <Heading size='xs'>Ämnen</Heading>
        <div className={classes.tagList}>
          <Tag color='brand1' size='sm'>
            Data och IT
          </Tag>
          <Tag color='brand2' size='sm'>
            Mat och näring
          </Tag>
          <Tag color='brand3' size='sm'>
            Sport och Idrott
          </Tag>
          <Tag color='neutral' size='sm'>
            Politik och samhälle
          </Tag>
          <Tag color='success' size='sm'>
            Utrikes
          </Tag>
          <Tag color='info' size='sm'>
            Hälsa och välmående
          </Tag>
          <Tag color='danger' size='sm'>
            PC-spel
          </Tag>
          <Tag color='warning' size='sm'>
            Träning och livsstil
          </Tag>
        </div>
      </div>
      <div className={cl(classes.card, classes.switches)}>
        <Heading size='xs' style={{ marginBottom: 'var(--ds-spacing-2)' }}>
          Inställningar
        </Heading>
        <Paragraph size='sm' style={{ marginBottom: 'var(--ds-spacing-2)' }}>
          Här kan du justera dina inställningar
        </Paragraph>
        <div className={classes.switchGroup}>
          <Switch size='sm' defaultChecked>
            TV-visning
          </Switch>
          <Switch size='sm'>Datorvisning</Switch>
          <Switch size='sm' defaultChecked readOnly>
            Tabletvisning
          </Switch>
          <Switch size='sm' disabled>
            Mobilvisning
          </Switch>
        </div>
      </div>
      <div className={cl(classes.card, classes.combobox)}>
        <Heading size='xs' style={{ marginBottom: 'var(--ds-spacing-2)' }}>
          Varifrån kommer du?
        </Heading>
        <Paragraph size='sm' style={{ marginBottom: 'var(--ds-spacing-2)' }}>
          Svara nedan så hittar vi flygresor
        </Paragraph>
        <div className={classes.toggleCombo}>
          <ToggleGroup defaultValue='sverige' size='sm'>
            <ToggleGroup.Item value='norge'>Norge</ToggleGroup.Item>
            <ToggleGroup.Item value='sverige'>Sverige</ToggleGroup.Item>
            <ToggleGroup.Item value='utlandet'>Utlandet</ToggleGroup.Item>
          </ToggleGroup>
          <Combobox
            description='Välj en plats'
            label='Var går resan?'
            size='sm'
            portal={false}
            multiple
          >
            <Combobox.Empty>Inga träffar</Combobox.Empty>
            <Combobox.Option value='leikanger'>Leikanger</Combobox.Option>
            <Combobox.Option value='oslo'>Oslo</Combobox.Option>
            <Combobox.Option value='bronnoysund'>Brønnøysund</Combobox.Option>
            <Combobox.Option value='stavanger'>Stavanger</Combobox.Option>
            <Combobox.Option value='trondheim'>Trondheim</Combobox.Option>
            <Combobox.Option value='tromso'>Tromsø</Combobox.Option>
            <Combobox.Option value='bergen'>Bergen</Combobox.Option>
            <Combobox.Option value='moirana'>Mo i Rana</Combobox.Option>
          </Combobox>
        </div>
      </div>
      <div className={cl(classes.card, classes.tabs)}>
        <Tabs defaultValue='value1' size='sm'>
          <Tabs.List>
            <Tabs.Tab value='value1'>Min profil</Tabs.Tab>
            <Tabs.Tab value='value2'>Tjänster</Tabs.Tab>
            <Tabs.Tab value='value3'>Inställningar</Tabs.Tab>
          </Tabs.List>
        </Tabs>
        <Paragraph size='sm'>
          För att kunna bli registrerad i{' '}
          <Link href='#' color='neutral'>
            Frivillighetsregisteret
          </Link>
          , måste organisationen driva frivillig verksamhet. Det är bara
          föreningar,{' '}
          <Link href='#' color='neutral'>
            stiftelser
          </Link>{' '}
          som kan registreras. Verksamheten kan inte dela ut medel till fysiska
          personer. Verksamheten måste ha en styrelse. Verksamheten måste vara
          registrerad i{' '}
          <Link href='#' color='neutral'>
            Enhetsregisteret
          </Link>{' '}
          innan den kan bli registrerad.
        </Paragraph>
      </div>
      <div className={cl(classes.card, classes.faq)}>
        <Heading size='xs' className={classes.cardTitle}>
          Vanliga frågor
        </Heading>
        <Accordion color='brand3' border>
          <Accordion.Item>
            <Accordion.Heading>
              Vem kan registrera sig i Frivillighetsregisteret?
            </Accordion.Heading>
            <Accordion.Content>
              För att kunna bli registrerad i Frivillighetsregisteret måste
              organisationen driva frivillig verksamhet. Det är bara föreningar,
              stiftelser och aktiebolag som kan registreras. Verksamheten kan
              inte dela ut medel till fysiska personer. Verksamheten måste ha en
              styrelse.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Heading>
              Hur går jag tillväga för att registrera i Frivillighetsregisteret?
            </Accordion.Heading>
            <Accordion.Content>
              Verksamheten måste vara registrerad i Enhetsregisteret innan den
              kan bli registrerad i Frivillighetsregisteret. Du kan registrera i
              båda registren samtidigt i Samordnad registeranmälan.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Heading>
              Hur går jag tillväga för att registrera i Frivillighetsregisteret?
            </Accordion.Heading>
            <Accordion.Content>
              Verksamheten måste vara registrerad i Enhetsregisteret innan den
              kan bli registrerad i Frivillighetsregisteret. Du kan registrera i
              båda registren samtidigt i Samordnad registeranmälan.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

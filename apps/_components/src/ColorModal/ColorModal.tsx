import { Modal, Paragraph } from '@digdir/designsystemet-react';
import type { ColorNumber } from '@digdir/designsystemet/color';
import {
  getColorNameFromNumber,
  getCssVariable,
  hexToHsluv,
} from '@digdir/designsystemet/color';
import { ClipboardButton } from '@repo/components';

import classes from './ColorModal.module.css';
import {
  capitalizeFirstLetter,
  getColorCombinations,
  getColorDescription,
} from './colorModalUtils';

const Field = ({
  label,
  value,
  copyBtn = false,
}: {
  label: string;
  value: string;
  copyBtn?: boolean;
}) => {
  return (
    <div className={classes.field}>
      {label && (
        <Paragraph size='sm' className={classes.label}>
          {label}
        </Paragraph>
      )}
      <Paragraph size='sm' className={classes.value}>
        {value}
      </Paragraph>
      {copyBtn && <ClipboardButton value={value} />}
    </div>
  );
};

type ColorModalProps = {
  colorModalRef: React.RefObject<HTMLDialogElement>;
  hex: string;
  namespace: string;
  weight: ColorNumber;
};

export const ColorModal = ({
  colorModalRef,
  hex,
  namespace,
  weight,
}: ColorModalProps) => {
  return (
    <Modal.Context>
      <Modal
        ref={colorModalRef}
        style={{
          maxWidth: '1050px',
        }}
      >
        <Modal.Header>
          {`${capitalizeFirstLetter(namespace)} ${capitalizeFirstLetter(getColorNameFromNumber(weight))}`}
        </Modal.Header>
        <div className={classes.modalContent}>
          <div className={classes.description}>
            {getColorDescription({
              weight,
              namespace,
            })}
          </div>
          <div className={classes.container}>
            <div className={classes.left}>
              <Field label='Hexkode:' value={hex} copyBtn />
              <Field
                label='HSLuv:'
                value={
                  hexToHsluv(hex)[0].toFixed(0) +
                  '° ' +
                  hexToHsluv(hex)[1].toFixed(0) +
                  '% ' +
                  hexToHsluv(hex)[2].toFixed(0) +
                  '%'
                }
              />
              <Field
                label='CSS variabel:'
                value={getCssVariable(namespace, weight)}
                copyBtn
              />
              {!namespace.includes('Base') && (
                <Field
                  label='Brukes mot:'
                  value={getColorCombinations(weight)}
                />
              )}
              <Field label='' value='Mer informasjon om fargen kommer.' />
            </div>
            <div
              className={classes.right}
              style={{ backgroundColor: hex }}
            ></div>
          </div>
          {/* <Accordion.Root
            color='neutral'
            className={classes.accordion}
          >
            <Accordion.Item>
              <Accordion.Heading
                level={3}
                className={classes.accordionHeading}
              >
                Vis kontrastgrenser mot relevante farger
              </Accordion.Heading>
              <Accordion.Content className={classes.accordionContent}>
                <Boxes
                  selectedColor={hex}
                  colorTheme={namespace}
                />
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root> */}
        </div>
      </Modal>
    </Modal.Context>
  );
};

import { Heading, Modal, Paragraph } from '@digdir/designsystemet-react';
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
        <Paragraph data-size='sm' className={classes.label}>
          {label}
        </Paragraph>
      )}
      <Paragraph data-size='sm' className={classes.value}>
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
    <Modal
      ref={colorModalRef}
      style={{
        maxWidth: '1050px',
      }}
      backdropClose
    >
      <Modal.Block>
        <Heading data-size='xs'>
          {`${capitalizeFirstLetter(namespace)} ${capitalizeFirstLetter(getColorNameFromNumber(weight))}`}
        </Heading>
      </Modal.Block>
      <Modal.Block className={classes.modalContent}>
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

            {weight !== 9 && weight !== 10 && weight !== 11 && (
              <Field label='Brukes mot:' value={getColorCombinations(weight)} />
            )}
          </div>
          <div className={classes.right} style={{ backgroundColor: hex }}></div>
        </div>
        {/* <Details.Root
            color='neutral'
            className={classes.accordion}
          >
            <Details.Item>
              <Details.Summary
                level={3}
                className={classes.accordionHeading}
              >
                Vis kontrastgrenser mot relevante farger
              </Details.Summary>
              <Details.Content className={classes.accordionContent}>
                <Boxes
                  selectedColor={hex}
                  colorTheme={namespace}
                />
              </Details.Content>
            </Details.Item>
          </Details.Root> */}
      </Modal.Block>
    </Modal>
  );
};

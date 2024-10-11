import { PadlockLockedFillIcon } from '@navikt/aksel-icons';
import cl from 'clsx/lite';

import { Label } from '../../../Label';
import { Paragraph } from '../../../Paragraph';
import type { useFormField } from '../../useFormField';
import type { ComboboxProps } from '../Combobox';

type ComboboxLabelProps = {
  label?: ComboboxProps['label'];
  description?: ComboboxProps['description'];
  hideLabel?: ComboboxProps['hideLabel'];
  size?: ComboboxProps['size'];
  readOnly?: ComboboxProps['readOnly'];
  formFieldProps: ReturnType<typeof useFormField>;
};

const ComboboxLabel = ({
  label,
  description,
  hideLabel,
  size,
  readOnly,
  formFieldProps,
}: ComboboxLabelProps) => {
  return (
    <>
      {label && (
        <Label
          size={size}
          htmlFor={formFieldProps.inputProps.id}
          className={cl('ds-combobox__label', hideLabel && `ds-sr-only`)}
        >
          {readOnly && (
            <PadlockLockedFillIcon
              aria-hidden
              className={'ds-combobox__readonly__icon'}
            />
          )}
          {label}
        </Label>
      )}
      {description && (
        <Paragraph asChild size={size}>
          <div
            id={formFieldProps.descriptionId}
            className={cl(
              'ds-combobox__description',
              hideLabel && `ds-sr-only`,
            )}
          >
            {description}
          </div>
        </Paragraph>
      )}
    </>
  );
};

ComboboxLabel.displayName = 'ComboboxLabel';

export default ComboboxLabel;

import { forwardRef } from 'react';
import type { DefaultProps } from '../../../types';
import { Input } from '../Input';

export type SearchInputProps = DefaultProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'readOnly' | 'type'>;

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  function SearchInput({ ...rest }, ref) {
    return (
      <Input
        ref={ref}
        type='search'
        /* We need an empty placeholder for the clear button to be able to show/hide */
        placeholder=''
        {...rest}
      />
    );
  },
);

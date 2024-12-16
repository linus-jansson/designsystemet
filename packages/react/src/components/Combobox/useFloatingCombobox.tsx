import {
  type FloatingContext,
  type UseFloatingReturn,
  autoUpdate,
  flip,
  size as floatingSize,
  offset,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react';
import { useState } from 'react';
import type { MutableRefObject } from 'react';
import { flushSync } from 'react-dom';

import { useComboboxId, useComboboxIdDispatch } from './ComboboxIdContext';

type UseFloatingComboboxProps = {
  listRef: MutableRefObject<(HTMLElement | null)[]>;
};
type UseFloatingComboboxReturn = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeIndex: number | null;
  refs: UseFloatingReturn['refs'];
  floatingStyles: React.CSSProperties;
  context: FloatingContext<HTMLElement>;
  getReferenceProps: ReturnType<typeof useInteractions>['getReferenceProps'];
  getFloatingProps: ReturnType<typeof useInteractions>['getFloatingProps'];
  getItemProps: ReturnType<typeof useInteractions>['getItemProps'];
};

export const useFloatingCombobox = ({ listRef }: UseFloatingComboboxProps) : UseFloatingComboboxReturn => {
  const [open, setOpen] = useState(false);

  const { activeIndex } = useComboboxId();
  const dispatch = useComboboxIdDispatch();

  // floating UI
  const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
    open,
    onOpenChange: (newOpen) => {
      if (!newOpen) dispatch?.({ type: 'SET_ACTIVE_INDEX', payload: 0 });
      flushSync(() => {
        if (refs.floating.current && !newOpen) {
          refs.floating.current.scrollTop = 0;
        }
        setTimeout(() => {
          setOpen(newOpen);
        }, 1);
      });
    },
    whileElementsMounted: (reference, floating, update) => {
      autoUpdate(reference, floating, update);
      return () => {
        floating.scrollTop = 0;
      };
    },
    middleware: [
      flip({ padding: 10 }),
      floatingSize({
        apply({ rects, elements }) {
          requestAnimationFrame(() => {
            Object.assign(elements.floating.style, {
              width: `${rects.reference.width}px`,
              maxHeight: `200px`,
            });
          });
        },
      }),
      offset(10),
    ],
  });

  const role = useRole(context, { role: 'listbox' });
  const dismiss = useDismiss(context);
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    virtual: true,
    scrollItemIntoView: true,
    enabled: open,
    focusItemOnHover: true,
    onNavigate: (index) => {
      dispatch?.({ type: 'SET_ACTIVE_INDEX', payload: index || 0 });
    },
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [role, dismiss, listNav],
  );

  return {
    open,
    setOpen,
    activeIndex,
    refs,
    floatingStyles,
    context,
    getReferenceProps,
    getFloatingProps,
    getItemProps,
  };
};

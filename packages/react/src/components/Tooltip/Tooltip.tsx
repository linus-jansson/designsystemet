import {
  FloatingPortal,
  type MiddlewareState,
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useMergeRefs,
  useRole,
  useTransitionStyles,
} from '@floating-ui/react';
import { Slot } from '@radix-ui/react-slot';
import cl from 'clsx/lite';
import type {
  HTMLAttributes,
  MutableRefObject,
  ReactElement,
  RefAttributes,
} from 'react';
import { Fragment, forwardRef, useState } from 'react';

import type { DefaultProps, PortalProps } from '../../types';
import type { MergeRight } from '../../utilities';

export type TooltipProps = MergeRight<
  Omit<DefaultProps, 'data-color'> &
    PortalProps &
    HTMLAttributes<HTMLDivElement>,
  {
    /**
     * The element or string that triggers the tooltip.
     *
     * @note If it is a string, it will be wrapped in a span.
     * @note If it is an element, it needs to be able to receive a ref.
     */
    children: (ReactElement & RefAttributes<HTMLElement>) | string;
    /** Content of the tooltip */
    content: string;
    /**
     * Placement of the tooltip on the trigger.
     * @default 'top'
     */
    placement?: 'top' | 'right' | 'bottom' | 'left';
    /**
     * Delay in milliseconds before opening.
     * @default 150
     */
    delay?: number;
    /**
     * Whether the tooltip is open or not.
     * This overrides the internal state of the tooltip.
     */
    open?: boolean;
    /**
     * Whether the tooltip is open by default or not.
     * @default false
     */
    defaultOpen?: boolean;
  }
>;

/**
 * Tooltip component that displays a small piece of information when hovering or focusing on an element.
 * @example
 * <Tooltip content='This is a tooltip'>
 *  <button>Hover me</button>
 * </Tooltip>
 *
 * @example
 * <Tooltip content='This is a tooltip'>
 *  Hover me
 * </Tooltip>
 */
export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(
    {
      children,
      content,
      placement = 'top',
      delay = 150,
      open: userOpen,
      defaultOpen = false,
      portal = false,
      className,
      style,
      ...rest
    },
    ref,
  ) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const internalOpen = userOpen ?? isOpen;

    const Container = portal ? FloatingPortal : Fragment;

    const { refs, floatingStyles, context } = useFloating({
      open: internalOpen,
      onOpenChange: setIsOpen,
      placement,
      whileElementsMounted: autoUpdate,
      middleware: [
        offset((data) => {
          // get pseudo element arrow size
          const styles = getComputedStyle(data.elements.floating, '::before');
          return parseFloat(styles.height);
        }),
        flip({
          fallbackAxisSideDirection: 'start',
        }),
        shift(),
        arrowPseudoElement,
      ],
    });

    const { styles: animationStyles } = useTransitionStyles(context, {
      initial: {
        opacity: 0,
      },
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([
      // Event listeners to change the open state
      useHover(context, { move: false, delay }),
      useFocus(context),
      useDismiss(context),
      useRole(context, { role: 'tooltip' }),
    ]);

    const mergedRef = useMergeRefs([ref, refs.setFloating]);

    const childMergedRef = useMergeRefs([
      (children as ReactElement & RefAttributes<HTMLElement>)
        .ref as MutableRefObject<HTMLElement>,
      refs.setReference,
    ]);

    /* If children is only a string, make a span */
    const ChildContainer = typeof children === 'string' ? 'span' : Slot;

    /* Make sure it is valid */
    if (typeof children !== 'string' && children.type === Fragment) {
      console.error(
        '<Tooltip> children needs to be a single ReactElement that can receive a ref and not: <Fragment/> | <></>',
      );
      return null;
    }

    return (
      <>
        <ChildContainer
          {...getReferenceProps({
            ref: childMergedRef,
          })}
        >
          {children}
        </ChildContainer>
        {internalOpen && (
          <Container>
            <div
              ref={refs.setFloating}
              style={{ ...floatingStyles, ...animationStyles, ...style }}
              role='tooltip'
              {...getFloatingProps({
                className: cl('ds-tooltip', className),
                ref: mergedRef,
                ...rest,
              })}
            >
              {content}
            </div>
          </Container>
        )}
      </>
    );
  },
);

const arrowPseudoElement = {
  name: 'ArrowPseudoElement',
  fn(data: MiddlewareState) {
    const { elements, rects, placement } = data;

    let arrowX = `${Math.round(
      rects.reference.width / 2 + rects.reference.x - data.x,
    )}px`;
    let arrowY = `${Math.round(
      rects.reference.height / 2 + rects.reference.y - data.y,
    )}px`;

    switch (placement) {
      case 'top':
        arrowY = '100%';
        break;
      case 'right':
        arrowX = '0';
        break;
      case 'bottom':
        arrowY = '0';
        break;
      case 'left':
        arrowX = '100%';
        break;
    }

    elements.floating.style.setProperty('--ds-tooltip-arrow-x', arrowX);
    elements.floating.style.setProperty('--ds-tooltip-arrow-y', arrowY);
    return data;
  },
};

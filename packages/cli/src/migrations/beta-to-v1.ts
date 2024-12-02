import { cssClassRename, cssVarRename } from './codemods/css/plugins.js';
import { runCssCodemod } from './codemods/css/run.js';

export default (glob?: string) =>
  runCssCodemod({
    globPattern: glob,
    plugins: [
      cssClassRename({
        '.fds-': '.ds-',
      }),
      // New component token prefixes
      cssVarRename({
        '--fds-accordion': '--dsc-accordion' /* TODO: EIRIK */,
        '--fds-alert': '--dsc-alert',
        '--fds-btn': '--dsc-btn',
        '--fds-checkbox': '--dsc-checkbox',
        '--fdsc-chip': '--dsc-chip',
        '--fdsc-gap': '--dsc-chip-group-gap',
        '--fdsc-removable': '--dsc-removable',
        '--fdsc-bottom': '--dsc-bottom',
        '--fds-pagination': '--dsc-pagination',
        '--fds-popover': '--dsc-popover',
        '--fds-radio': '--dsc-radio',
        '--f-search': '--dsc-search',
        '--fds-skeleton': '--dsc-skeleton',
        '--fds-switch--transition': '--dsc-switch-transition',
        '--fds-switch': '--dsc-switch',
        '--table-padding': '--dsc-table-padding',
        '--border-radius': '--dsc-table-border-radius',
        '--fds-tabs': '--dsc-tabs',
        '--fds-tag': '--dsc-tag',
        '--fds-focus-border-width': '--dsc-focus-border-width',
      }),
      // New tokens
      cssVarRename({
        '--fds-semantic-surface-first-light': '--ds-color-brand1-surface-default',
        '--fds-semantic-surface-first-light-hover': '--ds-color-brand1-surface-hover',
        '--fds-semantic-surface-first-light-active': '--ds-color-brand1-surface-active',
        '--fds-semantic-surface-first-dark': '[delete]',
        '--fds-semantic-surface-second-light': '--ds-color-brand2-surface-default',
        '--fds-semantic-surface-second-light-hover': '--ds-color-brand2-surface-hover',
        '--fds-semantic-surface-second-light-active': '--ds-color-brand2-surface-active',
        '--fds-semantic-surface-second-dark': '[delete]',
        '--fds-semantic-surface-third-light': '--ds-color-brand3-surface-default',
        '--fds-semantic-surface-third-light-hover': '--ds-color-brand3-surface-hover',
        '--fds-semantic-surface-third-light-active': '--ds-color-brand3-surface-active',
        '--fds-semantic-surface-third-dark': '[delete]',
        '--fds-semantic-surface-action-first-subtle': '--ds-color-accent-surface-default',
        '--fds-semantic-surface-action-first-subtle-hover': '--ds-color-accent-surface-hover',
        '--fds-semantic-surface-action-first-default': '--ds-color-accent-base-default',
        '--fds-semantic-surface-action-first-hover': '--ds-color-accent-base-hover',
        '--fds-semantic-surface-action-first-active': '--ds-color-accent-base-active',
        '--fds-semantic-surface-action-first-no_fill': '--ds-color-accent-background-default',
        '--fds-semantic-surface-action-first-no_fill-hover': '--ds-color-accent-surface-default',
        '--fds-semantic-surface-action-first-no_fill-active': '--ds-color-accent-surface-hover',
        '--fds-semantic-surface-action-second-subtle': '--ds-color-neutral-surface-default',
        '--fds-semantic-surface-action-second-subtle-hover': '--ds-color-neutral-surface-hover',
        '--fds-semantic-surface-action-second-default': '--ds-color-neutral-base-default',
        '--fds-semantic-surface-action-second-hover': '--ds-color-neutral-base-hover',
        '--fds-semantic-surface-action-second-active': '--ds-color-neutral-base-active',
        '--fds-semantic-surface-action-second-no_fill': '--ds-color-neutral-background-default',
        '--fds-semantic-surface-action-second-no_fill-hover': '--ds-color-neutral-surface-default',
        '--fds-semantic-surface-action-second-no_fill-active': '--ds-color-neutral-surface-hover',
        '--fds-semantic-surface-action-subtle': '--ds-color-accent-surface-default',
        '--fds-semantic-surface-action-subtle-hover': '--ds-color-accent-surface-hover',
        '--fds-semantic-surface-action-default': '--ds-color-accent-base-default',
        '--fds-semantic-surface-action-hover': '--ds-color-accent-base-hover',
        '--fds-semantic-surface-action-active': '--ds-color-accent-base-active',
        '--fds-semantic-surface-action-no_fill': '--ds-color-accent-background-default',
        '--fds-semantic-surface-action-no_fill-hover': '--ds-color-accent-surface-default',
        '--fds-semantic-surface-action-no_fill-active': '--ds-color-accent-surface-hover',
        '--fds-semantic-surface-action-checked': '--ds-color-accent-base-default',
        '--fds-semantic-surface-neutral-default': '--ds-color-neutral-background-default',
        '--fds-semantic-surface-neutral-selected': '[delete]',
        '--fds-semantic-surface-neutral-subtle': '--ds-color-neutral-background-subtle',
        '--fds-semantic-surface-neutral-subtle-hover': '--ds-color-neutral-surface-default',
        '--fds-semantic-surface-neutral-dark': '[delete]',
        '--fds-semantic-surface-neutral-dark-hover': '[delete]',
        '--fds-semantic-surface-neutral-inverted': '[delete]',
        '--fds-semantic-surface-success-subtle': '--ds-color-success-surface-default',
        '--fds-semantic-surface-success-subtle-hover': '--ds-color-success-surface-hover',
        '--fds-semantic-surface-success-default': '--ds-color-success-base-default',
        '--fds-semantic-surface-success-hover': '--ds-color-success-base-hover',
        '--fds-semantic-surface-success-active': '--ds-color-success-base-active',
        '--fds-semantic-surface-success-no_fill': '--ds-color-success-background-default',
        '--fds-semantic-surface-success-no_fill-hover': '--ds-color-success-surface-default',
        '--fds-semantic-surface-success-no_fill-active': '--ds-color-success-surface-hover',
        '--fds-semantic-surface-warning-subtle': '--ds-color-warning-surface-default',
        '--fds-semantic-surface-warning-subtle-hover': '--ds-color-warning-surface-default',
        '--fds-semantic-surface-warning-default': '--ds-color-warning-surface-default',
        '--fds-semantic-surface-warning-default-hover': '--ds-color-warning-surface-hover',
        '--fds-semantic-surface-danger-subtle': '--ds-color-danger-surface-default',
        '--fds-semantic-surface-danger-subtle-hover': '--ds-color-danger-surface-hover',
        '--fds-semantic-surface-danger-default': '--ds-color-danger-base-default',
        '--fds-semantic-surface-danger-hover': '--ds-color-danger-base-hover',
        '--fds-semantic-surface-danger-active': '--ds-color-danger-base-active',
        '--fds-semantic-surface-danger-no_fill': '--ds-color-danger-background-default',
        '--fds-semantic-surface-danger-no_fill-hover': '--ds-color-danger-surface-default',
        '--fds-semantic-surface-danger-no_fill-active': '--ds-color-danger-surface-hover',
        '--fds-semantic-surface-info-subtle': '--ds-color-info-surface-default',
        '--fds-semantic-surface-info-subtle-hover': '[delete]',
        '--fds-semantic-surface-on_inverted-default': '[delete]',
        '--fds-semantic-surface-on_inverted-hover': '[delete]',
        '--fds-semantic-surface-on_inverted-active': '[delete]',
        '--fds-semantic-surface-on_inverted-no_fill': '[delete]',
        '--fds-semantic-surface-on_inverted-no_fill-hover': '[delete]',
        '--fds-semantic-surface-on_inverted-no_fill-active': '[delete]',
        '--fds-semantic-surface-focus-default': '[delete]',
        '--fds-semantic-border-first-default': '--ds-color-brand1-base-default',
        '--fds-semantic-border-first-hover': '--ds-color-brand1-base-hover',
        '--fds-semantic-border-first-active': '--ds-color-brand1-base-active',
        '--fds-semantic-border-second-default': '--ds-color-brand2-base-default',
        '--fds-semantic-border-second-hover': '--ds-color-brand2-base-hover',
        '--fds-semantic-border-second-active': '--ds-color-brand2-base-active',
        '--fds-semantic-border-third-default': '--ds-color-brand3-base-default',
        '--fds-semantic-border-third-hover': '--ds-color-brand3-base-hover',
        '--fds-semantic-border-third-active': '--ds-color-brand3-base-active',
        '--fds-semantic-border-action-first-subtle': '--ds-color-accent-border-subtle',
        '--fds-semantic-border-action-first-subtle-hover': '--ds-color-accent-border-default',
        '--fds-semantic-border-action-first-default': '--ds-color-accent-base-default',
        '--fds-semantic-border-action-first-hover': '--ds-color-accent-base-hover',
        '--fds-semantic-border-action-first-active': '--ds-color-accent-base-active',
        '--fds-semantic-border-action-second-subtle': '--ds-color-neutral-border-subtle',
        '--fds-semantic-border-action-second-subtle-hover': '--ds-color-neutral-border-default',
        '--fds-semantic-border-action-second-default': '--ds-color-neutral-base-default',
        '--fds-semantic-border-action-second-hover': '--ds-color-neutral-base-hover',
        '--fds-semantic-border-action-second-active': '--ds-color-neutral-base-active',
        '--fds-semantic-border-action-subtle': '--ds-color-accent-border-subtle',
        '--fds-semantic-border-action-subtle-hover': '--ds-color-accent-border-default',
        '--fds-semantic-border-action-default': '--ds-color-accent-base-default',
        '--fds-semantic-border-action-hover': '--ds-color-accent-base-hover',
        '--fds-semantic-border-action-active': '--ds-color-accent-base-active',
        '--fds-semantic-border-action-dark': '[delete]',
        '--fds-semantic-border-action-dark-hover': '[delete]',
        '--fds-semantic-border-info-default': '--ds-color-info-border-strong',
        '--fds-semantic-border-neutral-default': '--ds-color-neutral-border-strong',
        '--fds-semantic-border-neutral-subtle': '--ds-color-neutral-border-subtle',
        '--fds-semantic-border-neutral-strong': '--ds-color-neutral-base-default',
        '--fds-semantic-border-success-default': '--ds-color-success-border-default',
        '--fds-semantic-border-success-hover': '[delete]',
        '--fds-semantic-border-success-active': '[delete]',
        '--fds-semantic-border-warning-default': '--ds-color-warning-border-default',
        '--fds-semantic-border-warning-hover': '[delete]',
        '--fds-semantic-border-warning-active': '[delete]',
        '--fds-semantic-border-danger-default': '--ds-color-danger-border-default',
        '--fds-semantic-border-danger-hover': '--ds-color-danger-border-strong',
        '--fds-semantic-border-danger-active': '--ds-color-danger-border-strong',
        '--fds-semantic-border-focus-outline': '--ds-color-neutral-text-default',
        '--fds-semantic-border-focus-boxshadow': '--ds-color-neutral-background-default',
        '--fds-semantic-border-on_inverted-default': '[delete]',
        '--fds-semantic-border-input-default': '--ds-color-neutral-border-default',
        '--fds-semantic-border-input-hover': '--ds-color-accent-border-strong',
        '--fds-semantic-border-divider-default': '--ds-color-neutral-border-subtle',
        '--fds-semantic-border-divider-subtle': '--ds-color-neutral-border-subtle',
        '--fds-semantic-border-divider-strong': '--ds-color-neutral-border-default',
        '--fds-semantic-text-action-first-default': '--ds-color-accent-base-default',
        '--fds-semantic-text-action-first-hover': '--ds-color-accent-base-hover',
        '--fds-semantic-text-action-first-active': '--ds-color-accent-base-active',
        '--fds-semantic-text-action-first-on_action': '--ds-color-accent-contrast-default',
        '--fds-semantic-text-action-second-default': '--ds-color-neutral-base-default',
        '--fds-semantic-text-action-second-hover': '--ds-color-neutral-base-hover',
        '--fds-semantic-text-action-second-active': '--ds-color-neutral-base-active',
        '--fds-semantic-text-action-second-on_action': '--ds-color-neutral-contrast-default',
        '--fds-semantic-text-action-default': '--ds-color-accent-base-default',
        '--fds-semantic-text-action-hover': '--ds-color-accent-base-hover',
        '--fds-semantic-text-action-active': '--ds-color-accent-base-active',
        '--fds-semantic-text-action-on_action': '--ds-color-accent-contrast-default',
        '--fds-semantic-text-success-default': '--ds-color-success-base-default',
        '--fds-semantic-text-success-hover': '--ds-color-success-base-default',
        '--fds-semantic-text-success-active': '--ds-color-success-base-default',
        '--fds-semantic-text-success-on_success': '--ds-color-success-contrast-default',
        '--fds-semantic-text-success-on_success_subtle': '--ds-color-success-text-default',
        '--fds-semantic-text-neutral-default': '--ds-color-neutral-text-default',
        '--fds-semantic-text-neutral-subtle': '--ds-color-neutral-text-subtle',
        '--fds-semantic-text-neutral-on_inverted': '--ds-color-neutral-contrast-default',
        '--fds-semantic-text-warning-default': '[delete]',
        '--fds-semantic-text-warning-icon_warning': '--ds-color-warning-base-default',
        '--fds-semantic-text-warning-on_warning': '--ds-color-neutral-text-default',
        '--fds-semantic-text-danger-default': '--ds-color-danger-text-default',
        '--fds-semantic-text-danger-hover': '--ds-color-danger-text-default',
        '--fds-semantic-text-danger-active': '--ds-color-danger-text-default',
        '--fds-semantic-text-danger-on_danger': '--ds-color-danger-contrast-default',
        '--fds-semantic-text-danger-on_danger_subtle': '--ds-color-danger-text-default',
        '--fds-semantic-text-visited-default': '--ds-global-purple-13',
        '--fds-semantic-background-default': '--ds-color-neutral-background-default',
        '--fds-semantic-background-subtle': '--ds-color-neutral-background-subtle',
        '--fds-typography-heading-3xlarge': '[delete]',
        '--fds-typography-heading-2xlarge': '--ds-typography-heading-2xl',
        '--fds-typography-heading-xlarge': '--ds-typography-heading-xl',
        '--fds-typography-heading-large': '--ds-typography-heading-lg',
        '--fds-typography-heading-medium': '--ds-typography-heading-md',
        '--fds-typography-heading-small': '--ds-typography-heading-sm',
        '--fds-typography-heading-xsmall': '--ds-typography-heading-xs',
        '--fds-typography-heading-xxsmall': '--ds-typography-heading-2xs',
        '--fds-typography-ingress-large': '--ds-typography-ingress-lg',
        '--fds-typography-ingress-medium': '--ds-typography-ingress-md',
        '--fds-typography-ingress-small': '--ds-typography-ingress-sm',
        '--fds-typography-ingress-xsmall': '--ds-typography-ingress-xs',
        '--fds-typography-paragraph-large': '--ds-typography-paragraph-lg',
        '--fds-typography-paragraph-medium': '--ds-typography-paragraph-md',
        '--fds-typography-paragraph-small': '--ds-typography-paragraph-sm',
        '--fds-typography-paragraph-xsmall': '--ds-typography-paragraph-xs',
        '--fds-typography-paragraph-short-large': '--ds-typography-paragraph-short-lg',
        '--fds-typography-paragraph-short-medium': '--ds-typography-paragraph-short-md',
        '--fds-typography-paragraph-short-small': '--ds-typography-paragraph-short-sm',
        '--fds-typography-paragraph-short-xsmall': '--ds-typography-paragraph-short-xs',
        '--fds-typography-paragraph-long-large': '--ds-typography-paragraph-long-lg',
        '--fds-typography-paragraph-long-medium': '--ds-typography-paragraph-long-md',
        '--fds-typography-paragraph-long-small': '--ds-typography-paragraph-long-sm',
        '--fds-typography-paragraph-long-xsmall': '--ds-typography-paragraph-long-xs',
        '--fds-typography-label-large': '--ds-typography-label-lg',
        '--fds-typography-label-medium': '--ds-typography-label-md',
        '--fds-typography-label-small': '--ds-typography-label-sm',
        '--fds-typography-label-xsmall': '--ds-typography-label-xs',
        '--fds-typography-error_message-large': '--ds-typography-error_message-lg',
        '--fds-typography-error_message-medium': '--ds-typography-error_message-md',
        '--fds-typography-error_message-small': '--ds-typography-error_message-sm',
        '--fds-typography-error_message-xsmall': '--ds-typography-error_message-xs',
        '--fds-typography-interactive-large': '--ds-typography-paragraph-short-lg',
        '--fds-typography-interactive-medium': '--ds-typography-paragraph-short-md',
        '--fds-typography-interactive-small': '--ds-typography-paragraph-short-sm',
        '--fds-border_radius-interactive': '--ds-border-radius-md',
        '--fds-border_radius-small': '--ds-border-radius-sm',
        '--fds-border_radius-medium': '--ds-border-radius-md',
        '--fds-border_radius-large': '--ds-border-radius-lg',
        '--fds-border_radius-xlarge': '--ds-border-radius-lg',
        '--fds-border_radius-xxlarge': '--ds-border-radius-lg',
        '--fds-border_radius-xxxlarge': '--ds-border-radius-lg',
        '--fds-border_radius-xxxxlarge': '--ds-border-radius-lg',
        '--fds-border_radius-full': '--ds-border-radius-full',
        '--fds-base_spacing': '[delete]',
        '--fds-base_sizing': '[delete]',
        '--fds-border_width-default': '--ds-border-width-default',
        '--fds-border_width-active': '--ds-border-width-highlight',
        '--fds-border_width-tab_focus': '--ds-border-width-highlight',
        '--fds-shadow-xsmall': '--ds-shadow-xs',
        '--fds-shadow-small': '--ds-shadow-sm',
        '--fds-shadow-medium': '--ds-shadow-md',
        '--fds-shadow-large': '--ds-shadow-lg',
        '--fds-shadow-xlarge': '--ds-shadow-xl',
        '--fds-spacing-0': '--ds-spacing-0',
        '--fds-spacing-1': '--ds-spacing-1',
        '--fds-spacing-2': '--ds-spacing-2',
        '--fds-spacing-3': '--ds-spacing-3',
        '--fds-spacing-4': '--ds-spacing-4',
        '--fds-spacing-5': '--ds-spacing-5',
        '--fds-spacing-6': '--ds-spacing-6',
        '--fds-spacing-7': '--ds-spacing-7',
        '--fds-spacing-8': '--ds-spacing-8',
        '--fds-spacing-9': '--ds-spacing-9',
        '--fds-spacing-10': '--ds-spacing-10',
        '--fds-spacing-11': '--ds-spacing-11',
        '--fds-spacing-12': '--ds-spacing-12',
        '--fds-spacing-13': '--ds-spacing-13',
        '--fds-spacing-14': '--ds-spacing-14',
        '--fds-spacing-15': '--ds-spacing-15',
        '--fds-spacing-18': '--ds-spacing-18',
        '--fds-spacing-22': '--ds-spacing-22',
        '--fds-spacing-26': '--ds-spacing-26',
        '--fds-spacing-30': '--ds-spacing-30',
        '--fds-sizing-0': '--ds-sizing-0',
        '--fds-sizing-1': '--ds-sizing-1',
        '--fds-sizing-2': '--ds-sizing-2',
        '--fds-sizing-3': '--ds-sizing-3',
        '--fds-sizing-4': '--ds-sizing-4',
        '--fds-sizing-5': '--ds-sizing-5',
        '--fds-sizing-6': '--ds-sizing-6',
        '--fds-sizing-7': '--ds-sizing-7',
        '--fds-sizing-8': '--ds-sizing-8',
        '--fds-sizing-9': '--ds-sizing-9',
        '--fds-sizing-10': '--ds-sizing-10',
        '--fds-sizing-11': '--ds-sizing-11',
        '--fds-sizing-12': '--ds-sizing-12',
        '--fds-sizing-13': '--ds-sizing-13',
        '--fds-sizing-14': '--ds-sizing-14',
        '--fds-sizing-15': '--ds-sizing-15',
        '--fds-sizing-18': '--ds-sizing-18',
        '--fds-sizing-22': '--ds-sizing-22',
        '--fds-sizing-26': '--ds-sizing-26',
        '--fds-sizing-30': '--ds-sizing-30',
        '--fds-opacity-disabled': '--ds-disabled-opacity',
        '--fds-colors-blue-100': '--ds-global-blue-1',
        '--fds-colors-blue-200': '--ds-global-blue-2',
        '--fds-colors-blue-700': '--ds-global-blue-7',
        '--fds-colors-blue-800': '--ds-global-blue-8',
        '--fds-colors-blue-900': '--ds-global-blue-9',
        '--fds-colors-grey-100': '--ds-color-neutral-1',
        '--fds-colors-grey-200': '--ds-color-neutral-2',
        '--fds-colors-grey-400': '--ds-color-neutral-4',
        '--fds-colors-grey-600': '--ds-color-neutral-6',
        '--fds-colors-grey-700': '--ds-color-neutral-7',
        '--fds-colors-grey-800': '--ds-color-neutral-8',
        '--fds-colors-green-200': '--ds-global-green-2',
        '--fds-colors-green-300': '--ds-global-green-3',
        '--fds-colors-green-700': '--ds-global-green-7',
        '--fds-colors-green-800': '--ds-global-green-8',
        '--fds-colors-green-900': '--ds-global-green-9',
        '--fds-colors-yellow-100': '--ds-global-yellow-1',
        '--fds-colors-yellow-200': '--ds-global-yellow-2',
        '--fds-colors-yellow-300': '--ds-global-yellow-3',
        '--fds-colors-yellow-500': '--ds-global-yellow-5',
        '--fds-colors-blue-400': '--ds-global-blue-4',
        '--fds-colors-grey-300': '--ds-global-grey-3',
        '--fds-colors-orange-600': '--ds-global-orange-6',
        '--fds-colors-orange-700': '--ds-global-orange-7',
        '--fds-colors-orange-800': '--ds-global-orange-8',
        '--fds-colors-red-800': '--ds-global-red-8',
        '--fds-colors-purple-700': '--ds-global-purple-7',
        '--fds-colors-red-100': '--ds-global-red-1',
        '--fds-colors-red-200': '--ds-global-red-2',
        '--fds-colors-red-500': '--ds-global-red-5',
        '--fds-colors-red-600': '--ds-global-red-6',
        '--fds-colors-red-700': '--ds-global-red-7',
        '--fds-brand-alt1-100': '--ds-color-brand1-1',
        '--fds-brand-alt1-200': '--ds-color-brand1-2',
        '--fds-brand-alt1-300': '--ds-color-brand1-3',
        '--fds-brand-alt1-400': '--ds-color-brand1-4',
        '--fds-brand-alt1-500': '--ds-color-brand1-5',
        '--fds-brand-alt1-600': '--ds-color-brand1-6',
        '--fds-brand-alt1-700': '--ds-color-brand1-7',
        '--fds-brand-alt1-800': '--ds-color-brand1-8',
        '--fds-brand-alt1-900': '--ds-color-brand1-9',
        '--fds-brand-alt2-100': '--ds-color-brand2-1',
        '--fds-brand-alt2-200': '--ds-color-brand2-2',
        '--fds-brand-alt2-300': '--ds-color-brand2-3',
        '--fds-brand-alt2-400': '--ds-color-brand2-4',
        '--fds-brand-alt2-500': '--ds-color-brand2-5',
        '--fds-brand-alt2-600': '--ds-color-brand2-6',
        '--fds-brand-alt2-700': '--ds-color-brand2-7',
        '--fds-brand-alt2-800': '--ds-color-brand2-8',
        '--fds-brand-alt2-900': '--ds-color-brand2-9',
        '--fds-brand-alt3-100': '--ds-color-brand3-1',
        '--fds-brand-alt3-200': '--ds-color-brand3-2',
        '--fds-brand-alt3-300': '--ds-color-brand3-3',
        '--fds-brand-alt3-400': '--ds-color-brand3-4',
        '--fds-brand-alt3-500': '--ds-color-brand3-5',
        '--fds-brand-alt3-600': '--ds-color-brand3-6',
        '--fds-brand-alt3-700': '--ds-color-brand3-7',
        '--fds-brand-alt3-800': '--ds-color-brand3-8',
        '--fds-brand-alt3-900': '--ds-color-brand3-9',
      }),
    ],
  });

import type { Config as StyleDictionaryConfig, TransformedToken } from 'style-dictionary/types';
import type { GetStyleDictionaryConfig } from './configs';

export const colorCategories = {
  main: 'main',
  support: 'support',
} as const;
export type ColorCategories = keyof typeof colorCategories;

/**
 * A multi-dimensional theme is a concrete permutation of the possible theme dimensions
 */
export type ThemePermutation = {
  'color-scheme': string;
  'main-color': string;
  'support-color': string;
  semantic: string;
  size: string;
  theme: string;
  typography: string;
};

export type ThemeDimension = keyof ThemePermutation;

export type IsCalculatedToken = (token: TransformedToken, options?: StyleDictionaryConfig) => boolean;

export type GetSdConfigOptions = {
  outPath: string;
  tokensDir: string;
};

export type BuildConfig = {
  /** Optional name of the build config - only used in the console output */
  name?: string;
  /** Style Dictionary configuration creator */
  getConfig: GetStyleDictionaryConfig;
  /** Which theme dimensions to include. `theme` (e.g. digdir/altinn) is always included. */
  dimensions: ThemeDimension[];
  /** Custom options used when creating Style Dictionary configs. If not supplied, the default is used */
  options?: Partial<GetSdConfigOptions>;
  /** Custom build function. If not supplied, the default is used. */
  build?: (sdConfigs: SDConfigForThemePermutation[], options: GetSdConfigOptions) => Promise<void>;
  /** Whether the build config is enabled. @default () => true */
  enabled?: () => boolean;
};

export type SDConfigForThemePermutation = { permutation: ThemePermutation; config: StyleDictionaryConfig };

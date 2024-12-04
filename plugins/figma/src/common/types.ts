export type JsonInput = {
  theme: {
    accent: object;
    neutral: object;
    brand1: object;
    brand2: object;
    brand3: object;
  };
};

export type FigmaModeName = 'theme' | 'theme2' | 'theme3' | 'theme4';
export type ThemeColors = 'accent' | 'neutral' | 'brand1' | 'brand2' | 'brand3';

export enum Messages {
  GetThemes = 'getThemes',
  GetThemesAndRedirect = 'getThemesAndRedirect',
  GetVariables = 'getVariables',
  SetValueForModeError = 'setValueForModeError',
  UpdateVariables = 'updateVariables',
}

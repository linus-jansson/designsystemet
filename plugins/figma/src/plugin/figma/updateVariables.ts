import { hexToRgb, rgbToHex } from '@digdir/designsystemet/color';

import type { ColorIndex, StoreThemes } from '../../common/store';
import type { FigmaModeName, ThemeColors } from '../../common/types';

const updateColors = (
  themes: StoreThemes,
  variable: Variable,
  lightModeId: string,
  darkModeId: string,
  modeCollection: VariableCollection,
  themeCollection: VariableCollection,
  variables: Variable[],
) => {
  const themeName = variable.name.split('/')[0] as FigmaModeName;
  const themeType = variable.name.split('/')[1] as ThemeColors;
  const themeIndex = variable.name.split('/')[2] as ColorIndex;
  if (
    variable.variableCollectionId === modeCollection.id &&
    !variable.name.startsWith('global')
  ) {
    const oldLightHex = rgbToHex(variable.valuesByMode[lightModeId] as RGB);
    const newLightHex = themes.find((theme) => theme.themeId === themeName)
      ?.colors[themeType].light[themeIndex];

    const oldDarkHex = rgbToHex(variable.valuesByMode[darkModeId] as RGB);
    const newDarkHex = themes.find((theme) => theme.themeId === themeName)
      ?.colors[themeType].dark[themeIndex];
    if (newLightHex && oldLightHex !== newLightHex) {
      const lightRGB = hexToRgb(newLightHex, '1');

      if (lightRGB) {
        variable.setValueForMode(lightModeId, lightRGB);
      }
    }
    if (newDarkHex && oldDarkHex !== newDarkHex) {
      const darkRGB = hexToRgb(newDarkHex, '1');
      if (darkRGB) {
        variable.setValueForMode(darkModeId, darkRGB);
      }
    }
  }

  // if (variable.name.startsWith(themeName + '/')) {
  //   const varr = variables.find((variable) =>
  //     variable.name.startsWith('color/' + themeType + '/' + themeIndex),
  //   );

  //   const themeId = themeCollection.modes.find(
  //     (mode) => mode.name === themeName,
  //   );
  //   if (varr && themeId) {
  //     varr.setValueForMode(themeId.modeId, { r: 0, g: 0, b: 0 });

  //     const alias = figma.variables.createVariableAlias(variable);
  //     if (alias) {
  //       varr.setValueForMode(themeId.modeId, alias);
  //     }
  //   }
  // }
};

export const updateVariables = async (themes: StoreThemes) => {
  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  const modeCollection = collections.find((col) => col.name === 'Mode');
  const themeCollection = collections.find((col) => col.name === 'Theme');

  console.log('themes', themes);

  if (modeCollection && themeCollection) {
    const lightModeId: string = modeCollection.modes[0].modeId;
    const darkModeId: string = modeCollection.modes[1].modeId;
    const variables = await figma.variables.getLocalVariablesAsync('COLOR');

    try {
      for (const variable of variables) {
        updateColors(
          themes,
          variable,
          lightModeId,
          darkModeId,
          modeCollection,
          themeCollection,
          variables,
        );
      }
      figma.ui.postMessage({ type: 'updateVariables' });
    } catch (error) {
      console.error(error);
      figma.ui.postMessage({ type: 'setValueForModeError' });
    }
  }
};
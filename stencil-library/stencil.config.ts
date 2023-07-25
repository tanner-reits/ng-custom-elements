import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
};

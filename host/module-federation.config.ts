import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'host',
  remotes: {
    'remote': 'remote@http://localhost:3001/mf-manifest.json',
  },
  exposes: {
    './Store': './src/stores/countersStore.ts'
  },

  dts: {
    generateTypes: true,
  },

  shareStrategy: 'loaded-first',
  shared: {
    react: {
      singleton: true,
      requiredVersion: '^18.3.1',
      eager: true,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: '^18.3.1',
      eager: true,
    },
    'react-router-dom': {
      singleton: true,
      requiredVersion: '^7.13.1',
    },
    zustand: {
      singleton: true,
      requiredVersion: '^5.0.12',
    },
    'use-sync-external-store': {
      singleton: true,
      requiredVersion: '^1.6.0',
    },
  },
});

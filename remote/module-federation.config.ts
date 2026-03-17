import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'remote',
  exposes: {
    '.': './src/components/ProviderComponent.tsx',
    './About': './src/pages/About.tsx',
  },
  remotes: {
    'host': 'host@http://localhost:3000/mf-manifest.json',
  },
  dts: {
    consumeTypes: true,
  },
  shared: {
    react: { singleton: true, requiredVersion: '^18.3.1', eager: true },
    'react-dom': { singleton: true, requiredVersion: '^18.3.1', eager: true },
    'react-router-dom': { singleton: true, requiredVersion: '^7.13.1' },
    zustand: { singleton: true, requiredVersion: '^5.0.12' },
    'use-sync-external-store': { singleton: true, requiredVersion: '^1.6.0' },
  },
});

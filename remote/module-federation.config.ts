import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'remote',
  exposes: {
    '.': './src/components/ProviderComponent.tsx',
    './About': './src/pages/About.tsx'
  },
  dts: {
    consumeTypes: true
  },
  shareStrategy: 'version-first',
  shared: {
    react: { singleton: true, requiredVersion: '^18.3.1', eager: true },
    'react-dom': { singleton: true, requiredVersion: '^18.3.1', eager: true },
    'react-router-dom': { singleton: true, requiredVersion: '^7.13.1' },
    '@happycode-core/counter-store': { singleton: true }
  }
});

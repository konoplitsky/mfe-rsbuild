import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'host',
  remotes: {
    remote: 'remote@http://localhost:3001/mf-manifest.json'
  },
  dts: {
    generateTypes: true
  },
  shareStrategy: 'version-first',
  shared: {
    react: {
      singleton: true,
      requiredVersion: '^18.3.1',
      eager: true
    },
    'react-dom': {
      singleton: true,
      requiredVersion: '^18.3.1',
      eager: true
    },
    'react-router-dom': {
      singleton: true,
      requiredVersion: '^7.13.1'
    },
    '@happycode-core/counter-store': { singleton: true }
  }
});

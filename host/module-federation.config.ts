import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';
import { isDev } from './src/shared/lib/isDev';

export default createModuleFederationConfig({
  name: 'host',
  remotes: {
    remote: 'remote@http://localhost:3001/mf-manifest.json',
    remote2: 'remote2@http://localhost:3002/mf-manifest.json'
  },
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
    '@happycode-core/counter-store': { singleton: true }
  },
  shareStrategy: 'version-first',
  dts: {
    generateTypes: true
  },
  bridge: {
    enableBridgeRouter: true
  }
});

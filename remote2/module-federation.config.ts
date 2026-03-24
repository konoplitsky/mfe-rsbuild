import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'remote2',
  exposes: {
    './Contacts': './src/pages/Contacts.tsx'
  },
  shared: {
    react: { singleton: true, requiredVersion: '^18.3.1', eager: true },
    'react-dom': { singleton: true, requiredVersion: '^18.3.1', eager: true }
  }
});

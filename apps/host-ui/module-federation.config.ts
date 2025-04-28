import { ModuleFederationConfig, SharedLibraryConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'host-ui',
  remotes: ["point_frontend"],
  shared: (libraryName: string, sharedConfig: SharedLibraryConfig) => {
    switch (libraryName) {
      case 'react':
      case 'react-dom':
      case 'react-dom/client':
      case 'react/jsx-dev-runtime':
      case 'react/jsx-runtime':
      case 'react-router-dom':
        return {
          singleton: true,
          eager: true,
          requiredVersion: false,
        };
      default:
        // Ensure other shared libraries are also eagerly loaded
        return {
          ...sharedConfig,
          eager: true
        };
    }
  },
};

export default config;


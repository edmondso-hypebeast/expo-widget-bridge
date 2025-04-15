# expo-widget-bridge

This module acts as a bridge between your Expo application and native iOS widget functionality.

# API documentation

- [Documentation for the latest stable release](https://docs.expo.dev/versions/latest/sdk/widget-bridge/)
- [Documentation for the main branch](https://docs.expo.dev/versions/unversioned/sdk/widget-bridge/)

# Installation in managed Expo projects

For [managed](https://docs.expo.dev/archive/managed-vs-bare/) Expo projects, please follow the installation instructions in the [API documentation for the latest stable release](#api-documentation). If you follow the link and there is no documentation available then this library is not yet usable within managed projects &mdash; it is likely to be included in an upcoming Expo SDK release.

# Installation in bare React Native projects

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

### Add the package to your npm dependencies

```
npm install expo-widget-bridge
```



### Configure for iOS

Run `npx pod-install` after installing the npm package.

# Contributing

Contributions are very welcome! Please refer to guidelines described in the [contributing guide]( https://github.com/expo/expo#contributing).

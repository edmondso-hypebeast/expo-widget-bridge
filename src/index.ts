// Reexport the native module. On web, it will be resolved to ExpoWidgetBridgeModule.web.ts
// and on native platforms to ExpoWidgetBridgeModule.ts
export { default } from './ExpoWidgetBridgeModule';
export { default as ExpoWidgetBridgeView } from './ExpoWidgetBridgeView';
export * from  './ExpoWidgetBridge.types';

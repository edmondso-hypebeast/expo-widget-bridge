import { NativeModule, requireNativeModule } from 'expo';

import { ExpoWidgetBridgeModuleEvents } from './ExpoWidgetBridge.types';

declare class ExpoWidgetBridgeModule extends NativeModule<ExpoWidgetBridgeModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoWidgetBridgeModule>('ExpoWidgetBridge');

import { registerWebModule, NativeModule } from 'expo';

import { ExpoWidgetBridgeModuleEvents } from './ExpoWidgetBridge.types';

class ExpoWidgetBridgeModule extends NativeModule<ExpoWidgetBridgeModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoWidgetBridgeModule);

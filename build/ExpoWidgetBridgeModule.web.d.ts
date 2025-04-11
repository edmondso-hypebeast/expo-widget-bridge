import { NativeModule } from 'expo';
import { ExpoWidgetBridgeModuleEvents } from './ExpoWidgetBridge.types';
declare class ExpoWidgetBridgeModule extends NativeModule<ExpoWidgetBridgeModuleEvents> {
    PI: number;
    setValueAsync(value: string): Promise<void>;
    hello(): string;
}
declare const _default: typeof ExpoWidgetBridgeModule;
export default _default;
//# sourceMappingURL=ExpoWidgetBridgeModule.web.d.ts.map
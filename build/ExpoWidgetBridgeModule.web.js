import { registerWebModule, NativeModule } from 'expo';
class ExpoWidgetBridgeModule extends NativeModule {
    PI = Math.PI;
    async setValueAsync(value) {
        this.emit('onChange', { value });
    }
    hello() {
        return 'Hello world! 👋';
    }
}
export default registerWebModule(ExpoWidgetBridgeModule);
//# sourceMappingURL=ExpoWidgetBridgeModule.web.js.map
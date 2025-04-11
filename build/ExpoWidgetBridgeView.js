import { requireNativeView } from 'expo';
import * as React from 'react';
const NativeView = requireNativeView('ExpoWidgetBridge');
export default function ExpoWidgetBridgeView(props) {
    return <NativeView {...props}/>;
}
//# sourceMappingURL=ExpoWidgetBridgeView.js.map
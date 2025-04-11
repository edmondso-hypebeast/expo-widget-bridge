import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoWidgetBridgeViewProps } from './ExpoWidgetBridge.types';

const NativeView: React.ComponentType<ExpoWidgetBridgeViewProps> =
  requireNativeView('ExpoWidgetBridge');

export default function ExpoWidgetBridgeView(props: ExpoWidgetBridgeViewProps) {
  return <NativeView {...props} />;
}

import * as React from 'react';

import { ExpoWidgetBridgeViewProps } from './ExpoWidgetBridge.types';

export default function ExpoWidgetBridgeView(props: ExpoWidgetBridgeViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}

import ExpoWidgetBridge from "./ExpoWidgetBridgeModule";

export class UserDefaults {
  private suiteName: string;

  constructor(suiteName?: string) {
    this.suiteName = suiteName || "";
  }

  async get(forKey: string) {
    const result = await ExpoWidgetBridge.get(forKey, this.suiteName);
    return result === null ? undefined : result;
  }

  async set(forKey: string, value: any) {
    if (value === undefined || value === null) {
      return await this.remove(forKey);
    }
    switch (typeof value) {
      case "string":
        return await ExpoWidgetBridge.setString(forKey, value, this.suiteName);
      case "number":
        return await ExpoWidgetBridge.setNumber(forKey, value, this.suiteName);
      case "boolean":
        return await ExpoWidgetBridge.setBool(forKey, value, this.suiteName);
      case "object":
        if (Array.isArray(value)) {
          return await ExpoWidgetBridge.setArray(forKey, value, this.suiteName);
        }
        return await ExpoWidgetBridge.setObject(forKey, value, this.suiteName);
    }
  }

  async remove(forKey: string) {
    return await ExpoWidgetBridge.remove(forKey, this.suiteName);
  }

  async getAll() {
    return await ExpoWidgetBridge.getAll(this.suiteName);
  }

  async removeAll() {
    return await ExpoWidgetBridge.removeAll(this.suiteName);
  }
}

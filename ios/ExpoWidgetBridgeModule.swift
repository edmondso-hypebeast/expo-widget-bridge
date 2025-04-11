import ExpoModulesCore

public class ExpoWidgetBridgeModule: Module {
    
    public func definition() -> ModuleDefinition {
        Name("ExpoWidgetBridge")

        AsyncFunction("setString") { (forKey: String, value: String, suiteName: String) in
            let userDefaults = UserDefaults(suiteName: suiteName)
            userDefaults?.set(value, forKey: forKey)
        }
        
        AsyncFunction("setString") { (forKey: String, value: String, suiteName: String) in
            let userDefaults = UserDefaults(suiteName: suiteName)
            userDefaults?.set(value, forKey: forKey)
        }
        
        AsyncFunction("setBool") { (forKey: String, value: Bool, suiteName: String) in
            let userDefaults = UserDefaults(suiteName: suiteName)
            userDefaults?.set(value, forKey: forKey)
        }
        
        AsyncFunction("setArray") { (forKey: String, value: [Any], suiteName: String) in
            let userDefaults = UserDefaults(suiteName: suiteName)
            userDefaults?.set(value, forKey: forKey)
        }
        
        AsyncFunction("setObject") { (forKey: String, value: [String: Any], suiteName: String) in
            let userDefaults = UserDefaults(suiteName: suiteName)
            userDefaults?.set(value, forKey: forKey)
        }
        
        AsyncFunction("setNumber") { (forKey: String, value: Double, suiteName: String) in
            let userDefaults = UserDefaults(suiteName: suiteName)
            userDefaults?.set(value, forKey: forKey)
        }
        
        AsyncFunction("get") { (forKey: String, suiteName: String) -> Any? in
            let userDefaults = UserDefaults(suiteName: suiteName)
            return userDefaults?.object(forKey: forKey)
        }
        
        AsyncFunction("getAll") { (suiteName: String) -> [String : Any] in
            let userDefaults = UserDefaults(suiteName: suiteName)
            return userDefaults?.dictionaryRepresentation() ??  [:]
        }
        
        AsyncFunction("remove") { (forKey: String, suiteName: String) in
            let userDefaults = UserDefaults(suiteName: suiteName)
            userDefaults?.removeObject(forKey: forKey)
        }
        
        AsyncFunction("removeAll") { (suiteName: String) in
            let userDefaults = UserDefaults(suiteName: suiteName)
            userDefaults?.dictionaryRepresentation().forEach { (key: String, value: Any) in
                userDefaults?.removeObject(forKey: key)
            }
        }
        
    }
}
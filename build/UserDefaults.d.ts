export declare class UserDefaults {
    private suiteName;
    constructor(suiteName?: string);
    get(forKey: string): Promise<any>;
    set(forKey: string, value: any): Promise<any>;
    remove(forKey: string): Promise<any>;
    getAll(): Promise<any>;
    removeAll(): Promise<any>;
}
//# sourceMappingURL=UserDefaults.d.ts.map
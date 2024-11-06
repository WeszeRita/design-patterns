export function setDefaultValue(defaultValue: string): (target: any, key: string) => void {
  return function (target: any, key: string): void {
    let value = defaultValue;

    Object.defineProperty(target, key, {
      get: function(): string {
        return value;
      },
      set: function(newValue: string): void {
        value = newValue !== undefined ? newValue : defaultValue;
      },
      enumerable: true,
      configurable: true,
    });
  };
}

export function printWithParameter(message: string): (target: Object, propertyName: string, descriptor: PropertyDescriptor) => PropertyDescriptor {
  return function (target: Object, propertyName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]): PropertyDescriptor {
      const result = originalMethod.apply(this, args);
      message = message ? message : `${ propertyName }`;
      console.log(message, result);
      return result;
    }
    return descriptor;
  }
}

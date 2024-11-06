export function classDecorator(args: any): (target: any) => void {
  console.log('args', args);

  return function(target: any): void {
    console.log('target', target);
    console.log('type of target', typeof target);

    Object.defineProperty(target.prototype, 'value1', {
      value: args.value1,
      writable: false
    });

    Object.defineProperty(target.prototype, 'value2', {
      value: args.value2,
      writable: false
    });
  };
}



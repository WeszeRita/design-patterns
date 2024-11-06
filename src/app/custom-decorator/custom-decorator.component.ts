import { Component, OnInit } from '@angular/core';
import { printLog } from './method-decorators/print-log.decorator';
import { printWithParameter } from './method-decorators/print-with-parameter.decorator';
import { setDefaultValue } from './property.decorator';
import { classDecorator } from './class.decorator';

@classDecorator({
  value1: 100,
  value2: 200,
})
@Component({
  selector: 'app-custom-decorator',
  templateUrl: './custom-decorator.component.html',
})
export class CustomDecoratorComponent implements OnInit {
  @setDefaultValue('John')
  name: string;

  ngOnInit(): void {
    console.log((this as any).value1);
    console.log((this as any).value2);

    this.getRandomValue();
    this.logMessage('Asher');
    console.log('default value:', this.name);
  }

  @printLog
  getRandomValue(): number {
    return Math.floor(Math.random() * (10 - 1) + 1);
  }

  @printWithParameter('Hi')
  logMessage(name:string): string {
    return name;
  }
}





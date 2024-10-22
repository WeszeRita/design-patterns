import { Component, Injector, OnInit } from '@angular/core';
import { BaseClassForInjectorComponent } from '../base-class-for-injector/base-class-for-injector.component';
import { LoggerService } from '../../../../shared/logger.service';

@Component({
  selector: 'app-my-class-for-injector',
  templateUrl: './my-class-for-injector.component.html',
})
export class MyClassForInjectorComponent extends BaseClassForInjectorComponent implements OnInit {
  constructor(protected injector: Injector) {
    super(injector);
  }

ngOnInit(): void {
  this.injector.get(LoggerService).log('David');
}}

import { Component, Inject, OnInit } from '@angular/core';
import { BaseClassForInjectMethodComponent } from '../base-class-for-inject-method/base-class-for-inject-method.component';
import { LoggerService } from '../../../../shared/logger.service';

@Component({
  selector: 'app-my-class-for-inject-method',
  templateUrl: './my-class-for-inject-method.component.html',
})
export class MyClassForInjectMethodComponent extends BaseClassForInjectMethodComponent implements OnInit {
  constructor(
    @Inject('loggerServiceForInjectMethod') protected loggerService: LoggerService,
    @Inject('loggerServiceConfig') protected config: string) {
    super(loggerService, config);
  }

  ngOnInit(): void {
    this.loggerService.log(this.config);
  }
}

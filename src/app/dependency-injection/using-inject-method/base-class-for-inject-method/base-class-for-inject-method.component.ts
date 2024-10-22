import { Component, Inject, OnInit } from '@angular/core';
import { LoggerService } from '../../../../shared/logger.service';

@Component({
  selector: 'app-base-class-for-inject-method',
  templateUrl: './base-class-for-inject-method.component.html',
})
export class BaseClassForInjectMethodComponent implements OnInit {
  constructor(
    @Inject('loggerServiceForInjectMethod') protected loggerService: LoggerService,
    @Inject('loggerServiceConfig') protected config: string) {
  }

  ngOnInit(): void {
    this.loggerService.log(this.config);
  }
}

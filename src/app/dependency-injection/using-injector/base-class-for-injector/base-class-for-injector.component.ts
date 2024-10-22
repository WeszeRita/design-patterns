import { Component, Injector, OnInit } from '@angular/core';
import { LoggerService } from '../../../../shared/logger.service';

@Component({
  selector: 'app-base-class-for-injector',
  templateUrl: './base-class-for-injector.component.html',
})
export class BaseClassForInjectorComponent implements OnInit {
  constructor(protected injector: Injector) {}

  ngOnInit(): void {
    let logger: LoggerService = this.injector.get(LoggerService);
    logger.log('Charles');
  }
}

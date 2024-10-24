import { Component, Injector, OnInit } from '@angular/core';
import { LoggerService } from '../../../../shared/logger.service';

@Component({
  selector: 'app-base-class-for-injector',
  templateUrl: './base-class-for-injector.component.html',
})
export class BaseClassForInjectorComponent implements OnInit {
  protected readonly logger: LoggerService;

  constructor(private readonly injector: Injector) {
    this.logger = injector.get(LoggerService);
  }

  ngOnInit(): void {
    this.logger.log('Charles');
  }
}

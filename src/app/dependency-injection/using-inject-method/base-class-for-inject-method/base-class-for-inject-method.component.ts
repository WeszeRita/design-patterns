import { Component, inject, OnInit } from '@angular/core';
import { LoggerService } from '../../../../shared/logger.service';
import { LOGGER_CONFIG_TOKEN, LOGGER_TOKEN } from '../../../app.module';

@Component({
  selector: 'app-base-class-for-inject-method',
  templateUrl: './base-class-for-inject-method.component.html',
})
export class BaseClassForInjectMethodComponent implements OnInit {
  readonly logger: LoggerService = inject(LOGGER_TOKEN);
  readonly config: string = inject(LOGGER_CONFIG_TOKEN);

  ngOnInit(): void {
    this.logger.log(this.config);
  }
}

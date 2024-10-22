import { Component, OnInit } from '@angular/core';
import { BaseClassComponent } from '../base-class/base-class.component';
import { LoggerService } from '../../../../shared/logger.service';

@Component({
  selector: 'app-my-class',
  templateUrl: './my-class.component.html',
})
export class MyClassComponent extends BaseClassComponent implements OnInit {
  constructor(protected loggerService: LoggerService) {
    super(loggerService);
  }

  ngOnInit(): void {
    this.loggerService.log(`Bruce`);
  }
}

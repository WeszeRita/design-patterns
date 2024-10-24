import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../../../shared/logger.service';

@Component({
  selector: 'app-base-class',
  templateUrl: './base-class.component.html',
})
export class BaseClassComponent implements OnInit {
  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.loggerService.log('Adam');
  }
}

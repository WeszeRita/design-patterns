import { Component, OnInit } from '@angular/core';
import { BaseClassComponent } from '../base-class/base-class.component';

@Component({
  selector: 'app-my-class',
  templateUrl: './my-class.component.html',
})
export class MyClassComponent extends BaseClassComponent implements OnInit {
  ngOnInit(): void {
    super.ngOnInit();
  }
}

import { Component, OnInit } from '@angular/core';
import { BaseClassForInjectMethodComponent } from '../base-class-for-inject-method/base-class-for-inject-method.component';

@Component({
  selector: 'app-my-class-for-inject-method',
  templateUrl: './my-class-for-inject-method.component.html',
})
export class MyClassForInjectMethodComponent extends BaseClassForInjectMethodComponent implements OnInit {
  ngOnInit(): void {
    super.ngOnInit();
  }
}

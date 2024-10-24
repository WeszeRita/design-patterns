import { Component, OnInit } from '@angular/core';
import { BaseClassForInjectorComponent } from '../base-class-for-injector/base-class-for-injector.component';

@Component({
  selector: 'app-my-class-for-injector',
  templateUrl: './my-class-for-injector.component.html',
})
export class MyClassForInjectorComponent extends BaseClassForInjectorComponent implements OnInit {
ngOnInit(): void {
  super.ngOnInit();
}
}

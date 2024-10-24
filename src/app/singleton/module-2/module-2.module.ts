import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component2Component } from './component-2/component-2.component';
import { DataService } from '../../../shared/data.service';



@NgModule({
  declarations: [
    Component2Component,
  ],
  exports: [
    Component2Component,
  ],
  providers: [
    DataService,
  ],
  imports: [
    CommonModule,
  ],
})
export class Module2Module { }

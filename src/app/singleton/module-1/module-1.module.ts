import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component-1/component-1.component';
import { DataService } from '../../../shared/data.service';



@NgModule({
  declarations: [
    Component1Component,
  ],
  exports: [
    Component1Component,
  ],
  providers: [
    DataService,
  ],
  imports: [
    CommonModule,
  ],
})
export class Module1Module { }

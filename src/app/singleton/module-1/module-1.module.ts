import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component-1/component-1.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    Component1Component,
  ],
  exports: [
    Component1Component,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class Module1Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component-1/component-1.component';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Component1Component }]),
    SharedModule,
  ],
  declarations: [Component1Component],
  exports: [Component1Component],
})
export class Module1Module { }

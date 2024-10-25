import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component2Component } from './component-2/component-2.component';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Component2Component }]),
    SharedModule,
  ],
  declarations: [Component2Component],
  exports: [Component2Component],
})
export class Module2Module { }

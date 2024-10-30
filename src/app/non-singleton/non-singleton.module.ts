import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { StringDataService } from '../../shared/string-data.service';
import { NON_SINGLETON_TOKEN_A, NON_SINGLETON_TOKEN_B } from '../../shared/constants/injection-token';

@NgModule({
  imports: [CommonModule],
  declarations: [ComponentAComponent, ComponentBComponent],
  providers: [
    { provide: NON_SINGLETON_TOKEN_A, useClass: StringDataService },
    { provide: NON_SINGLETON_TOKEN_B, useClass: StringDataService },
  ],
  exports: [
    ComponentAComponent,
    ComponentBComponent,
  ],
})
export class NonSingletonModule {}

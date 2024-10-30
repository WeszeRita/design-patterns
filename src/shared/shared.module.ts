import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';

@NgModule({
  imports: [CommonModule],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {     // static method - belongs to the class itself, not any instances
    return {
      ngModule: SharedModule,
      providers: [DataService],
    }
  }
}

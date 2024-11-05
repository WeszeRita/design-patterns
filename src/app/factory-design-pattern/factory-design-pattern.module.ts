import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormEffects } from './store/form.effects';
import { formReducers } from './store/form.reducers';
import { formFeatureKey } from './store/form.selectors';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot({
      [formFeatureKey]: formReducers,
    }),
    EffectsModule.forRoot([FormEffects]),
  ],
  declarations: [FormComponent],
  exports: [FormComponent],
})
export class FactoryDesignPatternModule {
}

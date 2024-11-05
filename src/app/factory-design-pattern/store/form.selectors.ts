import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IFormState } from './form.reducers';

export const formFeatureKey = 'form';

export namespace FormSelector {
  const selectFormFeature = createFeatureSelector<IFormState>(formFeatureKey);

  export const selectForm = createSelector(
    selectFormFeature,
    (state: IFormState) => state,
  );
}

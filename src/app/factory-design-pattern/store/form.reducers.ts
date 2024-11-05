import { createReducer, on } from '@ngrx/store';
import { FormActions } from './form.actions';

export interface IFormState {
  title: string,
  description: string,
  status: string,
}

export const initialState = {
  title: undefined,
  description: undefined,
  status: undefined,
};

export const formReducers = createReducer(
  initialState,
  on(FormActions.formEdited, (state, action) => {
    return {
      ...state,
      payloadType: action.value,
    };
  }),
);

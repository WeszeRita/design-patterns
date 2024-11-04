import { createAction, props } from '@ngrx/store';
import { PayloadType } from '../payload.type';

export const enum FormAction {
  editForm = '[Form] Edit form',
  formEdited = '[Form] Form edited',
  errorForm = '[Form] Edit form error',
}

export namespace FormActions {
  export const editForm = createAction(FormAction.editForm, props<{ payloadType: PayloadType; value: string }>());
  export const formEdited = createAction(FormAction.formEdited, props<{ payloadType: PayloadType; value: string }>());
  export const errorEditForm = createAction(FormAction.errorForm, props<{ error: Error }>());
}

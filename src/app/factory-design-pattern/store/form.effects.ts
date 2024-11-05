import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, Observable, of, switchMap } from 'rxjs';
import { FormActions } from './form.actions';
import { FormService } from '../services/form.service';
import { PayloadType } from '../payload.type';
import { Action } from '@ngrx/store';

@Injectable()
export class FormEffects {
  editTitle$ = this.editForm('title');

  editDescription$ = this.editForm('description');

  editStatus$ = this.editForm('status');

  constructor(private actions$: Actions, private formService: FormService) {}

  private editForm(type: PayloadType) {
    return createEffect((): Observable<Action> => {
      return this.actions$
        .pipe(
          ofType(FormActions.editForm),
          filter(({ payloadType }) => payloadType === type),
          switchMap(({ payloadType, value }) => {
            return this.formService.editForm(payloadType, value)
              .pipe(
                map((value) => FormActions.formEdited({ value: { [type]: value[type] } })),
                catchError((error) => of(FormActions.errorEditForm({ error }))),
              );
          }),
        );
    });
  }
}

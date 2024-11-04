import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { Action } from '@ngrx/store';
import { FormActions } from './form.actions';
import { FormService } from '../services/form.service';

@Injectable()
export class FormEffects {
  editForm$ = createEffect((): Observable<Action> => {
    return this.actions$
      .pipe(
        ofType(FormActions.editForm),
        switchMap(({ payloadType, value }) => {
          return this.formService.editForm(payloadType, value)
            .pipe(
              map(({ payloadType, value }) => FormActions.formEdited({ payloadType, value })),
              catchError((error) => of(FormActions.errorEditForm({ error }))),
            );
        }),
      );
  });

  constructor(private actions$: Actions, private formService: FormService) {}
}

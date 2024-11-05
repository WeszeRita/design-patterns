import { Injectable } from '@angular/core';
import { delay, Observable, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PayloadType } from '../payload.type';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}

  editForm(payloadType: PayloadType, value: string): Observable<any> {
    return of(null)
      .pipe(
        delay(3000),
        switchMap(() => this.http.patch('http://localhost:3000/form/1', { [payloadType]: value }))
      );
  }
}

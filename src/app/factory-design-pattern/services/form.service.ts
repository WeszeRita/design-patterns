import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PayloadFactoryService } from './payload-factory.service';
import { PayloadType } from '../payload.type';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient, private payloadFactory: PayloadFactoryService) {}

  editForm(payloadType: PayloadType, value: string): Observable<any> {
    const payload = this.payloadFactory.createPayload(payloadType, value);
    return this.http.patch('http://localhost:3000/form/1', payload).pipe(delay(1000));
  }
}

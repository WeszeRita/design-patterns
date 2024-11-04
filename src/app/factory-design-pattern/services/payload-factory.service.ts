import { Injectable } from '@angular/core';
import { PayloadType } from '../payload.type';
import { IForm } from '../form.interface';

@Injectable({
  providedIn: 'root'
})
export class PayloadFactoryService {
  createPayload(type: PayloadType, value: string): Partial<IForm> {
    switch (type) {
      case 'title':
        return {
          title: value,
        };
      case 'description':
        return {
          description: value,
        };
      case 'status':
        return {
          status: value,
        };
    }
  }
}

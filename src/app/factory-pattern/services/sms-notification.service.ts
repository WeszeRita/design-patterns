import { Injectable } from '@angular/core';
import { INotification } from '../interfaces/notification.interface';

@Injectable({
  providedIn: 'root',
})
export class SmsNotificationService implements INotification {
  sendNotification(): void {
    console.log('Sms notification');
  }
}

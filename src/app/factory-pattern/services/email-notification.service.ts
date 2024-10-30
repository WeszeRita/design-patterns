import { Injectable } from '@angular/core';
import { INotification } from '../interfaces/notification.interface';

@Injectable({
  providedIn: 'root',
})
export class EmailNotificationService implements INotification {
  sendNotification(): void {
    console.log('Email notification');
  }
}

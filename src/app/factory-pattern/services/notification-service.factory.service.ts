import { Injectable } from '@angular/core';
import { EmailNotificationService } from './email-notification.service';
import { SmsNotificationService } from './sms-notification.service';
import { INotification } from '../interfaces/notification.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceFactoryService {
  constructor(private emailService: EmailNotificationService, private smsService: SmsNotificationService) {}

  getNotificationService(type: string): INotification {
    switch (type) {
      case 'email':
        return this.emailService;
      case 'sms':
        return this.smsService;
      default:
        throw new Error('Invalid notification type')
    }
  }
}

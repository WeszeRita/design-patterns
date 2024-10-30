import { Component } from '@angular/core';
import { NotificationServiceFactoryService } from '../services/notification-service.factory.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  constructor(private notificationServiceFactory: NotificationServiceFactoryService) {}

  sendNotification(type: string): void {
    const notificationService = this.notificationServiceFactory.getNotificationService(type);
    notificationService.sendNotification();
  }
}

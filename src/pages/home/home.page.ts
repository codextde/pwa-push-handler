import { Component, OnInit } from '@angular/core';
import { Dialog } from '@capacitor/dialog';
import {
  PushNotificationSchema,
  PushNotifications,
  Token,
  ActionPerformed,
} from '@capacitor/push-notifications';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  services = [
    { name: 'Smartbell PWA', website: 'https://codext.de' },
    { name: 'Smartbell PWA', website: 'https://codext.de' },
  ];
  constructor() {}

  async addService() {
    const { value, cancelled } = await Dialog.prompt({
      title: 'Service',
      message: `Please add the ID from the Website:`,
    });

    console.log('Name:', value);
    console.log('Cancelled:', cancelled);
  }

  ngOnInit() {
    console.log('Initializing HomePage');

    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration', async (token: Token) => {
      // alert('Push registration success, token: ' + token.value);
      await Toast.show({
        text: 'Push registration success',
      });
    });

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError', async (error: any) => {
      // alert('Error on registration: ' + JSON.stringify(error));
      await Toast.show({
        text: 'Error on Push registration',
      });
    });

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotificationSchema) => {
        // alert('Push received: ' + JSON.stringify(notification));
        await Toast.show({
          text: 'Push received: ' + JSON.stringify(notification),
        });
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        // alert('Push action performed: ' + JSON.stringify(notification));
        // Push Action
      }
    );
  }
}

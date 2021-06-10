import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-pwa-list',
  templateUrl: './pwa-list.page.html',
  styleUrls: ['./pwa-list.page.scss'],
})
export class PwaListPage implements OnInit {
  pwas = [
    {
      name: 'NASA',
      url: 'https://code.nasa.gov/',
      image:
        'https://pwa.bar/wp-content/uploads/sites/5/2018/07/NASA-PWA-1-640x640.png',
      description:
        'NASAs PWA is five times faster on mobile devices than the previous mobile website. Discovering space and the current projects with the PWA is a lot of fun!',
    },

    {
      name: 'Instagram',
      url: 'https://www.instagram.com/',
      image:
        'https://allfacebook.de/wp-content/uploads/2019/10/46384880_1953909768033357_783365729431846912_n.jpg',
      description:
        'The progressive web app Instagram Lite enables uploading and publishing of images. Faster than the native app.',
    },

    {
      name: 'Telegram',
      url: 'https://web.telegram.org/',
      image:
        'https://www.messengerpeople.com/wp-content/uploads/2019/09/messenger-overview-telegram.png',
      description:
        'Telegram is a popular mobile chat service. The Progressive Web App has an open API that makes the PWA faster and more responsive, for both Android and iOS devices.',
    },

    {
      name: 'Tinder',
      url: 'https://www.gotinder.com/',
      image:
        'https://i.computer-bild.de/imgs/1/3/6/4/2/4/6/3/Tinder-mit-Video-Funktion-658x370-5c563fe4418b3341.jpg',
      description:
        'With the new PWA, Tinder reduced loading times from 11.91 seconds to 4.69 seconds. The PWA is 90% smaller than Tinders native Android app.',
    },
    {
      name: 'Twitter',
      url: 'https://mobile.twitter.com/',
      image:
        'https://privacyinternational.org/sites/default/files/styles/teaser_large_x1/public/2020-07/twitter.jpg?itok=SSUvV1ef',
      description:
        '75% more tweets were sent via the PWA than before via the native app. The bounce rate has been reduced by 20%. Web push notifications appear even when the PWA is closed.',
    },
  ];

  constructor() {}

  ngOnInit() {}

  async openPWA(url) {
    await Browser.open({ url });
  }
}

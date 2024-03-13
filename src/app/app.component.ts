import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'PDV', url: '/pdv', icon: 'cube' },
    { title: 'C. Receber', url: '/contasreceber', icon: 'bag-add' },
    { title: 'C. Pagar', url: '/contaspagar', icon: 'bag-remove' },
    { title: 'Fluxo Caixa', url: '/fluxocaixa', icon: 'file-tray-full' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

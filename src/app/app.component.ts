import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Pessoas', url: '/pessoas', icon: 'person' },
    { title: 'Eventos', url: '/eventos', icon: 'school' },
    { title: 'Agenda', url: '/agenda', icon: 'calendar' },
    { title: 'C. Receber', url: '/contasreceber', icon: 'bag-add' },
    { title: 'C. Pagar', url: '/contaspagar', icon: 'bag-remove' },
    { title: 'Fluxo Caixa', url: '/fluxocaixa', icon: 'file-tray-full' },
    { title: 'Flashcards', url: '/flashcards', icon: 'file-tray-full' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  showMenu: any;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showMenu = !event.url.includes('/login');
      }
    });
  }
}

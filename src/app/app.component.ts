import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Perfil', url: '/perfil', icon: 'person-circle' },
    { title: 'bInicioSesion', url: '/iniciar-sesion', icon: 'none' },
  ];
  constructor() {}
}

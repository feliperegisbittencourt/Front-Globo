import { Component, OnChanges, ViewChild } from '@angular/core';
import { EntradaDadosService } from './entrada-dados.service';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Front-TV-Globo';

  @ViewChild('sidenav', {static:true}) public sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService) {
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

}

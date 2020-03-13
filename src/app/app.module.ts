import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { faTrashAlt, faCog, faUserAlt, faShieldAlt, faHome, faPowerOff, faBars, faSlidersH, faMapPin, faSearch, faEllipsisH, faDotCircle, faTv, faDesktop, faHistory, faDownload, faPen, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { TabelaComponent } from './tabela/tabela.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonsComponent } from './buttons/buttons.component';
//import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TabelaComponent,
    FooterComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faTrashAlt, faCog, faUserAlt, faShieldAlt, faHome, faPowerOff, faSlidersH, faMapPin, faSearch, faEllipsisH, faDotCircle, faDesktop, faHistory, faDownload, faPencilAlt);
  }
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NavbarComponent} from './navbar/navbar.component';
import {SubNavbarComponent} from './sub-navbar/sub-navbar.component';
import {SearchbarComponent} from './searchbar/searchbar.component';
import {FooterComponent} from './footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from '../../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ChooseQuantityComponent } from './choose-quantity/choose-quantity.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  declarations: [
    NavbarComponent,
    SubNavbarComponent,
    SearchbarComponent,
    FooterComponent,
    ChooseQuantityComponent],
  exports: [
    NavbarComponent,
    SubNavbarComponent,
    SearchbarComponent,
    FooterComponent,
     ChooseQuantityComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    TabsModule
  ]
})
export class SharedComponentsModule {
}

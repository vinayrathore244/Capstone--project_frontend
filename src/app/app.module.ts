import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ClipboardModule} from '@angular/cdk/clipboard';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductsModule} from './products/products.module';
import {SharedComponentsModule} from './_shared/_components/shared-components.module';
import {AuthModule} from './auth/auth.module';
import {UiElementsModule} from './_shared/_modules/ui-elements.module';
import {UsersModule} from './users/users.module';
import {HttpAuthInterceptor} from './_shared/_interceptors/http-auth.interceptor';
import {InventoryManagerModule} from './inventorymanager/inventory-manager.module';
import {OrderModule} from './order/order.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiElementsModule,
    SharedComponentsModule,
    AppRoutingModule,
    AuthModule,
    ProductsModule,
    UsersModule,
    FormsModule,
    OrderModule,
    InventoryManagerModule,
    ClipboardModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxPaginationModule,
    NgbModule,
    ToastrModule.forRoot(),
    TabsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptor,
      multi: true
    },

  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}

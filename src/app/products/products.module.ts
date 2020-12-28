import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';
import {ProductComponent} from './product/product.component';
import {ProductItemThumbnailComponent} from './product-item-thumbnail/product-item-thumbnail.component';
import {ProductListHeaderComponent} from './product-list-header/product-list-header.component';
import {SharedComponentsModule} from '../_shared/_components/shared-components.module';

import {UiElementsModule} from '../_shared/_modules/ui-elements.module';
import { AddToCartContainerComponent } from './product/add-to-cart-container/add-to-cart-container.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    declarations: [ProductsComponent, ProductComponent, ProductItemThumbnailComponent, ProductListHeaderComponent,  AddToCartContainerComponent],
  exports: [
    ProductItemThumbnailComponent,
    ProductListHeaderComponent,
    NgxPaginationModule,

  ],
  imports: [
    SharedComponentsModule,
    CommonModule,
    ProductsRoutingModule,
    UiElementsModule,
    NgxPaginationModule,
    FontAwesomeModule,
    NgbModule
  ]
})
export class ProductsModule {
}

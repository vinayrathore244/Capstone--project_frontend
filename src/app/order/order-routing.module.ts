import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoggedinUserGuard} from '../_shared/_guards/loggedin-user.guard';
import {CreateOrderComponent} from './create-order/create-order.component';
import {HasCartItemsGuard} from '../_shared/_guards/has-cart-items.guard';


export const orderRoutes: Routes = [
    {
      path: 'orders',
      children: [
        {path: 'create', component: CreateOrderComponent, canActivate: [HasCartItemsGuard]},
        {path: '', redirectTo: 'create', pathMatch: 'full'}
      ],
      canActivate: [LoggedinUserGuard]
    }
  ]
;



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(orderRoutes)],
})
export class OrderRoutingModule {
}

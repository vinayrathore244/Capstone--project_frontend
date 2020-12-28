import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UserPanelComponent} from './user-panel.component';
import {LoggedinUserGuard} from '../_shared/_guards/loggedin-user.guard';
import {AddAddressComponent} from './addresses/add-address/add-address.component';


export const userRoutes = [
  {
    path: 'user',
    component: UserPanelComponent, children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'addresses/add', component: AddAddressComponent},
    ],
    canActivate: [LoggedinUserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}

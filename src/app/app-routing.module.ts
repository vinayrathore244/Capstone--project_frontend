import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


export const approutes: Routes = [
    {path: '', redirectTo: 'products', pathMatch: 'full'},
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

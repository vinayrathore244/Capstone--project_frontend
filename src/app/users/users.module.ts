import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';

import {UiElementsModule} from '../_shared/_modules/ui-elements.module';
import {SharedComponentsModule} from '../_shared/_components/shared-components.module';

import {UserPanelComponent} from './user-panel.component';

import { AddAddressComponent } from './addresses/add-address/add-address.component';
import { ChooseAddressComponent } from './addresses/choose-address/choose-address.component';



@NgModule({
    declarations: [UserPanelComponent,  AddAddressComponent, ChooseAddressComponent],
    exports: [
        AddAddressComponent
    ],
    imports: [
        CommonModule,
        UiElementsModule,
        SharedComponentsModule,
        UsersRoutingModule,
    ]
})
export class UsersModule { }

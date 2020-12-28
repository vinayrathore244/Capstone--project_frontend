import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAndRegisterComponent } from './login-and-register/login-and-register.component';
import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login-and-register/login/login.component';
import { RegisterComponent } from './login-and-register/register/register.component';
import {SharedComponentsModule} from '../_shared/_components/shared-components.module';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [LoginAndRegisterComponent, LoginComponent, RegisterComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        SharedComponentsModule,
        NgbNavModule
    ]
})
export class AuthModule { }

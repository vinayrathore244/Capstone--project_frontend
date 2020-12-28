import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import {UiElementsModule} from '../_shared/_modules/ui-elements.module';



@NgModule({
    declarations: [MakePaymentComponent],
    exports: [
        MakePaymentComponent
    ],
  imports: [
    CommonModule,
    UiElementsModule,
  ]
})
export class PaymentModule { }

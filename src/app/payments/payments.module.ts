import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { UpiPaymentComponent } from './upi-payment/upi-payment.component';


@NgModule({
  declarations: [
    CardPaymentComponent,
    UpiPaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }

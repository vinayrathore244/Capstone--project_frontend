import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Address} from '../../users/models/user.models';
import {Order} from '../models/order.models';
import {OrderService} from '../services/order.services';
import {OrderPaymentService} from '../services/order-payment.service';
import {AddressService} from '../../users/addresses/services/address.service';
import {NotificationService} from '../../_shared/_services/notification.service';
import {AppDataService} from '../../_shared/_services/app-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {isLoggedIn} from '../../_shared/_helpers/auth.utils';
import {Stepper as StepperEnum} from '../models/order.payment.models';
import Stepper from 'bs-stepper';


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit, AfterViewInit {


  isShow: boolean;
  selectedAddress: Address;
  isUserLoggedIn = false;
  order: Order = null;
  private stepper: Stepper;


  constructor(private orderService: OrderService, private orderPaymentService: OrderPaymentService, private addressService: AddressService, private notificationService: NotificationService, private appDataService: AppDataService, private route: ActivatedRoute, private router: Router) {


  }

  ngOnInit(): void {


    this.appDataService.authInfo$.subscribe(authInfo => {

      this.isUserLoggedIn = isLoggedIn(authInfo);


      if (this.isUserLoggedIn) {
        this.initComponent();
        
      }

    });


  } 

  ngAfterViewInit(): void {
    this.initializeStepper();
  }


  initComponent() {}

  next(): void {
    this.stepper.next();
  }

  prev(): void {
    this.stepper.previous();
  }

  toStep(step: number):void {
    this.stepper.to(step)
  }


  private initializeStepper() {
    this.stepper = new Stepper(document.querySelector('#orderStepper'), {
      linear: false,
      animation: true
    });


  }

  goToChooseAddress() {
    this.stepper.to(2);
  }

  goToConfirmOrder(order: Order) {
    this.order = order;
    this.stepper.to(3);
  }

  public onError(error: any) {
    this.notificationService.showErrorMessage(error);
  }

  updateAddress(selectedAddress: Address) {
    this.selectedAddress = selectedAddress;
    console.log(this.selectedAddress,"Create Order");

    this.orderService.create(selectedAddress.id)
      .subscribe(order => this.goToConfirmOrder(order),
        (error => {
          this.onError(error);
        }));

  }

  gotoMakePayment(payment) {
    this.stepper.to(4);
  }

  onMakePayment() {
    this.stepper.to(4);
  }


  onReloadOrder(value: Order) {

    this.order = value;
  }

  refreshCartAndRedirectToOrderDetail($event: any) {
    this.appDataService.clearCart()
    this.router.navigate(['/orders/detail/']);
  }
}

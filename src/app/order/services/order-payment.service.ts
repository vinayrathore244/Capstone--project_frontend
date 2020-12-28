import {Injectable} from '@angular/core';
import {OrderService} from './order.services';

@Injectable({
  providedIn: 'root'
})
export class OrderPaymentService {

  constructor(private orderService: OrderService) {
  }
}

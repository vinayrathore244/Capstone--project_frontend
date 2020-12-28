import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NotificationService} from '../../_services/notification.service';

@Component({
  selector: 'app-choose-quantity',
  templateUrl: './choose-quantity.component.html',
  styleUrls: ['./choose-quantity.component.scss']
})
export class ChooseQuantityComponent implements OnInit {

  @Input() availableItems: number;

  @Output() onCountChange: EventEmitter<any> = new EventEmitter();
  @Input() count = 1;

  constructor(private notificationService: NotificationService) {


  }

  ngOnInit(): void {
  }

}

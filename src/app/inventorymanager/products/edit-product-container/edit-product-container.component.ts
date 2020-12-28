import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../products/models/product.models';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-edit-product-container',
  templateUrl: './edit-product-container.component.html',
  styleUrls: ['./edit-product-container.component.scss']
})
export class EditProductContainerComponent implements OnInit {

  faEdit=faEdit;
  faTrash=faTrash;


  @Input()
  product: Product;

  @Output() onRemoveDeal: EventEmitter<any> = new EventEmitter();
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  removeDeal(product: Product) {
    this.onRemoveDeal.emit(product);
  }
  edit(product: Product) {
    this.onEdit.emit(product);
  }

  delete(product: Product) {
    this.onDelete.emit(product);
  }
}

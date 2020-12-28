import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-product-list-header',
  templateUrl: './product-list-header.component.html',
  styleUrls: ['./product-list-header.component.scss']
})
export class ProductListHeaderComponent implements OnInit {


  sortTypes = [
    {label: 'Price Highest', sortBy: 'price', direction: 'DESC'},
    {label: 'Price Lowest', sortBy: 'price', direction: 'ASC'},
    {label: 'Newest', sortBy: 'created', direction: 'DESC'},
    {label: 'Default', sortBy: '', direction: 'DESC'},

  ];

  ratingTypes = [
    {label: '4 Stars', value: '4'},
    {label: '3 Stars', value: '3'},
    {label: '2 Stars', value: '2'},
    {label: 'All', value: ''}

  ];


  selectedSort: any = this.sortTypes[3];
  selectedSortLabel: string = this.sortTypes[3]['label'];
  selectedRating: any = this.ratingTypes[3];

  @Output() onSortChange: EventEmitter<any> = new EventEmitter();
 @Output() onRatingChange: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  selectEvent(): void {
    switch(this.selectedSortLabel) {
      case this.sortTypes[0]['label']:
        this.changeSorting(this.sortTypes[0]);
        break;

      case this.sortTypes[1]['label']:
        this.changeSorting(this.sortTypes[1]);
        break;

      case this.sortTypes[2]['label']:
        this.changeSorting(this.sortTypes[2]);
        break;

      case this.sortTypes[3]['label']:
        this.changeSorting(this.sortTypes[3]);
        break;

      default:
        break;
    }
  }



  changeSorting(sort) {
    this.onSortChange.emit(sort);
  }

  changeRating(selectedRating: any) {
    this.selectedRating = selectedRating;
    this.onRatingChange.emit(selectedRating.value);
  }


}

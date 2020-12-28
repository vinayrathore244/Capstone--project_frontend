import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NotificationService} from '../../../_shared/_services/notification.service';
import {Address, AddressRequest} from '../../models/user.models';
import {AddressService} from '../services/address.service';
import {createEmptyAddressObject, getAddressRequestFromForm, getFormControlsConfigForAddress} from '../_helpers/address.utils';
declare var $: any;
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {

  addressForm: FormGroup;
  @Output() reloadAddress: EventEmitter<Address> = new EventEmitter<any>();

  constructor(public formBuilder: FormBuilder, public router: Router, private addressService: AddressService, private notificationService: NotificationService) {
  }



  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.addressForm = this.formBuilder.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      landmark: [''],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      state: ['', Validators.required],
      street: ['', Validators.required],
      zipcode:['', Validators.required],
    });

  }


  private onUpdateAddressComplete(address: Address) {

    // this.notificationService.showSuccessMessage('Successfully Added Address');
    // this.router.navigate(['/user/addresses']);
  }

  private onError(error: any) {
    this.notificationService.showErrorMessage(error);
  }



  public onAddressFormSubmit(): void {
    if (this.addressForm.valid) {
      const addressRequest: AddressRequest = getAddressRequestFromForm(this.addressForm);


      this.addressService.add(addressRequest).subscribe
        ((address: Address) => {
          this.onUpdateAddressComplete(address)
          this.addressForm.reset();
          this.reloadAddress.emit(address);
        },
          (error => this.onError(error)));

      $("#addAddressModal").modal("hide");
      

    } else {
      this.validateAllFormFields(this.addressForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  showAddModal() {
    $("#addAddressModal").modal("show");
    $("#addAddressModal").appendTo("body");
    $('#addAddressModal').on('hide.bs.modal', (e) => {
      this.addressForm.reset();
    })
  }

}

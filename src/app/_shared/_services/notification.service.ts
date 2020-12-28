import {Injectable, Injector, NgZone} from '@angular/core';
import {convertToString, isJson} from '../_helpers/string.utils';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  constructor(
    private injector: Injector,
    private readonly zone: NgZone,
    private toastr: ToastrService
  ) {
  }

  showErrorMessage(msg: any) {

    let result = msg;
    if (this.hasErrorMessage(msg)) {


      result = 'Error: ' + msg['error']['message'];
    }

    this.toastr.error(result);
  }

  private hasErrorMessage(msg: any) {
    return isJson(msg) && msg.hasOwnProperty('error') && msg['error'] && msg['error'].hasOwnProperty('message');
  }

  showSuccessMessage(msg: any) {
    this.toastr.success(msg);
  }
}

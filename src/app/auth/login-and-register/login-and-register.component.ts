import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthInfo} from '../models/auth.models';
import {isLoggedIn} from '../../_shared/_helpers/auth.utils';
import {AppDataService} from '../../_shared/_services/app-data.service';
import { BsModalService } from 'ngx-bootstrap/modal';

export const DEFAULT_URL_AFTER_LOGGING_IN = '/products';

@Component({
  selector: 'app-login-and-register',
  templateUrl: './login-and-register.component.html',
  styleUrls: ['./login-and-register.component.scss']
})
export class LoginAndRegisterComponent implements OnInit, OnDestroy {


  subscription;
  
  constructor(private  appDataService: AppDataService, private route: ActivatedRoute, private router: Router, private modalService: BsModalService) {
  }

  ngOnInit() {


    this.subscription = this.appDataService.authInfo$.subscribe((authInfo: AuthInfo) => {
      if (isLoggedIn(authInfo)) {
        
        this.redirectOnLoggedIn();       
      }
    });  
  

  }

  private redirectOnLoggedIn() {
    this.closeAllModals();
    const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || DEFAULT_URL_AFTER_LOGGING_IN;
    this.router.navigate([redirectUrl]);
  }
  private closeAllModals() {
    for (let i = 1; i <= this.modalService.getModalsCount(); i++) {
      this.modalService.hide(i);
    }
  }

  
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}

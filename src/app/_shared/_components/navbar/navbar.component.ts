import {Component, OnInit} from '@angular/core';

import {AuthInfo, User} from '../../../auth/models/auth.models';
import {Router} from '@angular/router';
import {getUser,isLoggedIn} from '../../_helpers/auth.utils';
import {AppDataService} from '../../_services/app-data.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { BsModalService } from 'ngx-bootstrap/modal';
import { LoginAndRegisterComponent } from 'src/app/auth/login-and-register/login-and-register.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  isLoggedIn = false;
  user: User;
  faUser=faUser;

  constructor(private  appDataService: AppDataService, public router: Router, private modalService: BsModalService) {}

  ngOnInit(): void {
    this.appDataService.authInfo$.subscribe((authInfo: AuthInfo) => {
      this.isLoggedIn = isLoggedIn(authInfo);
      this.user = getUser(authInfo);
    });
  }
   
  login(){
   this.modalService.show(LoginAndRegisterComponent);
  }
  signOut(){
    this.appDataService.signOut();    
  }
}

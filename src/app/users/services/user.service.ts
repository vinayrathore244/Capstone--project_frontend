import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {getAsUser, User} from '../../auth/models/auth.models';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {ChangePasswordRequest, UpdateUserDetailRequest} from '../models/user.models';
import {getOptionsForTextResponse} from '../../_shared/_helpers/http.utils';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getMyDetails(): Observable<User> {


    const url = environment.baseUrl + '/users/details';
    return this.http.get(url).pipe(
      map((userObject: any) => getAsUser(userObject))
    );
  }


}

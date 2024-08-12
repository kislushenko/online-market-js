import {Injectable} from '@angular/core';
import {environment} from '../environment.config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    const url = `${environment.apiUrl}/auth/login`;
    const body = {email, password};
    return this.http.post(url, body);
  }
}

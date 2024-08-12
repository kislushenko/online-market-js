import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environment.config";
import {Registration} from "../models/registration.model";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {
  }

  register(registrationData: Registration) {
    const url = `${environment.apiUrl}/users/register`;
    const body = {
      email: registrationData.email,
      password: registrationData.password,
      firstName: registrationData.firstName,
      lastName: registrationData.lastName
    };
    return this.http.post(url, body);
  }
}

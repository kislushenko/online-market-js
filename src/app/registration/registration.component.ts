import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {User} from "../models/user.model";
import {Registration} from "../models/registration.model";
import {RegistrationService} from "../services/registration.service";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  registration: Registration = new Registration();

  constructor(private registrationService: RegistrationService) {
  }

  register() {
    this.registrationService.register(this.registration).subscribe({
      next: (response: any) => {
        console.log('registered');
      },
      error: (e) => console.error(e)
    })
  }
}

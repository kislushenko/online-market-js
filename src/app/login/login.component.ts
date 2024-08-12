import {Component} from '@angular/core';
import {LoginService} from "../services/login.service";
import {User} from "../models/user.model";
import {FormsModule} from "@angular/forms";
import {TokenService} from "../services/token.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = new User();

  constructor(private loginService: LoginService,
              private tokenService: TokenService) {
  }

  login() {
    this.tokenService.removeToken();
    this.loginService.login(this.user.email, this.user.password).subscribe({
      next: (response: any) => {
        const accessToken = response.accessToken;
        this.tokenService.setToken(accessToken);
      },
      error: (e) => console.error(e)
    })
  }

}

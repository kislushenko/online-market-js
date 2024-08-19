import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {TokenService} from "./services/token.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public isAuthorized = false;

  constructor(private tokenService: TokenService,
              private cdr: ChangeDetectorRef,
              private router: Router) {
  }

  ngOnInit(){
    this.tokenService.isAuthorized.subscribe(authorized => {
      this.isAuthorized = authorized;
      this.cdr.detectChanges();
    })
  }

  goToUrl(url: string) {
    this.router.navigate([url]);
  }

}

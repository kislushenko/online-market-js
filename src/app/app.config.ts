import {ApplicationConfig, Provider, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, Routes} from '@angular/router';

import {provideClientHydration} from '@angular/platform-browser';
import {HomepageComponent} from "./homepage/homepage.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {TokenInterceptor} from "./interceptors/token.interceptor";
import {ProductListingPageComponent} from "./products/product-listing-page/product-listing-page.component";
import {CartPageComponent} from "./cart-page/cart-page.component";

const appRoutes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "login", component: LoginComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "products", component: ProductListingPageComponent},
  {path: "cart", component: CartPageComponent},
];

export const tokenInterceptorProvider: Provider =
  {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(appRoutes), provideClientHydration(), provideHttpClient(withInterceptorsFromDi()),
    tokenInterceptorProvider,]
};


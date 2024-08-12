import {ApplicationConfig, importProvidersFrom, Provider, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, Routes} from '@angular/router';

import {provideClientHydration} from '@angular/platform-browser';
import {HomepageComponent} from "./homepage/homepage.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi
} from "@angular/common/http";
import {TokenInterceptor} from "./interceptors/token.interceptor";

const appRoutes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "login", component: LoginComponent},
  {path: "registration", component: RegistrationComponent},
];

export const tokenInterceptorProvider: Provider =
  {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(appRoutes), provideClientHydration(), provideHttpClient(withInterceptorsFromDi()),
    tokenInterceptorProvider,]
};


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './shared/components/alerts/alert/alert.component';
//import { LayoutComponent } from './pages/layouts/layout/layout.component';
//import { LoginComponent } from "./pages/logins/login/login.component";
//import { RegisterComponent } from './pages/registers/register/register.component';
import { HomeComponent } from './pages/home/home/home.component';
//import { EditComponent } from './pages/user/edit/edit.component';
//import { AddComponent } from './pages/user/add/add.component';
//import { ListComponent } from './pages/user/list/list.component';
import { fakeBackendProvider } from '../app/shared/helpers';

//import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor } from '../app/shared/helpers/jwt.interceptor';
import {ErrorInterceptor } from '../app/shared/helpers/error.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
   // LayoutComponent,
   // LoginComponent,
    //RegisterComponent,
    HomeComponent
    //AddComponent,
    //ListComponent,
//EditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
   /* { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
    */
],
  bootstrap: [AppComponent]
})
export class AppModule { }

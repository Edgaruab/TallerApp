import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from '../../layouts/layout/layout.component';
import { LoginComponent } from "../../logins/login/login.component";
import { RegisterComponent } from '../../registers/register/register.component';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ],
    declarations: [
      LayoutComponent,
      LoginComponent,
        RegisterComponent
    ]
})
export class AccountModule { }

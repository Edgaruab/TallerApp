import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';



import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from '../layout/layout.component';
import { ListComponent } from '../list/list.component';
import { AddComponent } from '../add/add.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddComponent
    ]
})
export class UsersModule { }

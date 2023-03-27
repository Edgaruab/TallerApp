import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { LayoutComponent } from './layout.component';
import { ListComponent } from '../list/list.component';
import { AddComponent } from '../add/add.component';
import { LayoutComponent } from '../../user/layout/layout.component';
import { LoginComponent } from "../../logins/login/login.component";
import { RegisterComponent } from '../../registers/register/register.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: ListComponent },
            { path: 'add', component: AddComponent },
            { path: 'edit/:id', component: AddComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }

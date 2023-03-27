import { Component } from '@angular/core';

import { AccountService } from '@service/services/account.service';
import { User } from '@service/models';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
    title(title: any) {
      throw new Error('Method not implemented.');
    }
    user?: User | null;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }
}

import { Component } from '@angular/core';

import { User } from '@service/models';
import { AccountService } from '@service/services/index.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User | null;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
}

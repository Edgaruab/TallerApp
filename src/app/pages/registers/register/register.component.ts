import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from '@service/services/index.service';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    form!: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({

            firstName: [''],
            lastName: [''],
            username: [''],
            password: ['']
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        console.log(this.form.value);
       // this.loading = true;
        this.accountService.register(this.form.value).subscribe(res => {
          console.log('Person created successfully!');
          console.log(res);
          this.router.navigateByUrl('/users');
     })
        /*    .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
            */
    }

   /* submit(){
      console.log(this.form.value);
      this.accountService.register(this.form.value).subscribe(res => {
           console.log('Person created successfully!');
           this.router.navigateByUrl('person/index');
      })
    }
    */
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { users } from 'src/app/shared/data/data';
import { DataService } from 'src/app/shared/data/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userEmail: string;
  loginForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {
    this.userEmail = '';
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.userEmail = params.get('userEmail') ?? '';
    });

    if (this.userEmail) {
      const user = users.find(
        (user) => user.email.toLowerCase() == this.userEmail.toLowerCase()
      );
      this.dataService.setUserData(user);
      localStorage.setItem('opti-user-detail', JSON.stringify(user));
      console.log(this.userEmail, 'from angular login');
      this.router.navigate(['/home']);
    }
    this.loginForm = new FormGroup({
      emailphone: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      rememberMe: new FormControl(false),
    });
  }

  login() {
    console.log(this.loginForm.value, 'the values');
    let user = localStorage.getItem('opti-user-detail')
      ? JSON.parse(localStorage.getItem('opti-user-detail'))
      : users.find(
          (user) =>
            user.email.toLowerCase() ==
            this.loginForm.value.emailphone.toLowerCase()
        );

    this.dataService.setUserData(user);
    localStorage.setItem('opti-user-detail', JSON.stringify(user));
    this.router.navigate(['/home']);
  }
  onSubmit() {
    const formValues = this.loginForm.value;
    console.log(formValues, 'formValues');
  }

  toggleRadio(): void {
    const myRadioControl = this.loginForm.get('rememberMe');
    myRadioControl.setValue(!myRadioControl.value);
    console.log(myRadioControl.value, 'the radio value');
  }
  get isRememberMeChecked(): boolean {
    return this.loginForm.get('rememberMe').value;
  }
}

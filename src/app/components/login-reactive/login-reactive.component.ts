import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { requiredGroup } from '../../required-group/required-group'
@Component({
  selector: 'app-login-reactive',
  template: `
  <form [formGroup]="login" (ngSubmit)="loginSubmit()">
  <h1>Form Reactive Way</h1>
  <div>
  <input type="email" formControlName="email" email  minlength="3">
  </div>
  <div *ngIf="login.controls['email'].errors!=null">
    <div *ngIf="login.controls['email'].errors.email">
      the email is in bed format
    </div>
    <div *ngIf="login.controls['email'].errors.minlength">
      lenght is minimum 3!
    </div>
  </div>
  <div>
  <input type="password" formControlName="password" required >
  </div>
  <div>
  <button type="submit">submit</button>
  </div>
<div>{{login.errors |json}}</div>
  </form>
  `,
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {

  login: FormGroup = new FormGroup(
    {
      email: new FormControl(""),
      password: new FormControl(""),
    }, requiredGroup
  )
  constructor() { }

  ngOnInit(): void {
    this.login.valueChanges.subscribe(val => {
      console.log(val);
    })
  }
  loginSubmit = () => {
    console.log(this.login.value);
  }

}

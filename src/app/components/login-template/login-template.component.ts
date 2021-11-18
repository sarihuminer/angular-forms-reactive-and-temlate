import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-template',
  template: `
   <form #loginForm="ngForm" requireGroup (ngSubmit)="loginSubmit(loginForm.value)"  >
   <h1>Form Template Way</h1>
   <div>
  <input type="email" [(ngModel)]="email" name="email" email required minlength="3">
  </div>
  
  <div>
  <input type="password" [(ngModel)]="password" name="password" >
  </div>
  <div>
  <button>save</button>
  </div>


  <div> {{loginForm.errors |json}}</div>
   </form>
  `,
  styleUrls: ['./login-template.component.css']
})
export class LoginTemplateComponent implements OnInit, AfterViewInit {
  @ViewChild("loginForm") loginForm: NgForm;
  email: NgModel;
  password: NgModel;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.loginForm.valueChanges.subscribe(val => {
      console.log(val);
    })
  }
  loginSubmit = (value) => {
    console.log(value);
  }
}

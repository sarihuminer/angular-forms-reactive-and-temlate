import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { TodoWrapper } from '../../validateToDo/validateToDo'
@Component({
  selector: 'app-name-reactive',
  template: `
  <h1>Input with Reactive way</h1>
  <input type="text" [formControl]="name"/>
  {{name.errors |json}}
  <p>{{name.value}}</p>
  `,
  styleUrls: ['./name-reactive.component.css']
})
export class NameReactiveComponent implements OnInit {
  name: FormControl = new FormControl("initial value", [Validators.required, Validators.minLength(3), TodoWrapper(this.http)]);
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.name.valueChanges.subscribe((value: string) => {
      console.log(value);
    })
  }

}

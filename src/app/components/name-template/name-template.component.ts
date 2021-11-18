import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-name-template',
  template: `
  <h1>Input with Template way</h1>
  <input type="text" [(ngModel)]="name" #namengModel="ngModel" minlength="3"/>
  <div> 
{{namengModel.errors |json}}
  </div>
  <p>{{name}}</p>
  `,
  styleUrls: ['./name-template.component.css']
})
export class NameTemplateComponent implements OnInit, AfterViewInit {

  @ViewChild('namengModel') ngmodelInstance: NgModel;
  _name: string;

  set name(value: string) {
    this._name = value;
  }
  get name(): string {
    return this._name;
  }
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.ngmodelInstance.valueChanges.subscribe((val: string) => {
      console.log(val);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { requiredGroup } from 'src/app/required-group/required-group';

@Component({
  selector: 'app-phone-numbers',
  template: `
  <form (ngSubmit)="save()" >
<h1>Phone numbers -form array</h1>
<div *ngFor="let phoneNums of phoneNumbers.controls" [formGroup]="phoneNums"> 
<input type="text" formControlName="prefix"/>
 <input type="text" formControlName="number"/>
 <div>{{phoneNums.errors |json}}</div>
</div>
 
  <div>
  <button (click)="addRow()">add new phone</button>
  </div>
  
  </form>
  `,
  styleUrls: ['./phone-numbers.component.css']
})
export class PhoneNumbersComponent implements OnInit {

  phoneNumbers: FormArray = new FormArray(
    [
      new FormGroup(
        {
          prefix: new FormControl("054"),
          number: new FormControl("8598227")
        }, requiredGroup
      )
    ]
  )


  constructor() { }

  ngOnInit(): void {
    this.phoneNumbers.valueChanges.subscribe(val => {
      console.log(val);
    })
  }
  addRow = () => {
    this.phoneNumbers.push(new FormGroup({
      prefix: new FormControl("054"),
      number: new FormControl("8598227")
    }))
  }
  save = () => {
    console.log(this.phoneNumbers.value);
  }
}

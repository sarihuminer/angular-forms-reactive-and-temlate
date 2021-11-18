import { HttpClient } from '@angular/common/http';
import { Component, forwardRef, OnInit } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms';
import { Observable, observable } from 'rxjs';
import { debounceTime, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-auto-complete',
  template: `
 <div>
<input type="text" placeholder="..." [formControl]="searchinput" (blur)="touchCb()"/>
 </div>
 <ul>
<li *ngFor="let todoitem of todoItems | async" (click)="setToDoItem(todoitem)">
{{todoitem.title}}
</li>
 </ul>
  `,
  styleUrls: ['./auto-complete.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => AutoCompleteComponent)

    }
  ]
})
export class AutoCompleteComponent implements OnInit, ControlValueAccessor {


  searchinput: FormControl = new FormControl('');
  private _changeCb;
  touchCb;
  todoItems: Observable<any>;
  constructor(private _http: HttpClient) { }

  writeValue(val: string): void {
    this.searchinput.setValue(val);
  }
  registerOnChange(changeCb) {
    this._changeCb = changeCb;
  }
  registerOnTouched(touchCb) {
    this.touchCb = touchCb;
  }
  setToDoItem = (todoitem) => {
    this._changeCb(todoitem);
  }

  ngOnInit(): void {
    this.todoItems = this.searchinput.valueChanges.pipe(
      debounceTime(1000),
      mergeMap((inputString: string) =>
        this._http.get(`https://nztodo.herokuapp.com/api/task/?format=json&search=${inputString}`)
      )
    )
  }

}

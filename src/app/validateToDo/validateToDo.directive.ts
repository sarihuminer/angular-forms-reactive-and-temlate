import { HttpClient } from "@angular/common/http";
import { Directive, forwardRef } from "@angular/core";
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
import { TodoWrapper } from "./validateToDo";
@Directive(
    {
        selector: '[validateTODO]',
        providers: [
            {
                provide: NG_ASYNC_VALIDATORS,
                multi: true,
                useExisting: forwardRef(() => ValidateToDoDirective)
            }
        ]
    }
)
export class ValidateToDoDirective {

    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return TodoWrapper(this._http)(control);
    }
    constructor(private _http: HttpClient) {

    }

}
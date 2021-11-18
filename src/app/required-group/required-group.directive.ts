import { Directive, forwardRef } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { requiredGroup } from './required-group'
@Directive(
    {
        selector: '[requireGroup]',
        providers: [{
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => RequiredGroupDirective)
        }]
    }
)
export class RequiredGroupDirective implements Validator {


    validate(control: AbstractControl): ValidationErrors | null {
        return requiredGroup(control);
    }
}
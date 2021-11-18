import { AbstractControl, FormArray, FormGroup, ValidatorFn } from "@angular/forms";


export const requiredGroup: ValidatorFn = (control: AbstractControl) => {
    let errors = null;
    let emptyControls = [];
    if (control instanceof FormArray) {
        let index = 0;
        for (let singleControl of control.controls) {
            if (singleControl.value == '' || singleControl.value == null) {
                emptyControls.push(index);
            }
            index++;
        }
    }

    if (control instanceof FormGroup) {
        for (let key of Object.keys(control.controls)) {
            if (control.controls[key].value == null || control.controls[key].value == '') {
                emptyControls.push(key);
            }
        }
    }
    if (emptyControls.length > 0) {
        errors = { 'requiredGroup': emptyControls };
    }
    return errors;
}
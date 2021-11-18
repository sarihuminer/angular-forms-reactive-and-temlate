import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms"
import { Observable, of } from "rxjs"
import { HttpClient } from "@angular/common/http"
import { debounceTime, map, mergeMap, single, take, withLatestFrom } from "rxjs/operators"
export function TodoWrapper(http: HttpClient) {
    return (control: AbstractControl): Observable<ValidationErrors | null> | null => {
        if (!control || !control.valueChanges)
            return of(null);
        control.valueChanges.pipe(
            debounceTime(1000),
            mergeMap((inputText: string) => http.get(`https://nztodo.herokuapp.com/api/task/?format=json&search=${inputText}`)),
            withLatestFrom(control.value),
            map(([dataServer, inputText]) => {
                const foundElement = (dataServer as any).find(s => s.type === inputText);
                if (!foundElement)
                    return { 'NO_TODO': "i didnot find much" };
                else
                    return null;
            }),
            take(1)
        )

    }
}


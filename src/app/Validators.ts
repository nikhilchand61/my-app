import { AbstractControl } from "@angular/forms";

export function domainValidator(control: AbstractControl):any{
    if(control.value?.includes('@reqres.in')){
        return null;
    }
    else{
        return {'domainValidator':'Invalid domain'};
    }
}
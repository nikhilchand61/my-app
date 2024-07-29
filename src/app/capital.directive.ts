import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCapital]'
})
export class CapitalDirective {

  constructor(private _elementRef:ElementRef) { }

  @HostListener('keyup')
  convertToCapital(){
    this._elementRef.nativeElement.value = this._elementRef.nativeElement.value.toUpperCase();
  }
}

import { Directive,ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[removeChar]'
})
export class CustomDirectivesDirective {

  constructor(private ref:ElementRef) { }

  @HostListener('click')handlerClick(){
    const str = this.ref.nativeElement.innerText;
    if(str.length>1){
      this.ref.nativeElement.innerText =
      str.substring(0, str.length - 1);
    }
  }
}

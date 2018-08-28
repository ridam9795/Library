import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('mouseover') toggleOpen() {
    this.isOpen =true;
  }
  @HostListener('mouseout') toggleClose(){
    this.isOpen=false;
  }
}

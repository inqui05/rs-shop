import { Directive, HostBinding, Input, OnInit } from '@angular/core';

export enum AvailableColor {
  Green = 'green',
  Yellow = '#ffa500',
  Red = 'red',
}

@Directive({
  selector: '[appAvailableNow]'
})
export class AvailableNowDirective  implements OnInit {
  @Input('appAvailableNow') count = 0 ;

  @HostBinding('style.fill') availableColor = AvailableColor.Red;

  ngOnInit() {
     if (this.count > 20) {
      this.availableColor = AvailableColor.Green;
    } else if (this.count > 5) {
      this.availableColor = AvailableColor.Yellow;
    } else if (this.count < 5) {
      this.availableColor = AvailableColor.Red;
    }
  }
}

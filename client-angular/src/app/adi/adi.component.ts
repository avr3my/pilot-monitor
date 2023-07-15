import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-adi',
  templateUrl: './adi.component.html',
  styleUrls: ['./adi.component.css'],
  // styles
})
export class AdiComponent {
  constructor() {}
  @Input() adi = 0;
  @Input() displayVisual = true;
  getCssAtitude = () => {
    let value = this.adi + 100;
    value = Math.floor(value / 2);
    return (100 - value);
  }
}

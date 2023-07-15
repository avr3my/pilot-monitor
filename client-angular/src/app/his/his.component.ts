import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-his',
  templateUrl: './his.component.html',
  styleUrls: ['./his.component.css'],
})
export class HisComponent {
  @Input() his = 0;
  @Input() displayVisual = true;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alt',
  templateUrl: './alt.component.html',
  styleUrls: ['./alt.component.css'],
})
export class AltComponent {
  @Input() alt = 1000;
  @Input() displayVisual = true;
}

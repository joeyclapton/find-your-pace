import { Component, Input } from '@angular/core';

@Component({
  selector: 'fyp-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.sass',
})
export class BannerComponent {
  @Input() src = '';
  @Input() alt = '';
}

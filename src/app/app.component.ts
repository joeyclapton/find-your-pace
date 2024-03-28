import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './shared/components/banner/banner.component';
import { FormConvertRunningDataComponent } from './shared/components/form-convert-running-data/form-convert-running-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BannerComponent, FormConvertRunningDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'find-your-pace';
}

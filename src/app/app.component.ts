import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './shared/components/banner/banner.component';
import { FormConvertRunningDataComponent } from './shared/components/form-convert-running-data/form-convert-running-data.component';
import { Race } from './shared/interfaces/race.interface';
import { RunningService } from './shared/services/running/running.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BannerComponent, FormConvertRunningDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'find-your-pace';

  runningService = inject(RunningService);

  getMetrics(metrics: Race, type: string) {
    if (type === 'k') {
      const kilometers =
        this.runningService.minutesAndKilometersToPace(metrics);

      console.log('Kilometers', kilometers);

      return;
    }
    if (type === 'p') {
      const pace = this.runningService.paceAndMinutesToKilometers(metrics);
      console.log('Pace', pace);

      return;
    }
    if (type === 'pk') {
      const paceByKilometer = this.runningService.findPaceByKilometer(metrics);
      console.log('Pace by kilometer', paceByKilometer);
      return;
    }
  }
}

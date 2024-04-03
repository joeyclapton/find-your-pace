import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './shared/components/banner/banner.component';
import { FormConvertRunningDataComponent } from './shared/components/form-convert-running-data/form-convert-running-data.component';
import { Race } from './shared/interfaces/race.interface';
import { RunningService } from './shared/services/running/running.service';
import { MetricOptionsComponent } from './shared/components/metric-options/metric-options.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BannerComponent,
    FormConvertRunningDataComponent,
    MetricOptionsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'find-your-pace';
  selectedMetric = '';
  kilometers = 0;
  pace = 0;
  paceByKilometer = 0;

  runningService = inject(RunningService);

  getMetrics(metrics: Race, type: string) {
    if (this.selectedMetric === 'kilometers') {
      this.kilometers = this.runningService.minutesAndKilometersToPace(metrics);
      return;
    }
    if (this.selectedMetric === 'pace') {
      this.pace = this.runningService.paceAndMinutesToKilometers(metrics);
      return;
    }
    if (this.selectedMetric === 'paceByKilometer') {
      this.paceByKilometer =
        this.runningService.minutesAndKilometersToPace(metrics);
      return;
    }
  }

  getSelectedMetric(metric: string) {
    this.selectedMetric = metric;
  }
}

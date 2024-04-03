import { Injectable } from '@angular/core';
import { Race } from '../../interfaces/race.interface';
import { MetricOptions } from '../../interfaces/metricOptions.interface';

@Injectable({
  providedIn: 'root',
})
export class RunningService {
  metrics: Array<MetricOptions> = [];

  constructor() {}

  minutesAndKilometersToPace({
    firstParameter: minutes,
    secondParameter: kilometers,
  }: Race): number {
    return minutes / kilometers;
  }

  paceAndMinutesToKilometers({
    firstParameter: minutes,
    secondParameter: pace,
  }: Race): number {
    return minutes / pace;
  }

  findPaceByKilometer({
    firstParameter: distance,
    secondParameter: pace,
  }: Race) {
    return pace * distance;
  }

  getAllMetrics(): Array<MetricOptions> {
    return [
      {
        description: '🏃🏻‍♂️ Kilometers + Minutes = Pace',
      },
      {
        description: '🏃‍♀️ Pace + Minutes = Kilometers',
      },
      {
        description: '🏃 Minutes + Pace = Distance',
      },
    ];
  }
}

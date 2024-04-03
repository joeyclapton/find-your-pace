import { Injectable } from '@angular/core';
import { Race } from '../../interfaces/race.interface';

@Injectable({
  providedIn: 'root',
})
export class RunningService {
  constructor() {}

  minutesAndKilometersToPace({
    firstParameter: minutes,
    secondParameter: kilometers,
  }: Race): number {
    return minutes / kilometers;
  }

  paceAndMinutesToKilometers({
    firstParameter: pace,
    secondParameter: minutes,
  }: Race): number {
    return minutes / pace;
  }

  findPaceByKilometer({
    firstParameter: pace,
    secondParameter: distance,
  }: Race) {
    return pace * distance;
  }
}

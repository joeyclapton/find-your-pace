import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricOptions } from '../../interfaces/metricOptions.interface';

@Component({
  selector: 'app-metric-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metric-options.component.html',
  styleUrl: './metric-options.component.sass',
})
export class MetricOptionsComponent {
  @Input() metric = '';
  @Input() options: Array<MetricOptions> = [];
  @Output() changeMetric = new EventEmitter();

  selectedIdx = -1;

  #setCurrentIndex(idx: number) {
    if (idx === this.selectedIdx) return;

    this.selectedIdx = idx;
  }

  onChangeMetric(idx: number) {
    this.changeMetric.emit(this.metric);
    this.#setCurrentIndex(idx);
  }
}

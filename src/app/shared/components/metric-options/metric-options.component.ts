import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-metric-options',
  standalone: true,
  imports: [],
  templateUrl: './metric-options.component.html',
  styleUrl: './metric-options.component.sass',
})
export class MetricOptionsComponent {
  @Input() metric = '';
  @Output() changeMetric = new EventEmitter();

  onChangeMetric() {
    this.changeMetric.emit(this.metric);

    console.log('Métrica selecionada: ', this.metric);
  }
}

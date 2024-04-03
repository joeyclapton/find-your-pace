import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RunningService } from '../../services/running/running.service';
import { Race } from '../../interfaces/race.interface';

@Component({
  selector: 'app-form-convert-running-data',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-convert-running-data.component.html',
  styleUrl: './form-convert-running-data.component.sass',
})
export class FormConvertRunningDataComponent {
  form: FormGroup;
  formBuild = inject(FormBuilder);
  runningService = inject(RunningService);

  @Output() valuesChanged: EventEmitter<Race> = new EventEmitter();

  constructor() {
    this.form = this.formBuild.group({
      firstParameter: [null],
      secondParameter: [null],
    });

    this.form.valueChanges.subscribe(() => {
      this.emitValues();
    });
  }

  emitValues() {
    this.valuesChanged.emit(this.form.value);
  }
}

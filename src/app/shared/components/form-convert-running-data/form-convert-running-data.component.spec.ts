import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConvertRunningDataComponent } from './form-convert-running-data.component';

describe('FormConvertRunningDataComponent', () => {
  let component: FormConvertRunningDataComponent;
  let fixture: ComponentFixture<FormConvertRunningDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormConvertRunningDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormConvertRunningDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

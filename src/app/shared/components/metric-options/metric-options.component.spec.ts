import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricOptionsComponent } from './metric-options.component';

describe('MetricOptionsComponent', () => {
  let component: MetricOptionsComponent;
  let fixture: ComponentFixture<MetricOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetricOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

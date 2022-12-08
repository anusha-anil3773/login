import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementofficerviewComponent } from './placementofficerview.component';

describe('PlacementofficerviewComponent', () => {
  let component: PlacementofficerviewComponent;
  let fixture: ComponentFixture<PlacementofficerviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementofficerviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementofficerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

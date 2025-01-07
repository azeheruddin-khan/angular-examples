import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSLComponent } from './hsl.component';

describe('HSLComponent', () => {
  let component: HSLComponent;
  let fixture: ComponentFixture<HSLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HSLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HSLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

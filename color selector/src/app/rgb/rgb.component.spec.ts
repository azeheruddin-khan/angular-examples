import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RGBComponent } from './rgb.component';

describe('RGBComponent', () => {
  let component: RGBComponent;
  let fixture: ComponentFixture<RGBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RGBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RGBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

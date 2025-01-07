import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgbaComponent } from './rgba.component';

describe('RgbaComponent', () => {
  let component: RgbaComponent;
  let fixture: ComponentFixture<RgbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RgbaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

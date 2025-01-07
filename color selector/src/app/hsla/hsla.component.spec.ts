import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSLAComponent } from './hsla.component';

describe('HSLAComponent', () => {
  let component: HSLAComponent;
  let fixture: ComponentFixture<HSLAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HSLAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HSLAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HEXComponent } from './hex.component';

describe('HEXComponent', () => {
  let component: HEXComponent;
  let fixture: ComponentFixture<HEXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HEXComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HEXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanUpComponent } from './scan-up.component';

describe('ScanUpComponent', () => {
  let component: ScanUpComponent;
  let fixture: ComponentFixture<ScanUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

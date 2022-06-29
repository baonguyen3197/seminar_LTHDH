import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanDownComponent } from './scan-down.component';

describe('ScanDownComponent', () => {
  let component: ScanDownComponent;
  let fixture: ComponentFixture<ScanDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

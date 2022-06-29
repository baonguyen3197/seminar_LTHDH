import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CScanUpComponent } from './c-scan-up.component';

describe('CScanUpComponent', () => {
  let component: CScanUpComponent;
  let fixture: ComponentFixture<CScanUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CScanUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CScanUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

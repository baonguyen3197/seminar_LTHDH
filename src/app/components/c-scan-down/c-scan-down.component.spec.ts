import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CScanDownComponent } from './c-scan-down.component';

describe('CScanDownComponent', () => {
  let component: CScanDownComponent;
  let fixture: ComponentFixture<CScanDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CScanDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CScanDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

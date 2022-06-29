import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SstfComponent } from './sstf.component';

describe('SstfComponent', () => {
  let component: SstfComponent;
  let fixture: ComponentFixture<SstfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SstfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SstfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingparentComponent } from './pollingparent.component';

describe('PollingparentComponent', () => {
  let component: PollingparentComponent;
  let fixture: ComponentFixture<PollingparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollingparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollingparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

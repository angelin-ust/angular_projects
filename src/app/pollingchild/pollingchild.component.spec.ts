import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingchildComponent } from './pollingchild.component';

describe('PollingchildComponent', () => {
  let component: PollingchildComponent;
  let fixture: ComponentFixture<PollingchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollingchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollingchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

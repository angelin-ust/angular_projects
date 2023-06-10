import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1Component } from './test1.component';

describe('Test1Component', () => {
  let component: Test1Component;
  let fixture: ComponentFixture<Test1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title "i like to test code"', () => {
    fixture = TestBed.createComponent(Test1Component);
    component = fixture.componentInstance;
    expect(component.title).toEqual("i like to test code");
  });
});

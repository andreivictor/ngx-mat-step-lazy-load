import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatStepContentLazyWrapperComponent } from './ngx-mat-step-content-lazy-wrapper.component';

describe('NgxMatStepContentLazyWrapperComponent', () => {
  let component: NgxMatStepContentLazyWrapperComponent;
  let fixture: ComponentFixture<NgxMatStepContentLazyWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatStepContentLazyWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatStepContentLazyWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

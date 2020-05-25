import {
  AfterContentInit,
  Component,
  ContentChild,
  forwardRef,
  Inject,
  OnDestroy,
  ViewContainerRef
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { MatStepper, MatStep } from '@angular/material/stepper';
import { Subscription } from 'rxjs';
import { map,  startWith } from 'rxjs/operators';
import { NgxMatStepContentLazyDirective } from './ngx-mat-step-content-lazy.directive';

@Component({
  selector: 'ngx-mat-step-content-lazy-wrapper',
  templateUrl: './ngx-mat-step-content-lazy-wrapper.component.html',
  styleUrls: []
})
export class NgxMatStepContentLazyWrapperComponent implements AfterContentInit, OnDestroy {
  stepper: MatStepper;
  step: MatStep;

  private isSelected = Subscription.EMPTY;

  /** Content that will be rendered lazily. */
  @ContentChild(NgxMatStepContentLazyDirective, {static: false}) lazyContent: NgxMatStepContentLazyDirective;

  /** Currently-attached portal containing the lazy content. */
  portal: TemplatePortal;

  constructor(
    @Inject(forwardRef(() => MatStepper)) stepper: MatStepper,
    @Inject(forwardRef(() => MatStep)) step: MatStep,
    private viewContainerRef?: ViewContainerRef
  ) {
    this.stepper = stepper;
    this.step = step;
  }

  ngAfterContentInit(): void {
    if (!this.viewContainerRef) {
      return;
    }
    this.isSelected = this.stepper.selectionChange.pipe(
      map(event => event.selectedStep === this.step),
      startWith(!!(this.stepper.selected === this.step))
    ).subscribe(isSelected => {
      if (isSelected && this.lazyContent && !this.portal) {
        this.portal = new TemplatePortal(this.lazyContent.template, this.viewContainerRef);
      }
    });
  }

  ngOnDestroy(): void {
    this.isSelected.unsubscribe();
  }

}

import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { NgxMatStepContentLazyDirective } from './ngx-mat-step-content-lazy.directive';
import { NgxMatStepContentLazyWrapperComponent } from './ngx-mat-step-content-lazy-wrapper.component';

@NgModule({
  declarations: [
    NgxMatStepContentLazyDirective,
    NgxMatStepContentLazyWrapperComponent
  ],
  imports: [
    PortalModule
  ],
  exports: [
    NgxMatStepContentLazyDirective,
    NgxMatStepContentLazyWrapperComponent
  ]
})
export class NgxMatStepLazyLoadModule { }

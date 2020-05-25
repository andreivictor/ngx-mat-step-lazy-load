import { Directive, TemplateRef } from '@angular/core';

/**
 * Content for a `mat-step` that will be rendered lazily.
 */
@Directive({
  selector: 'ng-template[ngxMatStepContentLazy]'
})
export class NgxMatStepContentLazyDirective {

  constructor(
    public template: TemplateRef<any>
  ) {}

}

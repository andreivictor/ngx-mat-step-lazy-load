# Ngx Mat Step Lazy Load

Small Angular library that allows to defer initialization of the content of a `mat-step` until it is opened for the first time.

## ! Important Note !
This project is inspired from:
- https://github.com/angular/components/pull/15817

Follow the following Github issue to know when this feature will be available in the official Angular Material repository:
- https://github.com/angular/components/issues/12339


## Why use it

- **Q: What is the current behavior of `MatStep`?**
 
  A: Step content is eagerly loaded and it will be initialized even if the step is closed.

- **Q: What is the expected behavior by using this library?**
 
  A: Step content will be not be loaded until it is opened for the first time.
  
- **Q: What other Angular Material Components are using lazy-loading?**

  A:  
  - `MatTabs`: the contents can be lazy loaded by declaring the body in a `ng-template` with the `matTabContent` directive (docs:
  https://material.angular.io/components/tabs/overview#lazy-loading)
  - `MatExpansionPanels`: to defer initialization until the panel is open, the content should be provided as an `ng-template` with the `matExpansionPanelContent` directive (docs: https://material.angular.io/components/expansion/overview#lazy-rendering) 



## How to use it
Install `ngx-mat-step-lazy-load` library in your project:
```
npm install ngx-mat-step-lazy-load
```

Import the `NgxMatStepLazyLoadModule` in your app.module.ts:

```typescript
import { NgxMatStepLazyLoadModule } from 'ngx-mat-step-lazy-load';


@NgModule({
  imports: [
    // ..
    NgxMatStepLazyLoadModule
  ],
})
export class AppModule {}
```


In `mat-step` component:

- use `ng-template` with `ngxMatStepContentLazy` directive to wrap the content that will be lazy-loaded.
- the content above must be placed inside the component `ngx-mat-step-content-lazy-wrapper`, which just acts like a wrapper for the lazy-loaded content.
 
```html
<mat-step>
  <ng-template matStepLabel>Step 1</ng-template>
  <ngx-mat-step-content-lazy-wrapper>
    <ng-template ngxMatStepContentLazy>
      <!-- lazy loaded content -->
      <button mat-button matStepperNext>Next</button>
    </ng-template>
  </ngx-mat-step-content-lazy-wrapper>
</mat-step>
```

## Demo 
https://stackblitz.com/edit/angular-z3xgla



# Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Library Build 
Run `npm run build-lib` to build the library. The build artifacts will be stored in the `dist/ngx-mat-step-lazy-load` folder.

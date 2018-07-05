import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  // specify the selector of the component being used as directive
  template: `
    <div> <h1> {{pageTitle}} </h1>
    <pm-products></pm-products>
  `,
  providers: [ ProductService ]
})
export class AppComponent {
  title = 'Angular: Getting Started';
}

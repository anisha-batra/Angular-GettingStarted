import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  // specify the selector of the component being used as directive
  template: `
    <div> <h1> {{pageTitle}} </h1>
    <pm-products></pm-products>
  `
})
export class AppComponent {
  title = 'Angular: Getting Started';
}

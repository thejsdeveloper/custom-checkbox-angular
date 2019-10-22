import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  checkboxData = [
    {
      code: "netflix",
      name: "Netflix"
    },
    {
      code: "amazon-prime",
      name: "Amazon Prime"
    },
    {
      code: "hotstar",
      name: "Hotstar"
    }
  ];



  changed(code: string) {
    console.log(code);
  }
}

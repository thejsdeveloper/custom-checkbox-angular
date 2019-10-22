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
      name: "Netflix",
      selected: false
    },
    {
      code: "amazon-prime",
      name: "Amazon Prime",
      selected: false
    },
    {
      code: "hotstar",
      name: "Hotstar",
      selected: true
    }
  ];



  changed(code: string) {
    console.log(code);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello123';
  name = '';
  doSth(event: Event){
    let val = (event.target as HTMLInputElement).value;
    this.name = val;
  }
}

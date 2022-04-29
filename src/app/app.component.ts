import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello123';
  name = '';
  names;
  nickname = '';

  constructor(){
    this.names = [
      {id:1,name:'Sahachok'},
      {id:2,name:'Boat'},
    ]
  }


  doSth(event: Event){
    let val = (event.target as HTMLInputElement).value;
    this.name = val;
  }

  doSth2(name: string){
    this.name = name;
  }

  doNickname(nickname : string){
    console.log(nickname);
    this.nickname = nickname;
  }
}

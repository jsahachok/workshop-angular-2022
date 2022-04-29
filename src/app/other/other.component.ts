import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  @Input() name!:User;
  @Output() changeNameEvent = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  clickedBtn(){
    console.log("Click Me was clicked !!.")
    this.name.age = 25;
    this.changeNameEvent.emit(this.name);
  }
}

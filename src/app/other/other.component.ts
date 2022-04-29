import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  @Input() name:any;
  @Output() changeNameEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  clickedBtn(){
    console.log("Click Me was clicked !!.")
    this.name.age = 25;
    this.changeNameEvent.emit(this.name);
  }
}

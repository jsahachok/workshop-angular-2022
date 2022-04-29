import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  like: boolean = false;
  dislike: boolean = false;
  likeCount:number = 100;
  dislikeCount:number = 25;

  likeBtn(){
    this.like = !this.like;
    if(this.dislike){
      this.dislike = !this.like
      this.dislikeCount-=1;
    }
    this.like? this.likeCount+=1 :  this.likeCount-=1;

  }

  dislikeBtn(){
    this.dislike = !this.dislike;
    if(this.like){
      this.like = !this.dislike
      this.likeCount-=1;
    }
    this.dislike? this.dislikeCount+=1 :  this.dislikeCount-=1;
  }

}

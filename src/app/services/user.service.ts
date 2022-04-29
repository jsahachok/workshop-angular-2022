import { Injectable } from '@angular/core';

const URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor() { }

  getAllUser(){
    console.log("Called getAllUser")
  }
}

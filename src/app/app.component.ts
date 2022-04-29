import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // parentName = {id:1,name:'Sahachok'};
  parentName = new User(1, 'Sahachok')

  onResponse(response: User){
    console.log("On response in parent");
    console.table(response)
  }

}

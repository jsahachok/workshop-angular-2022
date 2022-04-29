import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentName = {id:1,name:'Sahachok'};

  onResponse(response: any){
    console.log("On response in parent");
    console.table(response)
  }

}

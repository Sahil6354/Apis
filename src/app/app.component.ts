import { Component } from '@angular/core';
import{UserdataService} from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfile';
  users: any;

  constructor (private userData :UserdataService){
       userData.users().subscribe((data)=>{
          console.log("data",data);
          this.users=data;
       });        
  }
}

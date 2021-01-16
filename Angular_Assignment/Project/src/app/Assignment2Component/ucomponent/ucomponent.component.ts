import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user.interface';


@Component({
  selector: 'app-ucomponent',
  templateUrl: './ucomponent.component.html',
  styleUrls: ['./ucomponent.component.scss']
})
export class UcomponentComponent implements OnInit {

  users:User[]=[{
    name:"Ankur",
    username:"AV",
    email:"av@gmail.com"
    },{
      name:"Sonia",
      username:"Sonu",
      email:"sonu@gmail.com"
    },{
      name:"Arjun",
      username:"Aj",
      email:"aj@gmail.com"
    }]
   
    @Input()
    user:User
    
  constructor() { }

  ngOnInit(): void {
  }

  delete(userIndex:number){
    this.users.splice(userIndex,1)
  }

}

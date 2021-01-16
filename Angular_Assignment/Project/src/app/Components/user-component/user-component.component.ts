import { Component, Input, OnInit } from '@angular/core';

import { User } from '../models/user.interface';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit {

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

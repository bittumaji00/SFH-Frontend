import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  constructor(private uservice:UserService) { }

  user : User={
    name: '',
    email: '',
    password: '',
    phone: 0
  }
  

  ngOnInit(): void {

  }

  userRegistration(data : any){
    alert("Thank you for register with us "+data.name)
    this.user=data
    this.uservice.addUser(this.user).subscribe(res=>{
      if(res !=null){

        alert("User Registered Successfully!")



    }

    else{

      alert("Registration failed! Try Again..")

     

    }
    })


  }

}

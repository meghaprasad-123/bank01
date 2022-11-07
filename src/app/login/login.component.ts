import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  acno:any
  psd:any

  aim='Your perfect banking partner'
  data='enter your acc no'

  userDetails:any={
    1000:{acno:1000, username:'Akash', password:123, balance:0},
    1001:{acno:1001, username:'Amal', password:147, balance:0},
    1002:{acno:1002, username:'Vishnu', password:120, balance:0},
    1003:{acno:1003, username:'Rahul', password:123, balance:0},
    1004:{acno:1004, username:'Karthik', password:852, balance:0}
  }

  constructor() { }

  ngOnInit(): void {
  }

  // login(){
  //    var acno=this.acno
  //    var psd=this.psd
  //    var userDetails=this.userDetails

  //    if(acno in userDetails){
  //        if(psd==userDetails[acno]['password']){
  //         alert('Login success')
  //        }
  //        else{
  //         alert('Incorrect password')
  //        }
  //    }
  //    else{
  //     alert('User not exist')
  //    }
  // }

// }


login(a:any,b:any){
  var acno=a.value
  var psd=b.value
  var userDetails=this.userDetails

  if(acno in userDetails){
      if(psd==userDetails[acno]['password']){
       alert('Login success')
      }
      else{
       alert('Incorrect password')
      }
  }
  else{
   alert('User not exist')
  }
}
}


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //reduntant
  userDetails:any={
    1000:{acno:1000, username:'Akash', password:123, balance:0},
    1001:{acno:1001, username:'Amal', password:147, balance:0},
    1002:{acno:1002, username:'Vishnu', password:120, balance:0},
    1003:{acno:1003, username:'Rahul', password:123, balance:0},
    1004:{acno:1004, username:'Karthik', password:852, balance:0}
  }

  constructor() { }

  register(acno:any,username:any,password:any){
     var userDetails=this.userDetails
     if(acno in userDetails){
      return false
     }
     else{
      userDetails[acno]={acno,username,password,balance:0}
      console.log(userDetails);
      
      return true
     }
  }

  login(acno:any,psd:any){

    var userDetails=this.userDetails

    if(acno in userDetails){
        if(psd==userDetails[acno]['password']){
           return true
        }
        else{
         alert('Incorrect password')
         return false
        }
    }
    else{
     alert('User not exist')
     return false
    }
 }

}

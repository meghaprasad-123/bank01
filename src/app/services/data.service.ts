import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentuser:any
  currentacno:any

  //reduntant
  userDetails:any={
    1000:{acno:1000, username:'Akash', password:123, balance:0,transaction:[]},
    1001:{acno:1001, username:'Amal', password:147, balance:0,transaction:[]},
    1002:{acno:1002, username:'Vishnu', password:120, balance:0,transaction:[]},
    1003:{acno:1003, username:'Rahul', password:123, balance:0,transaction:[]},
    1004:{acno:1004, username:'Karthik', password:852, balance:0,transaction:[]}
  }

  constructor() { 
    this.getData()
  }
//method to store datas in local storage
  saveData(){
    if(this.userDetails){
      localStorage.setItem('database',JSON.stringify(this.userDetails))
    }
    if(this.currentuser){
      localStorage.setItem('currentUser',JSON.stringify(this.currentuser))
    }
    if(this.currentacno){
      localStorage.setItem('currentAcno',JSON.stringify(this.currentacno))
    }
  }
  // to take data from locatstorage
  getData(){
    if(localStorage.getItem('database')){
      this.userDetails=JSON.parse(localStorage.getItem('database') || '')
    }
    if(localStorage.getItem('currentUser')){
      this.currentuser=JSON.parse(localStorage.getItem('currentUser') || '')
    }
    if(localStorage.getItem('currentAcno')){
      this.currentacno=JSON.parse(localStorage.getItem('currentAcno') || '')
    }
  }


  register(acno:any,username:any,password:any){
     var userDetails=this.userDetails
     if(acno in userDetails){
      return false
     }
     else{
      userDetails[acno]={acno,username,password,balance:0,transaction:[]}
      // console.log(userDetails);
      this.saveData()
      return true
     }
  }


  login(acno:any,psd:any){

    var userDetails=this.userDetails
    this.currentuser=userDetails[acno]['username']

    if(acno in userDetails){
        if(psd==userDetails[acno]['password']){
          this.currentacno=acno
          this.saveData()
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


 deposit(acno:any,psd:any,amnt:any){
  let userDetails=this.userDetails
  // to convert string amnt to integer
  var amount=parseInt(amnt)
  if(acno in userDetails){
    if(psd==userDetails[acno]['password']){
      userDetails[acno]['balance']+=amount

      //add deposit details in transaction array
      userDetails[acno]['transaction'].push({type:'Credit',amount})
      this.saveData()
      return userDetails[acno]['balance']
    }
    else{
      alert('incorrect password')
      return false
    }
    }
    else{
      alert('incorrect ac no')
      return false
    }
  }

 
  withdraw(acno:any,psd:any,amnt:any){
    let userDetails=this.userDetails
    var amount=parseInt(amnt)
    if(acno in userDetails){
      if(psd==userDetails[acno]['password']){
        if(amnt<=userDetails[acno]['balance']){
          userDetails[acno]['balance']-=amount

          //add to transaction history
          userDetails[acno]['transaction'].push({type:'Debit',amount})
          this.saveData()
          return userDetails[acno]['balance']
  
        }
        else{
          alert('insufficient balance')
          return false
        }
      }
      else{
        alert('incorrect password')
        return false
      }
      }
      else{
        alert('incorrect ac no')
        return false
      }
    }


    //for request
    getTransaction(acno:any){
   return this.userDetails[acno]['transaction']
    }
  
 }


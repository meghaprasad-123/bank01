import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:any

  acno:any
  psw:any
  amnt:any

  acno1:any
  psw1:any
  amnt1:any

  constructor(private ds:DataService,private formbuilder:FormBuilder,private router:Router) {
    this.user=this.ds.currentuser
   }

   //create dashboard model
   depositform=this.formbuilder.group({acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
   psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9\W]+')]],
   amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]})

   withdrawform=this.formbuilder.group({acno1:['',[Validators.required,Validators.pattern('[0-9]+')]],
   psw1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9\W]+')]],
   amnt1:['',[Validators.required,Validators.pattern('[0-9]+')]]})

  ngOnInit(): void {
  }

  deposit(){
    var acno=this.depositform.value.acno
    var psw=this.depositform.value.psw
    var amnt=this.depositform.value.amnt

    if(this.depositform.valid){
      const result=this.ds.deposit(acno,psw,amnt)
      if(result){
        alert(`${amnt} is credited and your balance will be ${result}`)
      }
    }
     else{
      alert('Invalid form')
     }
    
  }

  withdraw(){
    var acno1=this.withdrawform.value.acno1
    var psw1=this.withdrawform.value.psw1
    var amnt1=this.withdrawform.value.amnt1

    if(this.withdrawform.valid){
      const result=this.ds.withdraw(acno1,psw1,amnt1)
      if(result){
        alert(`${amnt1} is debited from your account and balance is ${result}`)
      }
    }
    else{
      alert('invalid form')
    }
  }

  logout(){
    localStorage.removeItem('currentAcno')
    localStorage.removeItem('currentUser')

    this.router.navigateByUrl('')
  }
}

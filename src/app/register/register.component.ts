import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  acno:any
  uname:any
  psd:any

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
   var acno=this.acno
   var uname=this.uname
   var psd=this.psd

  const result= this.ds.register(acno,uname,psd)

  if(result){
     alert('successfully registered')
     this.router.navigateByUrl('')
  }
  else{
     alert('user already exist')
  }
  }

}

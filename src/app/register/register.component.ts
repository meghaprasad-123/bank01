import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor(private ds:DataService,private router:Router,private formbuilder:FormBuilder) { }

  //create register form model
  registerForm=this.formbuilder.group({uname:['',[Validators.required,Validators.pattern('[a-zA-Z\W]+')]],acno:['',[Validators.required,Validators.pattern('[0-9]+')]],psd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9\W]+')]]})

  ngOnInit(): void {
  }

  register(){
   var acno=this.registerForm.value.acno
   var uname=this.registerForm.value.uname
   var psd=this.registerForm.value.psd

  if(this.registerForm.valid){
    const result= this.ds.register(acno,uname,psd)
    if(result){
      alert('successfully registered')
      this.router.navigateByUrl('')
   }
   else{
      alert('user already exist')
   }
  }
   else{
    alert('Invalid form')
   }
  
  }

}

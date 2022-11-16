import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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


  // constructor(private router:Router) { }
  constructor(private router:Router,private ds:DataService,private formbuilder:FormBuilder) { }

  //create login model
  loginform=this.formbuilder.group({acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
                              psd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9\W]+')]]})

  ngOnInit(): void {
  }

  login(){
       var acno=this.loginform.value.acno
       var psd=this.loginform.value.psd
      
      if(this.loginform.valid){

        const result = this.ds.login(acno,psd)

        if(result){
          alert('Login success')
          this.router.navigateByUrl('dashboard')
        }
      }
      else{
        alert('Invalid form')
      }
      
  }
}




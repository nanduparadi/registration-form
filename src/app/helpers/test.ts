// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ApiService } from '../service/api.service';

// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.css']
// })
// export class RegistrationComponent implements OnInit {

//   submitted = false;
//   registerForm! : FormGroup

//   // get f(){
//   //   return this.registerForm.controls;
//   // }
//   constructor(private fb : FormBuilder, api:ApiService, router : Router) { }

//   ngOnInit(): void {
//     this.registerForm = this.fb.group({
//       userName : ['', Validators.required],
//       password : ['', [Validators.required, Validators.pattern( /^(?=.[A-Z])(?=.[a-z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})/),Validators.minLength(8)]],
//       firstName : ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(4)]],
//       lastName : ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
//       email : ['', [Validators.required, Validators.email]],
//       address : ['', [Validators.required]],
//       mobileNo : ['', [Validators.required, Validators.maxLength(10)]],
      
//     })
//   }

//   onSubmit() {
//     this.submitted = true

//     if(this.registerForm.invalid){
//       return
//     }
//     alert("registration Successfull");
//     this.registerForm.reset();
    
//   }

//   postUserDetails(){
    
//   }

// }
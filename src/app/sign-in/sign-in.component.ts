import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import ValidateForm from '../helpers/validateform';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor(private fb: FormBuilder, private api: ApiService, private route: Router) { }

  loginForm!: FormGroup;
  submitted = false

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    this.submitted=true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.api.getUser(this.loginForm.value.username)
        .subscribe(res => {
          console.log(res);

          if (res[0].password === this.loginForm.value.password && res[0].username === this.loginForm.value.username) {
            alert("Login Success")
            this.route.navigate(['home']);
          }
          else if (res[0].password !== this.loginForm.value.password && res[0].username === this.loginForm.value.username) {
            alert("Password is invalid");
            this.loginForm.reset();
          }
          else if (res[0].password === this.loginForm.value.password && res[0].username !== this.loginForm.value.username) {
            alert("username is invalid");
            this.loginForm.reset();
          }
          else if (res[0].password !== this.loginForm.value.password && res[0].username !== this.loginForm.value.username) {
            alert("Password And Username invalid");
            this.route.navigate(['signin']);
            this.loginForm.reset();
          }
        })
    }
    else {
      ValidateForm.validateAllFormFields(this.loginForm);
    }
  }

}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import ValidateForm from '../helpers/validateform';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../api.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router, private api: ApiService, private route: ActivatedRoute) { }
  dialogRef: any;
  signup!: FormGroup;
  submitted = false;
  userData : any;
  ngOnInit(): void {
    this.route.queryParams
    .subscribe((params) => {
      console.log('param ==> ', params['UserId']);
      if(params['UserId'])
      {
        console.log(true);
        this.api.getUserById(params['UserId']).subscribe(userdata => {
            console.log(userdata);
            this.userData = userdata
        });
      }
      else{
        console.log(false);
      }
    });

    this.signup = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required],
      doj: ['', Validators.required],
      address: ['', Validators.required],
    })

  }
  getAllUsers() {
    this.api.getUsersData()
      .subscribe(res => {
        this.empList = res;
        console.log(res)
      })
  }
  empList:any[] = []
  onSubmit() {
    this.submitted = true;
    //call api to get the email exising

    if (this.signup.valid) {
      this.api.postUsersList(this.signup.value)
        .subscribe({
          next: (res) => {
            console.log(res)
            this.empList.push(res)
            console.log(this.empList)
            // alert("Data added successfully");
            this.signup.reset();
            // this.getAllUsers()
            this.router.navigate(["signin"]);
            // this.dialogRef.close('save');
          }, error: () => {
            alert("Error added data");
          }
        })
    }


    // onsignUp(){
    //   if(this.signUpForm.valid){
    //     this.api.postEmployee(this.signUpForm.value)
    //     .subscribe({
    //       next:(res)=>{
    //           alert("Data added successfully");
    //         this.signUpForm.reset();
    //         this.router.navigate(["loginform"]);
    //             this.dialogRef.close('save');
    //       },error:()=>{
    //         alert("Error while adding")
    //       }
    //     })
    //   }
    //   // else{
    //   //     ValidateForm.validateAllFormFields(this.signUpForm)
    //   // }
    // }

  }

  updateUserdata(id:number)
  {
    console.log('update called ==>', id);
    this.api.updateUserData(id,this.signup.value).subscribe({
      next: (res) => {
        alert("User Data updated successfully");
        this.signup.reset();
        this.router.navigate(["signin"]);
        // this.dialogRef.close('save');
      }, error: () => {
        alert("Error added data");
      }
    })
  }

  // private validateAllFormFields( formGroup: FormGroup){
  //   Object.keys(formGroup.controls).forEach(field =>{
  //     const control = formGroup.get(field);
  //     if(control instanceof FormControl){
  //       control.markAsDirty({ onlySelf: true});
  //     }
  //     else if(control instanceof FormGroup){
  //       this.validateAllFormFields(control)
  //     }
  //   })
  // }


}

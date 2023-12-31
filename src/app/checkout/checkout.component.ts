import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 checkoutForm!: FormGroup ;
 constructor(private formBuilder:FormBuilder) {
  //  this.checkoutForm = formBuilder.group({
  //   emailAdd : new FormControl("virat@gmail.com"),
  //   address : new FormControl() ,
  //   check: new FormControl(),
  // });

  //  this.checkoutForm = formBuilder.group({
  //    emailAddress: new FormControl("",Validators.required),
  //    address: ['', Validators.required],  both are working
  //    check: new FormControl(),
  //  });

   this.checkoutForm = this.formBuilder.group({
     emailAddress: new FormControl("", [Validators.required,
       Validators.email,
       Validators.minLength(5),
       Validators.maxLength(15)]),
     address: ['', Validators.required],
     checkbox: ['', Validators.requiredTrue],

   });
 }
  ngOnInit(): void {  //using the setValue method  -we are setting entire Form value
   
    // this.checkoutForm.setValue({
    //   emailAddress: "virat@gmail.com",
    //   address: "india",
    //   checkbox: true,
    // });

    //provide the formControlName for which we want to read the values on change
    // this.checkoutForm.get('emailAddress')?.valueChanges.subscribe(data => {console.log(data);});
    //the difference is - whenever there is any change in any Form control Form will emmit the event
    // this.checkoutForm.valueChanges.subscribe(data => {console.log(data);});

    // this.checkoutForm.get('emailaddress')?.statusChanges.subscribe(data => {console.log(data);});
    //dynamically we can capture the state fo validation of the "entire" form
    this.checkoutForm.statusChanges.subscribe(data => { console.log(data); });

    this.checkoutForm.patchValue({   //using the patchValue method  -we are setting required Form value
      emailAddress: "virat@gmail.com",
      address: "india",
    });
  }
  postData(){
    console.log(this.checkoutForm);
    console.log(this.checkoutForm.value);
    console.log(this.checkoutForm.value.emailAddress);
    console.log(this.checkoutForm.value.address);
    console.log('check box value:' + this.checkoutForm.value.checkbox);
    this.clear();
  }
  clear(){
    this.checkoutForm.reset();
  }
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-your-component',
  templateUrl: './your-component.component.html',
  styleUrls: ['./your-component.component.css']
})
export class YourComponentComponent implements OnInit {
  myForm: FormGroup;
  do:any;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      // other form controls...
      myArray: this.fb.array([])
    });
  }
  ngOnInit(): void {
    new Observable((observer)=>{  
      setTimeout(()=>{
      observer.next('Processing...')},2000
      );
      setTimeout(()=>{
        observer.next('complete!')},5000
      );
      setTimeout(()=>{
        observer.next('done!')},8000
      );
      setTimeout(()=>{
        observer.complete();
      });
      setTimeout(() => {
        observer.next('done!')
      }, 8000
      );
      setTimeout(() => {
        observer.error();
      });
    }).subscribe(val=>{
      this.do = val;
    });
  }

  get myArrayControls() {
    return this.myForm.get('myArray') as FormArray;
  }

  addFormControl() {
    this.myArrayControls.push(this.fb.control(''));
  }

  removeFormControl(index: number) {
    this.myArrayControls.removeAt(index);
  }


}


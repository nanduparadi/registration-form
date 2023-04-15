import { Component } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  
  country : string="";
  state : string="";
  district : string="";
  countries = [];
  states =[];
  districts = [];
  checkbox1 = "";
  checkbox2 = "";
  checkbox3 = "";
  checkbox4 = "";
  checkbox5 = "";

  myDate = "";
  checkedValues :any = [];
  indiaDate = "";
  constructor(private api:ApiService){}
  ngOnInit() {
    this.getCountries();
  }

getCountries(){
  this.api.countryList()
  .subscribe(res => {
    this.countries = res;
    console.log(this.countries);
    console.log(res);
  })
}

getStates(){ 
  // alert(this.country);
  this.api.getstateList(this.country)
  .subscribe(res => {
    // console.log(res);
    this.states = res;
  });
}

getDistricts(){
  this.api.getDistrictList(this.state)
  .subscribe(res =>{
    this.districts = res;
    console.log(this.districts);
  });
}
//1. Create array for storing the values of checkboxes
//2. Create onchange event for the all checkboxes
//3. create the function or method in ts file to get th values of checkboxes and in method 
//pass the event object as parameter to get the values or attributes of checkboxes
//4. Get the each value of chaeckboxes by using method created and apply it onchange event
//5. push the checkboxes values to the array
//6. remove the checkboxes values from the array when user un-check the checkboxes
//7. Finally save the checkboxes values in save method

isChecked(e:any){ 
  if(e.target.checked){
    this.checkedValues.push(e.target.value);
    console.log(this.checkedValues)
  }
  else{
    for(let i = 0; i < this.checkedValues.length; i++){
      if( e.target.value === this.checkedValues[i]){
        this.checkedValues.splice(i, 1);
        console.log(this.checkedValues);
      }
    }
  }
}

// isRadioChecked(e:any){
//   if(e.target.checked){
//     console.log(this.checkedValues)
//   }
// }

selectedDay:string = "";
days:any =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
radioCheckedValue(e:any){
  this.selectedDay = e.target.value;
}

saveData(){
// console.log(this.checkedValues)
console.log(this.myDate);
console.log(this.indiaDate);
}

}
 
import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  rechargePlan = "";
  dt_recharge = "";
  duedate : any;
  dateDisplay:any;

 saveItem(){
  // console.log(this.rechargePlan);
  console.log(new Date(this.duedate));
  console.log(this.dateDisplay);
  // let jsondata = {
  //   "RechargePlan": this.rechargePlan,
  //   "RechargeDate" : this.dt_recharge,
  //   "Duedate" : new Date(this.duedate)
  // }
  // console.log(jsondata);

 }
 calculatedueDate(){
  let dt = new Date(this.dt_recharge);
  this.duedate = new Date().setDate(dt.getDate() + parseInt(this.rechargePlan))
  // console.log(new Date(this.duedate));
  this.dateDisplay = new Date(this.duedate);
  console.log(this.dateDisplay);
 }



}

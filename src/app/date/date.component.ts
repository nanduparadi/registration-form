import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  //query params here
  country = '';
  state = '';
  city = '';
  number = "";

  constructor(private activatedroute: ActivatedRoute) {
    this.activatedroute.queryParams.subscribe(data => {
      console.log(data);
      this.country = data['country'];
      this.state = data['state'];
      this.city = data['city'];
    })
    this.activatedroute.params.subscribe((data) => {
      console.log(data);
      this.number = data["id"];
    })
  }
  rechargePlan = "";
  dt_recharge = "";
  duedate: any;
  dateDisplay: any;

  saveItem() {
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
  calculatedueDate() {
    let dt = new Date(this.dt_recharge);
    this.duedate = new Date().setDate(dt.getDate() + parseInt(this.rechargePlan))
    // console.log(new Date(this.duedate));
    this.dateDisplay = new Date(this.duedate);
    console.log(this.dateDisplay);
  }



}

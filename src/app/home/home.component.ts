import { Component } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';

@Component({
  // selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  usersArray:any[] = [];
  isDialogwindow=false;
  // fromHeader="Userdata";
  userArray: any[]=[];
  searchValue : string = "";
  errormsg : boolean = false;

  constructor(private api:ApiService , private route:Router ){}

  ngOnInit(){
    this.getAllUsers();
    this.errormsg;
  }

  getAllUsers(){
    this.api.getUsersData()
    .subscribe( res=>{
      this.usersArray = res;
    })
  }

  searchUsers(searchkeyword:string){  
    this.api.getUsersData().subscribe( res=>{
      console.log(res);
      if(searchkeyword === "")
      {
        this.usersArray = res;
        this.errormsg = false;
      }
      else
      {
        this.usersArray = [];
        this.usersArray = res.filter((e : any) => e.firstname.toLowerCase().includes(searchkeyword.toLowerCase()) || 
        e.email.toLowerCase().includes(searchkeyword.toLowerCase()) || e.address.toLowerCase().includes(searchkeyword.toLowerCase()) ||
        e.lastname.toLowerCase().includes(searchkeyword.toLowerCase())
        );
        console.log(this.usersArray);
        if (this.usersArray.length == 0)
        {
          this.errormsg = true;
        }
        else{
          this.errormsg = false;
        }
      } 
    })
  }
  deleteUserData(row:any){
    this.api.deleteUser(row.id)
    .subscribe( res=>{
      alert('User deleted successfully');
      this.getAllUsers();
    })
  }
  // updateUser(row:any){
  //   this.api.updateUserData(row.id,row.username).subscribe( res=>{
  //     alert('User updated successfully');
  //     this.getAllUsers();
  //   })
  // }

  updateUser(data:any){
    // this.route.navigate(['/signup',data])
    this.route.navigate(['/signup'], {queryParams : {UserId:data.id}, queryParamsHandling: 'merge'});
  }
  signout(){
    this.route.navigate(['/signin']);
  }

  userInfo(data:any){
  this.isDialogwindow=true;
  // console.log(data);
  this.userArray = [];
  this.userArray.push(data);
  console.table(this.userArray);
}
}



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postUsersList(data: any) {
    return this.http.post<any>("http://localhost:3000/users", data)
    .pipe( map( (res:any )=>{
      return res;
    }))
  }

  getUser(username: string) {
    return this.http.get<any>("http://localhost:3000/users?username="+ username)
   .pipe( map( (res:any )=>{
      return res;
     }))
  }

  getUserById(id: number){
    return this.http.get<any>("http://localhost:3000/users?id="+ id)
   .pipe( map( (res:any )=>{
      return res;
     }))
  }

  getUsersData() {
    return this.http.get<any>("http://localhost:3000/users")
    .pipe( map( (res:any )=>{
      return res;
    }))
  }

deleteUser(id:number){
    return this.http.delete<any>("http://localhost:3000/users/"+ id)
    .pipe( map( (res:any)=>{
      return res;
    }
 ))
}

updateUserData(id:number,data: any){
  return this.http.put<any>("http://localhost:3000/users/"+id,data)
  .pipe( map((res:any)=>{
    return res;
  }))
}
// ********dropdown*********

countryList(){
  return this.http.get<any>("http://localhost:3000/countries")
  .pipe( map((res:any)=>{
    return res;
  }))
}


getstateList(countryname :string){
  return this.http.get<any>("http://localhost:3000/states?countryname="+countryname )
  .pipe( map((res:any)=>{
    return res;
  }))
}

getDistrictList(statename:string){
  return this.http.get<any>("http://localhost:3000/districts?statename="+statename)
  .pipe( map((res:any)=>{
    return res;
  }))
}

}


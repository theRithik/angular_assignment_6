import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonservicesService {
url='../assets/db.json'
  constructor(private http:HttpClient) { 
   
  }

getEmployees(){
return this.http.get(this.url)
}
}





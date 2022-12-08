import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl:String = 'http://localhost:3000/api'
  // apiUrl:String ='api'

  constructor(private http :HttpClient) { }

  //to fetch all data list
getofficerList(){
  return this.http.get(`${this.apiUrl}/getcsv`)
}

// to fetch data of a single
// getofficerById(id:any){
//   return this.http.get(`${this.apiUrl}//getcsv/:id/${id}`)
// }







}

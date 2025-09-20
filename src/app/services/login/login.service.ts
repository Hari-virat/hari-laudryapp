import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private apiUrl = 'https://laundry-fju0.onrender.com/login'; // Change to your actual API URL

  constructor(private http: HttpClient, private router: Router) {}

  loginUser(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  
  logOut():void{
    localStorage.removeItem('authToken')
    this.router.navigate(['/login'])
  }
}

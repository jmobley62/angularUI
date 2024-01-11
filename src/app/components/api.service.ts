import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  data: any[] = [];
  public displayColumns = ['clockNumber', 'firstName', 'lastName', 'email'];
  public dataSource: any = [];

  constructor(private httpClient: HttpClient) { }

  fetchData(): void {
    this.httpClient.get('http://localhost:9001/friends')
      .subscribe((data: any) => {
        console.log(data);
        this.data = data;
        this.dataSource = data;
      });
  }

  login(userData: { email: string; password: string }): Observable<any> {
    return this.httpClient.post('http://localhost:9001/login', userData);
  }
}

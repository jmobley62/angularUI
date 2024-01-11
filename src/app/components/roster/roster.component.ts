import {Component, inject} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {HttpClient} from "@angular/common/http";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-roster',
  standalone: true,
  imports: [MatTableModule, RouterLink],
  templateUrl: './roster.component.html',
  styleUrl: './roster.component.css'
})
export class RosterComponent {

  data: any[]= [];
  public displayColumns = ['clockNumber', 'firstName', 'lastName', 'email'];
  public dataSource: any = [];
  httpClient =  inject(HttpClient);

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get('http://localhost:9001/friends')
      .subscribe((data: any) => {
        console.log(data);
        this.data = data;
        this.dataSource = data;
      });
  }
}

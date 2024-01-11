import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profile: any[] = [];
  public displayColumns= ['clockNumber', 'firstName', 'lastName', 'email'];


  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.fetchProfile(id);
    });
  }

  fetchProfile(id: string | null)  {
    if (id) {
      this.httpClient
        .get(`http://localhost:9001/friends/${id}`)
        .subscribe({
          next: (data) => this.profile = [data],
          error: (error) => console.error('There was an error retrieving the profile!', error)
        });
    }
  }
}

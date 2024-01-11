import {Component} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {ApiService} from "../api.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    NgOptimizedImage,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
V2X = "../assets/images/V2X_Color.png"
  backgroundColor = true;

  loginData = { email: '', password: '' };

  constructor(private apiService: ApiService) { }

  onLogin() {
    if (this.loginData.email && this.loginData.password) {
      this.apiService.login(this.loginData)
        .subscribe({
        next: (response) => {
          console.log('Login successful');
          // Handle successful login here
        },
        error: (error) => {
          console.error('Login failed');
          // Handle login error here
        }
      });
    }
  }
}

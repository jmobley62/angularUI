import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {RosterComponent} from "./components/roster/roster.component";
import {NgModule} from "@angular/core";
import {ProfileComponent} from "./components/profile/profile.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'roster', component: RosterComponent},
  { path: 'profile/:id', component: ProfileComponent },  // :id is a route parameter
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

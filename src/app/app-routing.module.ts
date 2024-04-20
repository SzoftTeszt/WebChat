import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AlumniComponent } from './alumni/alumni.component';

const routes: Routes = [
  {path:"home", component:HomeComponent}, 
  {path:"chat", component:ChatComponent},
  {path:"", component:HomeComponent},
  {path:"cica", component:AboutUsComponent},
  {path:"alumni", component:AlumniComponent},


  {path:"**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  menuItems =[
    {text:"Home", link:"/home"},
    {text:"Chat", link:"/chat"},
    {text:"About Us", link:"/cica"},
    {text:"Alumni", link:"/alumni"},
    {text:"Help", link:"/help"},
  ]
}

import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  check:boolean=false;
  showFiller = false;
  // activateSBar:boolean=true;
  opened=false;
  constructor(private route:Router){
    route.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (
          val.url === '/login' ||
          val.url === '/register' ||
          val.url === '/'
        ) {
          this.check = false;
        } else {
          this.check = true;
        }
      }
    });
  }
  // activateSideBar(){
  //   this.activateSBar=!this.activateSBar
  // }

  
}

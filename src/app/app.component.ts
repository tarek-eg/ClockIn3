import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls:['./src/styles.css'],
})
export class AppComponent implements OnInit {
  // isLoggedIn:boolean = true
  constructor(private router: Router){}
  ngOnInit(){
    // this.isLoggedIn = true
    // if (localStorage.getItem('currentUser') == null) {
    //   this.isLoggedIn = false
    //   this.router.navigate(['/login'])
    // } else {
    //   console.log("Hello")
    //   this.isLoggedIn = true
    //   this.router.navigate(['/clock'])
    // }
}
}

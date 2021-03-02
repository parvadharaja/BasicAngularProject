import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  loggedIn=false;
  title = 'angular-app';
  constructor(private _dataService:DataService, private router: Router,) { }

  logout_():void{
    this.router.navigate(['/']);
    this. loggedIn=false;
  }

  ngOnInit(){
    this._dataService.loggedInStatus$
      .subscribe(
        status=>{
          if(status==true){
            this.loggedIn=true;
            this.router.navigate(['/home']);
          }else{
            this. loggedIn=false;
          }
        }
      )
  }
}

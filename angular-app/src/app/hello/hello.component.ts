import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DataService} from '../data.service'

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})

export class HelloComponent implements OnInit {
  firstname:string = "Parvath";
  lastname:string = "Raja";
  gender:string = "Male";
  age:string = "20";
  showDetails:boolean=false;
  hide = true;
  constructor(private _dataService:DataService) { }

 
  ngOnInit(): void {
  }
  toogleDetails(): void{
      this.showDetails=!this.showDetails;
  }

  onClick(userName: string,password:string):void{
    if(userName=='test' && password == '1234'){
       this._dataService.sendStatus(true);
    }
  }


}

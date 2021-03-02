import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service'

@Component({
    selector:'demo-component',
    templateUrl:'./demo.component.html',
    styleUrls: ['./demo.component.scss']
})


export class demoComponent {
    responsedata:any={}
      
    // displayedColumns: string[] = ['id', 'title', 'body'];
    // // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    // dataSource = this.responsedata;
    constructor(private _dataService:DataService){}
    ngOnInit(): void {
        this._dataService.getbackendData().subscribe(
            (response) =>{
                console.log(response);
                this.responsedata=response;
                // [response].filter((value)=>{
                //     this.responsedata.push(value)
                //     })
            },error=>{
                console.log("API error",error);
            }
        )
    }
}
import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
    selector: 'app-create-emp',
    templateUrl: './create-emp.component.html',
    styleUrls: ['./create-emp.component.scss']
  })
  export class CreateEmpComponent implements OnInit{
    saveData:any[] = [];
    dataStored:any[] = [];
    employForm!: FormGroup;
    constructor(private fb:FormBuilder){}

    ngOnInit(){
      this.employForm=this.fb.group({
        fullname: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
        email: ['']
      });
      this.dataStored = JSON.parse(localStorage.getItem("datas")  || '{}');
    }

    loaddata_():void{
      this.employForm.patchValue({
        fullname: "Parvath",
        email: "parvath@gmail.com"
      });
    }
    onSubmit(): void{
      console.log(this.employForm);
      this.saveData.push(this.employForm.value)
      localStorage.setItem("datas", JSON.stringify(this.saveData));
      this.dataStored = JSON.parse(localStorage.getItem("datas")  || '{}');
    }

  }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.scss']
})
export class EmployeListComponent implements OnInit {
  employees: any[];
  selectedRadioBtn:string="All";
  constructor() { 
    this.employees =[
      {code: 'emp01', name: 'Abi',gender: 'Female', annualsalary: '200', dob:'10/10/1995'},
      {code: 'emp02', name: 'Bala',gender: 'Male', annualsalary: '300', dob:'11/06/1996'},
      {code: 'emp03', name: 'Chandra',gender: 'Female', annualsalary: '400', dob:'06/02/1994'},
      {code: 'emp04', name: 'Dhana',gender: 'Male', annualsalary: '600', dob:'02/05/1992'},
      {code: 'emp05', name: 'Eswari',gender: 'Female', annualsalary: '200', dob:'08/11/1997'},
      {code: 'emp06', name: 'Fasir',gender: 'Male', annualsalary: '100', dob:'03/08/1993'},
      {code: 'emp07', name: 'Gayathri',gender: 'Female', annualsalary: '250', dob:'05/12/1995'},
      {code: 'emp08', name: 'HariBhaskar',gender: 'Male', annualsalary: '450', dob:'11/12/1995'}
    ];  
  }

  // getemployees(): void{
  //   this.employees=[
  //     {code: 'emp01', name: 'Abi',gender: 'Female', annualsalary: '200', dob:'10/10/1995'},
  //     {code: 'emp02', name: 'Bala',gender: 'Male', annualsalary: '300', dob:'11/06/1996'},
  //     {code: 'emp03', name: 'Chandra',gender: 'Female', annualsalary: '400', dob:'06/02/1994'},
  //     {code: 'emp04', name: 'Dhana',gender: 'Male', annualsalary: '600', dob:'02/05/1992'},
  //     {code: 'emp05', name: 'Eswari',gender: 'Female', annualsalary: '200', dob:'08/11/1997'},
  //     {code: 'emp06', name: 'Fasir',gender: 'Male', annualsalary: '100', dob:'03/08/1993'},
  //     {code: 'emp07', name: 'Gayathri',gender: 'Female', annualsalary: '250', dob:'05/12/1995'},
  //     {code: 'emp08', name: 'HariBhaskar',gender: 'Male', annualsalary: '450', dob:'11/12/1995'}
  //   ]
  // }
  // trackbyEmpcode(index: number, employee:any) :string{
  //   return employee.code
  // }

  onEmployeeCountChange(selectedRadioBtnValue:string):void{
      this.selectedRadioBtn=selectedRadioBtnValue;
  }

  getTotalEmployeesCount(): number{
    return this.employees.length;
  }
  getTotalMaleEmployeesCount(): number{
    return this.employees.filter(e=>e.gender==="Male").length;
  }
  getTotalFemaleEmployeesCount(): number{
    return this.employees.filter(e=>e.gender==="Female").length;
  }
  
  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

import { ApiService } from '../shared/api.service';

import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';

import { detailmodel } from './dashboard.model';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public registerForm !: FormGroup;

  // id !: any;
  details !:any;
  data !:any;
  constructor(private formbuilder :FormBuilder, 
    private api:ApiService){}
    
  dashboardModelObj : detailmodel = new detailmodel()
  
  ngOnInit (): void{
    this.getdetails();
    this.registerForm = this.formbuilder.group({
      firstname: ['', [Validators.required,]],
      lastname: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required]
    });
    this.data = this.getdetails()

  }
  
  getdetails(){
    this.api.getData()
    .subscribe(res=>{
        this.details = res;
    })
  }


  deldetails(row : any){
    this.api.deleteData(row.id)
    .subscribe(res=>{
      alert("Data deleted")
      this.getdetails()
    })
  }
 
  onEdit(row: any) {
    this.dashboardModelObj.id = row.id;
    this.registerForm.controls['firstname'].setValue(row.firstname);
    this.registerForm.controls['lastname'].setValue(row.lastname);
    this.registerForm.controls['mobile'].setValue(row.mobile);
    this.registerForm.controls['email'].setValue(row.email);
    this.registerForm.controls['gender'].setValue(row.gender);
    this.registerForm.controls['country'].setValue(row.country);
    this.registerForm.controls['state'].setValue(row.state);
    this.registerForm.controls['city'].setValue(row.city);
    
  }

  updetails(){
    
    this.dashboardModelObj.firstname = this.registerForm.value.firstname;
    this.dashboardModelObj.lastname = this.registerForm.value.lastname;
    this.dashboardModelObj.mobile = this.registerForm.value.mobile;
    this.dashboardModelObj.email = this.registerForm.value.email;
    this.dashboardModelObj.gender = this.registerForm.value.gender;
    this.dashboardModelObj.country= this.registerForm.value.country;
    this.dashboardModelObj.state = this.registerForm.value.state;
    this.dashboardModelObj.city = this.registerForm.value.city;

    this.api.updateData(this.dashboardModelObj,this.dashboardModelObj.id)
    .subscribe(res=>{
  
      alert("Updated Successfully")
      let ref = document.getElementById("close")
      ref?.click();
      this.registerForm.reset();

      this.getdetails();
      
    }

  )}
    
}



 


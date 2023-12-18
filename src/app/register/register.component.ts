import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';

import { datamodel } from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public registerForm !: FormGroup;

  constructor(private formbuilder: FormBuilder,
    private api: ApiService) { }


  registerModelObj: datamodel = new datamodel()
  // editdetails !:any


  ngOnInit(): void {
    this.state = this.api.state();
    this.registerForm = this.formbuilder.group({
      firstname: ['', [Validators.required,]],
      lastname: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required]

    });
  }
  state: any = [];
  city: any = [];

  // stores data in the registermodelobj
  postdetails() {
    this.registerModelObj.firstname = this.registerForm.value.firstname;
    this.registerModelObj.lastname = this.registerForm.value.lastname;
    this.registerModelObj.mobile = this.registerForm.value.mobile;
    this.registerModelObj.email = this.registerForm.value.email;
    this.registerModelObj.gender = this.registerForm.value.gender;
    this.registerModelObj.state = this.registerForm.value.state;
    this.registerModelObj.city = this.registerForm.value.city


    // posting data to server
    this.api.postData(this.registerModelObj)
      .subscribe(res => {
        console.log(res);
        alert("Details added successfully")
      },
        err => {
          alert("Something went wrong")
        }
      )
  }

  onSelect(state: any) {
    // console.log(state.target.value)
    this.city = this.api.city().filter(e => e.id == state.target.value);
    console.log(this.city);
  }


  // After registeration
  registerSubmitted() {
    if (this.registerForm.valid) {
      console.log('Form submitted:', this.registerForm.value);
      // this.api.getData()
      // this.getdetails();
      this.registerForm.reset();

    } else {
      console.log('Form has validation errors.');

    }
  }
}

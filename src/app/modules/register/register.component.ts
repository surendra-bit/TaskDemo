import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators , FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  registerForm! : FormGroup
  listdata : any;
  submitted = false;

  ngOnInit(): void {
    this.onSubmit();
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email   : ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() {
     return this.registerForm.controls; 
    }

  public PreParedata(){
    this.submitted = true;
    this.listdata = this.registerForm.value;
     console.log(this.listdata);
    //  this.listdata.push(formModule);
    
  }


  onSubmit(){
    if(this.registerForm.valid){
      this.PreParedata();
      alert('added sucessfully!');
      this.registerForm.reset();
    }else{
      alert('Please enter valid fileds');
    }
  }

  public Cancelbtn(){
    this.registerForm.reset();
  
  }

}

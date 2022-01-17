
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [''],
      mobile: [''],
      email: [''],
     
      password: ['']
    })
  }
  //Making method to create user
  signup(){
    this._http.post<any>("http://localhost:54889/signup",this.signupForm.value).subscribe(res=>{
      alert("Signup Is Successful");

      this.signupForm.reset();
      this.router.navigate(['login'])

    })

  }


}
